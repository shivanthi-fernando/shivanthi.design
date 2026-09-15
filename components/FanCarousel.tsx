"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

const WINDOW = 4; // cards rendered on each side of focus
const AUTOPLAY_MS = 2600;
const RESUME_AFTER_MS = 4000;

const mod = (n: number, m: number) => ((n % m) + m) % m;

/**
 * Fan carousel — a hand of design shots spread in an arc, auto-advancing
 * on a loop. The focused card jumps clear of the curve its neighbours
 * sit on, scaling and lifting rather than just growing along the same
 * gradient as everything else. Cycles endlessly through the photo set;
 * click a card, use the arrows, or drag to browse manually — autoplay
 * pauses while you're interacting and picks back up shortly after.
 * Clicking the focused card opens it full-screen in a lightbox.
 */
export default function FanCarousel({ photos, folder }: { photos: Photo[]; folder: string }) {
  const [virtual, setVirtual] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The carousel sits inside a Reveal wrapper, which sets `will-change:
  // transform` for its scroll-in animation. That alone (even once the
  // transform itself is back to `none`) creates a new containing block for
  // any `position: fixed` descendant, so a lightbox rendered in place would
  // only cover that wrapper's box instead of the real viewport. Portaling
  // straight to <body> sidesteps that and guarantees a true full-page overlay.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (paused || lightboxOpen || photos.length <= 1) return;
    const id = setInterval(() => setVirtual((v) => v + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, lightboxOpen, photos.length]);

  const pauseThenResume = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_AFTER_MS);
  };

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  // Lightbox: lock page scroll and close on Escape while open.
  useEffect(() => {
    if (!lightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  const closeLightbox = () => {
    setLightboxOpen(false);
    pauseThenResume();
  };

  if (photos.length === 0) {
    return (
      <div className="mx-auto mt-4 flex aspect-[4/3] w-full max-w-sm items-center justify-center rounded-2xl border-2 border-dashed border-line-strong bg-card p-4 text-center text-sm text-muted">
        Add designs to <code className="font-mono">public/{folder}</code>
      </div>
    );
  }

  const go = (delta: number) => {
    pauseThenResume();
    setVirtual((v) => v + delta);
  };

  const focusedPhoto = photos[mod(virtual, photos.length)];
  const visible = Array.from({ length: WINDOW * 2 + 1 }, (_, i) => virtual - WINDOW + i);

  return (
    <div>
      <motion.div
        drag={photos.length > 1 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        onDragStart={() => setPaused(true)}
        onDragEnd={(_, info) => {
          const threshold = 60;
          if (info.offset.x < -threshold) setVirtual((v) => v + 1);
          else if (info.offset.x > threshold) setVirtual((v) => v - 1);
          pauseThenResume();
        }}
        className="relative mx-auto flex h-[380px] cursor-grab items-center justify-center active:cursor-grabbing sm:h-[460px] md:h-[520px] lg:h-[560px]"
      >
        {visible.map((v) => {
          const offset = v - virtual;
          const isFocused = offset === 0;
          const photo = photos[mod(v, photos.length)];
          const rotate = offset * 7;
          const x = offset * 130;
          const y = offset * offset * 9 - (isFocused ? 40 : 0);
          const scale = isFocused ? 1.2 : Math.max(1 - Math.abs(offset) * 0.09, 0.55);
          const zIndex = isFocused ? 50 : 30 - Math.abs(offset);
          const opacity = Math.abs(offset) > WINDOW - 1 ? 0 : 1;

          return (
            <motion.button
              key={v}
              type="button"
              aria-label={
                isFocused
                  ? `Open design ${mod(v, photos.length) + 1} of ${photos.length} full-screen`
                  : `Show design ${mod(v, photos.length) + 1} of ${photos.length}`
              }
              aria-current={isFocused}
              onClick={() => (isFocused ? setLightboxOpen(true) : go(offset))}
              initial={false}
              animate={{ x, y, rotate, scale, zIndex, opacity }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              whileHover={!isFocused ? { y: y - 10 } : undefined}
              className={`pointer-events-auto absolute w-[220px] shrink-0 overflow-hidden rounded-2xl border border-[#e2e2e2] bg-card shadow-[0_24px_48px_-20px_rgba(26,25,23,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-[300px] md:w-[380px] lg:w-[430px] ${
                isFocused ? "cursor-zoom-in" : "cursor-pointer"
              }`}
            >
              <div className="relative aspect-[1728/1202]">
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 430px, (min-width: 768px) 380px, (min-width: 640px) 300px, 220px"
                  draggable={false}
                  className="pointer-events-none object-cover"
                  priority={isFocused}
                />
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {photos.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous design"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e2e2] bg-card text-ink transition-colors hover:border-[#796BA6] hover:text-[#796BA6]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 rotate-180">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next design"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e2e2] bg-card text-ink transition-colors hover:border-[#796BA6] hover:text-[#796BA6]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                key="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeLightbox}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
              >
                <motion.div
                  key="lightbox-frame"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)]"
                >
                  <div className="relative aspect-[1728/1202] w-full">
                    <Image
                      src={focusedPhoto.src}
                      alt=""
                      fill
                      sizes="90vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close full-screen view"
                    className="absolute right-4 top-4 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-card/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-card"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}

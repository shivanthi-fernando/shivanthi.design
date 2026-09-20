"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue } from "motion/react";
import Image from "next/image";

export type MarqueeItem = {
  id: string | number;
  src: string;
  alt?: string;
  width: number;
  height: number;
  imageClassName?: string;
};

type DraggableMarqueeProps = {
  items: MarqueeItem[];
  /** Auto-scroll speed in px/frame. Set to 0 to only move on drag. */
  speed?: number;
  className?: string;
  /** Gap between items, in px. */
  gap?: number;
  /** Scale any item pops to on hover — set to 1 to disable. */
  hoverScale?: number;
  /** Show prev/next arrow buttons centered below the strip. */
  showArrows?: boolean;
  /** Click an item to open it full-screen. */
  lightbox?: boolean;
};

/**
 * DraggableMarquee — an infinitely-looping strip of images that auto-scrolls
 * sideways and can be grabbed and dragged by hand. Built from scratch (only
 * the demo call-site was provided, not an implementation): the item set is
 * rendered three times back-to-back and the scroll position is wrapped back
 * into range every frame, so the loop point is invisible in either drag
 * direction. Auto-scroll pauses for the duration of a drag (or a nudge from
 * the arrow buttons) and picks back up — at the dragged-to position — the
 * instant it ends.
 *
 * Any item pops up on hover regardless of its position in the strip, and
 * (when `lightbox` is on) a genuine click — as opposed to the end of a drag
 * — opens that item full-screen. Hovering one item also dims every other
 * item in the strip (all sets, not just the one being hovered) — the
 * spotlight-style hover from orevbajohn.me's carousel.
 */
export function DraggableMarquee({
  items,
  speed = 1,
  className = "",
  gap = 24,
  hoverScale = 1.12,
  showArrows = true,
  lightbox = true,
}: DraggableMarqueeProps) {
  const setRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const draggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const loopWidthRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<MarqueeItem | null>(null);
  // Key of the currently-hovered card instance (set-index + item id), so
  // every *other* rendered instance — across all three duplicated sets —
  // dims while it's hovered.
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Measure one full set of items so we know how far to scroll before
  // wrapping back to the start of the loop.
  useEffect(() => {
    const el = setRef.current;
    if (!el) return;
    const measure = () => {
      loopWidthRef.current = el.getBoundingClientRect().width;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items, gap]);

  useEffect(() => {
    let rafId: number;
    const step = () => {
      rafId = requestAnimationFrame(step);
      const loopWidth = loopWidthRef.current;
      if (!loopWidth) return;

      if (!draggingRef.current) {
        x.set(x.get() - speed);
      }

      // Wrap the position back into a single loop-width window so the
      // strip appears to scroll forever in either direction.
      let v = x.get();
      if (v <= -loopWidth) v += loopWidth;
      if (v > 0) v -= loopWidth;
      if (v !== x.get()) x.set(v);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, x]);

  // Lightbox: lock page scroll and close on Escape while open.
  useEffect(() => {
    if (!lightboxItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxItem]);

  const nudge = (dir: 1 | -1) => {
    const loopWidth = loopWidthRef.current;
    if (!loopWidth) return;
    const step = loopWidth / items.length;
    draggingRef.current = true;
    animate(x, x.get() - dir * step, {
      type: "spring",
      stiffness: 300,
      damping: 32,
      onComplete: () => {
        draggingRef.current = false;
      },
    });
  };

  if (items.length === 0) return null;

  const renderSet = (setIndex: number) => (
    <div
      key={setIndex}
      ref={setIndex === 0 ? setRef : undefined}
      className="flex shrink-0"
      style={{ gap }}
    >
      {items.map((item) => {
        const key = `${setIndex}-${item.id}`;
        const isDimmed = hoveredKey !== null && hoveredKey !== key;

        return (
          <div
            key={key}
            onClick={() => {
              const wasDrag = dragDistanceRef.current > 5;
              dragDistanceRef.current = 0;
              if (!lightbox || wasDrag) return;
              setLightboxItem(item);
            }}
            className={`relative shrink-0 overflow-hidden rounded-2xl transition-[transform,opacity,filter] duration-300 ease-out hover:z-10 ${
              lightbox ? "cursor-zoom-in" : ""
            } ${isDimmed ? "opacity-40 grayscale" : "opacity-100"}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `scale(${hoverScale})`;
              setHoveredKey(key);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              setHoveredKey((prev) => (prev === key ? null : prev));
            }}
          >
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              width={item.width}
              height={item.height}
              draggable={false}
              className={item.imageClassName ?? "h-64 w-48 rounded-2xl object-cover"}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x, gap }}
          drag="x"
          dragMomentum={false}
          onDragStart={() => {
            draggingRef.current = true;
            dragDistanceRef.current = 0;
          }}
          onDrag={(_, info) => {
            dragDistanceRef.current += Math.abs(info.delta.x);
          }}
          onDragEnd={() => {
            draggingRef.current = false;
          }}
        >
          {renderSet(0)}
          {renderSet(1)}
          {renderSet(2)}
        </motion.div>
      </div>

      {showArrows && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll left"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e2e2] bg-card text-ink transition-colors hover:border-[#796BA6] hover:text-[#796BA6]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 rotate-180">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll right"
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
            {lightboxItem && (
              <motion.div
                key="marquee-lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxItem(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
              >
                <motion.div
                  key="marquee-lightbox-frame"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)]"
                >
                  <div className="relative aspect-[1728/1202] w-full">
                    <Image
                      src={lightboxItem.src}
                      alt={lightboxItem.alt ?? ""}
                      fill
                      sizes="90vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxItem(null)}
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

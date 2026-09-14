"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

const ROTATIONS = [-6, 4, -3, 5, -4, 3, -5, 4, -3, 5];

/**
 * Polaroid strip — each card sits at a slight tilt and pops up (bigger,
 * straightened, deeper shadow) on hover.
 *
 * Uses next/image (not a plain <img>) so Next actually resizes/compresses
 * each photo down to thumbnail size on the way out — source folders get
 * full-resolution phone photos dropped into them, and serving those raw
 * was unreliable (some multi-MB originals would just fail to render).
 * Each card is a fixed height with auto width, computed from the photo's
 * real aspect ratio, so landscape photos come out wide and portrait
 * photos come out narrow — no cropping either way.
 */
export default function PolaroidGallery({
  photos,
  folder,
}: {
  photos: Photo[];
  folder: string;
}) {
  if (photos.length === 0) {
    return (
      <div className="mt-6 flex h-32 w-28 items-center justify-center rounded-sm border-2 border-dashed border-line-strong bg-card p-3 text-center text-xs leading-relaxed text-muted">
        Add photos to <code className="font-mono">public/{folder}</code>
      </div>
    );
  }

  return (
    <div className="relative mt-6 flex items-start overflow-x-auto pb-4 pl-2 pt-2">
      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          whileHover={{
            scale: 1.25,
            rotate: 0,
            zIndex: 40,
            boxShadow: "0 20px 40px -12px rgba(26,25,23,0.45)",
          }}
          initial={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
          style={{ zIndex: i }}
          className={`h-28 shrink-0 select-none overflow-hidden rounded-[2px] bg-white p-1.5 pb-4 shadow-[0_10px_20px_-10px_rgba(26,25,23,0.35)] sm:h-32 ${
            i === 0 ? "" : "-ml-1 sm:-ml-2"
          }`}
        >
          <Image
            src={photo.src}
            alt=""
            width={photo.width}
            height={photo.height}
            sizes="144px"
            draggable={false}
            className="pointer-events-none h-full w-auto bg-line object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}

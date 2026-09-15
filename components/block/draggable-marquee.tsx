"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
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
};

/**
 * DraggableMarquee — an infinitely-looping strip of images that auto-scrolls
 * sideways and can be grabbed and dragged by hand. Built from scratch (only
 * the demo call-site was provided, not an implementation): the item set is
 * rendered three times back-to-back and the scroll position is wrapped back
 * into range every frame, so the loop point is invisible in either drag
 * direction. Auto-scroll pauses for the duration of a drag and picks back up
 * — at the dragged-to position — the instant it ends.
 */
export function DraggableMarquee({ items, speed = 1, className = "", gap = 24 }: DraggableMarqueeProps) {
  const setRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const draggingRef = useRef(false);
  const loopWidthRef = useRef(0);

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

  if (items.length === 0) return null;

  const renderSet = (setIndex: number) => (
    <div
      key={setIndex}
      ref={setIndex === 0 ? setRef : undefined}
      className="flex shrink-0"
      style={{ gap }}
    >
      {items.map((item) => (
        <div key={`${setIndex}-${item.id}`} className="shrink-0">
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            width={item.width}
            height={item.height}
            draggable={false}
            className={item.imageClassName ?? "h-64 w-48 rounded-2xl object-cover"}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        style={{ x, gap }}
        drag="x"
        dragMomentum={false}
        onDragStart={() => {
          draggingRef.current = true;
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
  );
}

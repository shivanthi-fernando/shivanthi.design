"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotate: number;
  drift: number; // horizontal drift target, px
  rise: number; // vertical rise target, px
  duration: number; // seconds
};

type StarTrailCursorProps = {
  /** Optional min-height for the wrapping box; purely layout. */
  height?: number | string;
  /** Optional caption centered over the wrapped area, matching the demo's `text` prop. */
  text?: string;
  children?: ReactNode;
  className?: string;
  /** Palette a spawned star's color is randomly drawn from — a single-yellow array by default. */
  colors?: string[];
  /** Minimum ms between two spawned stars. */
  spawnIntervalMs?: number;
  /** Minimum cursor movement (px) since the last spawn before another spawns. */
  minMoveDistance?: number;
};

const DEFAULT_COLORS = ["#FFE9AD"];

let idCounter = 0;

/**
 * StarTrailCursor — a trail of small yellow stars that spawn as the cursor
 * moves, twinkle, drift up and away, and fade out. Started life as a
 * butterfly-trail effect (built from scratch — only a demo call-site was
 * provided, no implementation) and was swapped to a single-color star
 * particle on request; the spawn/drift/fade machinery is unchanged.
 *
 * Mirrors the rope-cursor effect's containment approach: the overlay is a
 * fixed, viewport-sized layer so it reads correctly regardless of scroll
 * position, but stars only ever spawn while the cursor is over the
 * wrapper's own on-screen bounds, and an IntersectionObserver clears
 * everything the moment none of the wrapped content is in view (e.g. once
 * scrolled down to the footer).
 */
export function StarTrailCursor({
  height,
  text,
  children,
  className = "",
  colors = DEFAULT_COLORS,
  spawnIntervalMs = 90,
  minMoveDistance = 24,
}: StarTrailCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const lastSpawnRef = useRef({ x: 0, y: 0, t: 0 });
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (!entry.isIntersecting) setStars([]);
    });
    io.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      if (!visibleRef.current) return;

      const rect = container.getBoundingClientRect();
      const boundTop = Math.max(rect.top, 0);
      const boundBottom = Math.min(rect.bottom, window.innerHeight);
      if (e.clientY < boundTop || e.clientY > boundBottom) return;

      const now = performance.now();
      const { x: lx, y: ly, t: lt } = lastSpawnRef.current;
      const dist = Math.hypot(e.clientX - lx, e.clientY - ly);
      if (now - lt < spawnIntervalMs || dist < minMoveDistance) return;

      lastSpawnRef.current = { x: e.clientX, y: e.clientY, t: now };

      const size = 14 + Math.random() * 10;
      const star: Star = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: -25 + Math.random() * 50,
        drift: -40 + Math.random() * 80,
        rise: 60 + Math.random() * 50,
        duration: 1.0 + Math.random() * 0.5,
      };
      setStars((prev) => [...prev.slice(-24), star]);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [colors, spawnIntervalMs, minMoveDistance]);

  const removeStar = (id: number) => {
    setStars((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={height !== undefined ? { minHeight: height } : undefined}
    >
      {children}
      {text && (
        <p className="pointer-events-none grid h-full place-items-center text-3xl text-[#FFE9AD]">{text}</p>
      )}

      {mounted && (
        <div className="pointer-events-none fixed inset-0 z-30">
          <AnimatePresence>
            {stars.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: s.x, y: s.y, scale: 0.3, rotate: s.rotate }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: s.x + s.drift,
                  y: s.y - s.rise,
                  scale: [0.3, 1, 0.8],
                  rotate: s.rotate + (s.drift > 0 ? 40 : -40),
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: s.duration, ease: "easeOut" }}
                onAnimationComplete={() => removeStar(s.id)}
                className="absolute left-0 top-0"
                style={{ marginLeft: -s.size / 2, marginTop: -s.size / 2 }}
              >
                <svg viewBox="0 0 24 24" width={s.size} height={s.size}>
                  <path
                    d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.27l-6.18 3.24L7 13.63 2 8.76l6.91-1L12 1.5z"
                    fill={s.color}
                  />
                </svg>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

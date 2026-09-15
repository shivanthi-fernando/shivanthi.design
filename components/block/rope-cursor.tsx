"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * RopeCursor — a small verlet-simulated rope that hangs from a fixed point
 * near the top of the viewport, with its free end chasing the cursor. Built
 * from scratch (no reference implementation was available) to match the
 * props of the pasted demo, plus a few optional tunables for the physics.
 *
 * The canvas is `position: fixed` and viewport-sized rather than confined to
 * the wrapping box, so the rope reads correctly no matter how tall the
 * wrapped content is or how far the page has scrolled — an IntersectionObserver
 * on the wrapper pauses and clears the rope whenever none of the wrapped
 * content is on screen (e.g. once the page has scrolled down to the footer).
 */
type RopeCursorProps = {
  /** Optional min-height for the wrapping box; purely layout, not physics. */
  height?: number | string;
  ropeColor?: string;
  ropeWidth?: number;
  className?: string;
  children?: ReactNode;
  /** Number of rope segments — more segments read smoother but cost more. */
  segments?: number;
  /** Length of each segment in px — segments * segmentLength = rope's max reach. */
  segmentLength?: number;
  /** Downward acceleration applied to the rope each frame. */
  gravity?: number;
  /** How quickly the free end eases toward the cursor (0-1, higher = snappier). */
  ease?: number;
  /** Anchor's horizontal position as a fraction of viewport width (0-1). */
  anchorXRatio?: number;
  /** Anchor's vertical position in px from the top of the viewport. */
  anchorY?: number;
};

type Point = { x: number; y: number; px: number; py: number };

export function RopeCursor({
  height,
  ropeColor = "#8f7fc4",
  ropeWidth = 2,
  className = "",
  children,
  segments = 26,
  segmentLength = 20,
  gravity = 0.55,
  ease = 0.22,
  anchorXRatio = 0.82,
  anchorY = 96,
}: RopeCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CONSTRAINT_ITERATIONS = 6;
    const anchor = { x: window.innerWidth * anchorXRatio, y: anchorY };

    const points: Point[] = Array.from({ length: segments + 1 }, (_, i) => {
      const y = anchor.y + i * segmentLength;
      return { x: anchor.x, y, px: anchor.x, py: y };
    });

    mouseRef.current = {
      x: anchor.x,
      y: anchor.y + segments * segmentLength,
      active: false,
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onMouseLeaveDoc = () => {
      mouseRef.current.active = false;
    };
    document.addEventListener("mouseleave", onMouseLeaveDoc);

    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    io.observe(container);

    let rafId: number;

    const step = () => {
      rafId = requestAnimationFrame(step);

      if (!visibleRef.current) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        return;
      }

      // Clamp to the wrapped content's own on-screen bounds so the rope
      // never chases the cursor into — or visibly bleeds onto — whatever
      // comes after it (the footer, most importantly).
      const rect = container.getBoundingClientRect();
      const boundTop = Math.max(rect.top, 0);
      const boundBottom = Math.min(rect.bottom, window.innerHeight);

      anchor.x = window.innerWidth * anchorXRatio;

      const tip = points[points.length - 1];
      const restY = anchor.y + segments * segmentLength;
      const targetX = mouseRef.current.active ? mouseRef.current.x : anchor.x;
      const targetY = mouseRef.current.active
        ? Math.min(Math.max(mouseRef.current.y, boundTop), boundBottom)
        : restY;
      tip.x += (targetX - tip.x) * ease;
      tip.y += (targetY - tip.y) * ease;

      // Verlet integration for every point except the pinned anchor and the
      // cursor-driven tip.
      for (let i = 1; i < points.length - 1; i++) {
        const p = points[i];
        const vx = (p.x - p.px) * 0.98;
        const vy = (p.y - p.py) * 0.98;
        p.px = p.x;
        p.py = p.y;
        p.x += vx;
        p.y += vy + gravity;
      }

      points[0].x = anchor.x;
      points[0].y = anchor.y;

      // Distance-constraint relaxation keeps segments a fixed length apart.
      for (let iter = 0; iter < CONSTRAINT_ITERATIONS; iter++) {
        for (let i = 0; i < points.length - 1; i++) {
          const a = points[i];
          const b = points[i + 1];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
          const diff = (dist - segmentLength) / dist;
          const moveX = dx * 0.5 * diff;
          const moveY = dy * 0.5 * diff;
          if (i !== 0) {
            a.x += moveX;
            a.y += moveY;
          }
          if (i + 1 !== points.length - 1) {
            b.x -= moveX;
            b.y -= moveY;
          }
        }
        points[0].x = anchor.x;
        points[0].y = anchor.y;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, boundTop, window.innerWidth, boundBottom - boundTop);
      ctx.clip();
      ctx.strokeStyle = ropeColor;
      ctx.lineWidth = ropeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const mx = (points[i].x + points[i + 1].x) / 2;
        const my = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
      }
      ctx.lineTo(tip.x, tip.y);
      ctx.stroke();
      ctx.restore();
    };
    rafId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveDoc);
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [ropeColor, ropeWidth, segments, segmentLength, gravity, ease, anchorXRatio, anchorY]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={height !== undefined ? { minHeight: height } : undefined}
    >
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-30" />
      {children}
    </div>
  );
}

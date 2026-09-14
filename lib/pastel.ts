import type { Pastel } from "./site";

/**
 * Static class maps for each pastel tint.
 * Tailwind's JIT only sees complete class strings, so these must be spelled
 * out in full rather than composed with template literals.
 */

export const pastelFill: Record<Pastel, string> = {
  butter: "bg-butter text-butter-ink",
  mint: "bg-mint text-mint-ink",
  lavender: "bg-lavender text-lavender-ink",
  peach: "bg-peach text-peach-ink",
  sky: "bg-sky text-sky-ink",
  blush: "bg-blush text-blush-ink",
};

/** Soft background only (no ink recolor). */
export const pastelBg: Record<Pastel, string> = {
  butter: "bg-butter",
  mint: "bg-mint",
  lavender: "bg-lavender",
  peach: "bg-peach",
  sky: "bg-sky",
  blush: "bg-blush",
};

/** Tinted soft card (very light wash + matching border). */
export const pastelSoft: Record<Pastel, string> = {
  butter: "bg-butter/35 border-butter",
  mint: "bg-mint/35 border-mint",
  lavender: "bg-lavender/35 border-lavender",
  peach: "bg-peach/35 border-peach",
  sky: "bg-sky/35 border-sky",
  blush: "bg-blush/35 border-blush",
};

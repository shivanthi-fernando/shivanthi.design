import type { ReactNode } from "react";
import { ImageIcon } from "./icons";

/**
 * Shared prose building blocks for case study pages (Mosaic, BrightRoot,
 * and future ones) — keeps heading rhythm, body copy, and the
 * "screenshot not ready yet" placeholder consistent across all of them.
 */

export function CaseStudyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 font-display text-2xl font-semibold text-ink sm:text-[1.75rem]">
      {children}
    </h2>
  );
}

export function CaseStudyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 font-display text-lg font-semibold text-ink">{children}</h3>
  );
}

export function CaseStudyP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>;
}

export function CaseStudyList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted">
      {children}
    </ul>
  );
}

/**
 * A dashed-border slot marking where a real screenshot goes once it's
 * ready to share — keeps the case study's structure/captions in place
 * without blocking on assets that don't exist yet. Drop a real <Image>
 * in here and delete the placeholder when the screenshot is available.
 */
export function CaseStudyImageSlot({ caption }: { caption: string }) {
  return (
    <figure className="mt-8">
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line-strong bg-card p-6 text-center text-muted">
        <ImageIcon className="h-8 w-8" />
        <span className="text-sm">Image coming soon</span>
      </div>
      <figcaption className="mt-3 text-sm italic leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

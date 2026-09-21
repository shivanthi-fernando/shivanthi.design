import type { ReactNode } from "react";
import { ArrowRight, ImageIcon } from "./icons";

/**
 * Shared prose building blocks for case study pages (Mosaic, BrightRoot,
 * and future ones) — keeps heading rhythm, body copy, and the
 * "screenshot not ready yet" placeholder consistent across all of them.
 */

export function CaseStudyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 font-display text-xl font-semibold text-ink sm:text-2xl">
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
 * The quick-facts row shown at the top of every case study (Role,
 * Platform, Tools, Scope, ...) — an arbitrary list of label/value pairs
 * so each project can show as many or as few as make sense, laid out in
 * a wrapping two-column grid.
 */
export function CaseStudyFacts({
  facts,
}: {
  facts: { label: string; value: string }[];
}) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
      {facts.map((fact) => (
        <div key={fact.label}>
          <div className="font-label text-xs font-medium tracking-wide text-muted">
            {fact.label}
          </div>
          <div className="mt-1 text-base font-medium text-ink">{fact.value}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * A short "A → B → C" journey shown as connected chips — used throughout
 * case studies to make a flow tangible without a full diagram. Wraps
 * naturally on narrow screens; the arrow always sits between two steps,
 * never trailing.
 */
export function CaseStudyFlow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-line-strong bg-card px-3 py-1.5 text-sm font-medium text-ink">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted" />
          )}
        </span>
      ))}
    </div>
  );
}

/**
 * A pulled-out question or statement — used for the framing "design
 * challenge" question that a case study builds toward answering.
 */
export function CaseStudyQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 border-primary py-1 pl-5 font-display text-xl leading-snug text-ink sm:text-2xl">
      {children}
    </blockquote>
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

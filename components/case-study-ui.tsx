import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ImageIcon } from "./icons";

/**
 * Shared prose building blocks for case study pages (Mosaic, BrightRoot,
 * and future ones) — keeps heading rhythm, body copy, and the
 * "screenshot not ready yet" placeholder consistent across all of them.
 *
 * Each of these carries its own max-w-2xl reading-width cap (rather
 * than a single wrapper capping every child in CaseStudyHero) so that
 * CaseStudyImageSlot, below, can opt out of it and span the card's
 * full width instead.
 */

export function CaseStudyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 max-w-2xl font-display text-xl font-semibold text-ink sm:text-2xl">
      {children}
    </h2>
  );
}

export function CaseStudyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 max-w-2xl font-display text-lg font-semibold text-ink">
      {children}
    </h3>
  );
}

export function CaseStudyP({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{children}</p>;
}

export function CaseStudyList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted">
      {children}
    </ul>
  );
}

/**
 * The quick-facts row shown at the top of every case study (Role,
 * Platform, Tools, Scope, ...) — an arbitrary list of label/value pairs
 * so each project can show as many or as few as make sense. Laid out as
 * an actual bordered grid (not just CSS `display: grid` with invisible
 * seams) — a 1px `bg-line` showing through `gap-px` draws the dividers
 * between cells, with a matching border wrapping the whole thing.
 */
export function CaseStudyFacts({
  facts,
}: {
  facts: { label: string; value: string }[];
}) {
  return (
    <div className="mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
      {facts.map((fact) => (
        <div key={fact.label} className="bg-card p-4">
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
    <div className="mt-4 flex max-w-2xl flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-line-strong bg-card px-3.5 py-2 text-sm font-medium text-ink">
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
    <blockquote className="mt-6 max-w-2xl border-l-2 border-primary py-1 pl-5 font-display text-xl leading-snug text-ink sm:text-2xl">
      {children}
    </blockquote>
  );
}

/**
 * A screenshot slot — pass `src` once a real screenshot is ready to
 * share (rendered at the site's standard 1728/1202 screenshot ratio);
 * without one, falls back to a dashed-border "coming soon" placeholder
 * so the case study's structure/captions stay in place either way.
 *
 * Unlike the text primitives above, this one does NOT carry max-w-2xl
 * — it fills the card's full width instead (matching the hero image
 * above it exactly). Its immediate parent only has left padding
 * (pl-4/sm:pl-8, see CaseStudyHero — text is inset from the card's own
 * edge, but the card itself stays the image's full width), so
 * -ml-4/sm:-ml-8 cancels exactly that inset and the matching
 * w-[calc(...)] widens by the same amount, reaching the card's true
 * right edge too.
 */
export function CaseStudyImageSlot({
  caption,
  src,
  alt = "",
}: {
  caption: string;
  src?: string;
  alt?: string;
}) {
  return (
    <figure className="-ml-4 mt-8 w-[calc(100%+1rem)] sm:-ml-8 sm:w-[calc(100%+2rem)]">
      {src ? (
        <div className="relative aspect-[1728/1202] overflow-hidden rounded-2xl border border-line bg-card">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 960px, 90vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line-strong bg-card p-6 text-center text-muted">
          <ImageIcon className="h-8 w-8" />
          <span className="text-sm">Image coming soon</span>
        </div>
      )}
      <figcaption className="mt-3 text-sm italic leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

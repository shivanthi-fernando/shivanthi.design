import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, ImageIcon } from "./icons";

/**
 * Case Studies — cards for full write-ups: name + descriptive heading +
 * "Read case study" CTA on the left, a bordered thumbnail on the right.
 *
 * `disabled` turns the card into a plain, non-hoverable, non-clickable
 * block — without touching `href` or the case study page itself, so
 * flipping it back to false is all it takes to relink it later (both
 * detail pages, app/projects/brightroot and app/projects/mosaic, were
 * always kept — only ever hidden behind this flag, never deleted).
 */
const caseStudies: {
  heading: string;
  name: string;
  image: string | null;
  href: string | null;
  disabled?: boolean;
}[] = [
  {
    heading:
      "Designed an institute platform's public pages, student exam portal, and admin workspace.",
    name: "BrightRoot",
    image: "/projects/BrightRoot/BrightRoot_Thumbnail.png",
    href: "/projects/brightroot",
  },
  {
    heading:
      "Redesigned a Norwegian product after uncovering what users and the client actually needed.",
    name: "Mosaic",
    image: "/projects/Mosaic/Mosaic_Thumbnail.png",
    href: "/projects/mosaic",
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Hidden for now (not deleted). */}
      <p className="hidden max-w-2xl text-lg leading-relaxed text-muted">
        A look at my design work, covering how I approach research,
        decisions and outcomes.
      </p>

      <div className="mt-6 grid gap-8">
        {caseStudies.map((cs, i) => {
          const isLive = Boolean(cs.href) && !cs.disabled;
          const cardClass = `block overflow-hidden rounded-[20px] border border-neutral-200 bg-card ${
            isLive
              ? "group transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]"
              : ""
          }`;

          const content = (
            <div className="flex flex-col-reverse sm:flex-row sm:items-start">
              {/* Text — name, heading, CTA — on the left, 1/3 of the row,
                  aligned to the top. Its own padding, since the card
                  itself has none (so the image on the right can sit
                  flush against the card edge). */}
              <div className="min-w-0 p-5 sm:w-1/3 sm:py-6">
                <h4 className="font-display text-base font-semibold text-ink">{cs.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{cs.heading}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Thumbnail — no border of its own, flush against the
                  card's own edges (no padding around it either), on the
                  right, 2/3 of the row. */}
              <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-paper-2 sm:w-2/3">
                {cs.image ? (
                  <Image
                    src={cs.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 380px, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-muted">
                    <ImageIcon className="h-8 w-8" />
                  </div>
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={cs.name} delay={i * 80}>
              {isLive ? (
                <Link href={cs.href!} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div className={cardClass}>{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

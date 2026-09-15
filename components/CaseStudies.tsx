import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, ImageIcon } from "./icons";

/**
 * Case Studies — cards for full write-ups: a thumbnail, a descriptive
 * one-line heading, the project's (possibly anonymized) name as smaller
 * supporting text below it, and a "Read case study" link.
 *
 * `disabled` turns the card into a plain, non-hoverable, non-clickable
 * block and mutes the "Read case study" text, with a "Coming soon" chip
 * next to it — without touching `href` or the case study page itself, so
 * flipping it back to false is all it takes to relink it later.
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
    disabled: true,
  },
  {
    heading:
      "Redesigned a Norwegian product after uncovering what users and the client actually needed.",
    name: "Mosaic",
    image: "/projects/Mosaic/Mosaic_Thumbnail.png",
    href: "/projects/mosaic",
    disabled: true,
  },
];

export default function CaseStudies() {
  return (
    <div>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        A look at my design work, covering how I approach research,
        decisions and outcomes.
      </p>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {caseStudies.map((cs, i) => {
          const isLive = Boolean(cs.href) && !cs.disabled;
          const cardClass = `block overflow-hidden rounded-2xl border border-line bg-card ${
            isLive
              ? "group transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]"
              : ""
          }`;

          const content = (
            <>
              <div className="relative aspect-[3/2] bg-paper-2">
                {cs.image ? (
                  <Image
                    src={cs.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 420px, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-muted">
                    <ImageIcon className="h-8 w-8" />
                  </div>
                )}
              </div>
              <div className="bg-lavender/25 p-6">
                <span className="text-xs font-medium text-muted">{cs.name}</span>
                <h4 className="mt-3 font-display text-lg font-semibold">{cs.heading}</h4>
                <div className="mt-4 flex items-center gap-3">
                  {isLive && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Read case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                  {cs.disabled && (
                    <span className="inline-flex items-center rounded-full bg-butter px-3.5 py-1.5 text-xs font-semibold text-butter-ink">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </>
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

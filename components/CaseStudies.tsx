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
  /** Backdrop the thumbnail floats on, echoing yards.framer.website's
   *  colored-gradient project cards — drawn from the site's own pastel
   *  palette rather than copying their blue/purple hues directly. */
  gradient: string;
}[] = [
  {
    heading:
      "Designed an institute platform's public pages, student exam portal, and admin workspace.",
    name: "BrightRoot",
    image: "/projects/BrightRoot/BrightRoot_Thumbnail.png",
    href: "/projects/brightroot",
    disabled: true,
    gradient: "from-sky to-lavender",
  },
  {
    heading:
      "Redesigned a Norwegian product after uncovering what users and the client actually needed.",
    name: "Mosaic",
    image: "/projects/Mosaic/Mosaic_Thumbnail.png",
    href: "/projects/mosaic",
    disabled: true,
    gradient: "from-sky to-lavender",
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

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {caseStudies.map((cs, i) => {
          const isLive = Boolean(cs.href) && !cs.disabled;
          const cardClass = `block overflow-hidden rounded-[20px] border border-line bg-card p-2 ${
            isLive
              ? "group transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]"
              : ""
          }`;

          const content = (
            <>
              {/* Thumbnail floats on a pastel gradient backdrop, framed
                  card-style like yards.framer.website's project cards. */}
              <div
                className={`relative aspect-[3/2] overflow-hidden rounded-2xl bg-linear-to-br p-5 ${cs.gradient}`}
              >
                {cs.image ? (
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-paper shadow-[0_20px_36px_-20px_rgba(26,25,23,0.4)]">
                    <Image
                      src={cs.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 420px, 90vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="grid h-full place-items-center rounded-xl bg-paper text-muted">
                    <ImageIcon className="h-8 w-8" />
                  </div>
                )}
              </div>
              <div className="px-2 pb-2 pt-4">
                <h4 className="font-display text-base font-semibold text-ink">{cs.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{cs.heading}</p>
                <div className="mt-4 flex items-center gap-3">
                  {isLive && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Read case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                  {cs.disabled && (
                    <span className="inline-flex items-center rounded-full bg-neutral-200 px-3.5 py-1.5 text-xs font-semibold text-neutral-600">
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

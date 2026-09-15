import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, ImageIcon } from "./icons";

/**
 * Case Studies — cards for full write-ups: a thumbnail, a descriptive
 * one-line heading, the project's (possibly anonymized) name as smaller
 * supporting text below it, and either a "Read case study" link (once
 * `href` is set) or a "Coming Soon" badge for projects not written up yet.
 */
const caseStudies: {
  heading: string;
  name: string;
  image: string | null;
  href: string | null;
}[] = [
  {
    heading:
      "Redesigned a Norwegian product after uncovering what users and the client actually needed.",
    name: "Mosaic",
    image: "/projects/mosaic.png",
    href: "/projects/mosaic",
  },
  {
    heading:
      "Designed an institute platform's public pages, student exam portal, and admin workspace.",
    name: "BrightRoot",
    image: "/projects/BrightRoot/BrightRoot_Thumbnail.png",
    href: "/projects/brightroot",
  },
];

export default function CaseStudies() {
  return (
    <div>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        A look at my design work, covering how I approach research,
        decisions and outcomes.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((cs, i) => {
          const cardClass =
            "group block overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]";

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
              <div className="p-6">
                <h4 className="font-display text-lg font-semibold">{cs.heading}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cs.name}</p>
                {cs.href ? (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                ) : (
                  <span className="mt-4 inline-flex items-center rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-muted">
                    Coming Soon
                  </span>
                )}
              </div>
            </>
          );

          return (
            <Reveal key={cs.name} delay={i * 80}>
              {cs.href ? (
                <Link href={cs.href} className={cardClass}>
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

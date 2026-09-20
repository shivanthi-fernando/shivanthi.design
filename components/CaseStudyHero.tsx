import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHead } from "./ui";
import { ArrowRight } from "./icons";
import Reveal from "./Reveal";

/**
 * Shared case-study page shell: a hero image up top, kept within the
 * same max-w-5xl content width as the rest of the site (not full-bleed),
 * with the content (back link, title, and everything passed as children)
 * sitting in a rounded-top panel that overlaps the image's bottom edge —
 * the sliding-card effect from shivanthi.framer.website's case-study
 * pages, just inset to match this site's own content width instead of
 * running edge-to-edge.
 */
export function CaseStudyHero({
  image,
  label,
  title,
  intro,
  children,
}: {
  image: string;
  label: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="pb-20 pt-10 sm:pb-28 sm:pt-14 md:pt-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        {/* aspect-[1728/1202] matches the case study cover images' own
            dimensions, so object-cover has nothing to crop/zoom into —
            a viewport-height-based box was forcing a much wider ratio
            than the source images, which is what caused the zoom. */}
        <div className="relative aspect-[1728/1202] max-h-[70vh] w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 90vw"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="relative -mt-10 rounded-t-[32px] bg-paper pt-10 sm:-mt-14 sm:rounded-t-[40px] sm:pt-14">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Back to Projects
            </Link>
          </Reveal>

          <div className="mt-6">
            <SectionHead label={label} title={title} intro={intro} />
          </div>

          <div className="max-w-2xl">{children}</div>
        </div>
      </div>
    </section>
  );
}

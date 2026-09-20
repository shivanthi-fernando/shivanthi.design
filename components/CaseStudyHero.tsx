import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHead } from "./ui";
import { ArrowRight } from "./icons";
import Reveal from "./Reveal";

/**
 * Shared case-study page shell: a full-bleed hero image up top, with the
 * content (back link, title, and everything passed as children) sitting
 * in a rounded-top panel that overlaps the image's bottom edge. Modeled
 * on shivanthi.framer.website's case-study pages — the image reads as a
 * background the content panel slides over as you scroll into the page.
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
    <section className="pb-20 sm:pb-28">
      {/* aspect-[1728/1202] matches the case study cover images' own
          dimensions, so object-cover has nothing to crop/zoom into —
          a viewport-height-based box was forcing a much wider ratio
          than the source images, which is what caused the zoom. */}
      <div className="relative aspect-[1728/1202] max-h-[70vh] w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="scale-125 object-cover object-top"
          priority
        />
      </div>

      <div className="relative -mt-10 rounded-t-[32px] bg-paper pt-10 sm:-mt-14 sm:rounded-t-[40px] sm:pt-14">
        <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
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

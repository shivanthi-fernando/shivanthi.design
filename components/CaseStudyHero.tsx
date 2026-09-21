import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHead } from "./ui";
import { ArrowRight } from "./icons";
import Reveal from "./Reveal";

/**
 * Shared case-study page shell: "Back to Projects", then a hero image
 * kept within the same max-w-5xl content width as the rest of the site
 * (not full-bleed), with the content (title, and everything passed as
 * children) sitting in a rounded-top panel that overlaps the image's
 * bottom edge and scrolls over it — the image itself is sticky, so it
 * stays put while the panel slides up over it, mirroring
 * shivanthi.framer.website's case-study pages.
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
  /** A single paragraph, or several — each renders as its own <p>. */
  intro: string | string[];
  children: ReactNode;
}) {
  return (
    <section className="pb-20 pt-10 sm:pb-28 sm:pt-14 md:pt-16">
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

        {/* Sticky — pinned at the top of the viewport while the content
            panel below (its sibling, much taller) scrolls up over it.
            aspect-[1728/1000] crops in on the source images' own
            1728/1202 ratio (taller still, so more of the screenshot is
            visible), combined with object-top. */}
        <div className="sticky top-0 z-0 mt-6 aspect-[1728/1000] max-h-[70vh] w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 90vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* rounded-t-2xl matches the hero image's own rounded-2xl above it,
            per feedback that the two should share the same corner radius. */}
        <div className="relative z-10 -mt-6 rounded-t-2xl bg-paper pt-10 sm:-mt-8 sm:pt-14">
          {/* Left padding here, not on the card itself — the card keeps
              the image's full width, only the text inside it is inset
              from the card's own edge. */}
          <div className="pl-4 sm:pl-8">
            <SectionHead
              label={label}
              title={title}
              intro={intro}
              titleClassName="text-xl sm:text-2xl md:text-3xl"
            />

            <div className="max-w-2xl">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { articles } from "@/lib/site";
import { SectionHead } from "./ui";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

/**
 * Writing — a list of the UX psychology mini-series published on Medium.
 * On mobile each card stacks image-on-top, text-below; from the sm
 * breakpoint up it switches to the image-left, text-right row layout.
 * Newest first; each card opens the full article externally.
 */
export default function Writing() {
  return (
    <section className="min-h-screen pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SectionHead
          label="Blogs"
          title="Blogs"
          intro="Thoughts, learnings, and small discoveries from my ongoing journey as a designer."
        />

        <div className="mt-10 flex flex-col gap-4">
          {articles.map((article, i) => (
            <Reveal key={article.href} delay={(i % 3) * 80}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-paper-2 sm:h-28 sm:w-44">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 176px, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {article.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink">
                    Read on Medium
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

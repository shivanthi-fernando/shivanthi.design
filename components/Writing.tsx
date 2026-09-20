import { articles } from "@/lib/site";
import { SectionHead } from "./ui";
import { ArrowUpRight, FileTextIcon } from "./icons";
import Reveal from "./Reveal";

/**
 * Writing — a list of the UX psychology mini-series published on Medium.
 * Styled after bolsdesign.co's "Articles I like" list: a plain row list
 * (no divider lines) — title + external-link arrow, gray outlined icon
 * instead of a thumbnail image. On bolsdesign.co, hovering a row pops a
 * description card out to the side; here the same hover reveal happens
 * directly under the hovered title instead, via CSS only (group-hover /
 * group-focus-within — no JS state needed), so it works for keyboard
 * focus too. Newest first; each row opens the full article externally.
 *
 * Only ever rendered as the home page's Blogs section now (the standalone
 * /blogs listing page was removed in favor of in-page navigation), so this
 * always uses the tighter, no-standalone-page spacing.
 */
export default function Writing() {
  return (
    <section className="pb-20 pt-4 sm:pb-28 sm:pt-6">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SectionHead
          label="Blogs"
          title="Blogs"
          intro="Thoughts, learnings, and small discoveries from my ongoing journey as a designer."
        />

        <div className="mt-10">
          {articles.map((article, i) => (
            <Reveal key={article.href} delay={(i % 3) * 80}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl px-3 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100"
              >
                {/* Icon + title + arrow — a fixed-height row on its own, so
                    the title's position never shifts when the description
                    below expands open on hover. */}
                <div className="flex items-center gap-4 pt-2 pb-1">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-neutral-300 text-muted">
                    <FileTextIcon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1 font-display text-base font-medium leading-snug text-ink">
                    {article.title}
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                {/* Description — collapsed to 0 height, expands open right
                    under this row's own title on hover/focus. The negative
                    top margin pulls it up close under the title without
                    touching the title row itself (which would move it). */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="-mt-2 pb-2 pl-[3.75rem] pr-8 text-sm leading-relaxed text-muted">
                      {article.desc}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

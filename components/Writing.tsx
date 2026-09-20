import { articles } from "@/lib/site";
import { SectionHead } from "./ui";
import { ArrowUpRight, FileTextIcon } from "./icons";
import Reveal from "./Reveal";

/**
 * Writing — a list of the UX psychology mini-series published on Medium.
 * Styled after bolsdesign.co's "Articles I like" list: a plain row list
 * (no divider lines) — title + external-link arrow, gray outlined icon
 * instead of a thumbnail image, with the description shown right under
 * the title at all times (bolsdesign.co's own hover-reveal pattern was
 * tried first, but per feedback the description is always visible here
 * instead). Newest first; each row opens the full article externally.
 *
 * Only ever rendered as the home page's Blogs section now (the standalone
 * /blogs listing page was removed in favor of in-page navigation), so this
 * always uses the tighter, no-standalone-page spacing.
 *
 * The icon centers against the full title+description block (not just the
 * title) so it reads as one group with both lines of text, rather than
 * looking paired with the title alone.
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
                className="group flex items-center gap-4 rounded-xl px-3 py-2 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-neutral-300 text-muted">
                  <FileTextIcon className="h-5 w-5" />
                </span>

                {/* Title + description as one column, so the icon (via
                    items-center on the row) centers against both lines
                    together rather than the title alone. */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="min-w-0 flex-1 font-display text-base font-medium leading-snug text-ink">
                      {article.title}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-0.5 pr-8 text-sm leading-relaxed text-muted">
                    {article.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { articles } from "@/lib/site";
import { SectionHead } from "./ui";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

/**
 * Writing — a list of the UX psychology mini-series published on Medium.
 * Styled after bolsdesign.co's "Articles I like" list: a plain, hairline-
 * divided row list rather than image cards — title + external-link arrow,
 * with just a small thumbnail slot on the left (their version has no
 * image at all; this keeps one, just kept small so the row stays the
 * star). Newest first; each row opens the full article externally.
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

        <div className="mt-10 divide-y divide-line">
          {articles.map((article, i) => (
            <Reveal key={article.href} delay={(i % 3) * 80}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-paper-2">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <span className="min-w-0 flex-1 font-display text-base font-medium leading-snug text-ink transition-colors group-hover:text-primary">
                  {article.title}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

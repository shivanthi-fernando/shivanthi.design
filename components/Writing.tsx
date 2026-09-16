"use client";

import { useState } from "react";
import Image from "next/image";
import { articles, site } from "@/lib/site";
import { SectionHead } from "./ui";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

/**
 * Writing — a list of the UX psychology mini-series published on Medium.
 * Styled after bolsdesign.co's "Articles I like" list: a plain, hairline-
 * divided row list rather than image cards — title + external-link arrow,
 * with just a small thumbnail slot on the left (their version has no
 * image at all; this keeps one, just kept small so the row stays the
 * star). The hovered/active row highlights and a preview panel below the
 * list (their reference shows it as a side panel; placed below here
 * instead) shows that article's full title, byline, and description.
 * Newest first; each row opens the full article externally.
 *
 * Only ever rendered as the home page's Blogs section now (the standalone
 * /blogs listing page was removed in favor of in-page navigation), so this
 * always uses the tighter, no-standalone-page spacing.
 */
export default function Writing() {
  const [active, setActive] = useState(0);
  const activeArticle = articles[active];

  return (
    <section className="pb-20 pt-4 sm:pb-28 sm:pt-6">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SectionHead
          label="Blogs"
          title="Blogs"
          intro="Thoughts, learnings, and small discoveries from my ongoing journey as a designer."
        />

        <div className="mt-10 divide-y divide-line">
          {articles.map((article, i) => {
            const isActive = active === i;
            return (
              <Reveal key={article.href} delay={(i % 3) * 80}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-xl px-3 py-4 transition-colors ${
                    isActive ? "bg-paper-2" : ""
                  }`}
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

                  <span
                    className={`min-w-0 flex-1 font-display text-base font-medium leading-snug transition-colors ${
                      isActive ? "text-ink" : "text-muted"
                    }`}
                  >
                    {article.title}
                  </span>

                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-all ${
                      isActive ? "translate-x-0.5 -translate-y-0.5 text-ink" : "text-muted"
                    }`}
                  />
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Preview panel — reflects whichever row is hovered/focused above. */}
        <div className="mt-6 rounded-2xl border border-line bg-card p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold leading-snug text-ink">
            {activeArticle.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{site.name} · Medium</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{activeArticle.desc}</p>
        </div>
      </div>
    </section>
  );
}

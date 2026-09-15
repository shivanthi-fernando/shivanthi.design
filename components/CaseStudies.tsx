import Image from "next/image";
import Reveal from "./Reveal";
import { InfoIcon, ImageIcon } from "./icons";

/**
 * Case Studies — cards for full write-ups that aren't live yet: a
 * thumbnail, title, one-line teaser, and a "Coming Soon" badge in place
 * of a read link. When a case study is ready, swap its badge for a real
 * link (and its `image` for a real thumbnail if it's still a placeholder)
 * — no layout change needed.
 */
const caseStudies: { title: string; teaser: string; image: string | null }[] = [
  {
    title: "Mosaic",
    teaser:
      "Redesigning a Norwegian product after uncovering what users and the client actually needed.",
    image: "/projects/mosaic.png",
  },
  {
    title: "Next Case Study",
    teaser: "Another project write-up is in progress — check back soon.",
    image: null,
  },
];

export default function CaseStudies() {
  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-semibold text-ink">Case Studies</h3>
      <p className="mt-1.5 max-w-2xl text-lg leading-relaxed text-muted">
        In depth breakdowns of my process are on their way.
      </p>
      <div className="mt-4 flex max-w-2xl items-start gap-2.5 rounded-xl border border-sky bg-sky/35 px-4 py-3">
        <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-ink" />
        <p className="text-sm leading-relaxed text-ink-soft">
          Some of the work shown here has been renamed or lightly altered due
          to client confidentiality. The thinking, process and quality behind
          it remain exactly as delivered.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 80}>
            <div className="overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]">
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
                <h4 className="font-display text-lg font-semibold">{cs.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cs.teaser}</p>
                <span className="mt-4 inline-flex items-center rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-muted">
                  Coming Soon
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

import Reveal from "./Reveal";

/**
 * Case Studies — placeholder cards for full write-ups that aren't live
 * yet. Same card treatment as the Blogs page, minus the image: title,
 * one-line teaser, and a "Coming Soon" badge in place of a read link.
 * When a case study is ready, swap its badge for a real link — no
 * layout change needed.
 */
const caseStudies: { title: string; teaser: string }[] = [
  {
    title: "Mosaic",
    teaser:
      "Redesigning a Norwegian product after uncovering what users and the client actually needed.",
  },
];

export default function CaseStudies() {
  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-semibold text-ink">Case Studies</h3>
      <p className="mt-1.5 max-w-2xl text-lg leading-relaxed text-muted">
        In depth breakdowns of my process are on their way.
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Some of the work shown here has been renamed or lightly altered due
        to client confidentiality. The thinking, process and quality behind
        it remain exactly as delivered.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 80}>
            <div className="rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]">
              <h4 className="font-display text-lg font-semibold">{cs.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{cs.teaser}</p>
              <span className="mt-4 inline-flex items-center rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-muted">
                Coming Soon
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

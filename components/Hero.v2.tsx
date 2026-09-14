import { site } from "@/lib/site";
import { Avatar, ButtonGhost, ButtonPrimary } from "./ui";
import Reveal from "./Reveal";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden pb-0 pt-28 sm:pt-32 md:pt-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl text-left">
          <Reveal>
            {/* Intro card — avatar (same photo as the navbar) + name + role,
                no background, just sits directly on the page. */}
            <div className="inline-flex items-center gap-3">
              <Avatar size={48} />
              <div className="text-left leading-tight">
                <div className="font-display text-base font-semibold text-ink">
                  {site.name}
                </div>
                <div className="text-sm text-muted">UX Designer</div>
              </div>
            </div>
          </Reveal>

          <Reveal as="h1" delay={60} className="mt-6 text-4xl font-semibold leading-[1.3] tracking-tight sm:text-5xl md:text-[3.6rem]">
            Turning ideas into{" "}
            <span className="hl bg-butter" style={{ padding: 0, borderRadius: 0 }}>
              experiences
            </span>
            <br />
            that feel natural to use.
          </Reveal>

          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Bringing clarity to digital products through thoughtful UX, rapid
            prototyping, and emerging technology, creating experiences that
            are intuitive, engaging, and designed around real user needs.
          </Reveal>

          <Reveal delay={180} className="mt-9 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center">
            <ButtonPrimary href={site.bookingUrl} external className="w-full sm:w-auto">
              Book a call
            </ButtonPrimary>
            <ButtonGhost href="/projects" className="w-full sm:w-auto">
              Check my projects
            </ButtonGhost>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

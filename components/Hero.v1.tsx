import { site } from "@/lib/site";
import { ButtonGhost, ButtonPrimary } from "./ui";
import { ArrowUpRight, CalendarIcon, FigmaIcon } from "./icons";
import { BrowserFrame, DashboardMock } from "./mocks";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-28 sm:pt-32 md:pt-36">
      {/* soft pastel background wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-4 h-72 w-72 rounded-full bg-butter/50 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-sky/50 blur-3xl" />
        <div className="absolute left-1/3 top-40 h-72 w-72 rounded-full bg-lavender/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <div className="max-w-3xl text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/80 py-2 pl-2.5 pr-4 text-xs font-medium text-ink-soft shadow-sm backdrop-blur">
              <span className="pulse-dot inline-grid h-2 w-2 place-items-center rounded-full text-mint-ink">
                <span className="h-2 w-2 rounded-full bg-mint-ink" />
              </span>
              {site.availability}
            </span>
          </Reveal>

          <Reveal as="h1" delay={60} className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.6rem]">
            Helping SaaS &amp; AI startups design{" "}
            <span className="hl bg-mint">conversion-driven</span>,{" "}
            <span className="hl bg-lavender">user-friendly</span> products.
          </Reveal>

          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I design clean, scalable UIs that reduce churn, speed up onboarding,
            and convert better — with{" "}
            <span className="hl bg-butter font-medium text-ink">Figma-to-code</span>{" "}
            delivery that ships fast.
          </Reveal>

          <Reveal delay={180} className="mt-9 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center">
            <ButtonPrimary href={site.bookingUrl} external className="w-full sm:w-auto">
              <CalendarIcon className="h-4 w-4" />
              Book a call
            </ButtonPrimary>
            <ButtonGhost href="/projects" className="w-full sm:w-auto">
              <FigmaIcon className="h-4 w-4" />
              Check my projects
            </ButtonGhost>
          </Reveal>
        </div>

        {/* Hero product visual */}
        <Reveal delay={120} className="relative mx-auto mt-14 max-w-4xl">
          <div className="float-y">
            <BrowserFrame url="fluxpay.app/dashboard">
              <DashboardMock />
            </BrowserFrame>
          </div>

          {/* floating pastel accent cards */}
          <div className="absolute -left-3 top-10 hidden rotate-[-6deg] rounded-2xl border border-line bg-card p-3 shadow-lg sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-mint-ink">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div>
                <div className="font-display text-sm font-semibold">+38%</div>
                <div className="font-label text-[11px] tracking-wide text-muted">
                  Activation
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 bottom-8 hidden rotate-[5deg] rounded-2xl border border-line bg-card p-3 shadow-lg sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-lavender text-lavender-ink font-display text-sm font-bold">
                A+
              </span>
              <div>
                <div className="font-display text-sm font-semibold">Ships fast</div>
                <div className="font-label text-[11px] tracking-wide text-muted">
                  Figma → code
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { site } from "@/lib/site";
import { getFolderPhotos } from "@/lib/photos";
import { Avatar } from "./ui";
import { CopyEmail } from "./CopyEmail";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";
import { DraggableMarquee } from "./block/draggable-marquee";

// Reads from public/ on every render (see app/page.tsx's force-dynamic),
// same as DesignsCarousel, so new design shots show up without a rebuild.
export default async function Hero() {
  const photos = await getFolderPhotos("designs");
  const items = photos.map((photo, i) => ({
    id: i,
    src: photo.src,
    alt: "",
    width: photo.width,
    height: photo.height,
    imageClassName:
      "h-[190px] w-[240px] rounded-2xl border border-[#e2e2e2] object-cover",
  }));

  return (
    <section className="relative overflow-hidden pb-0 pt-10 sm:pt-14 md:pt-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        {/* Content on the left, carousel on the right once there's room for
            both (lg+) — below that, the carousel drops out of Hero entirely
            and DesignsCarousel's own full-bleed horizontal strip (rendered
            after Hero on the page) takes over, same as before. */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-4xl text-left lg:max-w-lg lg:shrink-0">
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

            <Reveal as="h1" delay={60} className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-[3.2rem]">
              Turning ideas into{" "}
              <span className="hl bg-butter" style={{ padding: 0, borderRadius: 0 }}>
                experiences
              </span>
              <br />
              that feel natural to use.
            </Reveal>

            <Reveal as="p" delay={120} className="mt-6 max-w-xl text-lg leading-normal text-muted">
              Bringing clarity to digital products through thoughtful UX, rapid
              prototyping, and AI-powered workflows. Combining human-centered
              design with modern technology and AI-powered product development
              to bring ideas to life, solve real user problems, and create
              experiences that are intuitive, engaging, and designed around
              real user needs.
            </Reveal>

            <Reveal as="p" delay={150} className="mt-3 max-w-xl text-lg leading-normal text-muted">
              Drop me a line at{" "}
              <CopyEmail
                email={site.email}
                className="border-b-2 border-line-strong pb-0.5 font-medium text-ink transition-colors hover:border-primary"
              />{" "}
              or{" "}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 border-b-2 border-line-strong pb-0.5 font-medium text-ink transition-colors hover:border-primary"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Vertical carousel — desktop only, sits to the right of the
              content and auto-scrolls top to bottom. */}
          {items.length > 0 && (
            <Reveal delay={80} className="hidden lg:block lg:shrink-0">
              <DraggableMarquee
                items={items}
                direction="vertical"
                speed={0.6}
                gap={20}
                showArrows={false}
                className="h-[520px] w-[240px]"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

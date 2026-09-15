import Image from "next/image";
import { getFolderPhotos } from "@/lib/photos";
import { SectionHead } from "./ui";
import Reveal from "./Reveal";
import PolaroidGallery from "./PolaroidGallery";

export default async function About({ compact = false }: { compact?: boolean }) {
  const communityPhotos = await getFolderPhotos("community-learning");
  const exploringPhotos = await getFolderPhotos("always-exploring");

  return (
    <section className={compact ? "pb-20 pt-4 sm:pb-28 sm:pt-6" : "pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36"}>
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SectionHead label="About" title="About me" />

        <div className="mt-7 flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Narrative intro */}
          <div className="max-w-2xl">
            <Reveal as="p" className="text-lg leading-relaxed text-muted">
              I&rsquo;m a UX Designer who enjoys turning ideas into digital
              experiences that feel natural to use. My journey into design
              began with a curiosity about how people interact with
              products, leading me to learn UX design and transition into a
              career I&rsquo;m passionate about.
            </Reveal>

            <Reveal as="p" delay={80} className="mt-5 text-lg leading-relaxed text-muted">
              Along the way, I&rsquo;ve had the opportunity to work on
              different digital products and grow through real-world
              challenges. My experience at 99x has given me the opportunity
              to collaborate with teams, explore ideas, and turn complex
              problems into thoughtful experiences.
            </Reveal>
          </div>

          {/* Photo — same white polaroid frame as the gallery below */}
          <Reveal delay={40} className="shrink-0 self-center lg:self-start">
            <div className="w-40 rotate-[10deg] bg-white p-2 pb-6 shadow-[0_12px_24px_-10px_rgba(26,25,23,0.35)] transition-transform duration-300 hover:rotate-0 hover:scale-105 hover:shadow-[0_16px_30px_-10px_rgba(26,25,23,0.45)] sm:w-48">
              <div className="relative aspect-[4/5] overflow-hidden bg-line">
                <Image
                  src="/Imgs/shivanthi.png"
                  alt="Shivanthi Fernando"
                  fill
                  sizes="192px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Subsection A — Part of community */}
        <Reveal delay={160} className="mt-16">
          <h3 className="font-display text-xl font-semibold text-ink">
            Part of community
          </h3>
          <p className="mt-1.5 max-w-2xl text-lg leading-relaxed text-muted">
            I enjoy being part of the design community, attending meetups,
            and connecting with fellow designers. I&rsquo;ve attended IxDF,
            Friends of Figma, and Pixel Parlor meetups in Sri Lanka, where I
            continue to learn, exchange ideas, and find inspiration.
          </p>
          <PolaroidGallery photos={communityPhotos} folder="community-learning" />
        </Reveal>

        {/* Subsection B — Always Exploring */}
        <Reveal delay={220} className="mt-16">
          <h3 className="font-display text-xl font-semibold text-ink">
            Always Exploring
          </h3>
          <p className="mt-1.5 max-w-2xl text-lg leading-relaxed text-muted">
            I&rsquo;m naturally curious and enjoy discovering new things,
            both within design and beyond it. I like exploring new ideas,
            learning from different perspectives, and finding inspiration in
            everyday experiences. There&rsquo;s always something new to
            learn, and I enjoy keeping that curiosity alive through the
            things I explore, the people I meet, and the experiences I come
            across.
          </p>
          <PolaroidGallery photos={exploringPhotos} folder="always-exploring" />
        </Reveal>
      </div>
    </section>
  );
}

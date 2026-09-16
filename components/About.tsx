import Image from "next/image";
import Link from "next/link";
import { getFolderPhotos } from "@/lib/photos";
import { SectionHead, ButtonUnderline } from "./ui";
import { ArrowRight } from "./icons";
import Reveal from "./Reveal";
import PolaroidGallery from "./PolaroidGallery";

export default async function About({ compact = false }: { compact?: boolean }) {
  // The compact (home-page preview) version skips the "Part of community" /
  // "Always Exploring" subsections, so there's no need to read those photo
  // folders for it.
  const communityPhotos = compact ? [] : await getFolderPhotos("community-learning");
  const exploringPhotos = compact ? [] : await getFolderPhotos("always-exploring");

  return (
    <section className={compact ? "pb-20 pt-4 sm:pb-28 sm:pt-6" : "pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36"}>
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        {!compact && (
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Back to Home
            </Link>
          </Reveal>
        )}

        <div className={compact ? undefined : "mt-6"}>
          <SectionHead label="About" title="About me" />
        </div>

        <div className="mt-10 flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Narrative intro */}
          <div className="max-w-2xl">
            <Reveal as="p" className="text-lg leading-relaxed text-muted">
              I&rsquo;m a UX Designer based in Sri Lanka who enjoys turning
              ideas into digital experiences that feel natural to use. While
              working as a developer, I became curious about how people
              interact with products. That curiosity led me to explore UX
              design, and I soon realized it was something I was truly
              passionate about.
            </Reveal>

            <Reveal as="p" delay={80} className="mt-5 text-lg leading-relaxed text-muted">
              Today, I work on global products at 99x and also support
              clients and teams outside my main role, helping them solve
              real problems and bring their ideas to life. From
              understanding user needs and exploring solutions to refining
              designs and contributing to the product&rsquo;s development, I
              enjoy working through the details that make a product useful,
              intuitive, and meaningful. I&rsquo;m always looking for
              opportunities to collaborate, solve real problems, and create
              products that people love to use.
            </Reveal>

            {compact && (
              <Reveal delay={140} className="mt-7">
                <ButtonUnderline href="/about">Learn more</ButtonUnderline>
              </Reveal>
            )}
          </div>

          {/* Photo — same white polaroid frame as the gallery below */}
          <Reveal delay={40} className="shrink-0 self-center">
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

        {!compact && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}

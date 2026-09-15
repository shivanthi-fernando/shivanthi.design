import Image from "next/image";
import { getFolderPhotos } from "@/lib/photos";
import Reveal from "./Reveal";

/**
 * Design Shots — the full grid version of the same public/designs photos
 * that appear as a teaser fan-carousel on the Home page. Add a photo to
 * that folder and it shows up here too, no code changes needed. Lives
 * inside the "Design Projects" tab on /projects, so no heading of its
 * own — the tab label already says what this is.
 */
export default async function DesignShots() {
  const photos = await getFolderPhotos("designs");

  if (photos.length === 0) {
    return (
      <div className="flex aspect-[3/1] items-center justify-center rounded-2xl border-2 border-dashed border-line-strong bg-card p-6 text-center text-muted">
        <p className="text-sm">
          Add design shots to <code className="font-mono">public/designs</code>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <Reveal key={photo.src} delay={(i % 3) * 80}>
          <div className="overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_44px_-28px_rgba(26,25,23,0.35)]">
            <div className="relative aspect-[1728/1202]">
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

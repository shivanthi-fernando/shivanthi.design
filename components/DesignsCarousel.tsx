import { getFolderPhotos } from "@/lib/photos";
import Reveal from "./Reveal";
import { DraggableMarquee } from "./block/draggable-marquee";

export default async function DesignsCarousel() {
  const photos = await getFolderPhotos("designs");
  const items = photos.map((photo, i) => ({
    id: i,
    src: photo.src,
    alt: "",
    width: photo.width,
    height: photo.height,
    imageClassName:
      "h-[180px] w-[258px] rounded-2xl border border-[#e2e2e2] object-cover sm:h-[220px] sm:w-[316px] md:h-[260px] md:w-[373px]",
  }));

  return (
    <section className="pb-20 pt-0 sm:pb-28">
      <Reveal>
        <DraggableMarquee items={items} speed={1} className="py-8" />
      </Reveal>
    </section>
  );
}

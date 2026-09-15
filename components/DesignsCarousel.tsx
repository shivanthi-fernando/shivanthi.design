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
      "h-[210px] w-[302px] rounded-2xl border border-[#e2e2e2] object-cover sm:h-[260px] sm:w-[374px] md:h-[310px] md:w-[446px] lg:h-[350px] lg:w-[503px]",
  }));

  return (
    <section className="pb-20 pt-0 sm:pb-28">
      <Reveal>
        <DraggableMarquee items={items} speed={1} gap={28} className="py-10" />
      </Reveal>
    </section>
  );
}

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
      "h-[190px] w-[273px] rounded-2xl border border-[#e2e2e2] object-cover sm:h-[235px] sm:w-[338px] md:h-[280px] md:w-[402px] lg:h-[315px] lg:w-[453px]",
  }));

  return (
    <section className="pb-20 pt-0 sm:pb-28">
      <Reveal>
        <DraggableMarquee items={items} speed={1} gap={44} className="py-10" showArrows={false} />
      </Reveal>
    </section>
  );
}

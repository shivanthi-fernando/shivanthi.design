import { getFolderPhotos } from "@/lib/photos";
import Reveal from "./Reveal";
import FanCarousel from "./FanCarousel";

export default async function DesignsCarousel() {
  const photos = await getFolderPhotos("designs");

  return (
    <section className="pb-20 pt-0 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <Reveal>
          <FanCarousel photos={photos} folder="designs" />
        </Reveal>
      </div>
    </section>
  );
}

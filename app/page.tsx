import Hero from "@/components/Hero";
import DesignsCarousel from "@/components/DesignsCarousel";
import { RopeCursor } from "@/components/block/rope-cursor";

// DesignsCarousel reads public/designs from disk on every render, so new
// design shots dropped in that folder show up without a rebuild.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // Wraps everything on the home page except the (globally-rendered)
    // Footer, so the dangling rope only ever shows over Hero/DesignsCarousel.
    <RopeCursor ropeColor="#8f7fc4" ropeWidth={2}>
      <Hero />
      <DesignsCarousel />
    </RopeCursor>
  );
}

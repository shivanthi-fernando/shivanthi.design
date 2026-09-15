import Hero from "@/components/Hero";
import DesignsCarousel from "@/components/DesignsCarousel";
import { StarTrailCursor } from "@/components/block/star-trail-cursor";

// DesignsCarousel reads public/designs from disk on every render, so new
// design shots dropped in that folder show up without a rebuild.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // Wraps everything on the home page except the (globally-rendered)
    // Footer, so the star trail only ever shows over Hero/DesignsCarousel.
    <StarTrailCursor>
      <Hero />
      <DesignsCarousel />
    </StarTrailCursor>
  );
}

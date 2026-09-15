import Hero from "@/components/Hero";
import DesignsCarousel from "@/components/DesignsCarousel";
import About from "@/components/About";
import { StarTrailCursor } from "@/components/block/star-trail-cursor";

// DesignsCarousel and About both read from public/ on every render, so new
// photos dropped into their folders show up without a rebuild.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // Wraps everything on the home page except the (globally-rendered)
    // Footer, so the star trail only ever shows over this content.
    <StarTrailCursor>
      <Hero />
      <DesignsCarousel />
      <About compact />
    </StarTrailCursor>
  );
}

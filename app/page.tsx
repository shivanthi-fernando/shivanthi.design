import Hero from "@/components/Hero";
import DesignsCarousel from "@/components/DesignsCarousel";
import About from "@/components/About";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
import { StarTrailCursor } from "@/components/block/star-trail-cursor";

// DesignsCarousel, About, and Work all read from public/ on every render, so
// new photos/projects dropped into their folders show up without a rebuild.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // Wraps everything on the home page except the (globally-rendered)
    // Footer, so the star trail only ever shows over this content.
    <StarTrailCursor>
      <Hero />
      <DesignsCarousel />
      <About compact />
      <Work compact />
      <Writing compact />
    </StarTrailCursor>
  );
}

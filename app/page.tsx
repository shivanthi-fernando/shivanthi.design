import Hero from "@/components/Hero";
import DesignsCarousel from "@/components/DesignsCarousel";
import About from "@/components/About";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
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

      {/* scroll-mt clears the fixed header so a jump from the nav (or from
          another page's "#about"/"#projects"/"#blogs" link) doesn't land the
          section title underneath the pill. */}
      <div id="about" className="scroll-mt-28">
        <About compact />
      </div>
      <div id="projects" className="scroll-mt-28">
        <Work />
      </div>
      <div id="blogs" className="scroll-mt-28">
        <Writing />
      </div>
    </StarTrailCursor>
  );
}

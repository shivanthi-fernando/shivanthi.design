import Hero from "@/components/Hero";
import DesignsCarousel from "@/components/DesignsCarousel";

// DesignsCarousel reads public/designs from disk on every render, so new
// design shots dropped in that folder show up without a rebuild.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <DesignsCarousel />
    </>
  );
}

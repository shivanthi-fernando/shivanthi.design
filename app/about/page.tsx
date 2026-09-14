import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
};

// About reads public/life-outside-work from disk on every render, so new
// photos dropped in that folder show up without a rebuild.
export const dynamic = "force-dynamic";

export default function AboutPage() {
  return <About />;
}

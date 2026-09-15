import type { Metadata } from "next";
import Work from "@/components/Work";

export const metadata: Metadata = {
  title: "Projects",
};

// Work reads public/designs from disk on every render, so new design
// shots dropped in that folder show up without a rebuild.
export const dynamic = "force-dynamic";

export default function ProjectsPage() {
  return <Work />;
}

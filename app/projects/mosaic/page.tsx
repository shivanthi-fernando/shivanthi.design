import type { Metadata } from "next";
import MosaicCaseStudy from "@/components/MosaicCaseStudy";

export const metadata: Metadata = {
  title: "Mosaic",
};

export default function MosaicPage() {
  return <MosaicCaseStudy />;
}

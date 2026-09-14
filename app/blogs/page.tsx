import type { Metadata } from "next";
import Writing from "@/components/Writing";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return <Writing />;
}

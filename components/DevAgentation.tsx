"use client";

import dynamic from "next/dynamic";

// Visual feedback toolbar for AI coding agents (https://agentation.com).
// Loaded lazily and only in development so it never ships in the
// production bundle.
const Agentation = dynamic(
  () => import("agentation").then((mod) => mod.Agentation),
  { ssr: false }
);

export default function DevAgentation() {
  if (process.env.NODE_ENV !== "development") return null;
  return <Agentation />;
}

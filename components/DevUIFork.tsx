"use client";

import dynamic from "next/dynamic";

// UI variation switcher for dev (https://github.com/sambernhardt/uifork).
// Loaded lazily and only outside production so it never ships in the
// production bundle.
const UIFork = dynamic(() => import("uifork").then((mod) => mod.UIFork), {
  ssr: false,
});

export default function DevUIFork() {
  if (process.env.NODE_ENV === "production") return null;
  return <UIFork />;
}

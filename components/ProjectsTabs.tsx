"use client";

import { useState, type ReactNode } from "react";

/**
 * Pill-shaped segmented control switching between two panels rendered
 * on the server (DesignShots, OtherExplorations) and passed in as
 * children — both stay mounted, only visibility toggles, so the
 * filesystem-backed DesignShots grid doesn't need to be a client
 * component itself.
 */
export default function ProjectsTabs({
  designProjects,
  otherExplorations,
}: {
  designProjects: ReactNode;
  otherExplorations: ReactNode;
}) {
  const [active, setActive] = useState<"design" | "other">("design");

  const tabClass = (tab: "design" | "other") =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active === tab ? "bg-card text-ink shadow-sm" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <div className="mt-10">
      {/* Hidden for now (not deleted) — only one tab has real content so far. */}
      <div className="!hidden inline-flex items-center gap-1 rounded-full bg-paper-2 p-1">
        <button type="button" className={tabClass("design")} onClick={() => setActive("design")}>
          Design Projects
        </button>
        <button type="button" className={tabClass("other")} onClick={() => setActive("other")}>
          Other Explorations
        </button>
      </div>

      <div className="mt-6">
        <div className={active === "design" ? "" : "hidden"}>{designProjects}</div>
        <div className={active === "other" ? "" : "hidden"}>{otherExplorations}</div>
      </div>
    </div>
  );
}

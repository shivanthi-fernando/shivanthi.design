"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

/**
 * Renders an email address as a click-to-copy control (rather than a
 * mailto: link) — clicking copies it to the clipboard. The address text
 * itself never changes; instead a small icon next to it swaps from a
 * copy glyph to a checkmark as feedback, then reverts after a beat.
 * Used inline within running text, so it's a <button> styled to match
 * the surrounding underlined-link look.
 */
export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — silently no-op;
      // the visible text is still the email itself, so it can be selected
      // and copied manually.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      {email}
      {copied ? (
        <CheckIcon className="h-4 w-4 shrink-0 text-primary" />
      ) : (
        <CopyIcon className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </button>
  );
}

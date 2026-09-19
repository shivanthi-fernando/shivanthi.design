"use client";

import { useState } from "react";

/**
 * Renders an email address as a click-to-copy control (rather than a
 * mailto: link) — clicking copies it to the clipboard and briefly swaps
 * the label to "Copied!" as feedback. Used inline within running text, so
 * it's a <button> styled to match the surrounding underlined-link look.
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
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? "Copied!" : email}
    </button>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

/* ------------------------------- Avatar -------------------------------- */
export function Avatar({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block overflow-hidden rounded-full border border-line-strong bg-lavender ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/Imgs/shivanthi.png"
        alt="Shivanthi Fernando"
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority
      />
    </span>
  );
}

/* ------------------------------ Section id ----------------------------- */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-label text-xs font-medium tracking-wide text-muted ${className}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------- Buttons ------------------------------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** "dark" (default) is the light-page style; "light" inverts for dark backgrounds. */
  tone?: "dark" | "light";
};

const btnBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5";

export function ButtonPrimary({
  href,
  children,
  className = "",
  external,
  tone = "dark",
}: BtnProps) {
  const tones =
    tone === "light"
      ? "bg-paper text-ink hover:bg-butter hover:shadow-[0_16px_30px_-16px_rgba(0,0,0,0.5)]"
      : "bg-primary text-paper hover:bg-primary-hover hover:shadow-[0_16px_30px_-16px_rgba(143,127,196,0.6)]";
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${btnBase} ${tones} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonGhost({
  href,
  children,
  className = "",
  external,
  tone = "dark",
}: BtnProps) {
  const tones =
    tone === "light"
      ? "border border-paper/25 text-paper hover:border-paper"
      : "border border-line-strong bg-card text-ink hover:border-primary hover:shadow-[0_16px_30px_-20px_rgba(143,127,196,0.5)]";
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${btnBase} ${tones} ${className}`}
    >
      {children}
    </Link>
  );
}

/**
 * A text link with a thick underline (border-bottom, not text-decoration,
 * so the line runs under the trailing arrow too, not just the text) and an
 * arrow that nudges forward on hover. Used for lower-emphasis CTAs like
 * "Learn more" that shouldn't compete visually with a solid button.
 */
export function ButtonUnderline({
  href,
  children,
  className = "",
  external,
}: Omit<BtnProps, "tone">) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex w-fit items-center gap-1.5 border-b-[3px] border-primary pb-1 text-lg font-medium text-ink transition-colors hover:border-primary-hover ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/* --------------------------- Section heading --------------------------- */
export function SectionHead({
  label,
  title,
  intro,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      aria-label={label}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <h2 className="text-2xl font-semibold leading-[1.1] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/* ------------------------------ Text link ------------------------------ */
export function InlineLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-1 font-medium text-ink underline decoration-line-strong decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

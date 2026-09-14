"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        {/* Single pill holding brand + nav links — visible by default,
            gains a stronger glass effect once the page scrolls. */}
        <div
          className={`flex items-center justify-between gap-4 rounded-full border px-3 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border-line bg-card/80 py-2 shadow-sm backdrop-blur-md"
              : "border-line/60 bg-card/50 py-3 backdrop-blur-sm"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center rounded-full py-1 pl-1 pr-2">
            <span className="font-script text-2xl font-semibold leading-none text-ink">
              {site.name}
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-3.5 ${
                    active
                      ? "bg-paper-2 text-ink"
                      : "text-ink-soft hover:bg-paper-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Book a call */}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}

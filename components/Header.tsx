"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

// The three in-page sections the nav can scroll-spy on, on the home page.
const SPY_IDS = ["projects", "blogs", "about"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // "" means no section is in view yet (i.e. still up near Hero), which is
  // what makes "Home" read as the active tab by default.
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll-spy: highlight whichever section is currently crossing the
  // middle of the viewport, so the nav tracks scroll position instead of
  // staying stuck on "Home" once you've scrolled past it. Only relevant on
  // the home page — the section ids only exist there.
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
    const sections = SPY_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const visibleTops = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleTops.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visibleTops.delete(entry.target.id);
          }
        }
        if (visibleTops.size === 0) {
          setActiveSection("");
          return;
        }
        const topmost = [...visibleTops.entries()].sort((a, b) => a[1] - b[1])[0];
        setActiveSection(topmost[0]);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isNavItemActive = (href: string) => {
    if (pathname !== "/") return false;
    return href === "/" ? activeSection === "" : activeSection === href.replace("/#", "");
  };

  const navLinkClass = (active: boolean) =>
    `rounded-full px-2.5 py-1.5 text-sm transition-colors sm:px-3.5 ${
      active
        ? "font-bold text-[#52525C]"
        : "font-medium text-[#9191A1] hover:text-[#7C6BAA]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        {/* Pill holding brand + nav links on larger screens — visible by
            default, gains a stronger glass effect once the page scrolls.
            On mobile it collapses to brand + a menu toggle only. */}
        <div
          className={`flex items-center justify-between gap-4 rounded-full border px-2.5 transition-all duration-300 sm:px-3.5 ${
            scrolled
              ? "border-line bg-card/65 py-1.5 shadow-sm backdrop-blur-xl"
              : "border-line/60 bg-card/35 py-2.5 backdrop-blur-lg"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center rounded-full py-1 pl-1 pr-2">
            <span className="font-script text-4xl font-medium leading-none text-[#52525D]">
              {site.shortName}
            </span>
          </Link>

          {/* Nav — desktop only */}
          <nav className="hidden items-center gap-1 sm:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isNavItemActive(item.href) ? "page" : undefined}
                className={navLinkClass(isNavItemActive(item.href))}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book a call — desktop only */}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-primary-hover sm:inline-block"
          >
            Book a call
          </a>

          {/* Menu toggle — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2 sm:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel — nav links stacked, plain (no pill shape),
            plus the Book a call button. Its own card below the header pill. */}
        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-line bg-card/95 p-2 shadow-lg backdrop-blur-md sm:hidden">
            <nav className="flex flex-col">
              {nav.map((item) => {
                const active = isNavItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? "font-bold text-[#52525C]"
                        : "font-medium text-[#9191A1] hover:text-[#7C6BAA]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-paper transition-all hover:bg-primary-hover"
            >
              Book a call
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

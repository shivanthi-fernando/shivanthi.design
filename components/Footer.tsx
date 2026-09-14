import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Avatar } from "./ui";
import { ArrowUpRight, socialIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper-2/50">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Avatar size={38} />
              <span className="font-display text-lg font-semibold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.role} helping SaaS &amp; AI startups design and ship products
              people love to use.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
            >
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* nav + socials */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="font-label text-xs font-medium tracking-wide text-muted">
                Menu
              </h3>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-label text-xs font-medium tracking-wide text-muted">
                Elsewhere
              </h3>
              <ul className="mt-4 space-y-2.5">
                {site.socials.map((s) => {
                  const Icon = socialIcon(s.label);
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        <Icon className="h-4 w-4" />
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="font-mono">Designed &amp; built with care · pastel edition</p>
        </div>
      </div>
    </footer>
  );
}

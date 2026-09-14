/**
 * Pure-CSS/SVG product mockups used as project previews so the site ships
 * with zero binary assets. Swap these for real screenshots when available.
 */

export function BrowserFrame({
  children,
  url = "app.example.com",
  className = "",
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line-strong bg-card shadow-[0_30px_60px_-30px_rgba(26,25,23,0.35)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-paper-2/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-peach" />
          <span className="h-3 w-3 rounded-full bg-butter" />
          <span className="h-3 w-3 rounded-full bg-mint" />
        </div>
        <div className="ml-2 flex-1">
          <div className="mx-auto w-full max-w-[220px] rounded-md bg-card px-3 py-1 text-center font-mono text-[10px] text-muted ring-1 ring-line">
            {url}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ---------------------------- SaaS dashboard --------------------------- */
export function DashboardMock() {
  return (
    <div className="flex h-full min-h-[280px] bg-card">
      <aside className="hidden w-40 flex-col gap-3 border-r border-line bg-paper-2/40 p-4 sm:flex">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-lg bg-sky" />
          <span className="h-2.5 w-16 rounded bg-line-strong" />
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-sky/50 px-2 py-1.5">
            <span className="h-3 w-3 rounded bg-sky-ink/40" />
            <span className="h-2 w-14 rounded bg-sky-ink/30" />
          </div>
          {[16, 12, 18, 10].map((w, i) => (
            <div key={i} className="flex items-center gap-2 px-2 py-1.5">
              <span className="h-3 w-3 rounded bg-line-strong" />
              <span className="h-2 rounded bg-line-strong" style={{ width: w * 4 }} />
            </div>
          ))}
        </div>
      </aside>
      <div className="flex-1 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-28 rounded bg-ink/80" />
          <div className="h-7 w-20 rounded-lg bg-ink" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["bg-peach", "bg-mint", "bg-lavender"].map((c, i) => (
            <div key={i} className="rounded-xl border border-line bg-card p-3">
              <span className={`mb-2 inline-block h-2 w-10 rounded ${c}`} />
              <div className="h-3.5 w-14 rounded bg-ink/80" />
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-line bg-card p-4">
          <div className="mb-3 h-2 w-20 rounded bg-line-strong" />
          <div className="flex h-24 items-end gap-2">
            {[40, 62, 48, 78, 56, 88, 70, 96, 64].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-sky"
                style={{ height: `${h}%`, opacity: 0.55 + i * 0.05 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


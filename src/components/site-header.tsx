import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLang, COPY, type Lang } from "@/lib/i18n";

const NAV_ITEMS = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/services", key: "services" as const },
  { to: "/company-info", key: "company" as const },
  { to: "/contact", key: "contact" as const },
];

function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  const options: Lang[] = ["ja", "id"];
  return (
    <div
      className={
        "inline-flex items-center rounded-full border border-border bg-background/80 p-0.5 " +
        (compact ? "text-xs" : "text-xs")
      }
      role="group"
      aria-label="Language"
    >
      {options.map((o) => (
        <button
          key={o}
          onClick={() => setLang(o)}
          className={
            "rounded-full px-3 py-1 font-medium tracking-widest transition-colors " +
            (lang === o
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground")
          }
          aria-pressed={lang === o}
        >
          {o === "ja" ? "JP" : "ID"}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-[0.2em] text-primary">
            DAIWA
          </span>
          <span className="text-sm tracking-[0.35em] text-muted-foreground group-hover:text-foreground">
            Japan
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "text-sm tracking-wide transition-colors " +
                (pathname === item.to
                  ? "text-foreground underline decoration-primary/60 decoration-2 underline-offset-8"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {COPY.nav[item.key][lang]}
            </Link>
          ))}
          <LangToggle />
        </nav>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={
                  "rounded-md px-3 py-2.5 text-sm tracking-wide " +
                  (pathname === item.to
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground")
                }
              >
                {COPY.nav[item.key][lang]}
              </Link>
            ))}
            <div className="mt-2 px-3 pb-1">
              <LangToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

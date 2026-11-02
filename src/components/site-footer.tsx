import { Link } from "@tanstack/react-router";
import { useLang, COPY } from "@/lib/i18n";

export function SiteFooter() {
  const { lang } = useLang();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-bold tracking-[0.2em]">DAIWA</p>
            <p className="mt-1 text-sm tracking-[0.35em] text-primary-foreground/70">Japan</p>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
              {COPY.footer.tagline[lang]}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm md:flex md:flex-col md:gap-3">
            <Link to="/" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              {COPY.nav.home[lang]}
            </Link>
            <Link to="/about" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              {COPY.nav.about[lang]}
            </Link>
            <Link to="/services" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              {COPY.nav.services[lang]}
            </Link>
            <Link to="/company-info" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              {COPY.nav.company[lang]}
            </Link>
            <Link to="/contact" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              {COPY.nav.contact[lang]}
            </Link>
          </nav>
        </div>
        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs tracking-widest text-primary-foreground/60">
          © 2022 DAIWA Japan. {COPY.footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
}

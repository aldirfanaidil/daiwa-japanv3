import { createFileRoute, Link } from "@tanstack/react-router";
import { COPY, useT } from "@/lib/i18n";
import { ASSETS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DAIWA Japan｜信頼と家族の絆を大切にする不動産企業" },
      {
        name: "description",
        content:
          "DAIWA Japanは、信頼・誠実・品質を大切にする不動産関連企業です。不動産の取得・売買・賃貸・管理を通じて、安心と満足をお届けします。",
      },
      {
        property: "og:title",
        content: "DAIWA Japan｜信頼と家族の絆を大切にする不動産企業",
      },
      {
        property: "og:description",
        content:
          "信頼・誠実・品質を大切にし、日本の不動産を通じて上質な住環境と新たな資産価値を創造します。",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useT();
  const c = COPY;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-secondary/20 to-background pb-0 pt-8 md:pt-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            {/* Text column */}
            <div className="order-2 lg:order-1 lg:col-span-6 pb-16 md:pb-24">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/80 px-4 py-1.5 text-xs font-medium tracking-[0.25em] text-primary">
                  <span>DAIWA Japan</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  <span>Tokyo</span>
                </div>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-wide text-foreground md:text-6xl">
                  {t(c.hero.title)}
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-loose text-muted-foreground md:text-base">
                  {t(c.hero.subtitle)}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm tracking-widest text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
                  >
                    {t(c.hero.ctaAbout)}
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3.5 text-sm tracking-widest text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    {t(c.hero.ctaServices)}
                  </Link>
                </div>
                <div className="mt-10 flex items-center gap-6 border-t border-border/60 pt-6 text-xs tracking-wider text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Firda Kirana Isnan</p>
                    <p className="text-[11px] text-muted-foreground/80">DAIWA Japan Leadership</p>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div>
                    <p className="font-semibold text-foreground">Kita-Aoyama, Tokyo</p>
                    <p className="text-[11px] text-muted-foreground/80">Head Office</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Photo column — transparent PNG floating */}
            <div className="order-1 lg:order-2 lg:col-span-6 relative flex items-end justify-center min-h-[420px] md:min-h-[560px] lg:min-h-[640px]">
              {/* Kanji watermark — faint, behind photo */}
              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-display font-bold leading-none text-primary/[0.045]"
                style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
              >
                信頼
              </span>

              {/* Decorative arch / half-circle behind photo */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full bg-primary/[0.07]"
                style={{ width: "82%", height: "88%" }}
              />

              {/* Subtle grid lines (architectural motif) */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
              </svg>

              {/* Transparent PNG — no card, no border, floats directly */}
              <Reveal delay={80}>
                <img
                  src={ASSETS.kiranaHero}
                  alt="Firda Kirana Isnan — DAIWA Japan"
                  className="relative z-10 w-full max-w-[340px] md:max-w-[440px] lg:max-w-none object-contain object-bottom drop-shadow-2xl"
                  style={{ maxHeight: "640px" }}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.intro.label)}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-relaxed tracking-wide md:text-4xl">
              {t(c.intro.heading)}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <p className="text-sm leading-loose text-muted-foreground md:text-base">
                {t(c.intro.body)}
              </p>
              <div className="flex items-center">
                <p className="text-sm leading-loose text-muted-foreground md:text-base">
                  {t(c.intro.body2)}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-secondary/40 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.pillars.label)}
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-wide md:text-4xl">
              {t(c.pillars.heading)}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.pillars.items.map((item, i) => (
              <Reveal key={item.title.ja} delay={i * 130}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-8">
                  <p className="font-display text-5xl text-primary/25">0{i + 1}</p>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-wide">
                    {t(item.title)}
                  </h3>
                  <p className="mt-4 text-sm leading-loose text-muted-foreground">
                    {t(item.desc)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-12 text-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-3 text-sm tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t(c.pillars.more)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing band */}
      <section className="bg-primary px-6 py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold leading-relaxed tracking-wide md:text-4xl">
              {t(c.closing.title)}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-loose text-primary-foreground/80">
              {t(c.closing.body)}
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-primary-foreground px-9 py-3.5 text-sm font-medium tracking-widest text-primary transition-opacity hover:opacity-85"
            >
              {t(c.closing.cta)}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

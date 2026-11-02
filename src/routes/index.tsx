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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useT();
  const c = COPY;

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <img
          src={ASSETS.hero}
          alt="東京都心の高層ビル"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-40">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
              DAIWA Japan
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-snug tracking-wide text-foreground md:text-6xl">
              {t(c.hero.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              {t(c.hero.subtitle)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm tracking-widest text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {t(c.hero.ctaAbout)}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-foreground/25 bg-background/60 px-7 py-3 text-sm tracking-widest text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                {t(c.hero.ctaServices)}
              </Link>
            </div>
          </Reveal>
        </div>
        <span className="absolute bottom-6 right-8 hidden text-[10px] tracking-[0.5em] text-muted-foreground md:block">
          {t(c.hero.scroll)}
        </span>
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

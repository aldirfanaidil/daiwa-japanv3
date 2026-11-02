import { createFileRoute } from "@tanstack/react-router";
import { COPY, useT } from "@/lib/i18n";
import { ASSETS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "私たちについて｜DAIWA Japan" },
      {
        name: "description",
        content:
          "企業理念・ビジョン・ミッション、そして家族経営の経営陣プロフィール。信頼を築き、価値を創造し、未来へつなぐDAIWA Japanの想いをご紹介します。",
      },
      { property: "og:title", content: "私たちについて｜DAIWA Japan" },
      {
        property: "og:description",
        content: "信頼を築き、価値を創造し、未来へつなぐ。DAIWA Japanの企業理念と経営陣のご紹介。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const t = useT();
  const c = COPY;

  const memberPhotos = [ASSETS.patoSan, ASSETS.rismah, ASSETS.firda];

  return (
    <div>
      {/* Philosophy */}
      <section className="px-6 pb-20 pt-24 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.about.label)}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-relaxed tracking-wide md:text-5xl">
              {t(c.about.heading)}
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-8">
                <h2 className="font-display text-xl font-semibold tracking-widest text-primary">
                  {t(c.about.visionTitle)}
                </h2>
                <p className="mt-5 text-sm leading-loose text-muted-foreground md:text-base">
                  {t(c.about.vision)}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-8">
                <h2 className="font-display text-xl font-semibold tracking-widest text-primary">
                  {t(c.about.missionTitle)}
                </h2>
                <p className="mt-5 text-sm leading-loose text-muted-foreground md:text-base">
                  {t(c.about.mission)}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-14">
              <h2 className="font-display text-xl font-semibold tracking-wide md:text-2xl">
                {t(c.about.valuesTitle)}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {c.about.values.map((v) => (
                  <span
                    key={v.ja}
                    className="rounded-full border border-primary/25 bg-secondary/50 px-6 py-2.5 text-sm tracking-wider text-foreground"
                  >
                    {t(v)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Family */}
      <section className="border-y border-border/60 bg-secondary/40 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={ASSETS.family}
              alt="DAIWA Japan経営陣の家族写真"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-xl"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.about.familyLabel)}
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-wide md:text-4xl">
              {t(c.about.familyHeading)}
            </h2>
            <p className="mt-6 text-sm leading-loose text-muted-foreground md:text-base">
              {t(c.about.familyBody)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Management */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.about.teamLabel)}
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-wide md:text-4xl">
              {t(c.about.teamHeading)}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-loose text-muted-foreground md:text-base">
              {t(c.about.teamSub)}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.members.map((m, i) => (
              <Reveal key={m.name} delay={i * 130}>
                <article className="h-full overflow-hidden rounded-2xl border border-border/70 bg-card">
                  <img
                    src={memberPhotos[i]}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="p-7">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-wide">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-xs font-medium tracking-widest text-primary">
                      {t(m.role)}
                    </p>
                    <p className="mt-4 text-sm leading-loose text-muted-foreground">
                      {t(m.bio)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

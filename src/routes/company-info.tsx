import { createFileRoute } from "@tanstack/react-router";
import { COPY, useT, useLang } from "@/lib/i18n";
import { ASSETS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/company-info")({
  head: () => ({
    meta: [
      { title: "会社情報｜DAIWA Japan" },
      {
        name: "description",
        content:
          "株式会社DAIWA Japanの会社概要。本社所在地、設立年月日、代表者、資本金、宅地建物取引業免許番号などの基本情報。",
      },
      { property: "og:title", content: "会社情報｜DAIWA Japan" },
      {
        property: "og:description",
        content: "株式会社DAIWA Japanの会社概要と基本情報をご紹介します。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompanyInfo,
});

function CompanyInfo() {
  const t = useT();
  const { lang } = useLang();
  const c = COPY;

  return (
    <div>
      <section className="px-6 pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.company.label)}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-wide md:text-5xl">
              {t(c.company.heading)}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              {t(c.company.lead)}
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-12 md:grid-cols-[2fr_1fr]">
            <Reveal delay={100}>
              <dl className="divide-y divide-border/80">
                {c.company.rows.map((row) => (
                  <div
                    key={row.labelJa}
                    className="grid gap-2 py-5 md:grid-cols-[1fr_1.4fr] md:gap-8"
                  >
                    <dt className="text-sm font-medium tracking-wide text-foreground">
                      {lang === "ja" ? row.labelJa : row.labelId}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {lang === "ja" ? row.valueJa : row.valueId}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
                {t(c.company.demoNote)}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <img
                src={ASSETS.boardroom}
                alt="DAIWA Japanの会議室"
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

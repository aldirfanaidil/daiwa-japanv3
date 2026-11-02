import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { COPY, useT } from "@/lib/i18n";
import { ASSETS } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Lightbox, type GalleryImage } from "@/components/lightbox";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "事業・物件紹介｜DAIWA Japan" },
      {
        name: "description",
        content:
          "不動産の取得・売買・賃貸・管理、コンサルティング。DAIWA Japanの事業内容と物件ギャラリーをご紹介します。",
      },
      { property: "og:title", content: "事業・物件紹介｜DAIWA Japan" },
      {
        property: "og:description",
        content: "不動産の取得・売買・賃貸・管理を通じて、お客様の多様なニーズに応えます。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const GALLERY_IMAGES: GalleryImage[] = [
  { src: ASSETS.heroTokyo, title: COPY.gallery[0].title, caption: COPY.gallery[0].caption },
  { src: ASSETS.residence, title: COPY.gallery[1].title, caption: COPY.gallery[1].caption },
  { src: ASSETS.interior, title: COPY.gallery[2].title, caption: COPY.gallery[2].caption },
  { src: ASSETS.office, title: COPY.gallery[3].title, caption: COPY.gallery[3].caption },
];

function Services() {
  const t = useT();
  const c = COPY;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Services */}
      <section className="px-6 pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.services.label)}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-relaxed tracking-wide md:text-5xl">
              {t(c.services.heading)}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              {t(c.services.lead)}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.services.items.map((s, i) => (
              <Reveal key={s.title.ja} delay={i * 120}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-8">
                  <p className="font-display text-4xl text-primary/25">0{i + 1}</p>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-wide">
                    {t(s.title)}
                  </h2>
                  <p className="mt-4 text-sm leading-loose text-muted-foreground">
                    {t(s.desc)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-border/60 bg-secondary/40 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                  {t(c.services.galleryLabel)}
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-wide md:text-4xl">
                  {t(c.services.galleryHeading)}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">{t(c.services.galleryLead)}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={img.title.ja} delay={i * 110}>
                <button
                  className="group block w-full text-left"
                  onClick={() => setOpenIndex(i)}
                  aria-label={img.title.ja}
                >
                  <div className="overflow-hidden rounded-2xl border border-border/70">
                    <img
                      src={img.src}
                      alt={img.title.ja}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold tracking-wide">
                      {t(img.title)}
                    </h3>
                    <p className="text-xs text-muted-foreground">{t(img.caption)}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={GALLERY_IMAGES}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}

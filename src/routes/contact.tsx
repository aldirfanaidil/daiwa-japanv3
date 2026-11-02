import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { COPY, useT } from "@/lib/i18n";
import { DEMO_EMAIL, DEMO_TEL } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "お問い合わせ｜DAIWA Japan" },
      {
        name: "description",
        content:
          "DAIWA Japanへのお問い合わせ。クライアントやパートナーの皆様からのご質問・ご相談を承ります。",
      },
      { property: "og:title", content: "お問い合わせ｜DAIWA Japan" },
      {
        property: "og:description",
        content: "クライアントやパートナーの皆様からのご質問・ご相談を承ります。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const t = useT();
  const c = COPY.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <div>
      <section className="px-6 pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              {t(c.label)}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-wide md:text-5xl">
              {t(c.heading)}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              {t(c.lead)}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
            {/* Contact info */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-8">
                <h2 className="font-display text-xl font-semibold tracking-wide">
                  {t(c.infoTitle)}
                </h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs tracking-widest text-muted-foreground">
                        {t(c.addressLabel)}
                      </p>
                      <p className="mt-1 leading-relaxed">{t(c.address)}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs tracking-widest text-muted-foreground">
                        {t(c.emailLabel)}
                      </p>
                      <a
                        href={`mailto:${DEMO_EMAIL}`}
                        className="mt-1 block leading-relaxed underline decoration-primary/40 underline-offset-4 hover:text-primary"
                      >
                        {DEMO_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs tracking-widest text-muted-foreground">
                        {t(c.telLabel)}
                      </p>
                      <a
                        href={`tel:${DEMO_TEL}`}
                        className="mt-1 block leading-relaxed underline decoration-primary/40 underline-offset-4 hover:text-primary"
                      >
                        {DEMO_TEL}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={160}>
              <div className="rounded-2xl border border-border/70 bg-card p-8">
                <h2 className="font-display text-xl font-semibold tracking-wide">
                  {t(c.formTitle)}
                </h2>
                {status === "success" ? (
                  <p className="mt-8 rounded-lg border border-primary/30 bg-secondary/50 px-5 py-4 text-sm leading-relaxed text-foreground">
                    {t(c.success)}
                  </p>
                ) : (
                  <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="text-xs tracking-widest text-muted-foreground">
                        {t(c.nameLabel)}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        placeholder={t(c.namePlaceholder)}
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs tracking-widest text-muted-foreground">
                        {t(c.emailLabel)}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        placeholder={t(c.emailPlaceholder)}
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-xs tracking-widest text-muted-foreground">
                        {t(c.messageLabel)}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={2000}
                        rows={6}
                        placeholder={t(c.messagePlaceholder)}
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    {status === "error" && (
                      <p className="rounded-lg border border-destructive/40 bg-destructive/5 px-5 py-3 text-sm text-destructive">
                        {t(c.error)}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-widest text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-50 md:w-auto"
                    >
                      {status === "sending" ? t(c.sending) : t(c.submit)}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border/60 bg-secondary/40 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-xl font-semibold tracking-wide md:text-2xl">
              {t(c.mapLabel)}
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/70">
              <iframe
                title="DAIWA Japan office map"
                src="https://www.google.com/maps?q=Tokyo%2C%20Minato%20City%2C%20Kita-Aoyama%2C%203%20Chome%E2%88%9215%E2%88%925&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

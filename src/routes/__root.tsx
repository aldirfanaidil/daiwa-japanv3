import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { LanguageProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationSchema, PersonSchema, WebsiteSchema } from "@/components/seo-schema";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DAIWA Japan｜信頼と誠実の不動産企業 — Tokyo" },
      {
        name: "description",
        content:
          "DAIWA Japan — Perusahaan properti Tokyo yang didirikan oleh Firda Kirana Isnan. Bergerak di bidang akuisisi, jual-beli, sewa, dan manajemen properti. 信頼・誠実・品質。",
      },
      {
        name: "keywords",
        content:
          "DAIWA Japan, Firda Kirana Isnan, Kirana Isnan, フィルダ キラナ イスナン, 大和ジャパン, properti Tokyo, real estate Japan, perusahaan Jepang, 不動産, Tokyo real estate, Kirana Isnan CEO, firdakiranaisnan, CEO DAIWA Japan, pendiri DAIWA Japan",
      },
      { name: "author", content: "Firda Kirana Isnan — DAIWA Japan" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "DAIWA Japan" },
      { property: "og:title", content: "DAIWA Japan｜信頼と誠実の不動産企業" },
      {
        property: "og:description",
        content:
          "Perusahaan properti Tokyo yang didirikan oleh Firda Kirana Isnan. Kepercayaan, kejujuran, dan kualitas di industri properti Jepang.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://firdakiranaisnan.com" },
      { property: "og:image", content: "https://firdakiranaisnan.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Firda Kirana Isnan — DAIWA Japan" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:locale:alternate", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DAIWA Japan｜Firda Kirana Isnan" },
      {
        name: "twitter:description",
        content: "Perusahaan properti Tokyo — kepercayaan & kualitas. 信頼・誠実・品質。",
      },
      { name: "twitter:image", content: "https://firdakiranaisnan.com/og-image.jpg" },
      { name: "twitter:image:alt", content: "Firda Kirana Isnan — DAIWA Japan CEO" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://firdakiranaisnan.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
        {/* JSON-LD Structured Data — agar Google kenali DAIWA Japan & Firda Kirana Isnan */}
        <WebsiteSchema />
        <OrganizationSchema />
        <PersonSchema />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

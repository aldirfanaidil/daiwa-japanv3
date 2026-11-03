/**
 * JSON-LD Structured Data untuk SEO Google
 * Membantu Google memahami siapa Firda Kirana Isnan dan apa itu DAIWA Japan
 */

/**
 * Organization schema — mewakili DAIWA Japan sebagai perusahaan
 * Tampil di Knowledge Panel Google saat orang cari "DAIWA Japan"
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://firdakiranaisnan.com/#organization",
    name: "DAIWA Japan",
    alternateName: ["大和ジャパン", "DAIWA Japan Real Estate"],
    url: "https://firdakiranaisnan.com",
    logo: {
      "@type": "ImageObject",
      url: "https://firdakiranaisnan.com/og-image.jpg",
      width: 1200,
      height: 630,
    },
    image: "https://firdakiranaisnan.com/og-image.jpg",
    description:
      "DAIWA Japan adalah perusahaan properti berbasis di Tokyo, Jepang. Bergerak di bidang akuisisi, jual-beli, sewa, dan manajemen properti dengan menjunjung nilai kepercayaan, kejujuran, dan kualitas.",
    foundingDate: "2022",
    address: {
      "@type": "PostalAddress",
      streetAddress: "北青山3丁目15-5 1F DAIWA Apparel Showroom",
      addressLocality: "Minato City",
      addressRegion: "Tokyo",
      postalCode: "107-0061",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-811-1111-1271",
      contactType: "customer service",
      email: "Kirana07kirana@gmail.com",
      availableLanguage: ["Japanese", "Indonesian"],
    },
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Firda Kirana Isnan",
      jobTitle: "CEO & Founder",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Person schema — mewakili Firda Kirana Isnan sebagai CEO
 * Tampil di Knowledge Panel Google saat orang cari "Firda Kirana Isnan"
 */
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://firdakiranaisnan.com/#firda-kirana-isnan",
    name: "Firda Kirana Isnan",
    alternateName: ["フィルダ・キラナ・イスナン", "Kirana Isnan"],
    jobTitle: "CEO & Founder",
    worksFor: {
      "@type": "Organization",
      "@id": "https://firdakiranaisnan.com/#organization",
      name: "DAIWA Japan",
    },
    url: "https://firdakiranaisnan.com/about",
    image: "https://firdakiranaisnan.com/og-image.jpg",
    description:
      "Firda Kirana Isnan adalah CEO dan Pendiri DAIWA Japan, perusahaan properti berbasis di Tokyo, Jepang. Berkomitmen membangun kepercayaan dan memberikan nilai terbaik di industri properti Jepang.",
    nationality: {
      "@type": "Country",
      name: "Indonesia",
    },
    knowsLanguage: ["id", "ja"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "JP",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite schema — mengaktifkan Sitelinks Search Box di Google
 */
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://firdakiranaisnan.com/#website",
    url: "https://firdakiranaisnan.com",
    name: "DAIWA Japan",
    description: "Perusahaan properti Jepang — 信頼と誠実",
    publisher: {
      "@id": "https://firdakiranaisnan.com/#organization",
    },
    inLanguage: ["ja", "id"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


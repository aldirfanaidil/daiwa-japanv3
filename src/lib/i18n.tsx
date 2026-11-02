import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ja" | "id";
export type LText = { ja: string; id: string };

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("daiwa-lang");
      if (saved === "id" || saved === "ja") setLangState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("daiwa-lang", l);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLang();
  return (t: LText) => t[lang];
}

/* ------------------------------------------------------------------ */
/* Site copy — Japanese first, Indonesian second                        */
/* ------------------------------------------------------------------ */

export const COPY = {
  nav: {
    home: { ja: "ホーム", id: "Beranda" } as LText,
    about: { ja: "私たちについて", id: "Tentang Kami" } as LText,
    services: { ja: "事業・物件紹介", id: "Layanan & Properti" } as LText,
    company: { ja: "会社情報", id: "Informasi Perusahaan" } as LText,
    contact: { ja: "お問い合わせ", id: "Kontak" } as LText,
  },
  brand: { ja: "DAIWA Japan", id: "DAIWA Japan" } as LText,
  brandTagline: {
    ja: "信頼と家族の絆を大切に",
    id: "Kepercayaan dan kehangatan keluarga",
  } as LText,

  hero: {
    title: { ja: "信頼、価値、そして未来。", id: "Kepercayaan, Nilai, dan Masa Depan." } as LText,
    subtitle: {
      ja: "DAIWA Japanは、家族の絆と信頼を大切にし、日本の不動産を通じて上質な住環境と新たな資産価値を創造します。",
      id: "DAIWA Japan mengutamakan kehangatan keluarga dan kepercayaan, menciptakan lingkungan hunian berkualitas serta nilai aset baru melalui properti di Jepang.",
    } as LText,
    ctaAbout: { ja: "私たちについて", id: "Tentang Kami" } as LText,
    ctaServices: { ja: "物件を見る", id: "Lihat Properti" } as LText,
    scroll: { ja: "SCROLL", id: "GULIR" } as LText,
  },

  intro: {
    label: { ja: "はじめに", id: "Sekilas" } as LText,
    heading: {
      ja: "不動産を通じて、安心と満足をお届けする。",
      id: "Membawa ketenangan dan kepuasan melalui properti.",
    } as LText,
    body: {
      ja: "DAIWA Japanは、日本国内における不動産事業を中心に、上質な住環境と新たな資産価値の創造を目指す不動産関連企業です。私たちは、信頼・誠実・品質を大切にし、お客様一人ひとりのニーズに寄り添いながら、長期的な視点に立った不動産サービスの提供を目指しています。",
      id: "DAIWA Japan adalah perusahaan terkait properti yang berfokus pada bisnis real estat di Jepang, dengan tujuan menciptakan lingkungan hunian berkualitas dan nilai aset baru. Kami mengutamakan kepercayaan, kejujuran, dan kualitas, serta melayani kebutuhan setiap pelanggan dengan pendekatan berorientasi jangka panjang.",
    } as LText,
    body2: {
      ja: "不動産の取得・売買・賃貸・管理などを通じて、お客様の多様なニーズに応え、安心と満足をお届けすることを大切にしています。",
      id: "Melalui perolehan, jual beli, sewa, dan manajemen properti, kami berupaya memenuhi berbagai kebutuhan pelanggan dan menghadirkan ketenangan serta kepuasan.",
    } as LText,
  },

  pillars: {
    label: { ja: "私たちの三つの柱", id: "Tiga Pilar Kami" } as LText,
    heading: {
      ja: "事業の土台となる三つの想い",
      id: "Tiga landasan yang menopang bisnis kami",
    } as LText,
    items: [
      {
        title: { ja: "不動産", id: "Properti" } as LText,
        desc: {
          ja: "不動産の取得・売買・賃貸・管理を通じて、お客様の多様なニーズに応えます。",
          id: "Melayani berbagai kebutuhan melalui perolehan, jual beli, sewa, dan manajemen properti.",
        } as LText,
      },
      {
        title: { ja: "家族の絆", id: "Keluarga" } as LText,
        desc: {
          ja: "家族の信頼と絆を大切にしながら、長期的な視野で事業の発展を目指します。",
          id: "Menjaga kepercayaan dan kehangatan keluarga sambil mengembangkan bisnis dengan pandangan jangka panjang.",
        } as LText,
      },
      {
        title: { ja: "信頼", id: "Kepercayaan" } as LText,
        desc: {
          ja: "誠実な姿勢と確かな信頼関係を経営の基本とし、安心と満足をお届けします。",
          id: "Menjadikan sikap jujur dan hubungan penuh kepercayaan sebagai dasar untuk menghadirkan ketenangan dan kepuasan.",
        } as LText,
      },
    ],
    more: { ja: "私たちについて詳しく", id: "Selengkapnya Tentang Kami" } as LText,
  },

  closing: {
    title: {
      ja: "信頼から始まる価値づくり。家族とともに、未来へ。",
      id: "Nilai yang dimulai dari kepercayaan. Bersama keluarga, menuju masa depan.",
    } as LText,
    body: {
      ja: "これからも日本の不動産市場と向き合いながら、新たな可能性を探求し、持続的な成長を目指してまいります。",
      id: "Kami terus membaca pasar properti Jepang, mengeksplorasi kemungkinan baru, dan menargetkan pertumbuhan yang berkelanjutan.",
    } as LText,
    cta: { ja: "お問い合わせ", id: "Hubungi Kami" } as LText,
  },

  about: {
    label: { ja: "企業理念", id: "Filosofi Perusahaan" } as LText,
    heading: {
      ja: "信頼を築き、価値を創造し、未来へつなぐ。",
      id: "Membangun kepercayaan, menciptakan nilai, dan menghubungkan masa kini dengan masa depan.",
    } as LText,
    visionTitle: { ja: "ビジョン", id: "Visi" } as LText,
    vision: {
      ja: "日本の不動産分野において、信頼と品質を重視し、持続可能な成長を目指す企業となること。",
      id: "Menjadi perusahaan yang mengutamakan kepercayaan dan kualitas serta mengupayakan pertumbuhan berkelanjutan di sektor properti Jepang.",
    } as LText,
    missionTitle: { ja: "ミッション", id: "Misi" } as LText,
    mission: {
      ja: "お客様のニーズに真摯に向き合い、誠実なサービスと長期的な視点で不動産の価値向上に取り組むこと。",
      id: "Memahami kebutuhan pelanggan dengan sungguh-sungguh serta meningkatkan nilai properti melalui layanan yang jujur dan berorientasi jangka panjang.",
    } as LText,
    valuesTitle: { ja: "大切にする価値観", id: "Nilai Utama" } as LText,
    values: [
      { ja: "信頼", id: "Kepercayaan" } as LText,
      { ja: "誠実", id: "Integritas" } as LText,
      { ja: "責任", id: "Tanggung jawab" } as LText,
      { ja: "品質", id: "Kualitas" } as LText,
      { ja: "持続可能な成長", id: "Pertumbuhan berkelanjutan" } as LText,
    ] as LText[],
    familyLabel: { ja: "家族の絆と経営理念", id: "Kekeluargaan dan Filosofi Manajemen" } as LText,
    familyHeading: {
      ja: "家族の絆が、経営の基盤。",
      id: "Kekeluargaan adalah fondasi manajemen.",
    } as LText,
    familyBody: {
      ja: "DAIWA Japanは、家族の信頼と絆を大切にしながら、長期的な視野で事業の発展を目指しています。私たち家族は、互いに支え合いながら、企業としての責任を果たし、お客様や社会から信頼される存在であり続けることを大切にしています。",
      id: "DAIWA Japan menjaga kepercayaan dan kehangatan keluarga sambil mengembangkan bisnis dengan pandangan jangka panjang. Kami saling mendukung, menjalankan tanggung jawab sebagai perusahaan, dan berupaya tetap menjadi pihak yang dipercaya oleh pelanggan serta masyarakat.",
    } as LText,
    teamLabel: { ja: "経営陣", id: "Profil Manajemen" } as LText,
    teamHeading: {
      ja: "それぞれの役割を生かす、家族経営。",
      id: "Manajemen keluarga yang menghidupkan setiap peran.",
    } as LText,
    teamSub: {
      ja: "Firda Kirana Isnan、PATO SAN、そしてRismah。それぞれの役割と強みを生かしながら、企業としての責任を大切にし、将来を見据えた事業の発展に取り組んでいます。",
      id: "Firda Kirana Isnan, PATO SAN, dan Rismah — masing-masing menghidupkan peran dan kekuatannya demi tanggung jawab perusahaan serta perkembangan bisnis yang berorientasi masa depan.",
    } as LText,
    ownerLabel: { ja: "オーナーの歩みと理念", id: "Latar Belakang Pemilik" } as LText,
    ownerHeading: {
      ja: "信頼の礎を受け継ぎ、未来の可能性を切り拓く。",
      id: "Mewarisi Fondasi Kepercayaan, Membuka Peluang Masa Depan.",
    } as LText,
    ownerBody: {
      ja: "DAIWA Japanは、日本とインドネシアをつなぐ架け橋として、家族の信頼と誠実さを根底に歩みを進めてきました。Firda Kirana Isnanは、創業者の理念と確かな事業基盤を受け継ぎながら、次世代ならではの新しい視点とグローバルな感性を取り入れ、お客様一人ひとりに寄り添う持続可能な価値創造を推進しています。",
      id: "DAIWA Japan didirikan dengan fondasi integritas, kejujuran, dan kehangatan keluarga. Sebagai generasi penerus bisnis, Firda Kirana Isnan memadukan pemahaman budaya Jepang dengan wawasan masa depan, memastikan setiap mitra dan klien merasakan layanan properti yang aman, transparan, dan berorientasi jangka panjang.",
    } as LText,
  },

  members: [
    {
      name: "Firda Kirana Isnan — フィルダ・キラナ・イスナン",
      role: { ja: "次世代の経営メンバー", id: "Anggota Generasi Penerus Bisnis" } as LText,
      bio: {
        ja: "次世代の視点と新しい発想を大切にし、企業の将来に向けた成長と新たな可能性の創出を目指しています。",
        id: "Mengutamakan perspektif generasi baru dan gagasan inovatif untuk mendukung pertumbuhan masa depan serta membuka peluang baru bagi perusahaan.",
      } as LText,
    },
    {
      name: "PATO SAN — パト・サン",
      role: { ja: "創業者・経営責任者", id: "Pendiri dan Penanggung Jawab Perusahaan" } as LText,
      bio: {
        ja: "日本における不動産事業の発展を目指し、信頼と誠実さを重視した経営を大切にしています。",
        id: "Berkomitmen mengembangkan bisnis properti di Jepang dengan mengutamakan kepercayaan dan integritas dalam menjalankan perusahaan.",
      } as LText,
    },
    {
      name: "Rismah — リスマ",
      role: { ja: "共同経営者・経営パートナー", id: "Mitra Pengelola Perusahaan" } as LText,
      bio: {
        ja: "家族の絆と企業理念を大切にしながら、会社の安定した発展と長期的な成長を支えています。",
        id: "Menjunjung nilai kekeluargaan dan visi perusahaan serta mendukung kestabilan dan pertumbuhan jangka panjang bisnis.",
      } as LText,
    },
  ],

  services: {
    label: { ja: "事業内容", id: "Bidang Usaha" } as LText,
    heading: {
      ja: "お客様の多様なニーズに応える不動産サービス",
      id: "Layanan properti untuk berbagai kebutuhan Anda",
    } as LText,
    lead: {
      ja: "変化する不動産市場を的確に捉え、持続可能な成長と新たなビジネス機会の創出に取り組んでいます。",
      id: "Kami membaca pasar properti yang terus berubah dan berupaya menciptakan pertumbuhan berkelanjutan serta peluang bisnis baru.",
    } as LText,
    items: [
      {
        title: { ja: "不動産の取得・売買", id: "Perolehan & Jual Beli Properti" } as LText,
        desc: {
          ja: "土地や建物の取得から売買まで、市場を的確に捉えたご提案を行います。",
          id: "Dari perolehan hingga jual beli tanah dan bangunan, dengan pemahaman pasar yang akurat.",
        } as LText,
      },
      {
        title: { ja: "賃貸", id: "Sewa & Penyewaan" } as LText,
        desc: {
          ja: "住まいやオフィスの賃貸ニーズに寄り添い、最適なご提案をお届けします。",
          id: "Memenuhi kebutuhan sewa hunian maupun kantor dengan solusi yang paling sesuai.",
        } as LText,
      },
      {
        title: { ja: "不動産管理", id: "Manajemen Properti" } as LText,
        desc: {
          ja: "入居者管理から建物メンテナンスまで、資産価値を守り高めるお手伝いをします。",
          id: "Dari manajemen penyewa hingga pemeliharaan bangunan, menjaga dan meningkatkan nilai aset Anda.",
        } as LText,
      },
      {
        title: { ja: "コンサルティング", id: "Konsultasi Properti" } as LText,
        desc: {
          ja: "長期的な視点に立った不動産戦略を、誠実にご提案します。",
          id: "Menyusun strategi properti berorientasi jangka panjang secara jujur dan terpercaya.",
        } as LText,
      },
    ],
    galleryLabel: { ja: "物件ギャラリー", id: "Galeri Properti" } as LText,
    galleryHeading: { ja: "ポートフォリオ", id: "Portofolio" } as LText,
    galleryLead: {
      ja: "写真をクリックすると拡大表示されます。",
      id: "Klik foto untuk memperbesar tampilan.",
    } as LText,
  },

  gallery: [
    {
      src: "tokyo",
      title: { ja: "都心タワー", id: "Menara Pusat Kota" } as LText,
      caption: { ja: "東京都心の高層レジデンス", id: "Residensi tinggi di pusat kota Tokyo" } as LText,
    },
    {
      src: "residence",
      title: { ja: "レジデンス", id: "Residensi" } as LText,
      caption: { ja: "緑と調和するモダンな住まい", id: "Hunian modern yang selaras dengan alam" } as LText,
    },
    {
      src: "interior",
      title: { ja: "インテリア", id: "Interior" } as LText,
      caption: { ja: "光あふれる上質な居住空間", id: "Ruang hunian berkualitas penuh cahaya" } as LText,
    },
    {
      src: "office",
      title: { ja: "オフィス", id: "Perkantoran" } as LText,
      caption: { ja: "機能と美しさを兼ね備えたオフィス", id: "Kantor yang fungsional sekaligus elegan" } as LText,
    },
  ],

  company: {
    label: { ja: "会社情報", id: "Informasi Perusahaan" } as LText,
    heading: { ja: "会社概要", id: "Profil Perusahaan" } as LText,
    lead: {
      ja: "株式会社DAIWA Japanの基本情報です。",
      id: "Informasi dasar mengenai DAIWA Japan.",
    } as LText,
    rows: [
      {
        labelJa: "会社名",
        labelId: "Nama resmi perusahaan",
        valueJa: "株式会社DAIWA Japan",
        valueId: "DAIWA Japan K.K.",
      },
      {
        labelJa: "本社所在地",
        labelId: "Alamat kantor di Jepang",
        valueJa: "〒107-0061 東京都港区北青山3丁目15-5 1F DAIWA Apparel Showroom",
        valueId: "Jepang, 〒107-0061 Tokyo, Minato City, Kita-Aoyama, 3 Chome−15−5 1F DAIWA Apparel Showroom",
      },
      {
        labelJa: "設立年月日",
        labelId: "Tahun pendirian",
        valueJa: "2020年4月1日",
        valueId: "1 April 2020",
      },
      {
        labelJa: "代表者名",
        labelId: "Nama direktur",
        valueJa: "代表取締役 PATO SAN（パト・サン）",
        valueId: "PATO SAN — Direktur Utama",
      },
      {
        labelJa: "資本金",
        labelId: "Modal perusahaan",
        valueJa: "1,000万円",
        valueId: "¥10.000.000",
      },
      {
        labelJa: "宅地建物取引業免許番号",
        labelId: "Nomor izin usaha properti",
        valueJa: "東京都知事(2)第123456号",
        valueId: "Izin Gubernur Tokyo (2) No. 123456",
      },
      {
        labelJa: "お問い合わせ",
        labelId: "Kontak perusahaan",
        valueJa: "Kirana07kirana@gmail.com / 0811-1111-1271",
        valueId: "Kirana07kirana@gmail.com / 0811-1111-1271",
      },
      {
        labelJa: "主要事業",
        labelId: "Layanan utama",
        valueJa: "不動産の取得・売買・賃貸・管理",
        valueId: "Perolehan, jual beli, sewa, dan manajemen properti",
      },
    ],
  },

  contact: {
    label: { ja: "お問い合わせ", id: "Kontak" } as LText,
    heading: {
      ja: "お気軽にお問い合わせください",
      id: "Silakan hubungi kami kapan saja",
    } as LText,
    lead: {
      ja: "クライアントやパートナーの皆様からのご質問・ご相談を承ります。下のフォームからメッセージをお送りください。",
      id: "Kami menerima pertanyaan dan konsultasi dari klien maupun mitra bisnis. Kirimkan pesan Anda melalui formulir di bawah ini.",
    } as LText,
    infoTitle: { ja: "オフィス", id: "Kantor" } as LText,
    emailLabel: { ja: "メール", id: "Email" } as LText,
    telLabel: { ja: "電話", id: "Telepon" } as LText,
    addressLabel: { ja: "所在地", id: "Alamat" } as LText,
    address: {
      ja: "〒107-0061 東京都港区北青山3丁目15-5 1F DAIWA Apparel Showroom",
      id: "Jepang, 〒107-0061 Tokyo, Minato City, Kita-Aoyama, 3 Chome−15−5 1F DAIWA Apparel Showroom",
    } as LText,
    formTitle: { ja: "メッセージを送る", id: "Kirim Pesan" } as LText,
    nameLabel: { ja: "お名前", id: "Nama" } as LText,
    emailPlaceholder: { ja: "メールアドレス", id: "Alamat email" } as LText,
    namePlaceholder: { ja: "お名前", id: "Nama lengkap" } as LText,
    messageLabel: { ja: "メッセージ", id: "Pesan" } as LText,
    messagePlaceholder: { ja: "ご質問・ご相談の内容", id: "Isi pertanyaan atau konsultasi Anda" } as LText,
    submit: { ja: "送信する", id: "Kirim Pesan" } as LText,
    sending: { ja: "送信中…", id: "Mengirim…" } as LText,
    success: {
      ja: "お問い合わせありがとうございます。メッセージを受け付けました。",
      id: "Terima kasih! Pesan Anda telah kami terima.",
    } as LText,
    error: {
      ja: "送信に失敗しました。しばらく経ってからもう一度お試しください。",
      id: "Gagal mengirim. Silakan coba lagi beberapa saat lagi.",
    } as LText,
    mapLabel: { ja: "アクセス", id: "Lokasi" } as LText,
  },

  footer: {
    tagline: {
      ja: "信頼から始まる価値づくり。家族とともに、未来へ。",
      id: "Nilai yang dimulai dari kepercayaan. Bersama keluarga, menuju masa depan.",
    } as LText,
    rights: { ja: "All Rights Reserved.", id: "Hak cipta dilindungi." } as LText,
  } as Record<"tagline" | "rights", LText>,
} as const;

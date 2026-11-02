# DAIWA Japan — Company Profile Website

> **株式会社DAIWA Japan**  
> *信頼を築き、価値を創造し、未来へつなぐ。*  
> *Membangun kepercayaan, menciptakan nilai, dan menghubungkan masa kini dengan masa depan.*

---

## 📖 Tentang Proyek

Website *company profile* resmi untuk **DAIWA Japan** (Tokyo, Jepang), perusahaan real estat yang memadukan profesionalisme properti dengan kehangatan nilai keluarga. Website ini dirancang dengan gaya *Modern Minimalist* yang rapi, tipografi Jepang yang elegan, ruang kosong (*white space*) luas, dan sistem dwibahasa penuh (Jepang & Indonesia).

---

## ✨ Fitur Utama

- **🌐 Sistem Dwibahasa (Bilingual JP / ID):**
  - Tombol pengalih bahasa instan di *header* (JP / ID).
  - Seluruh teks halaman dan navigasi tersedia lengkap dalam bahasa Jepang dan Indonesia.
  - Preferensi bahasa otomatis tersimpan di peramban (`localStorage`).

- **📑 5 Halaman Lengkap Sesuai Rancang Bangun:**
  1. **Beranda (`/`):** *Hero banner* gedung pencakar langit Tokyo, pengenalan DAIWA Japan, 3 pilar utama (Properti, Keluarga, Kepercayaan), dan ajakan bertindak (CTA).
  2. **Tentang Kami (`/about`):** Filosofi perusahaan (Visi, Misi, 5 Nilai Utama), kisah kekeluargaan, serta profil manajemen (PATO SAN, Rismah, dan Firda Kirana Isnan sebagai generasi penerus).
  3. **Layanan & Portofolio (`/services`):** Penjelasan 4 layanan (Perolehan & Jual Beli, Sewa, Manajemen Properti, Konsultasi) serta galeri portofolio properti.
  4. **Informasi Perusahaan (`/company-info`):** Tabel legalitas resmi (Tahun pendirian, modal, izin usaha properti/Takken, alamat kantor pusat di Tokyo).
  5. **Kontak (`/contact`):** Informasi alamat kantor di Jepang, nomor telepon, email resmi, peta interaktif Google Maps, dan formulir komunikasi.

- **🖼️ Galeri Interaktif (Lightbox):**
  - Setiap foto portofolio gedung dapat diklik untuk dibuka dalam tampilan *lightbox* layar penuh dengan latar belakang gelap, navigasi *next/prev*, dan keterangan detail.

- **🎭 Animasi Halus (Scroll Reveal):**
  - Efek transisi *fade-in* yang elegan saat pengguna menggulir halaman, memberikan kesan premium korporat Jepang.

- **⚡ Ringan & Mandiri (Database-Free):**
  - Tidak memerlukan database berat atau langganan server bulanan.
  - Formulir kontak memproses input langsung dan dapat dihubungkan ke notifikasi email otomatis (seperti Web3Forms atau Resend) hanya dengan memasukkan API key di `.env`.

---

## 🛠️ Teknologi yang Digunakan

- **Framework:** [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **UI Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Ikon:** [Lucide React](https://lucide.dev)
- **Tipografi:** Google Fonts (*Shippori Mincho* & *Zen Kaku Gothic New*)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org)
- **Build Engine:** [Vite 8](https://vitejs.dev) & [Nitro](https://nitro.build)

---

## 📁 Struktur Direktori

```
daiwa-japan/
├── public/                 # Asset statis publik (favicon, robots.txt)
├── src/
│   ├── assets/             # Foto lokal resmi (manajemen, keluarga, arsitektur)
│   ├── components/         # Komponen UI (site-header, site-footer, lightbox, reveal)
│   ├── hooks/              # Custom React hooks (use-mobile, dll)
│   ├── lib/                # Konfigurasi i18n, salinan teks JP/ID, utilities
│   ├── routes/             # Rute halaman (index, about, services, company-info, contact)
│   │   └── api/public/     # Endpoint API pengiriman formulir kontak
│   ├── router.tsx          # Konfigurasi TanStack Router
│   ├── server.ts           # SSR Server entry
│   ├── start.ts            # TanStack Start instance configuration
│   └── styles.css          # Desain global & aturan Tailwind CSS
├── .env                    # Variabel lingkungan
├── package.json            # Daftar dependensi & scripts
└── tsconfig.json           # Konfigurasi TypeScript
```

---

## 🚀 Memulai (Local Development)

### Prasyarat
- [Node.js](https://nodejs.org/) versi 20+ atau yang lebih baru.
- npm / pnpm / bun.

### Langkah Instalasi

1. **Pasang Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Server Pengembangan (Dev):**
   ```bash
   npm run dev
   ```
   Buka peramban di [http://localhost:3000](http://localhost:3000).

3. **Uji Coba Kode (Unit Test):**
   ```bash
   npm run test
   ```

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```

5. **Pratinjau Hasil Build:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Konfigurasi Notifikasi Form Kontak (Opsional)

Jika ingin pesan dari formulir kontak langsung masuk ke email Anda secara gratis tanpa server tambahan, buka file `.env` dan tambahkan Access Key dari [Web3Forms](https://web3forms.com/) atau API Key dari [Resend](https://resend.com/):

```env
# Pilih salah satu (gratis):
WEB3FORMS_ACCESS_KEY="masukkan-access-key-disini"
# atau
RESEND_API_KEY="masukkan-api-key-resend-disini"
CONTACT_NOTIFICATION_EMAIL="info@daiwajapan.jp"
```

---

## 📄 Hak Cipta & Kepemilikan

© 2026 **DAIWA Japan** (株式会社DAIWA Japan). Hak cipta dilindungi undang-undang (*All Rights Reserved*).

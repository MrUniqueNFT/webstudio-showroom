export interface ShowroomItem {
  title: { tr: string; en: string };
  tag: { tr: string; en: string };
  desc: { tr: string; en: string };
  url: string;
  gradient: string;
  accent: string;
}

export const showroomItems: ShowroomItem[] = [
  {
    title: { tr: "Lüks Marka Landing Page", en: "Luxury Brand Landing Page" },
    tag: { tr: "Lüks / Moda", en: "Luxury / Fashion" },
    desc: {
      tr: "Sınırlı koleksiyon lansmanı için sinematik scroll deneyimi ve %38 dönüşüm artışı.",
      en: "Cinematic scroll experience for a limited collection launch — 38% conversion lift.",
    },
    url: "atelier-noir.com",
    gradient: "from-stone-700/50 via-stone-900/60 to-night",
    accent: "#d6c9a8",
  },
  {
    title: { tr: "SaaS Dashboard", en: "SaaS Dashboard" },
    tag: { tr: "SaaS / AI", en: "SaaS / AI" },
    desc: {
      tr: "Yapay zeka analitik platformu için karanlık temalı, veri yoğun arayüz tasarımı.",
      en: "Dark-themed, data-dense interface design for an AI analytics platform.",
    },
    url: "lumenanalytics.io",
    gradient: "from-indigo-800/50 via-slate-900/60 to-night",
    accent: "#818cf8",
  },
  {
    title: { tr: "E-Ticaret Vitrin Sayfası", en: "E-Commerce Storefront" },
    tag: { tr: "E-Ticaret", en: "E-Commerce" },
    desc: {
      tr: "Premium ev tekstili markası için ürün odaklı vitrin ve hızlı satın alma akışı.",
      en: "Product-first storefront and streamlined checkout flow for a premium home textile brand.",
    },
    url: "maisonform.co",
    gradient: "from-emerald-900/50 via-slate-900/60 to-night",
    accent: "#6ee7b7",
  },
  {
    title: { tr: "Kişisel Portföy", en: "Personal Portfolio" },
    tag: { tr: "Portföy", en: "Portfolio" },
    desc: {
      tr: "Yönetmen portföyü için tam ekran video grid ve minimal tipografik tasarım.",
      en: "Full-screen video grid and minimal typographic design for a film director's portfolio.",
    },
    url: "demir.works",
    gradient: "from-zinc-700/50 via-zinc-900/60 to-night",
    accent: "#e4e4e7",
  },
  {
    title: { tr: "3D Ürün Tanıtım Sayfası", en: "3D Product Showcase" },
    tag: { tr: "3D / WebGL", en: "3D / WebGL" },
    desc: {
      tr: "Akıllı saat lansmanı için scroll kontrollü 360° ürün deneyimi ve WebGL sahneler.",
      en: "Scroll-controlled 360° product experience with WebGL scenes for a smartwatch launch.",
    },
    url: "pulsewear.tech",
    gradient: "from-violet-800/50 via-slate-900/60 to-night",
    accent: "#c4b5fd",
  },
  {
    title: { tr: "Kurumsal Ajans Sitesi", en: "Corporate Agency Site" },
    tag: { tr: "Kurumsal", en: "Corporate" },
    desc: {
      tr: "Mimarlık ofisi için proje arşivi, ekip sayfaları ve çok dilli kurumsal yapı.",
      en: "Project archive, team pages and multilingual corporate structure for an architecture firm.",
    },
    url: "vektamimarlik.com",
    gradient: "from-sky-900/50 via-slate-900/60 to-night",
    accent: "#7dd3fc",
  },
];

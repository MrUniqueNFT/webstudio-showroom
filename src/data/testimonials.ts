export interface Testimonial {
  quote: { tr: string; en: string };
  name: string;
  role: { tr: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      tr: "Yeni sitemizden sonra müşterilerimiz bizi çok daha profesyonel algılamaya başladı.",
      en: "After our new website, customers started seeing us as far more professional.",
    },
    name: "Elif K.",
    role: { tr: "Güzellik Merkezi Sahibi", en: "Beauty Studio Owner" },
  },
  {
    quote: {
      tr: "Sade, şık ve hızlı bir siteye ihtiyacımız vardı. Beklediğimizden daha iyi oldu.",
      en: "We needed a simple, elegant and fast website. It turned out better than we expected.",
    },
    name: "Mert A.",
    role: { tr: "Restoran İşletmecisi", en: "Restaurant Owner" },
  },
  {
    quote: {
      tr: "İlk defa web sitemiz markamızı gerçekten temsil ediyor.",
      en: "For the first time, our website truly represents our brand.",
    },
    name: "Zeynep T.",
    role: { tr: "Danışmanlık Firması Kurucusu", en: "Consulting Firm Founder" },
  },
];

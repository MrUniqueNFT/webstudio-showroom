export interface Testimonial {
  quote: { tr: string; en: string };
  name: string;
  role: { tr: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      tr: "Sitemiz sadece yenilenmedi, markamızın algısı değişti. Müşterilerimiz artık bizi çok daha kurumsal görüyor.",
      en: "Our website wasn't just redesigned — our brand perception changed. Clients now see us as far more professional.",
    },
    name: "Elif K.",
    role: { tr: "Pazarlama Direktörü, Mimarlık Ofisi", en: "Marketing Director, Architecture Firm" },
  },
  {
    quote: {
      tr: "Animasyonlu landing page sayesinde reklam dönüşümlerimiz arttı. Yatırımın karşılığını ilk ayda aldık.",
      en: "Thanks to the animated landing page, our ad conversions increased. The investment paid off in the first month.",
    },
    name: "Mert A.",
    role: { tr: "Kurucu, E-Ticaret Markası", en: "Founder, E-Commerce Brand" },
  },
  {
    quote: {
      tr: "Kısa sürede premium bir dijital vitrine sahip olduk. 3D showroom deneyimi müşterilerimizi gerçekten etkiliyor.",
      en: "We got a premium digital storefront in no time. The 3D showroom experience truly impresses our clients.",
    },
    name: "Zeynep T.",
    role: { tr: "Genel Müdür, Mobilya Markası", en: "General Manager, Furniture Brand" },
  },
];

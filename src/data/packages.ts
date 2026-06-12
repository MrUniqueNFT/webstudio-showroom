export interface Package {
  name: { tr: string; en: string };
  tagline: { tr: string; en: string };
  features: { tr: string[]; en: string[] };
  popular: boolean;
}

export const packages: Package[] = [
  {
    name: { tr: "Başlangıç", en: "Starter" },
    tagline: {
      tr: "Yeni başlayan işletmeler için temiz ve güven veren web sitesi.",
      en: "A clean, trustworthy website for businesses just getting started.",
    },
    features: {
      tr: ["Sade ve net sayfa yapısı", "Mobil uyum", "Görsel tasarım", "İletişim alanları", "Yayına hazırlık"],
      en: ["Simple, clear page structure", "Mobile-friendly", "Visual design", "Contact sections", "Launch-ready delivery"],
    },
    popular: false,
  },
  {
    name: { tr: "Profesyonel", en: "Professional" },
    tagline: {
      tr: "Markasını daha güçlü göstermek isteyen işletmeler için özel tasarım.",
      en: "Custom design for businesses that want a stronger brand presence.",
    },
    features: {
      tr: [
        "Markanıza özel sayfa yapısı",
        "Mobil uyum",
        "Size özel görsel tasarım",
        "İletişim ve teklif alanları",
        "Yayına hazırlık",
        "Yumuşak geçişli hareketli bölümler",
      ],
      en: [
        "Page structure tailored to your brand",
        "Mobile-friendly",
        "Bespoke visual design",
        "Contact & quote sections",
        "Launch-ready delivery",
        "Smooth animated sections",
      ],
    },
    popular: true,
  },
  {
    name: { tr: "Prestij", en: "Prestige" },
    tagline: {
      tr: "Etkileyici görsel akış, özel hareketli bölümler ve yüksek marka algısı isteyenler için.",
      en: "For those who want striking visual flow, custom motion and elevated brand perception.",
    },
    features: {
      tr: [
        "Sinematik görsel akış",
        "Mobil uyum",
        "Tamamen size özel görsel dil",
        "İletişim ve teklif alanları",
        "Yayına hazırlık",
        "İsteğe bağlı özel hareketli bölümler",
      ],
      en: [
        "Cinematic visual flow",
        "Mobile-friendly",
        "Fully bespoke visual language",
        "Contact & quote sections",
        "Launch-ready delivery",
        "Optional custom motion sections",
      ],
    },
    popular: false,
  },
];

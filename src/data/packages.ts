export interface Package {
  name: { tr: string; en: string };
  features: { tr: string[]; en: string[] };
  popular: boolean;
}

export const packages: Package[] = [
  {
    name: { tr: "Başlangıç Paketi", en: "Starter Package" },
    features: {
      tr: ["Tek sayfa landing page", "Responsive tasarım", "Temel animasyonlar", "İletişim formu alanı"],
      en: ["Single-page landing page", "Responsive design", "Basic animations", "Contact form section"],
    },
    popular: false,
  },
  {
    name: { tr: "Premium Paket", en: "Premium Package" },
    features: {
      tr: [
        "Çok bölümlü özel site",
        "Gelişmiş UI/UX",
        "GSAP scroll animasyonları",
        "3D görsel öğeler",
        "SEO uyumlu yapı",
      ],
      en: [
        "Multi-section custom site",
        "Advanced UI/UX",
        "GSAP scroll animations",
        "3D visual elements",
        "SEO-friendly structure",
      ],
    },
    popular: true,
  },
  {
    name: { tr: "Showroom 3D Paket", en: "Showroom 3D Package" },
    features: {
      tr: [
        "Three.js / WebGL sahneler",
        "3D ürün veya marka deneyimi",
        "Scroll controlled camera",
        "Shader efektleri",
        "Premium showroom hissi",
      ],
      en: [
        "Three.js / WebGL scenes",
        "3D product or brand experience",
        "Scroll controlled camera",
        "Shader effects",
        "Premium showroom feel",
      ],
    },
    popular: false,
  },
];

export interface Service {
  icon: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
}

// İkonlar inline SVG path'leri (24x24, stroke) — emoji yerine premium çizgi ikonlar
export const services: Service[] = [
  {
    icon: "M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 9h2m2 0h2M9 13h2m2 0h2",
    title: { tr: "Kurumsal Web Sitesi", en: "Corporate Website" },
    desc: {
      tr: "Markanızın prestijini yansıtan, ilk bakışta güven veren kurumsal dijital kimlik.",
      en: "A corporate digital identity that reflects your brand's prestige and builds trust at first glance.",
    },
  },
  {
    icon: "M13 3 4 14h6l-1 7 9-11h-6l1-7z",
    title: { tr: "Landing Page", en: "Landing Page" },
    desc: {
      tr: "Reklam dönüşümlerinizi artıran, tek hedefe odaklanmış satış sayfaları.",
      en: "Single-goal sales pages engineered to lift your ad conversion rates.",
    },
  },
  {
    icon: "M3 5h2l2 12h11l2-8H7M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    title: { tr: "E-Ticaret Arayüzü", en: "E-Commerce Interface" },
    desc: {
      tr: "Ürünlerinizi premium bir vitrinde sergileyen, satışa hazır mağaza deneyimleri.",
      en: "Sales-ready store experiences that present your products in a premium storefront.",
    },
  },
  {
    icon: "M12 2 2 7v10l10 5 10-5V7l-10-5zM2 7l10 5m0 0 10-5m-10 5v10",
    title: { tr: "3D / WebGL Deneyimi", en: "3D / WebGL Experience" },
    desc: {
      tr: "Tarayıcıda çalışan etkileyici 3D sahneler ve interaktif marka deneyimleri.",
      en: "Striking in-browser 3D scenes and interactive brand experiences.",
    },
  },
  {
    icon: "M4 4h16v12H4zM4 20h16M12 16v4M2 9h4m12 0h4",
    title: { tr: "UI/UX Tasarım", en: "UI/UX Design" },
    desc: {
      tr: "Kullanıcıyı yormayan, dönüşüme yönlendiren arayüz ve deneyim tasarımı.",
      en: "Interface and experience design that guides users to conversion effortlessly.",
    },
  },
  {
    icon: "M5 3v4M3 5h4m8-1 1.5 3L21 8.5 17.5 10 16 13l-1.5-3L11 8.5 14.5 7 16 4zM8 13l1 2.5L11.5 17 9 18l-1 2.5L7 18l-2.5-1L7 15.5 8 13z",
    title: { tr: "Animasyonlu Tanıtım Sayfası", en: "Animated Promo Page" },
    desc: {
      tr: "Scroll ile hikâye anlatan, sinematik ürün ve marka tanıtım deneyimleri.",
      en: "Cinematic product and brand promo experiences that tell a story as you scroll.",
    },
  },
];

export interface ProcessStep {
  icon: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
}

export const processSteps: ProcessStep[] = [
  {
    icon: "📋",
    title: { tr: "Brief & Strateji", en: "Brief & Strategy" },
    desc: {
      tr: "Hedef kitlenizi, markanızı ve rakiplerinizi analiz edip yol haritası çıkarıyoruz.",
      en: "We analyze your audience, brand and competitors to map out a roadmap.",
    },
  },
  {
    icon: "🎨",
    title: { tr: "UI/UX Tasarım", en: "UI/UX Design" },
    desc: {
      tr: "Wireframe'den piksel mükemmel arayüze, markanıza özel tasarım dili kuruyoruz.",
      en: "From wireframe to pixel-perfect UI, we craft a design language unique to your brand.",
    },
  },
  {
    icon: "⚡",
    title: { tr: "3D/2D Animasyon & Frontend", en: "3D/2D Animation & Frontend" },
    desc: {
      tr: "Modern teknolojilerle hızlı, animasyonlu ve etkileyici arayüzü kodluyoruz.",
      en: "We build a fast, animated and impressive interface with modern technologies.",
    },
  },
  {
    icon: "🚀",
    title: { tr: "Yayınlama & Teslim", en: "Launch & Delivery" },
    desc: {
      tr: "Test edilmiş, optimize edilmiş siteniz yayına alınır ve size teslim edilir.",
      en: "Your tested and optimized site goes live and is handed over to you.",
    },
  },
];

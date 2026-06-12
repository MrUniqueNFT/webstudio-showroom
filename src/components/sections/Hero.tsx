import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { MagneticButton } from "../ui/MagneticButton";
import { HeroMockup } from "../ui/HeroMockup";

const HeroScene = lazy(() =>
  import("../three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* 3D sahne — arka plan */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center" aria-label="Yükleniyor">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent" />
          </div>
        }
      >
        <HeroScene />
      </Suspense>

      {/* Kenar karartmaları — metin okunabilirliği */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pt-28 pb-20 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-24">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow"
          >
            {t.hero.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-display mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl xl:text-7xl"
          >
            {t.hero.title.split(",")[0]},{" "}
            <span className="text-gradient">{t.hero.title.split(",").slice(1).join(",")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg lg:pr-8"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton onClick={() => scrollTo("contact")}>
              {t.hero.ctaPrimary}
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo("showroom")}>
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Premium mockup kompozisyonu — sadece lg+ */}
        <div className="hidden lg:block lg:pl-6">
          <HeroMockup />
        </div>
      </div>

      {/* Scroll göstergesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="h-9 w-5 rounded-full border border-zinc-700 p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-2 w-1 rounded-full bg-indigo-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

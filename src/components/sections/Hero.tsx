import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { MagneticButton } from "../ui/MagneticButton";
import { useReducedMotion } from "../../hooks/useMediaQuery";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";
import heroImage from "../../assets/hero.jpg";

// Derinlik sahnesi ayrı chunk olarak sadece destekleyen cihazlarda yüklenir
const HeroDepthScene = lazy(() => import("../three/HeroDepthScene"));

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const depthEnabled = useWebGLSupport();

  // Parallax: scroll ilerledikçe görsel yavaşça yukarı kayar ve kararır
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.55]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={sectionRef} className="relative flex min-h-screen items-end overflow-hidden">
      {/* Sinematik arka plan görseli — yavaş zoom + parallax */}
      <motion.div className="absolute inset-0" style={reducedMotion ? undefined : { y: imageY }}>
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className={`h-[120%] w-full object-cover ${reducedMotion ? "" : "hero-zoom"}`}
          fetchPriority="high"
        />
        {depthEnabled && (
          <Suspense fallback={null}>
            <HeroDepthScene />
          </Suspense>
        )}
      </motion.div>

      {/* Karartma katmanları — okunabilirlik + sinematik his */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-transparent to-ink/30" />
      <motion.div className="absolute inset-0 bg-ink" style={reducedMotion ? undefined : { opacity: overlayOpacity }} />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-40 md:px-8 md:pb-36"
        style={reducedMotion ? undefined : { y: textY, opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="eyebrow"
          >
            {t.hero.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="font-display mt-6 text-4xl font-medium leading-[1.12] tracking-tight text-white md:text-6xl xl:text-[4.4rem]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base leading-relaxed text-stone-300 md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={() => scrollTo("contact")}>
              {t.hero.ctaPrimary}
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo("examples")}>
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll göstergesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex"
        aria-hidden
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400">{t.hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-stone-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { examples, type ExampleItem } from "../../data/examples";
import { useReducedMotion } from "../../hooks/useMediaQuery";

function ExampleRow({ item, index }: { item: ExampleItem; index: number }) {
  const { t, lang } = useLanguage();
  const rowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const reversed = index % 2 === 1;

  // Her satırda görsel hafifçe farklı hızda akar — editoryal parallax
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={rowRef}
      className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${reversed ? "" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-2xl lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
      >
        <motion.img
          src={item.image}
          alt={item.sector[lang]}
          loading="lazy"
          className="h-[320px] w-full scale-110 object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.14] md:h-[460px]"
          style={reducedMotion ? undefined : { y: imageY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-ink/55 px-4 py-1.5 text-xs font-medium tracking-wide text-stone-200 backdrop-blur-sm">
          {item.sector[lang]}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
        className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}
      >
        <p className="eyebrow">{item.sector[lang]}</p>
        <h3 className="font-display mt-4 text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
          {item.title[lang]}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-stone-400">{item.desc[lang]}</p>
        <button
          onClick={scrollToContact}
          className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          {t.examples.cta}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export function Examples() {
  const { t, lang } = useLanguage();

  return (
    <section id="examples" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
      <SectionTitle
        eyebrow={lang === "tr" ? "Örnek Çalışmalar" : "Our Work"}
        title={t.examples.title}
        subtitle={t.examples.subtitle}
      />

      <div className="space-y-24 md:space-y-36">
        {examples.map((item, i) => (
          <ExampleRow key={item.title.en} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

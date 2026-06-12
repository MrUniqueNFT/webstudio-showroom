import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { processSteps } from "../../data/process";

export function Process() {
  const { t, lang } = useLanguage();

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionTitle
        eyebrow={lang === "tr" ? "Süreç" : "Process"}
        title={t.process.title}
        subtitle={t.process.subtitle}
      />

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
        {/* Bağlantı çizgisi */}
        <div
          aria-hidden
          className="absolute left-1/2 top-7 hidden h-px w-[calc(100%-10rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent md:block"
        />

        {processSteps.map((step, i) => (
          <motion.div
            key={step.title.en}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            className="relative text-center md:text-left"
          >
            <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/25 bg-night-light font-display text-base font-bold text-indigo-300 md:mx-0">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display mt-6 text-lg font-semibold text-white">{step.title[lang]}</h3>
            <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-zinc-400 md:mx-0">
              {step.desc[lang]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

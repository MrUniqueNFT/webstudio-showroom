import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";

export function Process() {
  const { t, lang } = useLanguage();

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
      <SectionTitle
        eyebrow={lang === "tr" ? "Nasıl Çalışıyoruz" : "How We Work"}
        title={t.process.title}
        subtitle={t.process.subtitle}
      />

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
        <div
          aria-hidden
          className="absolute left-1/2 top-7 hidden h-px w-[calc(100%-10rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block"
        />

        {t.process.steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
            className="relative text-center md:text-left"
          >
            <div className="font-display relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-ink-soft text-base font-medium text-gold md:mx-0">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-stone-400 md:mx-0">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

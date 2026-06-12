import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { services } from "../../data/services";

export function Services() {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionTitle
        eyebrow={lang === "tr" ? "Hizmetler" : "Services"}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title.en}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
          >
            <GlassCard className="h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={s.icon} />
                </svg>
              </div>
              <h3 className="font-display mt-6 text-lg font-semibold text-white">{s.title[lang]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.desc[lang]}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

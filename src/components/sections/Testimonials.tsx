import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { testimonials } from "../../data/testimonials";

export function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionTitle
        eyebrow={lang === "tr" ? "Referanslar" : "Testimonials"}
        title={t.testimonials.title}
        subtitle={t.testimonials.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((tm, i) => (
          <motion.div
            key={tm.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <GlassCard className="flex h-full flex-col p-7">
              <span className="text-gradient font-display text-4xl leading-none" aria-hidden>
                "
              </span>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                {tm.quote[lang]}
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 font-display text-sm font-bold text-indigo-300">
                  {tm.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{tm.name}</p>
                  <p className="text-xs text-gray-500">{tm.role[lang]}</p>
                </div>
              </footer>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";

export function Offerings() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-ink-soft py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow={lang === "tr" ? "Neler Hazırlıyoruz" : "What We Create"}
          title={t.offerings.title}
          subtitle={t.offerings.subtitle}
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {t.offerings.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              className="group bg-ink-soft p-8 transition-colors duration-500 hover:bg-[#141824] md:p-10"
            >
              <span className="font-display text-sm text-gold/70" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

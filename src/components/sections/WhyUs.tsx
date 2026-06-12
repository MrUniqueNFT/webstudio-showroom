import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";

export function WhyUs() {
  const { t, lang } = useLanguage();

  return (
    <section id="why" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      {/* Çok hafif arka plan vurgusu */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/[0.06] blur-[140px]"
      />

      <SectionTitle
        eyebrow={lang === "tr" ? "Neden Biz" : "Why Us"}
        title={t.why.title}
        subtitle={t.why.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.why.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
          >
            <GlassCard className="h-full p-7">
              <span className="font-display text-sm font-bold text-indigo-400" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

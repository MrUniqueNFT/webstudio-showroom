import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { testimonials } from "../../data/testimonials";

export function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="testimonials" className="relative bg-ink-soft py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow={lang === "tr" ? "Referanslar" : "Testimonials"}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <motion.figure
              key={tm.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
              className="card-premium flex h-full flex-col rounded-2xl p-8"
            >
              <span className="font-display text-5xl leading-none text-gold/60" aria-hidden>
                "
              </span>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-stone-200">
                {tm.quote[lang]}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <div className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-sm font-medium text-gold">
                  {tm.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{tm.name}</p>
                  <p className="text-xs text-stone-500">{tm.role[lang]}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

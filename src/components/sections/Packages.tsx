import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { MagneticButton } from "../ui/MagneticButton";
import { packages } from "../../data/packages";

export function Packages() {
  const { t, lang } = useLanguage();

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="packages" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionTitle
        eyebrow={lang === "tr" ? "Paketler" : "Packages"}
        title={t.packages.title}
        subtitle={t.packages.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name.en}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
            className={`card-premium relative flex flex-col rounded-3xl p-9 ${
              pkg.popular ? "border-indigo-400/30 md:-translate-y-3" : ""
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                {t.packages.popular}
              </span>
            )}

            <h3 className="font-display text-xl font-bold text-white">{pkg.name[lang]}</h3>
            <p className="mt-3 font-display text-2xl font-bold text-indigo-300">{t.packages.price}</p>

            <ul className="mt-7 flex-1 space-y-3.5">
              {pkg.features[lang].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className={`mt-9 w-full rounded-full py-3.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                pkg.popular
                  ? "bg-indigo-500 text-white hover:bg-indigo-400"
                  : "glass text-white hover:bg-white/[0.07]"
              }`}
            >
              {t.packages.select}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-16 text-center"
      >
        <MagneticButton onClick={scrollToContact}>
          {t.packages.cta}
          <span aria-hidden>→</span>
        </MagneticButton>
      </motion.div>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { Toast } from "../ui/Toast";

const inputClass =
  "glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 outline-none transition-shadow focus:shadow-[0_0_0_2px_rgba(201,169,110,0.45)]";

export function Contact() {
  const { t, lang } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend placeholder — backend entegrasyonu sipariş aşamasında eklenir.
    e.currentTarget.reset();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-40">
      <SectionTitle
        eyebrow={lang === "tr" ? "Teklif Alın" : "Get a Quote"}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="glass-strong space-y-5 rounded-2xl p-7 md:p-10"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-stone-400">
              {t.contact.name} *
            </label>
            <input id="name" name="name" required autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="business" className="mb-1.5 block text-xs font-semibold text-stone-400">
              {t.contact.business} *
            </label>
            <input id="business" name="business" required autoComplete="organization" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-stone-400">
              {t.contact.phone}
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-stone-400">
              {t.contact.email} *
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="sector" className="mb-1.5 block text-xs font-semibold text-stone-400">
              {t.contact.sector} *
            </label>
            <select id="sector" name="sector" required className={`${inputClass} appearance-none bg-ink-soft`}>
              {t.contact.sectors.map((opt) => (
                <option key={opt} value={opt} className="bg-ink-soft">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-stone-400">
              {t.contact.budget}
            </label>
            <select id="budget" name="budget" className={`${inputClass} appearance-none bg-ink-soft`}>
              {t.contact.budgets.map((opt) => (
                <option key={opt} value={opt} className="bg-ink-soft">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="siteWish" className="mb-1.5 block text-xs font-semibold text-stone-400">
            {t.contact.siteWish} *
          </label>
          <textarea
            id="siteWish"
            name="siteWish"
            required
            rows={4}
            placeholder={t.contact.siteWishPlaceholder}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label htmlFor="reference" className="mb-1.5 block text-xs font-semibold text-stone-400">
            {t.contact.reference}
          </label>
          <input id="reference" name="reference" type="url" placeholder="https://" className={inputClass} />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-cream py-4 text-sm font-semibold text-ink transition-colors duration-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {t.contact.submit}
        </button>
      </motion.form>

      <Toast show={showToast} message={t.contact.toast} />
    </section>
  );
}

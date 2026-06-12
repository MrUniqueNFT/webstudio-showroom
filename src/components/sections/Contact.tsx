import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { Toast } from "../ui/Toast";

const inputClass =
  "glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-shadow focus:shadow-[0_0_0_2px_rgba(129,140,248,0.45)]";

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
    <section id="contact" className="relative mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32">
      {/* Arka plan parlaması */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/[0.07] blur-[140px]"
      />

      <SectionTitle
        eyebrow={lang === "tr" ? "İletişim" : "Contact"}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className="glass-strong space-y-5 rounded-3xl p-7 md:p-10"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-gray-400">
              {t.contact.name} *
            </label>
            <input id="name" name="name" required autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-gray-400">
              {t.contact.email} *
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-gray-400">
              {t.contact.phone}
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
          </div>
          <div>
            <label htmlFor="siteType" className="mb-1.5 block text-xs font-semibold text-gray-400">
              {t.contact.siteType} *
            </label>
            <select id="siteType" name="siteType" required className={`${inputClass} appearance-none bg-night-light`}>
              {t.contact.siteTypes.map((opt) => (
                <option key={opt} value={opt} className="bg-night-light">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-gray-400">
            {t.contact.budget}
          </label>
          <select id="budget" name="budget" className={`${inputClass} appearance-none bg-night-light`}>
            {t.contact.budgets.map((opt) => (
              <option key={opt} value={opt} className="bg-night-light">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-gray-400">
            {t.contact.message} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder={t.contact.messagePlaceholder}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-indigo-500 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] transition-colors duration-300 hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {t.contact.submit}
        </button>
      </motion.form>

      <Toast show={showToast} message={t.contact.toast} />
    </section>
  );
}

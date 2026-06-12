import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const links = [
  { id: "services", key: "services" },
  { id: "showroom", key: "showroom" },
  { id: "process", key: "process" },
  { id: "packages", key: "packages" },
  { id: "faq", key: "faq" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Ana menü">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          Nova<span className="text-gradient">Studio</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.id);
              }}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="glass flex overflow-hidden rounded-full text-xs font-semibold" role="group" aria-label="Dil seçimi">
            <button
              onClick={() => setLang("tr")}
              aria-pressed={lang === "tr"}
              className={`px-3 py-1.5 transition-colors ${lang === "tr" ? "bg-indigo-400/20 text-indigo-300" : "text-gray-400 hover:text-white"}`}
            >
              TR
            </button>
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-indigo-400/20 text-indigo-300" : "text-gray-400 hover:text-white"}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-indigo-500 hover:bg-indigo-400 px-5 py-2 text-sm font-semibold text-white transition-colors md:block"
          >
            {t.nav.cta}
          </button>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.id);
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm text-gray-200 hover:bg-white/5"
                >
                  {t.nav[l.key]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


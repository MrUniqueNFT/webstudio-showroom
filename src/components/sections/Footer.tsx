import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
        <div>
          <p className="font-display text-base font-medium tracking-[0.14em] text-white">
            NOVA<span className="text-gold">·</span>STUDIO
          </p>
          <p className="mt-1 text-xs text-stone-500">{t.footer.tagline}</p>
        </div>
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} Nova Studio. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
        <div>
          <p className="font-display text-lg font-bold text-white">
            Nova<span className="text-gradient">Studio</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">{t.footer.tagline}</p>
        </div>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} NovaStudio. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

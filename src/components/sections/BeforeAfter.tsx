import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

/** Eski, kalabalık görünen site maketi. */
function OldSite() {
  return (
    <div className="flex h-full flex-col bg-[#e8e4dc] p-4 text-left">
      <div className="flex items-center justify-between rounded bg-[#2c4a7c] px-3 py-2">
        <span className="text-[10px] font-bold text-white underline">ANASAYFA | HAKKIMIZDA | ÜRÜNLER</span>
        <span className="text-[9px] text-yellow-300">☎ HEMEN ARA!!</span>
      </div>
      <div className="mt-2 rounded bg-[#d6cfc2] p-3">
        <p className="text-[11px] font-bold text-[#8a1f1f]" style={{ fontFamily: "serif" }}>
          *** FİRMAMIZA HOŞGELDİNİZ ***
        </p>
        <p className="mt-1 text-[8px] leading-snug text-[#555]">
          1995'ten beri hizmetinizdeyiz. En kaliteli ve en ucuz. Tüm ürünlerimizde KAMPANYA!! Detaylı bilgi için
          tıklayınız. Sitemiz yapım aşamasındadır...
        </p>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded border border-[#aaa] bg-white p-1">
            <div className="h-7 bg-[#c9c2b4]" />
            <p className="mt-1 text-[6px] font-bold text-[#2c4a7c] underline">ÜRÜN {i + 1} - TIKLA</p>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded bg-[#f3e08a] px-2 py-1 text-center text-[8px] font-bold text-[#8a1f1f]">
        !!! BUGÜNE ÖZEL İNDİRİM — KAÇIRMAYIN !!!
      </div>
    </div>
  );
}

/** Yeni, sade ve premium görünen site maketi. */
function NewSite() {
  return (
    <div className="flex h-full flex-col bg-[#0d0f15] p-5 text-left">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-medium tracking-[0.18em] text-white">ATELIER</span>
        <span className="rounded-full border border-white/20 px-3 py-1 text-[8px] text-stone-300">İletişim</span>
      </div>
      <div className="mt-6 flex-1">
        <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#c9a96e]">El yapımı mobilya</p>
        <p className="font-display mt-2 text-[19px] font-medium leading-tight text-white">
          Zamansız tasarım,
          <br />
          ustalıkla buluşuyor.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="rounded-full bg-[#ece7dd] px-3.5 py-1.5 text-[8px] font-semibold text-[#0d0f15]">
            Koleksiyonu Gör
          </span>
          <span className="text-[8px] text-stone-400">Atölyemiz →</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg bg-gradient-to-br from-stone-600/50 to-stone-800/40" />
          <div className="h-16 rounded-lg bg-gradient-to-br from-[#c9a96e]/30 to-stone-800/40" />
          <div className="h-16 rounded-lg bg-gradient-to-br from-stone-500/40 to-stone-900/40" />
        </div>
      </div>
      <p className="text-[7px] text-stone-500">© Atelier — İstanbul</p>
    </div>
  );
}

export function BeforeAfter() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="relative bg-ink-soft py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display mx-auto max-w-3xl text-center text-3xl font-medium leading-[1.18] tracking-tight text-white md:text-5xl"
        >
          {t.beforeAfter.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-stone-400 md:text-lg"
        >
          {t.beforeAfter.text}
        </motion.p>

        {/* İnteraktif önce/sonra slider */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="mt-16"
        >
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="relative h-[340px] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] md:h-[440px]"
            role="slider"
            aria-label={t.beforeAfter.hint}
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 4));
              if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 4));
            }}
          >
            {/* Eski site (alt katman) */}
            <div className="absolute inset-0">
              <OldSite />
            </div>
            {/* Yeni site (üst katman, clip) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
              <NewSite />
            </div>

            {/* Ayraç çizgisi + tutamaç */}
            <div className="absolute inset-y-0 z-10" style={{ left: `${position}%` }}>
              <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/80" />
              <div className="absolute top-1/2 -ml-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
                </svg>
              </div>
            </div>

            {/* Etiketler */}
            <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {t.beforeAfter.before}
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-gold px-3.5 py-1.5 text-xs font-semibold text-ink">
              {t.beforeAfter.after}
            </span>
          </div>
          <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-stone-500">{t.beforeAfter.hint}</p>
        </motion.div>
      </div>
    </section>
  );
}

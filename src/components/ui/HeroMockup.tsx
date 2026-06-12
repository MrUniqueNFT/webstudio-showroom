import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useMediaQuery";

/** Gerçekçi, premium browser + mobil mockup kompozisyonu (DOM tabanlı). */
export function HeroMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1400px) rotateY(${px * 5}deg) rotateX(${-py * 4}deg)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1400px) rotateY(-4deg) rotateX(2deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
      className="relative"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={ref}
        className="relative transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: "perspective(1400px) rotateY(-4deg) rotateX(2deg)" }}
      >
        {/* ── Ana browser penceresi ── */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d15] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),0_0_60px_-20px_rgba(99,102,241,0.25)]">
          {/* Browser barı */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#13131c] px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-auto flex w-1/2 items-center justify-center gap-1.5 rounded-md bg-white/[0.05] py-1 text-[10px] text-zinc-500">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              meridian.studio
            </div>
          </div>

          {/* Site içeriği */}
          <div className="relative bg-gradient-to-b from-[#0c0c14] to-[#0a0a10] px-7 pb-7 pt-5">
            {/* Site nav */}
            <div className="flex items-center justify-between">
              <span className="font-display text-[11px] font-bold tracking-[0.2em] text-white">MERIDIAN</span>
              <div className="flex items-center gap-4 text-[9px] text-zinc-500">
                <span>Work</span>
                <span>Studio</span>
                <span>Journal</span>
                <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-black">Contact</span>
              </div>
            </div>

            {/* Site hero */}
            <div className="mt-7">
              <p className="text-[8px] font-semibold tracking-[0.25em] text-indigo-400">DIGITAL DESIGN STUDIO</p>
              <p className="font-display mt-2 text-[22px] font-bold leading-[1.1] text-white">
                Crafting digital
                <br />
                experiences that <span className="text-indigo-300">convert.</span>
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="rounded-full bg-indigo-500 px-3 py-1.5 text-[8px] font-semibold text-white">
                  Start a project
                </span>
                <span className="text-[8px] text-zinc-500">View showreel ↗</span>
              </div>
            </div>

            {/* İstatistik şeridi */}
            <div className="mt-6 grid grid-cols-3 gap-2.5">
              {[
                ["120+", "Projects shipped"],
                ["98%", "Client retention"],
                ["4.9", "Average rating"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-3">
                  <p className="font-display text-sm font-bold text-white">{num}</p>
                  <p className="mt-0.5 text-[7px] text-zinc-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Proje kartları */}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="overflow-hidden rounded-lg border border-white/[0.05]">
                <div className="h-14 bg-gradient-to-br from-indigo-600/60 via-violet-700/40 to-transparent" />
                <div className="bg-white/[0.025] p-2.5">
                  <p className="text-[8px] font-semibold text-zinc-300">Aurora — SaaS Platform</p>
                  <p className="text-[7px] text-zinc-600">Brand, UI/UX, Frontend</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-white/[0.05]">
                <div className="h-14 bg-gradient-to-br from-stone-500/50 via-stone-700/40 to-transparent" />
                <div className="bg-white/[0.025] p-2.5">
                  <p className="text-[8px] font-semibold text-zinc-300">Atelier — E-Commerce</p>
                  <p className="text-[7px] text-zinc-600">3D, WebGL, Storefront</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Yüzen mobil mockup ── */}
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-12 hidden w-[120px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d15] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] sm:block"
        >
          <div className="flex justify-center bg-[#13131c] py-1.5">
            <span className="h-1 w-8 rounded-full bg-white/15" />
          </div>
          <div className="px-3 pb-4 pt-2">
            <p className="font-display text-[9px] font-bold tracking-widest text-white">MERIDIAN</p>
            <div className="mt-2 h-12 rounded-md bg-gradient-to-br from-indigo-600/50 to-violet-800/30" />
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
              <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
            </div>
            <div className="mt-2.5 flex h-5 items-center justify-center rounded-full bg-indigo-500 text-[7px] font-semibold text-white">
              Start a project
            </div>
          </div>
        </motion.div>

        {/* ── Yüzen istatistik rozeti ── */}
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-strong absolute -right-6 -top-6 hidden items-center gap-2.5 rounded-xl px-4 py-3 sm:flex"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m22 7-8.5 8.5-5-5L2 17" />
              <path d="M16 7h6v6" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-bold text-white">+38%</p>
            <p className="text-[9px] text-zinc-500">Conversion</p>
          </div>
        </motion.div>
      </div>

      {/* Zemin yansıma parlaması */}
      <div
        aria-hidden
        className="absolute -bottom-16 left-1/2 h-24 w-4/5 -translate-x-1/2 rounded-[100%] bg-indigo-600/15 blur-[60px]"
      />
    </motion.div>
  );
}

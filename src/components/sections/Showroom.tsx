import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { showroomItems } from "../../data/showroom";
import { useIsMobile, useReducedMotion } from "../../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

/** Gerçek proje hissi veren browser-frame vitrin kartı. */
function ShowcaseFrame({ index }: { index: number }) {
  const { lang } = useLanguage();
  const item = showroomItems[index];

  return (
    <article className="w-[84vw] shrink-0 sm:w-[460px]">
      <div className="card-premium group overflow-hidden rounded-2xl">
        {/* Browser üst barı */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          ))}
          <div className="ml-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-[10px] tracking-wide text-zinc-500">
            {item.url}
          </div>
        </div>

        {/* Mockup içerik */}
        <div className={`relative h-60 bg-gradient-to-br ${item.gradient} p-6`}>
          <div className="h-3 w-1/2 rounded-full bg-white/30" />
          <div className="mt-2.5 h-2 w-1/3 rounded-full bg-white/15" />
          <div className="mt-7 grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg bg-white/[0.07] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ transitionDelay: `${i * 35}ms`, height: "3.25rem" }}
              />
            ))}
          </div>
          <span
            className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-sm"
            style={{ color: item.accent }}
          >
            {item.tag[lang]}
          </span>
        </div>
      </div>

      <h3 className="font-display mt-5 text-lg font-semibold text-white">{item.title[lang]}</h3>
      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-zinc-400">{item.desc[lang]}</p>
    </article>
  );
}

export function Showroom() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  // Desktop'ta scroll ile yatay kayan pin'li vitrin
  useEffect(() => {
    if (isMobile || reducedMotion) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth + 140;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile, reducedMotion]);

  return (
    <section id="showroom" ref={sectionRef} className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow={lang === "tr" ? "Seçili İşler" : "Selected Work"}
          title={t.showroom.title}
          subtitle={t.showroom.subtitle}
        />
      </div>

      <div
        ref={trackRef}
        className={
          isMobile || reducedMotion
            ? "flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-6 [scrollbar-width:thin]"
            : "flex gap-12 pl-[8vw]"
        }
      >
        {showroomItems.map((_, i) => (
          <div key={i} className={isMobile || reducedMotion ? "snap-center" : ""}>
            <ShowcaseFrame index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

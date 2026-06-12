import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";
import { useReducedMotion } from "../../hooks/useMediaQuery";
import workspaceImage from "../../assets/workspace.jpg";

export function WhyUs() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section id="why" ref={sectionRef} className="relative overflow-hidden py-28 md:py-40">
      {/* Tam genişlik parallax görsel bandı */}
      <div className="relative mb-20 h-[300px] overflow-hidden md:mb-28 md:h-[420px]">
        <motion.img
          src={workspaceImage}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-[130%] w-full object-cover"
          style={reducedMotion ? undefined : { y: imageY }}
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="font-display max-w-3xl text-center text-2xl font-medium leading-snug text-white md:text-4xl"
          >
            {t.why.title}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle eyebrow={lang === "tr" ? "Neden Biz" : "Why Us"} title="" subtitle={t.why.subtitle} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: "easeOut" }}
              className="card-premium h-full rounded-2xl p-7"
            >
              <span className="font-display text-sm text-gold" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

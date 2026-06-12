import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { useReducedMotion } from "../../hooks/useMediaQuery";
import officeImage from "../../assets/office.jpg";

export function Trust() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-3xl font-medium leading-[1.18] tracking-tight text-white md:text-5xl"
          >
            {t.trust.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base leading-relaxed text-stone-400 md:text-lg"
          >
            {t.trust.text}
          </motion.p>

          <div className="mt-12 space-y-8">
            {t.trust.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.15, ease: "easeOut" }}
                className="flex gap-5"
              >
                <span className="font-display mt-0.5 text-sm text-gold" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-stone-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Parallax görsel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl"
        >
          <motion.img
            src={officeImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-[420px] w-full scale-110 object-cover md:h-[560px]"
            style={reducedMotion ? undefined : { y: imageY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

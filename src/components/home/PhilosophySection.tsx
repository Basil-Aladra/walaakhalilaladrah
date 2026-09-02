"use client";

import { motion } from "framer-motion";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PhilosophySection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative overflow-hidden border-b border-borderSubtle bg-noise">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col space-y-12"
        >
          {/* Section Indicator */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold">
              {t.philosophy.badge}
            </span>
            <div className="h-[1px] w-16 bg-gold/40" />
          </motion.div>

          {/* Large Serif Statement */}
          <motion.blockquote
            variants={fadeUp}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-[1.2] tracking-tight max-w-5xl"
          >
            &ldquo;{language === "ar" ? designerProfile.philosophy.quoteAr : designerProfile.philosophy.quote}&rdquo;
          </motion.blockquote>

          {/* Supporting Narrative */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6"
          >
            <div className="md:col-span-4">
              <span className="font-serif italic text-xl text-foreground/80 block">
                {t.philosophy.focusTitle}
              </span>
              <span className="text-xs text-secondary font-light uppercase tracking-widest mt-1 block">
                {t.hero.basedInValue}
              </span>
            </div>

            <div className="md:col-span-8 space-y-4">
              <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
                {language === "ar" ? designerProfile.philosophy.descriptionAr : designerProfile.philosophy.description}
              </p>
              <p className="text-sm sm:text-base text-secondary/80 font-light leading-relaxed">
                {t.philosophy.focusDesc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

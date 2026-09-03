"use client";

import { motion } from "framer-motion";
import { processStages } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t, language } = useLanguage();

  return (
    <section id="process" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-3">
            06 — {t.process.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            {t.process.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-secondary font-light max-w-2xl mt-4">
            {t.process.subtitle}
          </motion.p>
        </motion.div>

        {/* 4 Stages - 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processStages.map((stage, idx) => {
            const title = language === "ar" ? (stage.titleAr || stage.title) : stage.title;
            const subtitle = language === "ar" ? (stage.subtitleAr || stage.subtitle) : stage.subtitle;
            const description = language === "ar" ? (stage.descriptionAr || stage.description) : stage.description;
            const deliverables = language === "ar" ? (stage.deliverablesAr || stage.deliverables) : stage.deliverables;

            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="p-8 bg-[#F4EFE7] border border-borderSubtle flex flex-col justify-between group hover:border-gold transition-colors duration-500 relative"
              >
                <div>
                  <span className="font-serif text-4xl sm:text-5xl text-gold font-light block mb-6">
                    {stage.number}
                  </span>

                  <h3 className="font-serif text-2xl text-foreground font-medium mb-1">
                    {title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-secondary block mb-4">
                    {subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-foreground/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/40 block mb-2">
                    {t.process.keyDeliverables}
                  </span>
                  <ul className="space-y-1.5 text-xs text-foreground/80 font-light">
                    {deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { technicalSkills, professionalSkills, languages } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative border-b border-borderSubtle bg-noise">
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
            08 — {t.skills.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            {t.skills.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-secondary font-light max-w-2xl mt-4">
            {t.skills.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Software & Technical Expertise */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-8 pb-4 border-b border-borderSubtle">
              {t.skills.softwareTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 bg-background border border-borderSubtle hover:border-gold transition-colors duration-300"
                >
                  <span className="font-serif text-xl text-foreground font-medium block">
                    {language === "ar" ? (skill.nameAr || skill.name) : skill.name}
                  </span>
                  <span className="text-xs text-secondary font-light uppercase tracking-wider font-mono mt-1 block">
                    {language === "ar" ? (skill.categoryAr || skill.category) : skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Skills & Languages */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            {/* Professional Mindset */}
            <div>
              <h3 className="font-serif text-2xl text-foreground font-normal mb-6 pb-4 border-b border-borderSubtle">
                {t.skills.professionalTitle}
              </h3>
              <div className="space-y-4">
                {professionalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <h4 className="font-serif italic text-lg text-foreground font-medium">
                      {language === "ar" ? (skill.nameAr || skill.name) : skill.name}
                    </h4>
                    <p className="text-xs text-secondary font-light leading-relaxed">
                      {language === "ar" ? (skill.descAr || skill.desc) : skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-serif text-2xl text-foreground font-normal mb-6 pb-4 border-b border-borderSubtle">
                {t.skills.languagesTitle}
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between py-2 border-b border-borderSubtle"
                  >
                    <span className="font-serif text-lg text-foreground">
                      {language === "ar" ? (lang.nameAr || lang.name) : lang.name}
                    </span>
                    <span className="text-xs font-mono text-gold uppercase tracking-wider">
                      {language === "ar" ? (lang.levelAr || lang.level) : lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

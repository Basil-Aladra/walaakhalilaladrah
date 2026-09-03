"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experiences, education } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative border-b border-borderSubtle bg-noise">
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
            05 — {t.experience.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            {t.experience.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-secondary font-light max-w-2xl mt-4">
            {t.experience.subtitle}
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const period = language === "ar" ? (exp.periodAr || exp.period) : exp.period;
            const company = language === "ar" ? (exp.companyAr || exp.company) : exp.company;
            const role = language === "ar" ? (exp.roleAr || exp.role) : exp.role;
            const location = language === "ar" ? (exp.locationAr || exp.location) : exp.location;
            const responsibilities = language === "ar" ? (exp.responsibilitiesAr || exp.responsibilities) : exp.responsibilities;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group border-t border-borderSubtle pt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Year & Period */}
                  <div className="md:col-span-3">
                    <span className="font-serif text-2xl sm:text-3xl text-gold font-light block">
                      {period}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-secondary mt-1 block">
                      {location}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-2 text-foreground mb-1">
                      <Briefcase className="w-4 h-4 text-gold" />
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                        {role}
                      </h3>
                    </div>
                    <h4 className="text-base text-foreground/80 font-serif italic">
                      {company}
                    </h4>
                  </div>

                  {/* Responsibilities */}
                  <div className="md:col-span-5">
                    <ul className="space-y-2.5">
                      {responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="text-xs sm:text-sm text-secondary font-light leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t-2 border-foreground/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-2">
                {t.experience.educationBadge}
              </span>
              <h3 className="font-serif text-3xl text-foreground font-normal">
                {t.experience.educationTitle}
              </h3>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {education.map((edu) => {
                const degree = language === "ar" ? (edu.degreeAr || edu.degree) : edu.degree;
                const institution = language === "ar" ? (edu.institutionAr || edu.institution) : edu.institution;
                const location = language === "ar" ? (edu.locationAr || edu.location) : edu.location;

                return (
                  <div
                    key={edu.degree}
                    className="p-6 bg-background/50 border border-borderSubtle relative group hover:border-gold transition-colors duration-300"
                  >
                    <GraduationCap className="w-5 h-5 text-gold mb-3" />
                    <h4 className="font-serif text-xl text-foreground font-medium mb-1">
                      {degree}
                    </h4>
                    <p className="text-xs text-secondary uppercase font-mono tracking-wider">
                      {institution}
                    </p>
                    <p className="text-[11px] text-secondary/60 mt-1">
                      {location}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

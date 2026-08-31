"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experiences, education } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ExperienceSection() {
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
            06 — Career & Education
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            Professional Experience
          </motion.h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
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
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-secondary mt-1 block">
                    {exp.location}
                  </span>
                </div>

                {/* Company & Role */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2 text-foreground mb-1">
                    <Briefcase className="w-4 h-4 text-gold" />
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                      {exp.role}
                    </h3>
                  </div>
                  <h4 className="text-base text-foreground/80 font-serif italic">
                    {exp.company}
                  </h4>
                </div>

                {/* Responsibilities */}
                <div className="md:col-span-5">
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
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
          ))}
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
                Academic Background
              </span>
              <h3 className="font-serif text-3xl text-foreground font-normal">
                Education
              </h3>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 bg-background/50 border border-borderSubtle relative group hover:border-gold transition-colors duration-300"
                >
                  <GraduationCap className="w-5 h-5 text-gold mb-3" />
                  <h4 className="font-serif text-xl text-foreground font-medium mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-secondary uppercase font-mono tracking-wider">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-secondary/60 mt-1">
                    {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

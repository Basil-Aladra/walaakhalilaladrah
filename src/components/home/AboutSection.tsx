"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative overflow-hidden border-b border-borderSubtle bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-3">
            02 — Background & Practice
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            {designerProfile.about.title}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Architectural Portrait / Mood Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#E7E2D8] border border-borderSubtle">
              <Image
                src="/mycv/walaakhalil.jpeg"
                alt="Walaa Khalil Al-Adrah - Interior Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter grayscale-[10%] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-serif italic text-lg text-foreground block">
                  Walaa Khalil Al-Adrah
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-mono">
                  Amman, Jordan · 3+ Years Experience
                </span>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </motion.div>

          {/* Right Column: Biography & Architectural Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <motion.p variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-foreground font-light leading-snug">
              {designerProfile.about.lead}
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-secondary font-light leading-relaxed">
              {designerProfile.about.body}
            </motion.p>

            {/* 4 Core Pillars Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-borderSubtle">
              {designerProfile.about.pillars.map((pillar, idx) => (
                <div key={pillar.label} className="space-y-1.5">
                  <span className="text-[10px] font-mono text-gold tracking-widest block">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif italic text-lg text-foreground font-medium">
                    {pillar.label}
                  </h4>
                  <p className="text-xs text-secondary/80 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function PhilosophySection() {
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
              Philosophy & Vision
            </span>
            <div className="h-[1px] w-16 bg-gold/40" />
          </motion.div>

          {/* Large Serif Statement */}
          <motion.blockquote
            variants={fadeUp}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-[1.2] tracking-tight max-w-5xl"
          >
            &ldquo;{designerProfile.philosophy.quote}&rdquo;
          </motion.blockquote>

          {/* Supporting Narrative */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6"
          >
            <div className="md:col-span-4">
              <span className="font-serif italic text-xl text-foreground/80 block">
                Balanced Spatial Sensibility
              </span>
              <span className="text-xs text-secondary font-light uppercase tracking-widest mt-1 block">
                Amman, Jordan
              </span>
            </div>

            <div className="md:col-span-8">
              <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
                {designerProfile.philosophy.description}
              </p>
              <p className="text-sm sm:text-base text-secondary/80 font-light leading-relaxed mt-4">
                Every line, texture, and light source is considered in relation to how people move, rest, and gather—transforming functional floor plans into calm, sensory sanctuaries.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

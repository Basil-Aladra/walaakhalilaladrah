"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-background">
      {/* Background Architectural Image with Slow Settle Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.06, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0.92 }}
          transition={{ duration: 9.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
            alt="Warm architectural living space designed with natural travertine and morning sunlight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.93] contrast-[0.98]"
          />
          {/* Subtle warm architectural gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        </motion.div>
      </div>

      {/* Hero Top Tagline / Asymmetric Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 sm:pt-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {/* Small Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-foreground/80 font-medium">
              {designerProfile.hero.badge}
            </span>
          </motion.div>

          {/* Main Statement Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-foreground font-normal leading-[1.04] mb-6"
          >
            Designing spaces <br />
            <span className="italic font-light text-foreground/90">with intention.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-secondary max-w-xl font-light leading-relaxed mb-8"
          >
            {designerProfile.hero.supportingText}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors duration-300 shadow-sm"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-foreground/30 hover:border-gold hover:text-gold text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar & Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-foreground/15 text-xs text-secondary font-light">
          <div>
            <span className="block font-serif text-base text-foreground font-medium">
              {designerProfile.name}
            </span>
            <span className="text-[11px] tracking-wider uppercase text-foreground/70">
              {designerProfile.title}
            </span>
          </div>

          <div>
            <span className="block text-[11px] tracking-wider uppercase text-foreground/50">
              Location & Practice
            </span>
            <span className="text-foreground/80">{designerProfile.location}</span>
          </div>

          <div className="flex items-center sm:justify-end gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-mono">
              Scroll to explore
            </span>
            <div className="w-7 h-7 rounded-full border border-foreground/20 flex items-center justify-center animate-scroll-cue">
              <ArrowDown className="w-3.5 h-3.5 text-foreground/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

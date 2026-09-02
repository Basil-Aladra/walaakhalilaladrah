"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, X, Download, Maximize2 } from "lucide-react";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const { t, language, isRTL } = useLanguage();

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
          <div className={`absolute inset-0 ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-background/85 via-background/40 to-transparent`} />
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
              {language === "ar" ? designerProfile.hero.badgeAr : designerProfile.hero.badge}
            </span>
          </motion.div>

          {/* Main Statement Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-foreground font-normal leading-[1.08] mb-6 whitespace-pre-line"
          >
            {language === "ar" ? (
              <>
                تصميم المساحات <br />
                <span className="italic font-light text-foreground/90">برؤية وهوية.</span>
              </>
            ) : (
              <>
                Designing spaces <br />
                <span className="italic font-light text-foreground/90">with intention.</span>
              </>
            )}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-secondary max-w-xl font-light leading-relaxed mb-8"
          >
            {language === "ar" ? designerProfile.hero.supportingTextAr : designerProfile.hero.supportingText}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors duration-300 shadow-sm"
            >
              <span>{t.hero.exploreWorks}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </Link>

            {/* View CV / Resume Button */}
            <button
              onClick={() => setCvModalOpen(true)}
              className="group inline-flex items-center gap-2 px-6 py-3.5 border border-foreground/30 hover:border-gold hover:text-gold text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 bg-background/40 backdrop-blur-sm"
            >
              <FileText className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
              <span>{t.hero.viewCv}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar & Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-foreground/15 text-xs text-secondary font-light">
          <div>
            <span className="block font-serif text-base text-foreground font-medium">
              {language === "ar" ? designerProfile.arabicName : designerProfile.name}
            </span>
            <span className="text-[11px] tracking-wider uppercase text-foreground/70">
              {language === "ar" ? designerProfile.titleAr : designerProfile.title}
            </span>
          </div>

          <div>
            <span className="block text-[11px] tracking-wider uppercase text-foreground/50">
              {t.hero.basedInLabel}
            </span>
            <span className="text-foreground/80">{t.contact.locationValue}</span>
          </div>

          <div className="flex items-center sm:justify-end gap-3 rtl:sm:justify-start">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-mono">
              {t.hero.scrollCue}
            </span>
            <div className="w-7 h-7 rounded-full border border-foreground/20 flex items-center justify-center animate-scroll-cue">
              <ArrowDown className="w-3.5 h-3.5 text-foreground/70" />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen CV Preview Modal */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Modal Header Bar */}
            <div className="max-w-6xl mx-auto w-full flex items-center justify-between pb-4 border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="font-serif text-xl sm:text-2xl text-background font-medium">
                  {t.cvModal.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/mycv/walaakhalil.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-gold text-white text-xs font-mono uppercase tracking-widest transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t.cvModal.openInNewTab}</span>
                </a>

                <a
                  href="/mycv/walaakhalil.jpeg"
                  download="Walaa_Khalil_Al-Adrah_CV.jpeg"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold hover:bg-gold-light text-white text-xs font-mono uppercase tracking-widest transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <button
                  onClick={() => setCvModalOpen(false)}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close CV Modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal CV Image Body */}
            <div className="relative w-full max-w-4xl mx-auto my-auto h-[75vh] sm:h-[80vh] overflow-auto flex items-center justify-center p-2">
              <div className="relative w-full h-full max-w-2xl bg-white shadow-2xl border border-white/20">
                <Image
                  src="/mycv/walaakhalil.jpeg"
                  alt="Walaa Khalil Al-Adrah Curriculum Vitae"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Mobile Actions Footer */}
            <div className="sm:hidden flex items-center justify-center gap-3 pt-3 border-t border-white/10">
              <a
                href="/mycv/walaakhalil.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 text-white text-xs font-mono uppercase tracking-wider"
              >
                {t.cvModal.openInNewTab}
              </a>
              <a
                href="/mycv/walaakhalil.jpeg"
                download="Walaa_Khalil_Al-Adrah_CV.jpeg"
                className="px-4 py-2 bg-gold text-white text-xs font-mono uppercase tracking-wider"
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

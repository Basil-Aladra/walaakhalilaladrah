"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";
import Watermark from "@/components/ui/Watermark";

export default function SelectedWorks() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-borderSubtle"
        >
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-3">
              {t.selectedWorks.badge}
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
              {t.selectedWorks.title}
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="mt-6 md:mt-0">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold font-medium border-b border-foreground/30 pb-1 transition-colors"
            >
              <span>{t.selectedWorks.exploreArchive} ({projects.length})</span>
              <ArrowUpRight className={`w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRTL ? "rotate-[-90deg]" : ""}`} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Asymmetric Editorial Project Grid */}
        <div className="space-y-32">
          {/* Project 01: House of Light - Full Bleed Hero Feature */}
          {projects[0] && (
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="group relative"
            >
              <Link href={`/projects/${projects[0].slug}`} className="block">
                <div className="relative w-full h-[60vh] sm:h-[75vh] overflow-hidden bg-[#E9E4DC]">
                  <Image
                    src={projects[0].heroImage}
                    alt={language === "ar" ? (projects[0].titleAr || projects[0].title) : projects[0].title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1400px"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Floating Number Badge */}
                  <div className={`absolute top-6 ${isRTL ? "right-6 sm:right-10" : "left-6 sm:left-10"} sm:top-10 z-10`}>
                    <span className="font-serif text-4xl sm:text-6xl text-white/90 font-light drop-shadow-sm">
                      {projects[0].number}
                    </span>
                  </div>

                  {/* Floating Tag */}
                  <div className={`absolute bottom-6 ${isRTL ? "left-6 sm:left-10" : "right-6 sm:right-10"} sm:bottom-10 z-10`}>
                    <div className="px-4 py-2 bg-background/90 backdrop-blur-md text-foreground text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                      <span>{t.selectedWorks.viewCaseStudy}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
                    </div>
                  </div>

                  <Watermark position="top-right" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
                  <div className="md:col-span-6">
                    <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal group-hover:text-gold transition-colors duration-300">
                      {language === "ar" ? (projects[0].titleAr || projects[0].title) : projects[0].title}
                    </h3>
                    <p className="text-sm text-secondary font-light mt-2 max-w-xl">
                      {language === "ar" ? (projects[0].taglineAr || projects[0].tagline) : projects[0].tagline}
                    </p>
                  </div>
                  <div className="md:col-span-6 flex flex-wrap md:justify-end items-start gap-x-8 gap-y-2 text-xs text-secondary/80 font-mono uppercase tracking-wider">
                    <div>
                      <span className="text-foreground/40 block text-[10px]">{t.selectedWorks.category}</span>
                      {language === "ar" ? (projects[0].categoryAr || projects[0].category) : projects[0].category}
                    </div>
                    <div>
                      <span className="text-foreground/40 block text-[10px]">{t.projectDetail.location}</span>
                      {language === "ar" ? (projects[0].locationAr || projects[0].location) : projects[0].location}
                    </div>
                    <div>
                      <span className="text-foreground/40 block text-[10px]">{t.selectedWorks.year}</span>
                      {projects[0].year}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Projects 02 & 03: Two Column Staggered Asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Project 02: Horizon Cultural Center */}
            {projects[1] && (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="lg:col-span-7 group"
              >
                <Link href={`/projects/${projects[1].slug}`} className="block">
                  <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden bg-[#E9E4DC]">
                    <Image
                      src={projects[1].thumbnail}
                      alt={language === "ar" ? (projects[1].titleAr || projects[1].title) : projects[1].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className={`absolute top-6 ${isRTL ? "right-6" : "left-6"} z-10`}>
                      <span className="font-serif text-3xl sm:text-5xl text-white/90 font-light">
                        {projects[1].number}
                      </span>
                    </div>
                    <Watermark position="bottom-right" />
                  </div>

                  <div className="pt-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal group-hover:text-gold transition-colors duration-300">
                        {language === "ar" ? (projects[1].titleAr || projects[1].title) : projects[1].title}
                      </h3>
                      <span className="text-xs font-mono text-secondary">{projects[1].year}</span>
                    </div>
                    <p className="text-xs text-secondary font-light mt-1.5 uppercase tracking-wider">
                      {language === "ar" ? (projects[1].categoryAr || projects[1].category) : projects[1].category} · {language === "ar" ? (projects[1].locationAr || projects[1].location) : projects[1].location}
                    </p>
                    <p className="text-sm text-secondary font-light mt-3 line-clamp-2">
                      {language === "ar" ? (projects[1].taglineAr || projects[1].tagline) : projects[1].tagline}
                    </p>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Project 03: Solarium Outdoor Furniture */}
            {projects[2] && (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="lg:col-span-5 lg:mt-24 group"
              >
                <Link href={`/projects/${projects[2].slug}`} className="block">
                  <div className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden bg-[#E9E4DC]">
                    <Image
                      src={projects[2].thumbnail}
                      alt={language === "ar" ? (projects[2].titleAr || projects[2].title) : projects[2].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className={`absolute top-6 ${isRTL ? "right-6" : "left-6"} z-10`}>
                      <span className="font-serif text-3xl sm:text-5xl text-white/90 font-light">
                        {projects[2].number}
                      </span>
                    </div>
                    <Watermark position="bottom-right" />
                  </div>

                  <div className="pt-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal group-hover:text-gold transition-colors duration-300">
                        {language === "ar" ? (projects[2].titleAr || projects[2].title) : projects[2].title}
                      </h3>
                      <span className="text-xs font-mono text-secondary">{projects[2].year}</span>
                    </div>
                    <p className="text-xs text-secondary font-light mt-1.5 uppercase tracking-wider">
                      {language === "ar" ? (projects[2].categoryAr || projects[2].category) : projects[2].category} · {language === "ar" ? (projects[2].locationAr || projects[2].location) : projects[2].location}
                    </p>
                    <p className="text-sm text-secondary font-light mt-3 line-clamp-2">
                      {language === "ar" ? (projects[2].taglineAr || projects[2].tagline) : projects[2].tagline}
                    </p>
                  </div>
                </Link>
              </motion.article>
            )}
          </div>

          {/* Projects 04 & 05: Two Column Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Project 04: Working Drawings */}
            {projects[3] && (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="group"
              >
                <Link href={`/projects/${projects[3].slug}`} className="block">
                  <div className="relative w-full h-[45vh] sm:h-[55vh] overflow-hidden bg-[#E9E4DC]">
                    <Image
                      src={projects[3].thumbnail}
                      alt={language === "ar" ? (projects[3].titleAr || projects[3].title) : projects[3].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className={`absolute top-6 ${isRTL ? "right-6" : "left-6"} z-10`}>
                      <span className="font-serif text-3xl sm:text-5xl text-white/90 font-light">
                        {projects[3].number}
                      </span>
                    </div>
                    <Watermark position="bottom-right" />
                  </div>

                  <div className="pt-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal group-hover:text-gold transition-colors duration-300">
                        {language === "ar" ? (projects[3].titleAr || projects[3].title) : projects[3].title}
                      </h3>
                      <span className="text-xs font-mono text-secondary">{projects[3].year}</span>
                    </div>
                    <p className="text-xs text-secondary font-light mt-1.5 uppercase tracking-wider">
                      {language === "ar" ? (projects[3].categoryAr || projects[3].category) : projects[3].category} · {language === "ar" ? (projects[3].locationAr || projects[3].location) : projects[3].location}
                    </p>
                    <p className="text-sm text-secondary font-light mt-3">
                      {language === "ar" ? (projects[3].taglineAr || projects[3].tagline) : projects[3].tagline}
                    </p>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Project 05: Sanctuary 3D Study */}
            {projects[4] && (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="group"
              >
                <Link href={`/projects/${projects[4].slug}`} className="block">
                  <div className="relative w-full h-[45vh] sm:h-[55vh] overflow-hidden bg-[#E9E4DC]">
                    <Image
                      src={projects[4].thumbnail}
                      alt={language === "ar" ? (projects[4].titleAr || projects[4].title) : projects[4].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className={`absolute top-6 ${isRTL ? "right-6" : "left-6"} z-10`}>
                      <span className="font-serif text-3xl sm:text-5xl text-white/90 font-light">
                        {projects[4].number}
                      </span>
                    </div>
                    <Watermark position="bottom-right" />
                  </div>

                  <div className="pt-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal group-hover:text-gold transition-colors duration-300">
                        {language === "ar" ? (projects[4].titleAr || projects[4].title) : projects[4].title}
                      </h3>
                      <span className="text-xs font-mono text-secondary">{projects[4].year}</span>
                    </div>
                    <p className="text-xs text-secondary font-light mt-1.5 uppercase tracking-wider">
                      {language === "ar" ? (projects[4].categoryAr || projects[4].category) : projects[4].category} · {language === "ar" ? (projects[4].locationAr || projects[4].location) : projects[4].location}
                    </p>
                    <p className="text-sm text-secondary font-light mt-3">
                      {language === "ar" ? (projects[4].taglineAr || projects[4].tagline) : projects[4].tagline}
                    </p>
                  </div>
                </Link>
              </motion.article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

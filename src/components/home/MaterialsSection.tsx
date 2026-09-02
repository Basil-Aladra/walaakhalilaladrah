"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { materialsShowcase } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";
import Watermark from "@/components/ui/Watermark";

export default function MaterialsSection() {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsShowcase[0]);
  const { t, language } = useLanguage();

  return (
    <section id="materials" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative overflow-hidden border-b border-borderSubtle bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-3">
            04 — {t.materials.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            {t.materials.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm sm:text-base text-secondary font-light max-w-2xl mt-4">
            {t.materials.subtitle}
          </motion.p>
        </motion.div>

        {/* Material Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Material Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {materialsShowcase.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              const name = language === "ar" ? (mat.nameAr || mat.name) : mat.name;
              const subtitle = language === "ar" ? (mat.subtitleAr || mat.subtitle) : mat.subtitle;

              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`text-left rtl:text-right p-5 transition-all duration-300 border ${
                    isSelected
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background/60 hover:bg-foreground/[0.04] text-foreground border-borderSubtle"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-serif text-lg sm:text-xl font-medium">
                      {name}
                    </span>
                    <div className="flex gap-1.5 ml-2 rtl:mr-2 rtl:ml-0">
                      {mat.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-3 h-3 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider block ${
                      isSelected ? "text-gold-light" : "text-secondary"
                    }`}
                  >
                    {subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Large Material Imagery & Description */}
          <div className="lg:col-span-8 bg-[#ECE7DF] border border-borderSubtle p-6 sm:p-10 relative overflow-hidden">
            <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-foreground/5 mb-6">
              <Image
                src={selectedMaterial.textureImage}
                alt={language === "ar" ? (selectedMaterial.nameAr || selectedMaterial.name) : selectedMaterial.name}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-gold-light block mb-1">
                  {t.materials.colorStory}
                </span>
                <span className="font-serif text-2xl font-light">
                  {language === "ar" ? (selectedMaterial.nameAr || selectedMaterial.name) : selectedMaterial.name}
                </span>
              </div>
              <Watermark position="top-right" />
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-foreground font-light leading-relaxed">
                {language === "ar" ? (selectedMaterial.descriptionAr || selectedMaterial.description) : selectedMaterial.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs uppercase font-mono tracking-wider text-secondary">
                  {t.materials.colorStory}:
                </span>
                <div className="flex items-center gap-2">
                  {selectedMaterial.palette.map((hex) => (
                    <div key={hex} className="flex items-center gap-1.5">
                      <span
                        className="w-4 h-4 rounded-full border border-borderSubtle"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-[11px] font-mono text-secondary">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

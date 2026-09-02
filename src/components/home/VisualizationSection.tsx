"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Layers, Sun, Camera } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";
import Watermark from "@/components/ui/Watermark";

const renderStudies = [
  {
    id: "study-1",
    title: "Double-Height Atrium Residence",
    titleAr: "فيلا سكنية ببهو ذي ارتفاع مضاعف",
    type: "Photorealistic Interior Render",
    typeAr: "رندر داخلي واقعي فائق الدقة",
    software: "Autodesk 3ds Max · Chaos Corona / V-Ray",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
    lighting: "Sunlight Simulation @ 45° · 4200K Warm Ambient",
    lightingAr: "محاكاة ضوء الشمس بزاوية 45° · إضاءة محيطية 4200K",
    aspect: "Camera: 28mm Architectural Shift Lens",
    aspectAr: "عدسة كاميرا معمارية 28mm Shift Lens",
    materials: "Honed Limestone, Rift White Oak, Bouclé Fabric",
    materialsAr: "حجر جيري مطفي، خشب بلوط أبيض، أقمشة بوكليه",
  },
  {
    id: "study-2",
    title: "Minimalist Master Bath Suite",
    titleAr: "جناح حمام رئيسي بتصميم مينيملي",
    type: "Detail Render & Physical Light Study",
    typeAr: "رندر تفصيلي ودراسة إضاءة فيزيائية",
    software: "Autodesk 3ds Max · Photoshop",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=85",
    lighting: "Diffused Skylight + Concealed 2700K Linear LED",
    lightingAr: "ضوء سماوي مشتت + إنارة خطية مخفية 2700K",
    aspect: "Camera: 50mm Prime Lens · Natural Depth of Field",
    aspectAr: "عدسة 50mm Prime · عمق ميدان طبيعي",
    materials: "Monolithic Fluted Travertine, Aged Bronze",
    materialsAr: "ترافرتين مشرّح مصمت، برونز معتق",
  },
  {
    id: "study-3",
    title: "Outdoor Terrace & Lounge Pavilion",
    titleAr: "تراس خارجي وجلسات بيرغولا فندقية",
    type: "Hospitality Exterior Visualization",
    typeAr: "إظهار خارجي لمشاريع الضيافة",
    software: "Autodesk 3ds Max · AutoCAD Integration",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
    lighting: "Golden Hour HDR Sky + Integrated Pergola Spots",
    lightingAr: "سماء HDR في الساعة الذهبية + سبوتات مدمجة",
    aspect: "Camera: 24mm Wide Architectural Perspective",
    aspectAr: "منظور معماري واسع بعدسة 24mm",
    materials: "Weathered Teak, Sandstone Paving, Sunbrella Textiles",
    materialsAr: "خشب تيك معالج، حجر رملي، أقمشة سنبريلا",
  },
];

export default function VisualizationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStudy = renderStudies[activeIndex];
  const { t, language, isRTL } = useLanguage();

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative border-b border-borderSubtle">
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
            05 — {t.visualization.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            {t.visualization.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-secondary font-light max-w-2xl mt-4">
            {t.visualization.subtitle}
          </motion.p>
        </motion.div>

        {/* Render Viewer with Interactive Metadata */}
        <div className="bg-[#171411] text-background p-4 sm:p-8 lg:p-10 shadow-2xl relative">
          {/* Main Visual Display */}
          <div className="relative w-full h-[55vh] sm:h-[70vh] overflow-hidden bg-black/40">
            <Image
              src={currentStudy.image}
              alt={language === "ar" ? currentStudy.titleAr : currentStudy.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center transition-all duration-700"
            />

            {/* Top Overlay Badge */}
            <div className={`absolute top-4 ${isRTL ? "right-4 sm:right-6" : "left-4 sm:left-6"} sm:top-6 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono uppercase tracking-widest`}>
              <Eye className="w-3.5 h-3.5 text-gold-light" />
              <span>{language === "ar" ? "دراسة إظهار معماري" : "3D Visualization Study"} · 0{activeIndex + 1}</span>
            </div>

            <Watermark position="bottom-right" />
          </div>

          {/* Technical Metadata Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 mt-4 border-t border-white/10 text-xs">
            <div>
              <span className="flex items-center gap-1.5 text-gold-light font-mono text-[10px] uppercase tracking-wider mb-1">
                <Layers className="w-3.5 h-3.5" /> {language === "ar" ? "النمذجة والبرامج" : "Modeling & Software"}
              </span>
              <p className="text-white/90 font-light">{currentStudy.software}</p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-gold-light font-mono text-[10px] uppercase tracking-wider mb-1">
                <Sun className="w-3.5 h-3.5" /> {language === "ar" ? "فيزياء الإضاءة" : "Lighting Physics"}
              </span>
              <p className="text-white/90 font-light">{language === "ar" ? currentStudy.lightingAr : currentStudy.lighting}</p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-gold-light font-mono text-[10px] uppercase tracking-wider mb-1">
                <Camera className="w-3.5 h-3.5" /> {language === "ar" ? "الكاميرا والمنظور" : "View Optics"}
              </span>
              <p className="text-white/90 font-light">{language === "ar" ? currentStudy.aspectAr : currentStudy.aspect}</p>
            </div>

            <div className="flex items-center md:justify-end gap-2 pt-2 md:pt-0 rtl:md:justify-start">
              {renderStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-9 h-9 text-xs font-mono transition-all duration-300 border ${
                    activeIndex === idx
                      ? "bg-gold text-white border-gold font-bold"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-gold hover:text-white"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

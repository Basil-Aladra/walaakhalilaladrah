"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface WatermarkProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "center";
  variant?: "badge" | "signature" | "stamp";
  className?: string;
}

export default function Watermark({
  position = "bottom-right",
  variant = "signature",
  className = "",
}: WatermarkProps) {
  const { language, isRTL } = useLanguage();

  if (variant === "stamp") {
    return (
      <div
        className={`pointer-events-none select-none absolute inset-0 flex items-center justify-center opacity-15 overflow-hidden z-20 ${className}`}
        aria-hidden="true"
      >
        <div className="transform -rotate-12 border-2 border-white/60 px-8 py-3 rounded-sm text-center">
          <span className="font-serif text-2xl sm:text-4xl uppercase tracking-[0.3em] text-white block font-light">
            {language === "ar" ? "ولاء خليل العدرة" : "WALAA KHALIL AL-ADRAH"}
          </span>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-white/80 block mt-1">
            {language === "ar" ? "تصميم داخلي · حقوق الملكية الفكرية" : "INTERIOR ARCHITECTURE · ARCHIVE"}
          </span>
        </div>
      </div>
    );
  }

  // Position classes (adapts gracefully to RTL if needed)
  const getPositionClasses = () => {
    switch (position) {
      case "bottom-right":
        return isRTL ? "bottom-4 left-4 sm:bottom-6 sm:left-6" : "bottom-4 right-4 sm:bottom-6 sm:right-6";
      case "bottom-left":
        return isRTL ? "bottom-4 right-4 sm:bottom-6 sm:right-6" : "bottom-4 left-4 sm:bottom-6 sm:left-6";
      case "top-right":
        return isRTL ? "top-4 left-4 sm:top-6 sm:left-6" : "top-4 right-4 sm:top-6 sm:right-6";
      case "top-left":
        return isRTL ? "top-4 right-4 sm:top-6 sm:right-6" : "top-4 left-4 sm:top-6 sm:left-6";
      case "center":
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
      default:
        return "bottom-4 right-4 sm:bottom-6 sm:right-6";
    }
  };

  return (
    <div
      className={`pointer-events-none select-none absolute ${getPositionClasses()} z-20 transition-opacity duration-300 ${className}`}
      aria-hidden="true"
    >
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-black/55 backdrop-blur-md border border-white/20 shadow-lg text-white">
        {/* Monogram Seal */}
        <div className="w-5 h-5 rounded-full bg-gold/30 border border-gold/60 flex items-center justify-center flex-shrink-0">
          <span className="text-[9px] font-mono font-bold text-gold-light leading-none">
            {language === "ar" ? "و" : "W"}
          </span>
        </div>

        {/* Designer Signature Text */}
        <div className="flex flex-col text-left rtl:text-right leading-none">
          <span className="text-[10px] sm:text-[11px] font-serif font-medium tracking-wide text-white/95">
            {language === "ar" ? "ولاء خليل العدرة" : "Walaa Khalil Al-Adrah"}
          </span>
          <span className="text-[8px] font-mono tracking-widest uppercase text-gold-light/90 mt-0.5">
            {language === "ar" ? "تصميم داخلي ©" : "Interior Design ©"}
          </span>
        </div>
      </div>
    </div>
  );
}

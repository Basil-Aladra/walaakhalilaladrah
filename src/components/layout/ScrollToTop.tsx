"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max((currentScrollY / scrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      if (currentScrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed bottom-6 sm:bottom-8 ${
            isRTL ? "left-6 sm:left-8" : "right-6 sm:right-8"
          } z-40`}
        >
          <button
            onClick={scrollToTop}
            aria-label={language === "ar" ? "الصعود إلى أعلى الصفحة" : "Scroll to top of page"}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-background/90 hover:bg-[#1B1714] text-foreground hover:text-white backdrop-blur-md border border-borderSubtle hover:border-[#1B1714] shadow-xl transition-all duration-300 focus:outline-none"
          >
            {/* Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="text-foreground/10"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="text-gold group-hover:text-gold-light transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            {/* Arrow Icon with Hover Jump */}
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 text-foreground group-hover:text-white" />

            {/* Hover Tooltip */}
            <span
              className={`absolute -top-9 ${
                isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
              } px-2.5 py-1 bg-[#1B1714] text-white text-[10px] font-mono uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md`}
            >
              {language === "ar" ? "للأعلى" : "Top"}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

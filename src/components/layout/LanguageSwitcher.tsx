"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

interface Props {
  className?: string;
  variant?: "minimal" | "pill";
}

export default function LanguageSwitcher({ className = "", variant = "minimal" }: Props) {
  const { language, setLanguage, isRTL } = useLanguage();

  if (variant === "pill") {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-full border border-borderSubtle bg-background/80 backdrop-blur-sm ${className}`}
      >
        <button
          onClick={() => setLanguage("en")}
          className={`relative px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full transition-colors duration-300 ${
            language === "en"
              ? "text-background font-medium"
              : "text-secondary hover:text-foreground"
          }`}
        >
          {language === "en" && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-foreground rounded-full -z-10"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          EN
        </button>

        <button
          onClick={() => setLanguage("ar")}
          className={`relative px-3 py-1 text-[11px] font-sans font-medium rounded-full transition-colors duration-300 ${
            language === "ar"
              ? "text-background"
              : "text-secondary hover:text-foreground"
          }`}
        >
          {language === "ar" && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-gold rounded-full -z-10"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          عربي
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 text-xs border border-borderSubtle hover:border-gold transition-all duration-300 ${className}`}
      title={language === "en" ? "التبديل إلى العربية" : "Switch to English"}
      aria-label="Switch language"
    >
      <Globe className="w-3.5 h-3.5 text-gold group-hover:rotate-45 transition-transform duration-500" />
      <span className="font-mono text-[11px] uppercase tracking-wider text-foreground group-hover:text-gold transition-colors">
        {language === "en" ? "عربي" : "EN"}
      </span>
    </button>
  );
}

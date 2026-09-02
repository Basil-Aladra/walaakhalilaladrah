"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Direction } from "@/lib/types";
import { translations, Translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  dir: Direction;
  t: Translations;
  isRTL: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved language or browser default
    const saved = localStorage.getItem("preferred_language") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dir: Direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    if (language === "ar") {
      document.documentElement.classList.add("font-arabic");
      document.body.classList.add("font-arabic");
    } else {
      document.documentElement.classList.remove("font-arabic");
      document.body.classList.remove("font-arabic");
    }

    localStorage.setItem("preferred_language", language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const dir: Direction = language === "ar" ? "rtl" : "ltr";
  const isRTL = language === "ar";
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        t,
        isRTL,
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

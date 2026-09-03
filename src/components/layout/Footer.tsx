"use client";

import Link from "next/link";
import { ArrowUpRight, Instagram, MessageSquare } from "lucide-react";
import { designerProfile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Footer() {
  const { t, isRTL, language } = useLanguage();

  return (
    <footer className="bg-dark-bg text-background/80 pt-16 pb-12 border-t border-dark-border relative overflow-hidden bg-noise-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-background/10">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-sans font-medium block mb-2">
                {t.hero.badge}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-background font-normal tracking-tight">
                {language === "ar" ? designerProfile.arabicName : designerProfile.name}
              </h3>
              <p className="text-sm text-background/60 mt-3 max-w-md font-light leading-relaxed">
                {t.hero.supportingText}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={designerProfile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold-light hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={designerProfile.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold-light hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <div className="text-xs text-background/60">
                <p>{t.contact.locationValue}</p>
                <p className="text-gold/90 font-mono">{designerProfile.phone}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-background/40 font-mono">
              {t.nav.portfolioNavigation}
            </span>
            <div className="flex flex-col space-y-2.5 text-xs tracking-wider uppercase">
              <Link href="/#projects" className="text-background/70 hover:text-gold transition-colors">
                {t.selectedWorks.title}
              </Link>
              <Link href="/projects" className="text-background/70 hover:text-gold transition-colors">
                {t.nav.allProjects}
              </Link>
              <Link href="/#about" className="text-background/70 hover:text-gold transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/#expertise" className="text-background/70 hover:text-gold transition-colors">
                {t.nav.expertise}
              </Link>
              <Link href="/#experience" className="text-background/70 hover:text-gold transition-colors">
                {t.nav.experience}
              </Link>
              <Link href="/#process" className="text-background/70 hover:text-gold transition-colors">
                {t.nav.process}
              </Link>
              <Link href="/#contact" className="text-background/70 hover:text-gold transition-colors">
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Column 3: Contact Direct & Language */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-background/40 font-mono block mb-3">
                {t.contact.title}
              </span>
              <a
                href={`mailto:${designerProfile.email}`}
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-background hover:text-gold transition-colors font-medium border-b border-background/20 pb-1"
              >
                <span>{designerProfile.email}</span>
                <ArrowUpRight className={`w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRTL ? "rotate-[-90deg]" : ""}`} />
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-background/40 font-light">
                {t.contact.availabilityStatus}
              </p>
              <LanguageSwitcher variant="pill" className="border-background/20" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-background/40 tracking-wider">
          <p>© {new Date().getFullYear()} {language === "ar" ? designerProfile.arabicName : designerProfile.name}. {t.footer.copyright}</p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className="font-serif italic text-background/60">{t.footer.designedWith}</span>
            <span>{t.hero.basedInValue}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

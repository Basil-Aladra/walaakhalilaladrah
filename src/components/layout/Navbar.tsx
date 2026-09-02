"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t, isRTL, language } = useLanguage();

  const projectSubmenu = [
    { 
      name: t.nav.allProjects, 
      href: "/projects", 
      number: "01", 
      desc: t.nav.allProjectsDesc 
    },
    { 
      name: t.nav.studentProjects, 
      href: "/projects?category=Student+Projects", 
      number: "02", 
      desc: t.nav.studentProjectsDesc 
    },
    { 
      name: t.nav.interiorDesign, 
      href: "/projects?category=Interior+Design", 
      number: "03", 
      desc: t.nav.interiorDesignDesc 
    },
    { 
      name: t.nav.workingDrawing, 
      href: "/projects?category=Working+Drawing", 
      number: "04", 
      desc: t.nav.workingDrawingDesc 
    },
    { 
      name: t.nav.visualization3D, 
      href: "/projects?category=3D+Visualization", 
      number: "05", 
      desc: t.nav.visualization3DDesc 
    },
    { 
      name: t.nav.furnitureDesign, 
      href: "/projects?category=Furniture+Design", 
      number: "06", 
      desc: t.nav.furnitureDesignDesc 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    setMobileProjectsOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass-panel py-4 shadow-sm border-b border-foreground/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Designer Identity */}
          <Link
            href="/"
            className="group flex flex-col items-start transition-opacity hover:opacity-80"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-foreground font-medium group-hover:text-gold transition-colors duration-300">
              {t.nav.designerName}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-secondary font-sans font-light">
              {t.nav.designerTitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-7 rtl:space-x-reverse">
            {/* Projects Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group inline-flex items-center gap-1.5 focus:outline-none"
              >
                <span>{t.nav.projects}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    desktopDropdownOpen ? "rotate-180 text-gold" : "text-foreground/50"
                  }`}
                />
                <span className={`absolute bottom-0 ${isRTL ? "right-0 origin-right" : "left-0 origin-left"} w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </button>

              {/* Luxury Dropdown Submenu */}
              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute top-full ${isRTL ? "right-0" : "left-0"} mt-3 w-84 bg-background/95 backdrop-blur-xl border border-borderSubtle shadow-2xl p-3 z-50 rounded-none bg-noise`}
                  >
                    <div className="px-3 pt-2 pb-2 border-b border-borderSubtle mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block">
                        {t.nav.portfolioNavigation}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-1">
                      {projectSubmenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className={`group/item flex items-center justify-between p-2.5 hover:bg-foreground/[0.04] transition-all duration-200 border-transparent hover:border-gold ${
                            isRTL ? "border-r-2" : "border-l-2"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-gold/80 font-light">
                                {item.number}
                              </span>
                              <span className="text-xs font-serif text-foreground font-medium group-hover/item:text-gold transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <span className={`text-[10px] text-secondary font-light block ${isRTL ? "pr-5" : "pl-5"} mt-0.5`}>
                              {item.desc}
                            </span>
                          </div>

                          <ArrowIcon className={`w-3.5 h-3.5 text-gold opacity-0 ${isRTL ? "translate-x-2" : "-translate-x-2"} group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200`} />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Links */}
            <Link
              href="/#about"
              className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group"
            >
              {t.nav.about}
              <span className={`absolute bottom-0 ${isRTL ? "right-0 origin-right" : "left-0 origin-left"} w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </Link>

            <Link
              href="/#expertise"
              className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group"
            >
              {t.nav.expertise}
              <span className={`absolute bottom-0 ${isRTL ? "right-0 origin-right" : "left-0 origin-left"} w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </Link>

            <Link
              href="/#experience"
              className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group"
            >
              {t.nav.experience}
              <span className={`absolute bottom-0 ${isRTL ? "right-0 origin-right" : "left-0 origin-left"} w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </Link>

            <Link
              href="/#process"
              className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group"
            >
              {t.nav.process}
              <span className={`absolute bottom-0 ${isRTL ? "right-0 origin-right" : "left-0 origin-left"} w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </Link>

            <Link
              href="/#contact"
              className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group"
            >
              {t.nav.contact}
              <span className={`absolute bottom-0 ${isRTL ? "right-0 origin-right" : "left-0 origin-left"} w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] px-4 py-2 border border-foreground/20 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 text-foreground"
            >
              <span>{t.nav.letsTalk}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
            </Link>
          </nav>

          {/* Mobile Right Controls: Language Switcher & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-gold transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-24 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-sans font-medium">
                  {t.nav.portfolioNavigation}
                </span>
                <LanguageSwitcher variant="pill" />
              </div>

              <div className="flex flex-col space-y-4">
                {/* Mobile Projects Accordion */}
                <div className="border-b border-foreground/10 pb-3">
                  <button
                    onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    className="w-full font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between"
                  >
                    <span>{t.nav.projects}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileProjectsOpen ? "rotate-180 text-gold" : "text-secondary"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProjectsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`overflow-hidden ${isRTL ? "pr-4" : "pl-4"} pt-3 flex flex-col space-y-2.5`}
                      >
                        {projectSubmenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between text-sm text-foreground/80 hover:text-gold transition-colors py-1 font-serif"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-gold">{sub.number}</span>
                              <span>{sub.name}</span>
                            </span>
                            <ArrowIcon className="w-3.5 h-3.5 text-secondary" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between border-b border-foreground/10 pb-3"
                >
                  <span>{t.nav.about}</span>
                  <span className="text-sm font-sans text-secondary font-light">02</span>
                </Link>

                <Link
                  href="/#expertise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between border-b border-foreground/10 pb-3"
                >
                  <span>{t.nav.expertise}</span>
                  <span className="text-sm font-sans text-secondary font-light">03</span>
                </Link>

                <Link
                  href="/#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between border-b border-foreground/10 pb-3"
                >
                  <span>{t.nav.experience}</span>
                  <span className="text-sm font-sans text-secondary font-light">04</span>
                </Link>

                <Link
                  href="/#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between border-b border-foreground/10 pb-3"
                >
                  <span>{t.nav.process}</span>
                  <span className="text-sm font-sans text-secondary font-light">05</span>
                </Link>

                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between border-b border-foreground/10 pb-3"
                >
                  <span>{t.nav.contact}</span>
                  <span className="text-sm font-sans text-secondary font-light">06</span>
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-foreground/10 flex flex-col space-y-4 mt-6">
              <div className="text-xs text-secondary tracking-wider font-light">
                <p>{t.contact.locationValue}</p>
                <p>+962 791080038</p>
                <p>walaa1998aladrah@gmail.com</p>
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors"
              >
                {t.nav.startConversation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

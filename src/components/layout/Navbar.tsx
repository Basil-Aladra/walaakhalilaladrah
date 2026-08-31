"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Experience", href: "/#experience" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

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
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex flex-col items-start transition-opacity hover:opacity-80"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-foreground font-medium group-hover:text-gold transition-colors duration-300">
              Walaa Khalil Al-Adrah
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-secondary font-sans font-light">
              Interior Designer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-gold transition-colors duration-300 relative py-1 font-medium group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] px-4 py-2 border border-foreground/20 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 text-foreground"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-sans font-medium">
                Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <span className="text-sm font-sans text-secondary font-light">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-foreground/10 flex flex-col space-y-4">
              <div className="text-xs text-secondary tracking-wider font-light">
                <p>Amman — Marj Al Hammam, Jordan</p>
                <p>+962 791080038</p>
                <p>walaa1998aladrah@gmail.com</p>
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-foreground text-background text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors"
              >
                Start a Conversation →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

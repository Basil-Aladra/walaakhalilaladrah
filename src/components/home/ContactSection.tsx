"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-dark-bg text-background relative overflow-hidden bg-noise-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-light block mb-3">
            09 — {t.contact.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl lg:text-7xl text-background font-normal tracking-tight">
            {t.contact.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif italic text-xl sm:text-2xl text-background/70 font-light mt-4">
            &ldquo;{t.contact.subtitle}&rdquo;
          </motion.p>
        </motion.div>

        {/* Editorial Direct Contact Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone / WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-white/[0.03] border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                <Phone className="w-5 h-5 text-gold-light group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-background/40 block mb-2">
                {t.contact.phoneLabel}
              </span>
              <h3 className="font-serif text-2xl text-background font-medium mb-3">
                {language === "ar" ? "الاتصال المباشر والواتساب" : "Direct Phone & WhatsApp"}
              </h3>
              <p className="text-xs text-background/60 font-light leading-relaxed mb-6">
                {language === "ar"
                  ? "للاستشارات الفورية ومناقشة تفاصيل المشاريع السكنية والتجارية."
                  : "For immediate project consultations and commercial fit-out inquiries."}
              </p>
            </div>

            <a
              href={`https://wa.me/962788320490`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-3 px-4 bg-white/[0.04] hover:bg-gold hover:text-white border border-white/10 hover:border-gold text-xs font-mono uppercase tracking-widest transition-all duration-300"
            >
              <span>{designerProfile.phone}</span>
              <MessageSquare className="w-4 h-4 text-gold-light group-hover:text-white" />
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white/[0.03] border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                <Mail className="w-5 h-5 text-gold-light group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-background/40 block mb-2">
                {t.contact.emailLabel}
              </span>
              <h3 className="font-serif text-2xl text-background font-medium mb-3">
                {language === "ar" ? "البريد الإلكتروني" : "Electronic Correspondence"}
              </h3>
              <p className="text-xs text-background/60 font-light leading-relaxed mb-6">
                {language === "ar"
                  ? "لإرسال المخططات الهندسية وملفات المشاريع وطلبات عروض الأسعار."
                  : "Submit project briefs, AutoCAD drawing packages, and RFP inquiries."}
              </p>
            </div>

            <a
              href={`mailto:${designerProfile.email}`}
              className="inline-flex items-center justify-between py-3 px-4 bg-white/[0.04] hover:bg-gold hover:text-white border border-white/10 hover:border-gold text-xs font-mono uppercase tracking-widest transition-all duration-300"
            >
              <span className="truncate">{designerProfile.email}</span>
              <ArrowUpRight className={`w-4 h-4 text-gold-light group-hover:text-white ${isRTL ? "rotate-[-90deg]" : ""}`} />
            </a>
          </motion.div>

          {/* Location & Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-white/[0.03] border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                <MapPin className="w-5 h-5 text-gold-light group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-background/40 block mb-2">
                {t.contact.locationLabel}
              </span>
              <h3 className="font-serif text-2xl text-background font-medium mb-3">
                {t.contact.locationValue}
              </h3>
              <p className="text-xs text-background/60 font-light leading-relaxed mb-6">
                {language === "ar"
                  ? "متاحة للمشاريع السكنية الراقية، التراسات الفندقية، والإشراف الميداني في عَمّان ومحافظات المملكة."
                  : "Open to private residential commissions, hospitality projects, and site coordination regionally."}
              </p>
            </div>

            <div className="py-3 px-4 bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs font-mono text-gold-light">
              <span className="uppercase tracking-widest">{t.contact.availability}</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-serif italic text-gold-light block mb-2">
            {t.contact.availability}
          </span>
          <p className="text-sm text-background/70 font-light leading-relaxed">
            {t.contact.availabilityStatus}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { designerProfile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential Interior",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "Residential Interior", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-dark-bg text-background relative overflow-hidden bg-noise-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-light block mb-3">
            09 — Collaboration & Inquiries
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl lg:text-7xl text-background font-normal tracking-tight">
            Have a space in mind?
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif italic text-xl sm:text-2xl text-background/70 font-light mt-3">
            &ldquo;Let&apos;s turn the idea into something tangible.&rdquo;
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <p className="text-sm sm:text-base text-background/70 font-light leading-relaxed">
                Whether you are seeking full interior architecture services, bespoke outdoor furniture concepts, or photorealistic 3D visualization studies, I welcome discussions on new projects and professional collaborations.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold-light mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-background/40 block">
                      Studio Location
                    </span>
                    <span className="text-sm text-background/90 font-light">
                      {designerProfile.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold-light mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-background/40 block">
                      Direct Line / WhatsApp
                    </span>
                    <a
                      href={`tel:${designerProfile.phone}`}
                      className="text-sm text-background/90 hover:text-gold transition-colors font-light"
                    >
                      {designerProfile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold-light mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-background/40 block">
                      Electronic Mail
                    </span>
                    <a
                      href={`mailto:${designerProfile.email}`}
                      className="text-sm text-background/90 hover:text-gold transition-colors font-light"
                    >
                      {designerProfile.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/10">
              <span className="text-xs font-serif italic text-gold-light block mb-1">
                Professional Engagement
              </span>
              <p className="text-xs text-background/60 font-light leading-relaxed">
                Currently open to select private residences, commercial fit-outs, and hospitality design collaborations in Amman and regionally.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 bg-white/[0.03] border border-gold/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto" />
                <h3 className="font-serif text-3xl text-background">
                  Inquiry Received
                </h3>
                <p className="text-sm text-background/70 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out. I will review your project brief and respond within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-gold hover:text-white border border-gold/40 hover:border-gold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-background/60 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 px-4 py-3 text-sm text-background placeholder:text-background/30 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-background/60 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 px-4 py-3 text-sm text-background placeholder:text-background/30 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-background/60 block">
                    Project Typology
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-dark-bg border border-white/15 px-4 py-3 text-sm text-background focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Residential Interior">Residential Interior Design</option>
                    <option value="Commercial Interior">Commercial & Workspace Design</option>
                    <option value="Outdoor & Hospitality">Outdoor Furniture & Hospitality Terrace</option>
                    <option value="3D Visualization">3D Modeling & Photorealistic Rendering</option>
                    <option value="Full Project Coordination">Full Design & Site Coordination</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-background/60 block">
                    Project Scope & Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your space, timeline, location, or visual goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/15 px-4 py-3 text-sm text-background placeholder:text-background/30 focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-white text-xs font-mono uppercase tracking-[0.2em] font-medium transition-colors duration-300 disabled:opacity-50"
                >
                  <span>{loading ? "Transmitting..." : "Send Inquiry"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

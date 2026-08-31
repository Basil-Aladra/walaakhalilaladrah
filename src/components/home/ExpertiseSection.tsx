"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { expertiseList } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ExpertiseSection() {
  const [activeItem, setActiveItem] = useState<string | null>("01");

  return (
    <section id="expertise" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background relative border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-3">
            03 — Disciplines & Capabilities
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight max-w-2xl">
            Designing from concept to detail.
          </motion.h2>
        </motion.div>

        {/* Editorial List with Horizontal Dividers */}
        <div className="border-t border-borderSubtle">
          {expertiseList.map((item) => {
            const isActive = activeItem === item.number;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setActiveItem(item.number)}
                onClick={() => setActiveItem(isActive ? null : item.number)}
                className="group border-b border-borderSubtle py-8 sm:py-10 cursor-pointer transition-colors duration-300 hover:bg-foreground/[0.02]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
                  {/* Number */}
                  <div className="md:col-span-2 flex items-center justify-between md:block">
                    <span className="font-serif text-2xl sm:text-3xl text-gold font-light">
                      {item.number}
                    </span>
                    <div className="md:hidden text-secondary">
                      {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="md:col-span-5 flex flex-col">
                    <div className="flex items-center gap-4">
                      <h3 className="font-serif text-2xl sm:text-4xl text-foreground font-normal transition-transform duration-300 group-hover:translate-x-2 group-hover:text-gold">
                        {item.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-secondary font-mono mt-1">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Description & Tags */}
                  <div className={`md:col-span-5 transition-all duration-300 ${isActive ? "opacity-100 max-h-96" : "opacity-80 md:opacity-70"}`}>
                    <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 bg-foreground/[0.04] text-foreground/70 border border-borderSubtle"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

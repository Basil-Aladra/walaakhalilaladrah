"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";

const categories = [
  "All",
  "Residential Interior",
  "Commercial Interior",
  "Outdoor & Hospitality",
  "3D Visualization",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 pb-8 border-b border-borderSubtle"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold block mb-3">
            Portfolio Archive
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-7xl text-foreground font-normal tracking-tight">
            Selected Works
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-secondary font-light max-w-2xl mt-4">
            An archive of residential, commercial, outdoor living, and 3D architectural visualization projects developed across Jordan.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-16 pb-6 border-b border-borderSubtle">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
                  isSelected
                    ? "bg-foreground text-background border-foreground shadow-sm"
                    : "bg-background/80 hover:bg-foreground/[0.04] text-foreground/70 border-borderSubtle"
                }`}
              >
                {cat} {cat === "All" && `(${projects.length})`}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            {filteredProjects.map((project) => (
              <article key={project.id} className="group">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative w-full h-[50vh] sm:h-[58vh] overflow-hidden bg-[#E9E4DC] border border-borderSubtle">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="font-serif text-3xl sm:text-5xl text-white/90 font-light drop-shadow-sm">
                        {project.number}
                      </span>
                    </div>

                    <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-3.5 py-1.5 bg-background/90 backdrop-blur-md text-foreground text-xs uppercase tracking-widest flex items-center gap-1.5">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex items-baseline justify-between">
                      <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h2>
                      <span className="text-xs font-mono text-secondary">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-secondary font-light mt-1.5 uppercase tracking-wider font-mono">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.location}</span>
                    </div>
                    <p className="text-sm text-secondary font-light mt-3">
                      {project.tagline}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

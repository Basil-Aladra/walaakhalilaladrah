"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize2, Tag, Download, FileText } from "lucide-react";
import { Project } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import Watermark from "@/components/ui/Watermark";

interface Props {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: Props) {
  const { t, language, isRTL } = useLanguage();

  const title = language === "ar" ? (project.titleAr || project.title) : project.title;
  const category = language === "ar" ? (project.categoryAr || project.category) : project.category;
  const location = language === "ar" ? (project.locationAr || project.location) : project.location;
  const tagline = language === "ar" ? (project.taglineAr || project.tagline) : project.tagline;
  const concept = language === "ar" ? (project.conceptAr || project.concept) : project.concept;
  const approach = language === "ar" ? (project.approachAr || project.approach) : project.approach;
  const area = language === "ar" ? (project.areaAr || project.area) : project.area;

  const challenge = language === "ar"
    ? (project.challengeAndSolution.challengeAr || project.challengeAndSolution.challenge)
    : project.challengeAndSolution.challenge;

  const solution = language === "ar"
    ? (project.challengeAndSolution.solutionAr || project.challengeAndSolution.solution)
    : project.challengeAndSolution.solution;

  const nextTitle = language === "ar" ? (nextProject.titleAr || nextProject.title) : nextProject.title;

  const BackIcon = isRTL ? ArrowRight : ArrowLeft;
  const NextIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <article className="pt-28 pb-24 sm:pb-36 bg-background text-foreground min-h-screen">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-gold transition-colors"
        >
          <BackIcon className="w-4 h-4" />
          <span>{language === "ar" ? "العودة لجميع المشاريع" : "Back to All Projects"}</span>
        </Link>
      </div>

      {/* Hero Banner Section */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-medium">
            {language === "ar" ? "المشروع" : "Project"} {project.number}
          </span>
          <span className="text-secondary/40">·</span>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-secondary">
            {category}
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-foreground font-normal tracking-tight mb-6">
          {title}
        </h1>

        <p className="font-serif italic text-2xl sm:text-3xl text-secondary font-light max-w-3xl leading-relaxed mb-12">
          &ldquo;{tagline}&rdquo;
        </p>

        {/* Project Metadata Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-borderSubtle text-xs">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">{t.projectDetail.location}</span>
              <span className="text-foreground font-medium">{location}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">{t.projectDetail.year}</span>
              <span className="text-foreground font-medium">{project.year}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Maximize2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">{t.projectDetail.scale}</span>
              <span className="text-foreground font-medium">{area}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Tag className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">{t.projectDetail.discipline}</span>
              <span className="text-foreground font-medium">{category}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Full Bleed Hero Image */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden bg-[#E5E0D6] border border-borderSubtle">
          <Image
            src={project.heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <Watermark position="bottom-right" />
        </div>
      </div>

      {/* Editorial Content: Concept & Approach */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block mb-1">
              01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
              {t.projectDetail.architecturalConcept}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
              {concept}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-borderSubtle">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block mb-1">
              02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
              {t.projectDetail.designApproach}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
              {approach}
            </p>
          </div>
        </div>

        {/* Challenge & Solution Box */}
        <div className="p-8 sm:p-10 bg-[#F4EFE7] border border-borderSubtle grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-2">
              {t.projectDetail.challenge}
            </span>
            <p className="text-sm text-foreground/80 font-light leading-relaxed">
              {challenge}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-2">
              {t.projectDetail.solution}
            </span>
            <p className="text-sm text-foreground/80 font-light leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>

      {/* Materials Palette Board */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="mb-12 pb-6 border-b border-borderSubtle">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold block mb-2">
            {language === "ar" ? "المواصفات والتفاصيل" : "Specifications"}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal">
            {t.projectDetail.materialsPalettes}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.materials.map((mat, idx) => (
            <div
              key={idx}
              className="p-6 bg-background border border-borderSubtle space-y-2 hover:border-gold transition-colors duration-300"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-gold block">
                {language === "ar" ? (mat.categoryAr || mat.category) : mat.category}
              </span>
              <h3 className="font-serif text-xl text-foreground font-medium">
                {language === "ar" ? (mat.nameAr || mat.name) : mat.name}
              </h3>
              <p className="text-xs text-secondary font-light leading-relaxed">
                {language === "ar" ? (mat.descriptionAr || mat.description) : mat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Resolution Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="mb-12 pb-6 border-b border-borderSubtle">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold block mb-2">
            {language === "ar" ? "التوثيق البصري" : "Visual Documentation"}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal">
            {t.projectDetail.visualGallery}
          </h2>
        </div>

        <div className="space-y-12">
          {project.gallery.map((img, idx) => {
            const caption = language === "ar" ? (img.captionAr || img.caption) : img.caption;
            const alt = language === "ar" ? (img.altAr || img.alt) : img.alt;

            return (
              <figure key={idx} className="space-y-3">
                <div className="relative w-full h-[55vh] sm:h-[75vh] overflow-hidden bg-[#E9E4DC] border border-borderSubtle">
                  <Image
                    src={img.url}
                    alt={alt}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  <Watermark position="bottom-right" />
                </div>
                {caption && (
                  <figcaption className="text-xs text-secondary font-mono tracking-wider flex items-center justify-between pt-1">
                    <span>{caption}</span>
                    <span className="text-gold">{t.projectDetail.plate} 0{idx + 1}</span>
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </section>

      {/* Downloadable Files Section */}
      {project.downloadableFiles && project.downloadableFiles.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
          <div className="mb-10 pb-6 border-b border-borderSubtle">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold block mb-2">
              {t.projectDetail.technicalDocuments}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal">
              {language === "ar" ? "حزم المخططات الهندسية" : "Drawing Packages"}
            </h2>
            <p className="text-sm text-secondary font-light mt-2">
              {t.projectDetail.technicalDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.downloadableFiles.map((file, idx) => (
              <a
                key={idx}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 border border-borderSubtle hover:border-gold bg-background hover:bg-foreground/[0.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <FileText className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-serif text-foreground font-medium group-hover:text-gold transition-colors">
                      {language === "ar" ? (file.nameAr || file.name) : file.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                      {file.fileType}{file.size ? ` · ${file.size}` : ''}
                    </span>
                  </div>
                </div>

                <Download className="w-4 h-4 text-secondary group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 border-t border-borderSubtle">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/projects"
            className="text-xs font-mono uppercase tracking-widest text-secondary hover:text-gold transition-colors"
          >
            ← {t.projectDetail.viewAllWorks}
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-4 text-right rtl:text-left"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary block">
                {t.projectDetail.nextProject} ({nextProject.number})
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-gold transition-colors">
                {nextTitle}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-borderSubtle flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
              <NextIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

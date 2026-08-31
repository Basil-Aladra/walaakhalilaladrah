import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize2, Tag } from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Walaa Khalil Al-Adrah`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="pt-28 pb-24 sm:pb-36 bg-background text-foreground min-h-screen">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Hero Banner Section */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-medium">
            Project {project.number}
          </span>
          <span className="text-secondary/40">·</span>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-secondary">
            {project.category}
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-foreground font-normal tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="font-serif italic text-2xl sm:text-3xl text-secondary font-light max-w-3xl leading-relaxed mb-12">
          &ldquo;{project.tagline}&rdquo;
        </p>

        {/* Project Metadata Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-borderSubtle text-xs">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">Location</span>
              <span className="text-foreground font-medium">{project.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">Year Completed</span>
              <span className="text-foreground font-medium">{project.year}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Maximize2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">Spatial Area</span>
              <span className="text-foreground font-medium">{project.area}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Tag className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 block">Typology</span>
              <span className="text-foreground font-medium">{project.category}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Full Bleed Hero Image */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden bg-[#E5E0D6] border border-borderSubtle">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Editorial Content: Concept & Approach */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block mb-1">
              Phase 01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
              Design Concept
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
              {project.concept}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-borderSubtle">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block mb-1">
              Phase 02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
              Spatial Approach
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Challenge & Solution Box */}
        <div className="p-8 sm:p-10 bg-[#F4EFE7] border border-borderSubtle grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-2">
              Spatial Challenge
            </span>
            <p className="text-sm text-foreground/80 font-light leading-relaxed">
              {project.challengeAndSolution.challenge}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-2">
              Architectural Solution
            </span>
            <p className="text-sm text-foreground/80 font-light leading-relaxed">
              {project.challengeAndSolution.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Materials Palette Board */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="mb-12 pb-6 border-b border-borderSubtle">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold block mb-2">
            Specifications
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal">
            Materials & Finishes Palette
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.materials.map((mat, idx) => (
            <div
              key={idx}
              className="p-6 bg-background border border-borderSubtle space-y-2 hover:border-gold transition-colors duration-300"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-gold block">
                {mat.category}
              </span>
              <h3 className="font-serif text-xl text-foreground font-medium">
                {mat.name}
              </h3>
              <p className="text-xs text-secondary font-light leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Resolution Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="mb-12 pb-6 border-b border-borderSubtle">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold block mb-2">
            Visual Documentation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal">
            3D Views & Detail Gallery
          </h2>
        </div>

        <div className="space-y-12">
          {project.gallery.map((img, idx) => (
            <figure key={idx} className="space-y-3">
              <div className="relative w-full h-[55vh] sm:h-[75vh] overflow-hidden bg-[#E9E4DC] border border-borderSubtle">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              {img.caption && (
                <figcaption className="text-xs text-secondary font-mono tracking-wider flex items-center justify-between pt-1">
                  <span>{img.caption}</span>
                  <span className="text-gold">Plate 0{idx + 1}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 border-t border-borderSubtle">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/projects"
            className="text-xs font-mono uppercase tracking-widest text-secondary hover:text-gold transition-colors"
          >
            ← View All Works
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-4 text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary block">
                Next Project ({nextProject.number})
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-gold transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-borderSubtle flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

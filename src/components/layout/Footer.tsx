import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { designerProfile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-background/80 pt-16 pb-12 border-t border-dark-border relative overflow-hidden bg-noise-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-background/10">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-sans font-medium block mb-2">
                Interior Architecture & 3D Visualization
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-background font-normal tracking-tight">
                {designerProfile.name}
              </h3>
              <p className="text-sm text-background/60 mt-3 max-w-md font-light leading-relaxed">
                Designing serene residential, commercial, and outdoor living environments shaped by light, authentic materiality, and precision.
              </p>
            </div>

            <div className="text-xs text-background/50 space-y-1">
              <p>{designerProfile.location}</p>
              <p className="text-gold/90">{designerProfile.phone}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-background/40 font-mono">
              Explore
            </span>
            <div className="flex flex-col space-y-2.5 text-xs tracking-wider uppercase">
              <Link href="/#projects" className="text-background/70 hover:text-gold transition-colors">
                Selected Works
              </Link>
              <Link href="/projects" className="text-background/70 hover:text-gold transition-colors">
                All Projects
              </Link>
              <Link href="/#about" className="text-background/70 hover:text-gold transition-colors">
                About Walaa
              </Link>
              <Link href="/#expertise" className="text-background/70 hover:text-gold transition-colors">
                Design Expertise
              </Link>
              <Link href="/#materials" className="text-background/70 hover:text-gold transition-colors">
                Materials & 3D
              </Link>
              <Link href="/#experience" className="text-background/70 hover:text-gold transition-colors">
                Timeline & Education
              </Link>
              <Link href="/#process" className="text-background/70 hover:text-gold transition-colors">
                Methodology
              </Link>
            </div>
          </div>

          {/* Column 3: Contact Direct */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-background/40 font-mono block mb-3">
                Inquiries & Collaboration
              </span>
              <a
                href={`mailto:${designerProfile.email}`}
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-background hover:text-gold transition-colors font-medium border-b border-background/20 pb-1"
              >
                <span>{designerProfile.email}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="text-xs text-background/40 font-light">
              <p>Available for select interior architecture, outdoor furniture design, and 3D visualization commissions.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-background/40 tracking-wider">
          <p>© {new Date().getFullYear()} Walaa Khalil Al-Adrah. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="font-serif italic text-background/60">Designed with intention & craft</span>
            <span>Amman, Jordan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

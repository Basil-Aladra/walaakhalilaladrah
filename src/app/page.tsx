import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import SelectedWorks from "@/components/home/SelectedWorks";
import AboutSection from "@/components/home/AboutSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProcessSection from "@/components/home/ProcessSection";
import SkillsSection from "@/components/home/SkillsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Philosophy / Editorial Statement */}
      <PhilosophySection />

      {/* 3. Selected Works */}
      <SelectedWorks />

      {/* 4. About Walaa */}
      <AboutSection />

      {/* 5. Expertise & Disciplines */}
      <ExpertiseSection />

      {/* 6. Professional Experience & Education */}
      <ExperienceSection />

      {/* 7. Methodology & Process */}
      <ProcessSection />

      {/* 8. Technical & Soft Skills */}
      <SkillsSection />

      {/* 9. Contact & Inquiries */}
      <ContactSection />
    </div>
  );
}

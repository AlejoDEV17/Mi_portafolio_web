import dynamic from "next/dynamic";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProfileSection } from "@/components/sections/profile-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { CustomCursor } from "@/components/visual/custom-cursor";
import { ExperienceShell } from "@/components/visual/experience-shell";

const CosmicScene = dynamic(() => import("@/components/visual/cosmic-scene").then((mod) => mod.CosmicScene), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <ExperienceShell />
      <CustomCursor />
      <CosmicScene />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <ProfileSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import GitHubStats from "@/components/GitHubStats";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-h-screen">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <ProjectGrid />
        <div className="section-divider" />
        <ExperienceTimeline />
        <div className="section-divider" />
        <SkillsGrid />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <GitHubStats />
        <div className="section-divider" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

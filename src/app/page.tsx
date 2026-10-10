import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/Footer";

const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: () => <div className="py-24" aria-hidden="true" />,
});
const Certifications = dynamic(() => import("@/components/Certifications"), {
  loading: () => <div className="py-24" aria-hidden="true" />,
});
const GitHubStats = dynamic(() => import("@/components/GitHubStats"), {
  loading: () => <div className="py-24" aria-hidden="true" />,
});
const ContactCTA = dynamic(() => import("@/components/ContactCTA"), {
  loading: () => <div className="py-20" aria-hidden="true" />,
});

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

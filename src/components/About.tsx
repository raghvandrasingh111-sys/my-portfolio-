"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles, Cpu, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const coreTechs = [
  "Flutter",
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Supabase",
  "PostgreSQL",
  "AI/ML",
  "Docker",
];

const stats = [
  { label: "National Hackathons", value: 3, suffix: "" },
  { label: "Patent-Pending App", value: 1, suffix: "" },
  { label: "Startup Co-Founded", value: 1, suffix: "" },
  { label: "Client Websites Delivered", value: 2, suffix: "" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 30));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="B.Tech IT student and full-stack developer building useful products for real people."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Main Persona & Bio */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
            {/* Roles Header */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="glass-card rounded-2xl p-4 border border-accent-primary/20 bg-accent-primary/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-primary/10 text-accent-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Co-Founder</h4>
                  <p className="text-xs text-accent-primary font-medium">Inheriq</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-accent-cyan/20 bg-accent-cyan/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">CTO</h4>
                  <p className="text-xs text-accent-cyan font-medium">Inheriq</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-accent-emerald/20 bg-accent-emerald/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-emerald/10 text-accent-emerald">
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Full Stack</h4>
                  <p className="text-xs text-accent-emerald font-medium">Web & Mobile</p>
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                I build and ship products end to end.
              </h3>

              <p className="text-text-secondary text-base leading-relaxed">
                I&apos;m a B.Tech Information Technology student at Chandigarh University and a full-stack developer. I&apos;ve shipped live business websites, built freelance client projects, and developed AyuNetra, a patent-pending AI medical app.
              </p>

              <p className="text-text-secondary text-base leading-relaxed">
                I work across React, Next.js, TypeScript, Flutter, Supabase, and Python ML. As co-founder and CTO of Inheriq, I&apos;m building a SaaS platform of specialised AI agents for business tasks. I&apos;m seeking a software development internship to build impactful products.
              </p>

              {/* Technologies list */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                  Core Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {coreTechs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-glass border border-glass-border text-text-primary hover:border-accent-primary/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Academic details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3">
                <MapPin size={18} className="text-accent-primary" />
                <span className="text-sm font-medium text-text-secondary">Chandigarh, India</span>
              </div>
              <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3">
                <GraduationCap size={18} className="text-accent-cyan" />
                <span className="text-xs sm:text-sm font-medium text-text-secondary truncate">
                  Chandigarh University
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats & Current Focus */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all border border-glass-border shadow-lg"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-text-secondary text-xs sm:text-sm mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Banner */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-accent-primary bg-gradient-to-r from-accent-primary/10 via-transparent to-transparent space-y-3">
              <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-ping" />
                <span>Current Focus @ Inheriq</span>
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Building a subscription platform of specialised AI agents for HR, Sales, Marketing, Support, and Finance, with regional Indian language support and Hindi-English code-switching.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

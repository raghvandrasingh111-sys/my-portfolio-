"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import SocialLinks from "./SocialLinks";
import {
  ReactIcon,
  NextIcon,
  PythonIcon,
  TypeScriptIcon,
  SupabaseIcon,
} from "./icons";
import { fadeUp, staggerContainer } from "@/lib/animations";

const floatingTechIcons = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Supabase", Icon: SupabaseIcon },
];

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Bio & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-md text-xs sm:text-sm font-medium text-accent-primary flex items-center gap-2">
                <Sparkles size={14} className="animate-spin-slow text-accent-cyan" />
                <span>Co-Founder & CTO @ Inheriq</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp} className="space-y-1">
              <p className="text-text-secondary text-base sm:text-lg font-medium font-mono">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
                Raghavendra <span className="gradient-text">Singh</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight leading-snug"
            >
              Full-Stack Developer | Flutter | AI/ML
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              I&apos;m Raghavendra Singh, Co-Founder of{" "}
              <a
                href="https://inheriq.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary font-semibold hover:text-accent-cyan transition-colors"
              >
                Inheriq.in
              </a>
              . I lead product and engineering, building full-stack web and
              mobile products with React, Next.js, TypeScript, Flutter,
              Supabase, and Python-based AI/ML.
            </motion.p>

            {/* Floating Tech Stack Badges */}
            <motion.div variants={fadeUp} className="pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {floatingTechIcons.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-glass-border shadow-md backdrop-blur-md hover:border-accent-primary/40 transition-colors group cursor-default"
                  >
                    <Icon size={16} className="transition-transform group-hover:scale-110" />
                    <span className="text-xs font-mono font-medium text-text-primary">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto"
            >
              <motion.button
                onClick={() => handleScrollTo("projects")}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base font-medium px-7 py-3.5 rounded-full shadow-lg shadow-accent-primary/25"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                onClick={() => handleScrollTo("contact")}
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base font-medium px-7 py-3.5 rounded-full border border-glass-border hover:border-accent-cyan/40"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={18} className="text-accent-cyan" />
                <span>Contact Me</span>
              </motion.button>
              <a
                href="/raghavendra%20singh%20resume.pdf"
                download="raghavendra singh resume.pdf"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base font-medium px-6 py-3.5 rounded-full border border-glass-border hover:border-accent-primary/40"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="pt-2">
              <SocialLinks size={18} />
            </motion.div>
          </motion.div>

          {/* Right Column — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent-primary/35 via-accent-secondary/20 to-accent-cyan/35 blur-2xl pointer-events-none" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-glass-border bg-white shadow-2xl">
                <Image
                  src="/raghavendra-singh.png"
                  alt="Portrait of Raghavendra Singh"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent px-6 pb-6 pt-20">
                  <p className="text-lg font-bold text-white">Raghavendra Singh</p>
                  <p className="text-sm text-white/80">Co-Founder &amp; CTO, Inheriq</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Education"
          subtitle="My journey building startups, shipping engineering features, and academic learning"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical Timeline Track */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-primary via-accent-cyan to-accent-emerald opacity-40" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Node Icon */}
                <div
                  className={`absolute left-1.5 sm:left-5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                    exp.current
                      ? "border-accent-primary bg-accent-primary/20 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                      : "border-accent-cyan bg-surface"
                  }`}
                >
                  {exp.type === "Education" ? (
                    <GraduationCap size={12} className="text-accent-cyan" />
                  ) : (
                    <Briefcase size={12} className="text-accent-primary" />
                  )}
                </div>

                {/* Card Container */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-glass-border hover:border-accent-primary/30 transition-all shadow-xl">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-glass-border">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-accent-emerald/15 text-accent-emerald rounded-full border border-accent-emerald/20">
                            Present
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-surface-light text-text-secondary rounded-full border border-glass-border">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-accent-cyan font-medium text-sm sm:text-base flex items-center gap-1.5 mt-1">
                        <Building2 size={14} />
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-text-muted">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-text-secondary text-xs sm:text-sm flex items-start gap-2"
                        >
                          <span className="text-accent-primary mt-1 text-xs">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

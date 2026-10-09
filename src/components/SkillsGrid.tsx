"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Brain,
  Cloud,
  Database,
  Wrench,
  Code,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Brain,
  Cloud,
  Database,
  Wrench,
  Code,
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use across full-stack web, mobile, and AI/ML projects."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.name}
                variants={fadeUp}
                className="glass-card glass-card-hover rounded-2xl p-6 transition-all group border border-glass-border hover:border-accent-primary/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  {Icon && (
                    <div className="p-2.5 rounded-xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                      <Icon size={20} />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-text-primary">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="tech-tag text-xs font-medium py-1.5 px-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Package,
  Trophy,
  GitBranch,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/data/achievements";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Package,
  Trophy,
  GitBranch,
  Briefcase,
  Lightbulb,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones along the way"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon] || Rocket;
            return (
              <motion.div
                key={achievement.id}
                variants={fadeUp}
                className="glass-card glass-card-hover rounded-xl p-6 transition-all text-center group"
                whileHover={{ y: -4 }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {achievement.description}
                </p>
                <span className="text-text-muted text-xs font-mono mt-3 inline-block">
                  {achievement.year}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

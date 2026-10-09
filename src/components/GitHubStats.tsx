"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import ContributionGraph from "./ContributionGraph";
import { fadeUp, staggerContainer } from "@/lib/animations";

const repositories = [
  {
    name: "AyuNetra",
    description: "Patent-pending Flutter medical records app with AI-assisted prescription analysis.",
    url: "https://github.com/raghvandrasingh111-sys/AyuNetra",
    language: "Dart",
  },
  {
    name: "Ramkashiyatra.com",
    description: "Production travel website built to support visitor enquiries.",
    url: "https://github.com/raghvandrasingh111-sys/Ramkashiyatra.com",
    language: "Web",
  },
];

export default function GitHubStats() {
  return (
    <section id="opensource" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub Activity & Open Source"
          subtitle="Recent contribution activity and selected public projects."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <motion.div
            variants={fadeUp}
            className="glass-card rounded-2xl p-5 sm:p-7 border border-glass-border"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <h3 className="font-semibold text-text-primary">Contribution Activity</h3>
                <p className="text-sm text-text-secondary mt-1">
                  GitHub contributions since the start of this year
                </p>
              </div>
              <a
                href="https://github.com/raghvandrasingh111-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-cyan hover:text-accent-primary transition-colors inline-flex items-center gap-1.5"
              >
                View GitHub Profile
                <ExternalLink size={14} />
              </a>
            </div>
            <ContributionGraph />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-2 gap-4"
          >
            {repositories.map((repository) => (
              <a
                key={repository.name}
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-glass-border group transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <GithubIcon size={18} className="text-accent-primary" />
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                      {repository.name}
                    </h3>
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-text-muted group-hover:text-text-primary transition-colors"
                  />
                </div>
                <p className="text-sm text-text-secondary mt-3">
                  {repository.description}
                </p>
                <span className="tech-tag text-xs mt-4 inline-flex">
                  {repository.language}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <a
              href="https://github.com/raghvandrasingh111-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <GithubIcon size={18} />
              Explore All Repositories
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

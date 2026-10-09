"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Target,
  Search,
  Boxes,
  GitCompareArrows,
  AlertTriangle,
  BookOpen,
  Rocket,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { githubProfileUrl, type Project } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Props {
  project: Project;
}

const caseSections = [
  { key: "overview", title: "Overview", icon: Target },
  { key: "problem", title: "Problem Statement", icon: AlertTriangle },
  { key: "research", title: "Research", icon: Search },
  { key: "architecture", title: "Architecture", icon: Boxes },
  { key: "technicalDecisions", title: "Technical Decisions", icon: GitCompareArrows },
  { key: "tradeoffs", title: "Tradeoffs", icon: GitCompareArrows },
  { key: "challenges", title: "Challenges", icon: AlertTriangle },
  { key: "lessonsLearned", title: "Lessons Learned", icon: BookOpen },
  { key: "futureRoadmap", title: "Future Roadmap", icon: Rocket },
];

export default function ProjectDetails({ project }: Props) {
  const cs = project.caseStudy!;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-cyan/5" />
        <div className="absolute inset-0 grid-background" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm mb-8"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="tech-tag mb-4 inline-block">{project.category}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <motion.a
                href={project.github ?? githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon size={16} />
                {project.github ? "View Code" : "GitHub Profile"}
              </motion.a>
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              )}
              <a
                href="/raghavendra%20singh%20resume.pdf"
                download="raghavendra singh resume.pdf"
                className="btn-secondary flex items-center gap-2 text-sm"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {project.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-glass-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      )}

      {/* Case Study Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          {caseSections.map((section) => {
            const content = cs[section.key as keyof typeof cs];
            if (!content) return null;
            const Icon = section.icon;

            return (
              <motion.div
                key={section.key}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    {section.title}
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {content}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Back */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/#projects"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

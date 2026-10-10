"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./icons";
import { githubProfileUrl, type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const githubUrl = project.github ?? githubProfileUrl;
  const githubLabel = project.github ? "View Code" : "GitHub Profile";

  return (
    <motion.div
      className={`glass-card rounded-3xl overflow-hidden group transition-all duration-300 border border-glass-border hover:border-accent-primary/30 hover:shadow-[0_0_50px_rgba(99,102,241,0.12)] ${
        featured ? "lg:col-span-2 bg-gradient-to-b from-surface/90 to-surface/60" : "flex flex-col h-full"
      }`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {featured ? (
        /* Featured Layout — Split grid on Desktop, stack on Mobile */
        <div className="grid lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
          {/* Image & Preview Container */}
          <div className="lg:col-span-7 relative group/img overflow-hidden rounded-2xl border border-glass-border bg-surface-light/50 aspect-[16/10] sm:aspect-[16/9]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} Dashboard Preview`}
                fill
                quality={80}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 650px"
                className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-accent-cyan/20 flex items-center justify-center">
                <span className="text-3xl font-bold font-mono text-text-primary/30">
                  {project.title}
                </span>
              </div>
            )}

            {/* Glowing Accent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

            {/* Category & Featured Badge */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-primary/30 text-accent-primary border border-accent-primary/30 backdrop-blur-md">
                {project.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-emerald/30 text-accent-emerald border border-accent-emerald/30 backdrop-blur-md flex items-center gap-1">
                <Sparkles size={12} />
                Featured Project
              </span>
            </div>

            {/* Hover Action Link overlay */}
            <div className="absolute inset-0 bg-background/70 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-surface border border-glass-border text-text-primary hover:text-accent-primary transition-colors shadow-lg"
                aria-label={
                  project.github
                    ? `View ${project.title} repository`
                    : `View GitHub profile for ${project.title}`
                }
              >
                <GithubIcon size={20} />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface border border-glass-border text-text-primary hover:text-accent-cyan transition-colors shadow-lg"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.caseStudy && (
                <Link
                  href={`/projects/${project.slug}`}
                  className="p-3.5 rounded-xl bg-surface border border-glass-border text-text-primary hover:text-accent-emerald transition-colors shadow-lg"
                  aria-label={`Read case study for ${project.title}`}
                >
                  <FileText size={20} />
                </Link>
              )}
            </div>
          </div>

          {/* Details & Features List */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Feature Pills */}
            {project.features && (
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  Key Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-accent-primary/10 border border-accent-primary/20 text-text-primary"
                    >
                      <CheckCircle2 size={12} className="text-accent-cyan" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs font-medium py-2.5 px-4 flex items-center gap-2"
              >
                <GithubIcon size={14} />
                <span>{githubLabel}</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs font-medium py-2.5 px-5 flex items-center gap-2"
                >
                  <span>View Live Project</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.caseStudy && (
                <Link
                  href={`/projects/${project.slug}`}
                  className="btn-secondary text-xs font-medium py-2.5 px-4 flex items-center gap-2"
                >
                  <FileText size={14} />
                  <span>Case Study</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Standard Project Card Layout */
        <>
          <div className="relative overflow-hidden h-48 sm:h-52 bg-surface-light/40 border-b border-glass-border">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={80}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/15 via-accent-secondary/10 to-accent-cyan/15 flex items-center justify-center">
                <span className="text-xl font-bold font-mono text-text-primary/30">
                  {project.title}
                </span>
              </div>
            )}

            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-surface/80 text-text-secondary border border-glass-border backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-glass-border">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-1"
                >
                  <GithubIcon size={13} />
                  <span>{githubLabel}</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-1"
                  >
                    <span>Live Project</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {project.caseStudy && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-medium text-accent-cyan hover:text-accent-primary transition-colors flex items-center gap-1"
                  >
                    <span>Read Case Study</span>
                    <FileText size={13} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

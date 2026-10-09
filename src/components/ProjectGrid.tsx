"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { fadeUp } from "@/lib/animations";

const categories = ["All", "AI SaaS", "Web", "Mobile"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProject = filtered.find((p) => p.featured);
  const otherProjects = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've designed, built, and shipped"
        />

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  : "glass-card text-text-secondary hover:text-text-primary hover:bg-glass-hover"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured project full width */}
          {featuredProject && (
            <motion.div
              key={featuredProject.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="md:col-span-2"
            >
              <ProjectCard project={featuredProject} featured />
            </motion.div>
          )}

          {/* Other projects */}
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

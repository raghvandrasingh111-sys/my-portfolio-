"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/data/blog";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest Articles"
          subtitle="Thoughts on AI, engineering, and building products"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all group"
              whileHover={{ y: -6 }}
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-cyan" />

              <div className="p-6 space-y-4">
                {/* Category badge */}
                <span className="tech-tag text-xs">{post.category}</span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-sm text-accent-primary font-medium pt-2 group-hover:gap-3 transition-all">
                  Coming Soon
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

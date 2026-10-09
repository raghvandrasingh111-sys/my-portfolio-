"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-glass-border bg-surface/30 backdrop-blur-md">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding & Subtitle */}
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-lg font-bold text-text-primary">
              Raghavendra <span className="gradient-text">Singh</span>
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm">
              Full-Stack Developer &bull; Co-Founder & CTO @ Inheriq
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks size={18} />

          {/* Copyright & Stack */}
          <div className="text-center sm:text-right space-y-1 text-xs text-text-muted">
            <p className="font-medium text-text-secondary">
              &copy; 2026 Raghavendra Singh. All rights reserved.
            </p>
            <p>Built with Next.js + Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Floating Back to top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-surface/90 border border-glass-border text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-colors z-40 shadow-2xl backdrop-blur-xl"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}

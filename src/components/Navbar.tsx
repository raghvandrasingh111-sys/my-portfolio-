"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";

const sectionLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const externalNavLinks = [
  { name: "GitHub", href: "https://github.com/raghvandrasingh111-sys" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/raghavendra-singh-inheriq" },
  { name: "Instagram", href: "https://www.instagram.com/singh_raghavendra24/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] scroll-progress z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-navbar py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              aria-label="Raghavendra Singh — Home"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/raghavendra-singh-logo.svg"
                alt="Raghavendra Singh — Full-Stack, Flutter, AI/ML"
                width={210}
                height={44}
                priority
                className="h-12 w-auto sm:h-14"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1 bg-surface/50 p-1.5 rounded-full border border-glass-border backdrop-blur-md">
              {sectionLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all relative ${
                    activeSection === link.href.slice(1)
                      ? "text-text-primary bg-glass-hover shadow-sm"
                      : "text-text-secondary hover:text-text-primary hover:bg-glass"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-primary rounded-full"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Desktop CTA & Links */}
            <div className="hidden xl:flex items-center gap-3">
              <a
                href="https://github.com/raghvandrasingh111-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors px-2 py-1"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/raghavendra-singh-inheriq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors px-2 py-1"
              >
                LinkedIn
              </a>
              <motion.a
                href="/raghavendra%20singh%20resume.pdf"
                download="raghavendra singh resume.pdf"
                className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={13} />
                Resume
              </motion.a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              className="xl:hidden p-2 rounded-xl bg-glass border border-glass-border text-text-primary hover:bg-glass-hover transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[340px] bg-surface/95 border-l border-glass-border z-50 xl:hidden flex flex-col shadow-2xl backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-primary to-accent-cyan flex items-center justify-center text-white font-mono text-xs font-bold">
                    RS
                  </div>
                  <span className="font-bold text-text-primary text-base">
                    Raghavendra <span className="gradient-text">Singh</span>
                  </span>
                </div>
                <motion.button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-glass transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-3 mb-2">
                  Navigation
                </p>
                {sectionLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-text-primary bg-glass border border-accent-primary/20"
                        : "text-text-secondary hover:text-text-primary hover:bg-glass"
                    }`}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.href.slice(1) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    )}
                  </motion.a>
                ))}

                <div className="my-4 border-t border-glass-border" />

                <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-3 mb-2">
                  Social & Connect
                </p>
                {externalNavLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-accent-primary hover:bg-glass transition-all"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionLinks.length + i) * 0.04 }}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-text-muted">↗</span>
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-5 border-t border-glass-border bg-surface/50">
                <a
                  href="/raghavendra%20singh%20resume.pdf"
                  download="raghavendra singh resume.pdf"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

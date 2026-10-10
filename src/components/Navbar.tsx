"use client";

import { useState, useEffect, useRef } from "react";
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
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress-bar");
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const nowScrolled = scrollY > 30;

          if (nowScrolled !== isScrolledRef.current) {
            isScrolledRef.current = nowScrolled;
            setIsScrolled(nowScrolled);
          }

          if (progressBar) {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const progress = total > 0 ? scrollY / total : 0;
            progressBar.style.transform = `scaleX(${progress})`;
          }

          ticking = false;
        });
        ticking = true;
      }
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
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[2px] scroll-progress z-[60] origin-left scale-x-0 will-change-transform"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-navbar py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              aria-label="Raghavendra Singh — Home"
              className="flex items-center transition-transform hover:scale-102 active:scale-98"
            >
              <Image
                src="/raghavendra-singh-logo.svg"
                alt="Raghavendra Singh — Full-Stack, Flutter, AI/ML"
                width={210}
                height={44}
                priority
                className="h-12 w-auto sm:h-14"
              />
            </a>

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
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-primary rounded-full transition-all" />
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
              <a
                href="/raghavendra%20singh%20resume.pdf"
                download="raghavendra singh resume.pdf"
                className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="xl:hidden p-2 rounded-xl bg-glass border border-glass-border text-text-primary hover:bg-glass-hover transition-transform active:scale-90"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 xl:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-[85%] max-w-[340px] bg-surface/95 border-l border-glass-border z-50 xl:hidden flex flex-col shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-glass transition-colors active:scale-90"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-3 mb-2">
            Navigation
          </p>
          {sectionLinks.map((link) => (
            <a
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
            >
              <span>{link.name}</span>
              {activeSection === link.href.slice(1) && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              )}
            </a>
          ))}

          <div className="my-4 border-t border-glass-border" />

          <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-3 mb-2">
            Social & Connect
          </p>
          {externalNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-accent-primary hover:bg-glass transition-all"
            >
              <span>{link.name}</span>
              <span className="text-xs text-text-muted">↗</span>
            </a>
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
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}

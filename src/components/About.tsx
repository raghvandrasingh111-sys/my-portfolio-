"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles, Cpu, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const coreTechs = [
  "Flutter",
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Supabase",
  "PostgreSQL",
  "AI/ML",
  "Docker",
];

const strengths = [
  {
    area: "Web development",
    details: "React.js, Next.js, TypeScript, Express.js, HTML, CSS, and SEO.",
  },
  {
    area: "Mobile development",
    details: "Flutter and Dart, with clean Material Design 3 interfaces.",
  },
  {
    area: "Backend and infrastructure",
    details: "Supabase, PostgreSQL, REST APIs, Docker, Git, and Vercel.",
  },
  {
    area: "AI and machine learning",
    details:
      "Python, model training, data preprocessing, generative AI, and AI-driven product features.",
  },
  {
    area: "Product and design",
    details:
      "UI/UX design, project management, and end-to-end ownership from requirements to delivery.",
  },
];

const stats = [
  { label: "National Hackathons", value: 3, suffix: "" },
  { label: "Patent-Pending App", value: 1, suffix: "" },
  { label: "Startup Co-Founded", value: 1, suffix: "" },
  { label: "Client Websites Delivered", value: 2, suffix: "" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 30));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Full-stack developer and product builder based in Chandigarh, India."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Main Persona & Bio */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
            {/* Roles Header */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="glass-card rounded-2xl p-4 border border-accent-primary/20 bg-accent-primary/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-primary/10 text-accent-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">Co-Founder</p>
                  <p className="text-xs text-accent-primary font-medium">Inheriq</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-accent-cyan/20 bg-accent-cyan/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <Cpu size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">CTO</p>
                  <p className="text-xs text-accent-cyan font-medium">Inheriq</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-accent-emerald/20 bg-accent-emerald/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-emerald/10 text-accent-emerald">
                  <Layers size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">Full Stack</p>
                  <p className="text-xs text-accent-emerald font-medium">Web & Mobile</p>
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                I build and ship products end to end.
              </h3>

              <p className="text-text-secondary text-base leading-relaxed">
                I&apos;m Raghavendra Singh, Co-Founder of{" "}
                <a
                  href="https://inheriq.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:text-accent-primary transition-colors"
                >
                  Inheriq.in
                </a>
                , a full-stack developer and product builder based in
                Chandigarh, India.
              </p>

              <p className="text-text-secondary text-base leading-relaxed">
                At Inheriq, I own the technical side of the business: product
                architecture, development, deployment, and the AI capabilities
                behind what we build. I move from idea to a live product
                quickly, and care about shipping things people actually use.
              </p>

              <div className="pt-1">
                <h4 className="text-base font-semibold text-text-primary mb-3">
                  What I bring to the table
                </h4>
                <ul className="space-y-2.5">
                  {strengths.map(({ area, details }) => (
                    <li
                      key={area}
                      className="text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="font-semibold text-text-primary">
                        {area}:
                      </span>{" "}
                      {details}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1">
                <h4 className="text-base font-semibold text-text-primary mb-2">
                  Track record
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Before and alongside Inheriq, I built and deployed
                  ramkashiyatra.com, a lead-generating travel website for
                  Luxury Trip India. I also delivered a coaching institute
                  website and am building Benam, a premium e-commerce
                  marketplace. I created AyuNetra, a patent-pending Flutter
                  app that uses a custom AI model to read prescriptions and
                  brief patients, and I&apos;m designing WorkForce AI, a
                  platform of AI agents that understand regional Indian
                  languages and Hindi-English code-switching. I&apos;ve also
                  competed in national hackathons, including IIT Goa&apos;s
                  Hack Overflow and Build for Bharat 2026.
                </p>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m open to collaborations, partnerships, and select
                freelance projects. Reach me at{" "}
                <a
                  href="mailto:raghvandrasingh111@gmail.com"
                  className="text-accent-cyan hover:text-accent-primary transition-colors"
                >
                  raghvandrasingh111@gmail.com
                </a>{" "}
                or on{" "}
                <a
                  href="https://www.linkedin.com/in/raghavendra-singh-inheriq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:text-accent-primary transition-colors"
                >
                  LinkedIn
                </a>
                .
              </p>

              {/* Technologies list */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                  Core Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {coreTechs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-glass border border-glass-border text-text-primary hover:border-accent-primary/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Academic details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3">
                <MapPin size={18} className="text-accent-primary" />
                <span className="text-sm font-medium text-text-secondary">Chandigarh, India</span>
              </div>
              <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3">
                <GraduationCap size={18} className="text-accent-cyan" />
                <span className="text-xs sm:text-sm font-medium text-text-secondary truncate">
                  Chandigarh University
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats & Current Focus */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all border border-glass-border shadow-lg"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-text-secondary text-xs sm:text-sm mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Banner */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-accent-primary bg-gradient-to-r from-accent-primary/10 via-transparent to-transparent space-y-3">
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-ping" />
                <span>Current Focus @ Inheriq</span>
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Building a subscription platform of specialised AI agents for HR, Sales, Marketing, Support, and Finance, with regional Indian language support and Hindi-English code-switching.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

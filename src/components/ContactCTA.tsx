"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/data/socials";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Me"
          subtitle="Have a project, internship opportunity, or idea to discuss? Get in touch."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border border-glass-border shadow-2xl"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-glass border border-glass-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-glass border border-glass-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-glass border border-glass-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all text-sm resize-none"
                    placeholder="Tell me about your project, idea, or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium shadow-lg shadow-accent-primary/25"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} />
                  <span>Continue via Email</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Modern Contact Cards Stack */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-3.5">
              {/* Phone Card */}
              <a
                href={siteConfig.phoneUrl}
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all group block border border-glass-border"
              >
                <div className="p-3 rounded-xl bg-accent-cyan/15 text-accent-cyan group-hover:bg-accent-cyan/25 transition-colors">
                  <Phone size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Phone / Call
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors truncate">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all group block border border-glass-border"
              >
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors truncate">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all group block border border-glass-border"
              >
                <div className="p-3 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] group-hover:bg-[#0A66C2]/25 transition-colors">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    LinkedIn
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                    raghavendra-singh-inheriq
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all group block border border-glass-border"
              >
                <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 text-rose-400 group-hover:from-amber-500/30 group-hover:to-purple-500/30 transition-colors">
                  <span className="text-xl font-bold leading-none">@</span>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Instagram
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-rose-400 transition-colors">
                    @singh_raghavendra24
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all group block border border-glass-border"
              >
                <div className="p-3 rounded-xl bg-text-primary/10 text-text-primary group-hover:bg-text-primary/20 transition-colors">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    GitHub
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    raghvandrasingh111-sys
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 border border-glass-border">
                <div className="p-3 rounded-xl bg-accent-emerald/10 text-accent-emerald">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-text-primary">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/certifications";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              className="glass-card glass-card-hover rounded-xl p-5 transition-all group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent-secondary/10 text-accent-secondary group-hover:bg-accent-secondary/20 transition-colors flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm group-hover:text-accent-secondary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-xs mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-text-muted text-xs mt-1 font-mono">
                    {cert.date}
                  </p>
                  {cert.details.length > 0 && (
                    <ul className="text-text-secondary text-xs mt-3 space-y-1 list-disc list-inside">
                      {cert.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "label" | "value" | "blank" | "success";
  content: string;
  delay: number;
}

const terminalLines: TerminalLine[] = [
  { type: "command", content: "$ npx raghavendra", delay: 0 },
  { type: "blank", content: "", delay: 400 },
  { type: "success", content: "✓ Loading portfolio...", delay: 800 },
  { type: "blank", content: "", delay: 1200 },
  { type: "label", content: "Name:", delay: 1400 },
  { type: "value", content: "  Raghavendra Singh", delay: 1600 },
  { type: "blank", content: "", delay: 1800 },
  { type: "label", content: "Role:", delay: 2000 },
  { type: "value", content: "  Co-Founder & CTO @ Inheriq", delay: 2200 },
  { type: "blank", content: "", delay: 2400 },
  { type: "label", content: "Stack:", delay: 2600 },
  { type: "value", content: "  Flutter, React, Next.js,", delay: 2800 },
  { type: "value", content: "  TypeScript, Supabase, Python", delay: 3000 },
  { type: "blank", content: "", delay: 3200 },
  { type: "label", content: "Current Focus:", delay: 3400 },
  { type: "value", content: "  Building Inheriq", delay: 3600 },
  { type: "blank", content: "", delay: 3800 },
  { type: "label", content: "Status:", delay: 4000 },
  { type: "success", content: "  Available for opportunities ●", delay: 4200 },
];

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const getLineStyle = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return "text-accent-emerald font-mono";
      case "success":
        return "text-accent-emerald font-mono";
      case "label":
        return "text-accent-cyan font-mono font-semibold";
      case "value":
        return "text-text-primary font-mono";
      case "blank":
        return "";
      default:
        return "text-text-secondary font-mono";
    }
  };

  return (
    <motion.div
      className="terminal-window w-full max-w-lg shadow-2xl shadow-black/30"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-3 text-xs text-text-muted font-mono">
          ~/raghavendra — zsh
        </span>
      </div>

      {/* Body */}
      <div
        ref={terminalRef}
        className="p-5 min-h-[340px] text-sm leading-relaxed overflow-hidden"
      >
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            className={`${getLineStyle(line.type)} ${
              line.type === "blank" ? "h-3" : ""
            }`}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {line.content}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <span className="inline-block w-2 h-4 bg-accent-emerald animate-blink ml-0.5 align-middle" />
      </div>
    </motion.div>
  );
}

"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { socials } from "@/data/socials";

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Mail,
};

interface SocialLinksProps {
  size?: number;
  className?: string;
}

export default function SocialLinks({ size = 20, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("mailto") || social.url.startsWith("tel") ? undefined : "_blank"}
            rel={social.url.startsWith("mailto") || social.url.startsWith("tel") ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            className="p-2.5 rounded-xl glass-card glass-card-hover text-text-secondary hover:text-accent-primary transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 inline-flex items-center justify-center cursor-pointer"
          >
            {Icon && <Icon size={size} />}
          </a>
        );
      })}
    </div>
  );
}

// Brand icons removed from lucide-react — custom SVG implementations

import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export function GithubIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ReactIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.5 17.5l-7.3-9.7V17H8.7V7.1h1.7l7.1 9.4v-9.4h1.5v10.4h-1.5z" />
    </svg>
  );
}

export function PythonIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.892 0c-5.187 0-4.86 2.25-4.86 2.25l.006 2.331h4.925v.697H5.06S1.8 4.887 1.8 10.155c0 5.268 2.84 5.08 2.84 5.08h1.696v-2.398s-.09-2.84 2.84-2.84h4.868s2.75.045 2.75-2.66V4.86s.405-4.86-4.892-4.86zM9.366 1.488a.954.954 0 1 1 0 1.908.954.954 0 0 1 0-1.908zM12.108 24c5.187 0 4.86-2.25 4.86-2.25l-.006-2.331h-4.925v-.697h6.897s3.26.39 3.26-4.878c0-5.268-2.84-5.08-2.84-5.08h-1.696v2.398s.09 2.84-2.84 2.84h-4.868s-2.75-.045-2.75 2.66v2.478s-.405 4.86 4.892 4.86zm2.526-1.488a.954.954 0 1 1 0-1.908.954.954 0 0 1 0 1.908z" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.66 18c-.85 0-1.57-.22-2.14-.66-.57-.45-.88-1.07-.94-1.85h1.96c.07.38.22.67.45.86.23.19.55.28.95.28.38 0 .68-.08.9-.24.21-.16.32-.38.32-.65 0-.22-.08-.4-.23-.53-.15-.14-.42-.27-.8-.4l-.99-.34c-.88-.3-1.51-.65-1.89-1.06-.38-.41-.57-.96-.57-1.63 0-.85.32-1.53.96-2.03.64-.5 1.5-.75 2.58-.75 1.02 0 1.83.24 2.44.73.61.48.93 1.15.96 2.01h-2.02c-.05-.38-.2-.67-.44-.85-.24-.18-.56-.27-.96-.27-.37 0-.67.08-.88.23-.21.15-.31.35-.31.6 0 .21.08.38.23.51.15.13.44.26.86.4l.9.31c.92.31 1.57.67 1.95 1.08.38.41.57.96.57 1.66 0 .9-.33 1.6-1 2.1-.66.49-1.57.74-2.73.74zm7.32-.23c-.45.15-.93.23-1.46.23-1.12 0-1.95-.31-2.48-.92-.53-.61-.8-1.57-.8-2.88V10.7h-1.26V9.12h1.26V6.93l1.98-.6v2.79h2.36v1.58h-2.36v3.31c0 .54.1.92.31 1.13.2.21.52.32.95.32.32 0 .62-.06.9-.17v1.79z" fill="white" />
    </svg>
  );
}

export function SupabaseIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.35 23.41c-.69.91-2.15.42-2.15-.72v-9.69H2.63c-1.11 0-1.74-1.28-1.05-2.19L10.65.59c.69-.91 2.15-.42 2.15.72v9.69h8.57c1.11 0 1.74 1.28 1.05 2.19l-9.07 10.22z" fill="url(#supabase_grad)" />
      <defs>
        <linearGradient id="supabase_grad" x1="1.5" y1="0.5" x2="22.5" y2="23.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#3ECF8E" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function OpenAIIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.7792-2.7582a.7954.7954 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4954 4.4953zM3.6 18.3721a4.4755 4.4755 0 0 1-.5359-3.0076l.142.0853 4.7839 2.7582a.7954.7954 0 0 0 .7954 0l5.8343-3.3643v2.3325a.0805.0805 0 0 1-.0332.0616l-4.836 2.7912a4.4993 4.4993 0 0 1-6.1485-1.6569zm-1.0408-10.749a4.4755 4.4755 0 0 1 2.3453-1.9668v5.6868a.7954.7954 0 0 0 .3975.6813l5.8343 3.3643-2.02 1.1686a.071.071 0 0 1-.071 0l-4.836-2.7912a4.4946 4.4946 0 0 1-1.6454-6.143zM16.48 11.52l-5.8343-3.3738 2.02-1.1638a.0758.0758 0 0 1 .071 0l4.836 2.7912a4.4946 4.4946 0 0 1 1.6454 6.143 4.4755 4.4755 0 0 1-2.3453 1.9668V12.2a.7954.7954 0 0 0-.3928-.68z" />
    </svg>
  );
}


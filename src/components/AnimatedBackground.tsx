"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-background opacity-100" />

      {/* Gradient blobs */}
      <div className="blob blob-purple w-[500px] h-[500px] -top-40 -left-40 animate-blob" />
      <div className="blob blob-cyan w-[400px] h-[400px] top-1/3 -right-32 animate-blob [animation-delay:2s]" />
      <div className="blob blob-emerald w-[350px] h-[350px] -bottom-20 left-1/3 animate-blob [animation-delay:4s]" />

      {/* Radial fade at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

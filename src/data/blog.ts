export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building AI Workforce Platforms: Lessons from Inheriq",
    slug: "building-ai-workforce-platforms",
    date: "2026-07-15",
    readTime: "8 min",
    category: "AI",
    excerpt:
      "How I designed and built an AI Workforce Operating System that replaces disconnected chatbots with specialized AI employees across business departments.",
  },
  {
    id: "2",
    title: "Scaling Next.js Apps for Production",
    slug: "scaling-nextjs-apps",
    date: "2026-06-20",
    readTime: "6 min",
    category: "Engineering",
    excerpt:
      "Practical strategies for optimizing Next.js applications—from ISR and edge functions to database connection pooling and CDN configuration.",
  },
  {
    id: "3",
    title: "Lessons from Shipping Production Software as a Student",
    slug: "lessons-shipping-production-software",
    date: "2026-05-10",
    readTime: "5 min",
    category: "Career",
    excerpt:
      "What I learned building real products while pursuing my engineering degree—time management, technical decisions, and the startup mindset.",
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  current: boolean;
  type: "Work" | "Education";
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Co-Founder & CTO",
    company: "Inheriq",
    period: "Present",
    description:
      "Co-founding and leading technology for Inheriq, a SaaS platform focused on specialised AI agents that help businesses with tasks across HR, Sales, Marketing, Support, and Finance.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Supabase",
      "Generative AI",
    ],
    highlights: [
      "Building conversational AI agents with support for regional Indian languages and Hindi-English code-switching",
      "Developing the product as a subscription platform for business users",
    ],
    current: true,
    type: "Work",
  },
  {
    id: "2",
    role: "Junior Developer (Part-Time)",
    company: "Luxury Trip India",
    period: "2025 — 2026",
    description:
      "Designed, developed, and deployed ramkashiyatra.com end to end as a lead-generating travel website.",
    technologies: ["Web Development", "SEO", "Website Maintenance"],
    highlights: [
      "Maintain and update website content and performance",
      "Implemented SEO strategies to improve search visibility and organic traffic",
    ],
    current: false,
    type: "Work",
  },
  {
    id: "3",
    role: "Freelance Web Developer",
    company: "Independent",
    period: "Freelance",
    description:
      "Deliver responsive websites for clients, managing the full project lifecycle from requirements and communication through revisions and delivery.",
    technologies: ["Web Development", "Responsive Design", "Client Communication"],
    highlights: [
      "Delivered a coaching institute website with course listings, faculty profiles, and enquiry forms",
      "Building Benam, a premium marketplace for handmade, cultural, and luxury products",
    ],
    current: true,
    type: "Work",
  },
  {
    id: "4",
    role: "B.Tech, Information Technology",
    company: "Chandigarh University",
    period: "2024 — 2028",
    description: "Pursuing a Bachelor of Technology in Information Technology.",
    technologies: ["Information Technology", "Software Development"],
    highlights: [],
    current: true,
    type: "Education",
  },
  {
    id: "5",
    role: "Class XII",
    company: "St. John's Convent School, Delhi",
    period: "2023 — 2024",
    description: "Completed Class XII.",
    technologies: [],
    highlights: [],
    current: false,
    type: "Education",
  },
  {
    id: "6",
    role: "Class X",
    company: "St. John's Convent School, Delhi",
    period: "2022 — 2023",
    description: "Completed Class X.",
    technologies: [],
    highlights: [],
    current: false,
    type: "Education",
  },
];

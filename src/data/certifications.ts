export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  details: string[];
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Python Programming",
    issuer: "Codio via Coursera",
    date: "Apr 2025",
    icon: "Award",
    details: [
      "Selection & Iteration",
      "Lists, Strings & Files",
      "Functions, Recursion & Objects",
      "Object-Oriented Python",
    ],
  },
  {
    id: "2",
    title: "Google Project Management",
    issuer: "Coursera",
    date: "Feb 2026",
    icon: "Award",
    details: ["Foundations of Project Management", "Project Initiation"],
  },
  {
    id: "3",
    title: "AI & Productivity",
    issuer: "LinkedIn Learning",
    date: "2025",
    icon: "Award",
    details: [
      "Introduction to Artificial Intelligence",
      "What Is Generative AI?",
      "Generative AI: The Evolution of Thoughtful Online Search",
      "Learning Microsoft 365 Copilot for Work",
    ],
  },
  {
    id: "4",
    title: "Innovation & IP",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    icon: "Award",
    details: [
      "Understanding Patents: A Deeper Dive",
      "Copyright for Creatives",
      "Leading with Innovation",
      "Creative Collaboration",
    ],
  },
  {
    id: "5",
    title: "Communication & Consulting",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    icon: "Award",
    details: [
      "Business Writing Principles",
      "Preparing for Successful Communication",
      "Consulting Foundations",
      "Technical Writing: Quick Start Guides",
    ],
  },
  {
    id: "6",
    title: "Research & Tools",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    icon: "Award",
    details: [
      "SPSS for Academic Research",
      "Academic Research Foundations: Quantitative",
      "Information Literacy",
      "Word 2016: Creating Long Documents",
    ],
  },
  {
    id: "7",
    title: "UI/UX Design Workshop",
    issuer: "Workshop",
    date: "Completed",
    icon: "Award",
    details: [],
  },
];

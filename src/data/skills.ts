export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Dart" },
      { name: "Java" },
      { name: "C++" },
      { name: "C" },
      { name: "SQL" },
      { name: "Bash" },
    ],
  },
  {
    name: "Web & Mobile",
    icon: "Layout",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Flutter" },
      { name: "Material Design 3" },
    ],
  },
  {
    name: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "Model Training" },
      { name: "Data Preprocessing" },
      { name: "Streamlit" },
      { name: "Generative AI" },
      { name: "AI Prompting" },
    ],
  },
  {
    name: "Backend & Tools",
    icon: "Server",
    skills: [
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "SEO" },
    ],
  },
  {
    name: "Design",
    icon: "Wrench",
    skills: [{ name: "UI/UX Design" }, { name: "Graphic Design" }],
  },
  {
    name: "Professional & Other",
    icon: "Cloud",
    skills: [
      { name: "Project Management" },
      { name: "Problem Solving" },
      { name: "Leadership" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Technical & Business Writing" },
      { name: "MS Word" },
      { name: "Microsoft 365 Copilot" },
      { name: "IBM SPSS" },
    ],
  },
];

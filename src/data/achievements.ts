export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Co-Founder & CTO",
    description:
      "Co-founding Inheriq and leading technology for its AI agent platform.",
    icon: "Rocket",
    year: "Present",
  },
  {
    id: "2",
    title: "Hack Overflow — IIT Goa",
    description: "Represented at the national hackathon.",
    icon: "Trophy",
    year: "Participant",
  },
  {
    id: "3",
    title: "Build for Bharat 2026",
    description:
      "Participant in the National Innovation Challenge with Team The Vanguard at Chandigarh University.",
    icon: "Lightbulb",
    year: "2026",
  },
  {
    id: "4",
    title: "Hack for Green Bharat",
    description:
      "Online round participant with Team Technosanjeevak, organised by Tech Masters India.",
    icon: "GitBranch",
    year: "Participant",
  },
  {
    id: "5",
    title: "AyuNetra — Patent Pending",
    description:
      "Developed an AI-assisted medical prescription management app using Flutter, Supabase, and a custom AI/ML model.",
    icon: "Package",
    year: "Patent Pending",
  },
];

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "AI SaaS" | "Web" | "Mobile";
  description: string;
  longDescription?: string;
  stack: string[];
  features?: string[];
  outcome: string;
  featured: boolean;
  github?: string;
  live?: string;
  image?: string;
  caseStudy?: {
    overview: string;
    problem: string;
    research: string;
    architecture: string;
    technicalDecisions: string;
    tradeoffs: string;
    challenges: string;
    lessonsLearned: string;
    futureRoadmap: string;
  };
}

export const githubProfileUrl = "https://github.com/raghvandrasingh111-sys";

export const projects: Project[] = [
  {
    id: "1",
    title: "Inheriq — WorkForce AI",
    slug: "inheriq",
    category: "AI SaaS",
    description:
      "A subscription platform of specialised AI agents for business tasks across HR, Sales, Marketing, Support, and Finance.",
    longDescription:
      "Co-founding and leading development of Inheriq, a SaaS AI agent platform built around natural conversation, with support for regional Indian languages and Hindi-English code-switching.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Supabase",
      "Generative AI",
    ],
    features: [
      "Specialised AI agents",
      "Subscription platform",
      "Natural conversation",
      "Regional Indian languages",
      "Hindi-English code-switching",
    ],
    outcome: "Building an AI platform for everyday business workflows.",
    featured: true,
    github: "https://github.com/raghvandrasingh111-sys/inheriq-demo",
    live: "https://www.inheriq.in",
    image: "/inheriq-dashboard.png",
    caseStudy: {
      overview:
        "Inheriq is a subscription platform for specialised AI agents across HR, Sales, Marketing, Support, and Finance. As co-founder and CTO, I help lead its technical development.",
      problem:
        "Businesses need AI support across distinct functions. Inheriq brings specialised agents for these tasks into one conversational platform.",
      research:
        "The product scope centers on five business functions and natural conversation, with regional Indian languages and Hindi-English code-switching.",
      architecture:
        "The product is being developed as a subscription dashboard for specialised AI agents. Implementation details not provided for this portfolio are intentionally omitted.",
      technicalDecisions:
        "The documented product priorities are conversational interaction, function-specific agents, and support for regional Indian language use.",
      tradeoffs:
        "Supporting multiple business functions and language patterns requires balancing a consistent product experience with specialised agent behavior.",
      challenges:
        "The central product challenge is making specialised agents useful across different business tasks while accounting for regional language use and code-switching.",
      lessonsLearned:
        "A business-facing AI product needs clear task specialisation and an interaction style that fits the people using it.",
      futureRoadmap:
        "Continue developing the subscription platform and its specialised agents across HR, Sales, Marketing, Support, and Finance.",
    },
  },
  {
    id: "2",
    title: "AyuNetra",
    slug: "ayunetra",
    category: "Mobile",
    description:
      "A patent-pending Flutter app for managing medical prescriptions, with patient and doctor authentication and AI-powered prescription analysis.",
    longDescription:
      "AyuNetra stores prescription images in a Supabase-backed cloud database and uses a custom AI/ML model to read prescriptions and provide patient briefings. The app uses a Material Design 3 interface.",
    stack: ["Flutter", "Supabase", "AI/ML", "Material Design 3"],
    features: [
      "Patient and doctor authentication",
      "Prescription image storage",
      "AI-powered prescription reading",
      "Patient briefings",
      "Cloud database",
    ],
    outcome: "Patent-pending medical data management application.",
    featured: false,
    github: "https://github.com/raghvandrasingh111-sys/AyuNetra",
    image: "/ayunetra-artwork.svg",
    caseStudy: {
      overview:
        "AyuNetra is a patent-pending Flutter app for storing medical prescriptions and making them easier for patients and doctors to review. It combines prescription image storage with AI-assisted reading and patient briefings.",
      problem:
        "The project brings prescription storage, doctor and patient access, and prescription reading together in one mobile experience.",
      research:
        "The product scope is centered on two user roles—patients and doctors—and the prescription image as the core medical record.",
      architecture:
        "The mobile client is built with Flutter and Material Design 3. Supabase provides authentication, cloud data storage, and prescription image storage, while a custom AI/ML model reads prescription content and prepares patient briefings.",
      technicalDecisions:
        "The app combines role-based access, cloud-backed prescription images, and AI-assisted reading in a single workflow. Material Design 3 provides the visual system for the mobile interface.",
      tradeoffs:
        "Automated prescription reading can make information easier to review, but medical content still requires careful human interpretation. The app is designed as a management and briefing tool, not a replacement for professional medical advice.",
      challenges:
        "The core engineering challenge is bringing authentication, prescription image handling, and AI-assisted analysis together while keeping the experience clear for both patients and doctors.",
      lessonsLearned:
        "For health-related products, a useful interface needs to make stored records and AI-generated explanations understandable without obscuring the need for professional judgment.",
      futureRoadmap:
        "Potential next steps include refining the prescription review flow and validating AI-generated readings with appropriate clinical oversight.",
    },
  },
  {
    id: "3",
    title: "Benam",
    slug: "benam",
    category: "Web",
    description:
      "A premium e-commerce marketplace for handmade, cultural, and luxury products, currently being built for a client.",
    stack: ["Web Development", "E-Commerce", "Vercel"],
    outcome: "Client marketplace in development, deployed on Vercel.",
    featured: false,
    live: "https://benam.vercel.app",
    image: "/benam-screenshot.jpg",
    caseStudy: {
      overview:
        "Benam is a premium e-commerce marketplace for handmade, cultural, and luxury products. It is being developed as a freelance client project and is available on Vercel.",
      problem:
        "The project is focused on presenting distinctive handmade and cultural products in a polished online shopping experience.",
      research:
        "The product positioning centers on handmade, cultural, and luxury goods, with a premium marketplace experience as the main design goal.",
      architecture:
        "Benam is a web storefront deployed on Vercel. Detailed framework and backend implementation details are not included here.",
      technicalDecisions:
        "The current project scope prioritizes an online marketplace experience and a visual presentation suited to premium and handcrafted products.",
      tradeoffs:
        "A premium presentation needs to support product discovery without distracting from the craftsmanship and cultural identity of the items.",
      challenges:
        "The main product challenge is balancing the breadth of a marketplace with a distinctive, cohesive presentation for its product categories.",
      lessonsLearned:
        "A clear visual hierarchy helps a marketplace give its products and their cultural context room to stand out.",
      futureRoadmap:
        "Continue building out the client marketplace and its product discovery and shopping experience.",
    },
  },
  {
    id: "4",
    title: "Ram Kashi Yatra",
    slug: "ram-kashi-yatra",
    category: "Web",
    description:
      "A live travel website designed, built, and deployed end to end to support travel enquiries and lead generation.",
    stack: ["Web Development", "SEO", "Website Maintenance"],
    outcome: "Live production travel website.",
    featured: false,
    github: "https://github.com/raghvandrasingh111-sys/Ramkashiyatra.com",
    live: "https://www.ramkashiyatra.com",
    image: "/ram-kashi-yatra-screenshot.jpg",
    caseStudy: {
      overview:
        "Ram Kashi Yatra is a live travel website built and deployed end to end for Luxury Trip India. The site supports travel discovery and enquiry-led lead generation.",
      problem:
        "The business needed a clear online presence where travellers could explore offerings and make enquiries.",
      research:
        "The site's content and structure are focused on travel information and helping visitors take the next step toward an enquiry.",
      architecture:
        "The site is a production web experience. Its implementation covers design, development, deployment, ongoing maintenance, and SEO work.",
      technicalDecisions:
        "The build prioritizes responsive presentation, accurate and maintainable content, and search visibility for the live travel business.",
      tradeoffs:
        "The site needs to balance useful trip information with straightforward enquiry paths, while ongoing updates keep the content aligned with the business.",
      challenges:
        "Delivering the full website lifecycle required coordinating the design, production deployment, content maintenance, and SEO improvements.",
      lessonsLearned:
        "A business website is an ongoing product: launch, content accuracy, performance, and discoverability all contribute to its usefulness.",
      futureRoadmap:
        "Continue maintaining the live website and improving its content, performance, and search visibility.",
    },
  },
  {
    id: "5",
    title: "Ritavi Classes",
    slug: "coaching-institute",
    category: "Web",
    description:
      "A freelance project for Ritavi Classes, a coaching institute website presenting courses, faculty information, and enquiry options.",
    stack: ["Web Development", "Responsive Design", "Education"],
    outcome: "Freelance coaching institute website.",
    featured: false,
    live: "https://www.ritaviclasses.in/",
    image: "/ritavi-classes-screenshot.jpg",
    caseStudy: {
      overview:
        "Ritavi Classes is a freelance coaching institute website. It presents the institute's courses, faculty information, and ways for prospective students to make enquiries.",
      problem:
        "The institute needed a responsive website to introduce its courses and faculty and give prospective students a clear enquiry path.",
      research:
        "The project scope was shaped around the key information visitors need: course listings, faculty profiles, and contact or enquiry options.",
      architecture:
        "The delivered work is a responsive public-facing website. Detailed framework and backend implementation details are not included here.",
      technicalDecisions:
        "The content structure gives courses, faculty details, and enquiries dedicated visibility across the website.",
      tradeoffs:
        "The website needs to make academic information easy to scan while keeping enquiry actions accessible on smaller screens.",
      challenges:
        "The main delivery challenge was bringing course information, faculty profiles, and enquiry details into a cohesive responsive experience.",
      lessonsLearned:
        "For education websites, clear course and faculty information is central to helping visitors understand an institute and decide what to do next.",
      futureRoadmap:
        "Potential improvements include keeping course and faculty information current and refining the enquiry experience as the institute's needs evolve.",
    },
  },
];

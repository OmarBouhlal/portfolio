// ============================================================
// Portfolio Data — Omar Bouhlal
// ============================================================

export const personalInfo = {
  greeting: "👋🏼 Hello, I'm",
  name: "Omar Bouhlal",
  pronunciation: "",
  tagline:
    "Software & Intelligent Systems Engineering Student at ENSAM Meknès — passionate about the logic, reasoning, and architecture behind great software.",
  email: "omarbouhlal05@gmail.com",
  resumeUrl: "cv_en-5.pdf",
  resumeUrlFr: "cv_fr-8.pdf",
  socialLinks: {
    github: "https://github.com/OmarBouhlal",
    linkedin: "https://www.linkedin.com/in/omar-bouhlal-101ba6353",
    twitter: "",
  },
};

export const aboutMe = {
  paragraphs: [
    "I'm a 4th-year engineering student at ENSAM Meknès, specializing in Software & Intelligent Systems. What drives me is the logic behind software — designing clean architectures, reasoning about systems, and building robust backends that hold everything together.",
    "Beyond my studies, I'm a self-taught game developer working with Godot Engine. I enjoy creating pixel art with LibreSprite and translating game mechanics into code. Whether it's a web platform, a mobile app, or a chess game — I care about how things are built, not just that they work.",
  ],
};

export interface ExperienceEntry {
  company: string;
  url?: string;
  roles: {
    title: string;
    startDate: string;
    endDate: string;
  }[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "ECS Informatique",
    roles: [
      {
        title: "Software Engineering Intern",
        startDate: "",
        endDate: "2025 · 1 month",
      },
    ],
  },
];

export interface EducationEntry {
  institution: string;
  url?: string;
  degree: string;
  startYear: string;
  endYear: string;
  highlights?: { label: string; url?: string }[];
}

export const education: EducationEntry[] = [
  {
    institution: "ENSAM Meknès",
    url: "https://ensam-umi.ac.ma/",
    degree: "Engineering Degree — Software & Intelligent Systems",
    startYear: "2022",
    endYear: "Present",
    highlights: [
      { label: "2024 – Present: Engineering Cycle (4th Year Student)" },
      { label: "2022 – 2024: Integrated Preparatory Classes" },
    ],
  },
  {
    institution: "Groupe Scolaire Atlas — Rabat",
    degree: "2ème Année Baccalauréat — Sciences Physiques",
    startYear: "2021",
    endYear: "2022",
    highlights: [
      { label: "Mention Très Bien" },
    ],
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  repo: string;
  stack: string[];
  collaborator?: { name: string; github: string };
}

export interface ProjectCategory {
  category: string;
  icon: string;
  projects: ProjectItem[];
}

export const projectCategories: ProjectCategory[] = [
  {
    category: "Software",
    icon: "code",
    projects: [
      {
        title: "ENSAM360",
        description:
          "Immersive 360° virtual tour for ENSAM Meknès with an integrated AI chatbot. Built with microservices orchestrated via Docker.",
        repo: "https://github.com/khalil-nouisse/ENSAM360",
        stack: ["React", "Express", "Neo4j", "Leaflet", "LangChain", "Groq", "Docker"],
        collaborator: {
          name: "Khalil Ait Nouisse",
          github: "https://github.com/khalil-nouisse",
        },
      },
      {
        title: "XPFit",
        description:
          "Gamified mobile fitness app featuring comprehensive nutrition tracking, personalized workout plans, and progress monitoring.",
        repo: "https://github.com/OmarBouhlal/xpFit",
        stack: ["Flutter", "Dart", "SQLite", "Spoonacular API"],
      },
      {
        title: "Social Media Platform",
        description:
          "Scalable social media platform built with microservices, focusing on robust backend design and inter-service communication.",
        repo: "",
        stack: ["Microservices", "In Progress"],
      },
      {
        title: "ECS Expense Management System",
        description:
          "Enterprise web application using the MVC architectural design pattern to manage employee expense tracking with RBAC and reporting dashboards.",
        repo: "https://github.com/amineferdous/ECS_project",
        stack: ["ASP.NET", "C#", ".NET", "SQL Server"],
        collaborator: {
          name: "Amine Ferdous",
          github: "https://github.com/amineferdous",
        },
      },
    ],
  },
  {
    category: "Game Dev",
    icon: "gamepad",
    projects: [
      {
        title: "Chess Game",
        description:
          "Fully playable 2D chess game built with Godot, featuring custom-crafted pixel art assets and retro aesthetics.",
        repo: "https://github.com/OmarBouhlal/chess_game_with_godot",
        stack: ["Godot", "GDScript", "LibreSprite", "Pixel Art"],
      },
    ],
  },
];

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: "backend",
    title: "Backend Development",
    description:
      "Designing scalable server-side architectures with clean separation of concerns, RESTful APIs, and robust data modeling.",
  },
  {
    icon: "mobile",
    title: "Mobile Applications",
    description:
      "Building cross-platform mobile apps with Flutter, integrating APIs, local databases, and AI-powered features.",
  },
  {
    icon: "gamepad",
    title: "Game Development",
    description:
      "Creating 2D games with Godot Engine, from game mechanics and GDScript logic to custom pixel art assets.",
  },
  {
    icon: "architecture",
    title: "Software Architecture",
    description:
      "Reasoning about system design — microservices, clean architecture patterns, and maintainable codebases that scale.",
  },
];

export interface ExtracurricularEntry {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
}

export const extracurricular: ExtracurricularEntry[] = [
  {
    organization: "Gadz'IT — ENSAM Meknès IT Club",
    role: "Member",
    startDate: "2026",
    endDate: "Present",
    description: "Active member of the school's official IT club, participating in technical workshops and collaborative projects.",
  },
  {
    organization: "Techathon 2025 — Capgemini Engineering Morocco",
    role: "National Semi-finalist",
    startDate: "2025",
    endDate: "2025",
    description: "AI Innovation Challenge (ENSAM Network) themed 'Smarter Worlds with AI'. Developed an AI-driven solution as part of a team, reaching the national semi-finals.",
  },
];

export const certifications = [
  {
    name: "CS221: AI Principles & Techniques",
    issuer: "Stanford University",
    year: "2025",
  },
  {
    name: "Oracle Cloud Infrastructure (OCI)",
    issuer: "Oracle",
    year: "2024",
  },
];

export const contactInfo = {
  heading: "Let's Keep in Touch",
  description:
    "Whether you want to collaborate on a project, ask a question, or just say hi — I'm just a message away.",
  email: "omarbouhlal05@gmail.com",
  resumeUrl: "cv_en-5.pdf",
  resumeUrlFr: "cv_fr-8.pdf",
};

export const footerInfo = {
  name: "Omar Bouhlal",
  year: new Date().getFullYear(),
};

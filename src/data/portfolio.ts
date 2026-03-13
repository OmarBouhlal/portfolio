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
  resumeUrl: "/cv_en.pdf",
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
        endDate: "2024 · 1 month",
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
      { label: "4th Year Student" },
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
  {
    institution: "Groupe Scolaire Atlas — Rabat",
    degree: "1ère Année Baccalauréat — Sciences Expérimentales",
    startYear: "2020",
    endYear: "2021",
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
          "An immersive 360° virtual tour website for the ENSAM Meknès campus, enabling users to navigate the campus digitally. Features an AI-powered chatbot that assists visitors during their virtual tour experience. Built with a micro-services architecture orchestrated via Docker.",
        repo: "https://github.com/khalil-nouisse/ENSAM360",
        stack: ["React", "Node.js", "Neo4j", "Groq AI", "Docker"],
        collaborator: {
          name: "Khalil Ait Nouisse",
          github: "https://github.com/khalil-nouisse",
        },
      },
      {
        title: "XPFit",
        description:
          "A comprehensive mobile fitness application featuring gamified exercise tracking, weekly meal plans with nutrition guidance, an AI-powered chatbot, and a personalized physical evolution system.",
        repo: "https://github.com/OmarBouhlal/xpFit",
        stack: ["Flutter", "Dart", "SQLite", "Google AI", "Spoonacular API"],
      },
      {
        title: "Social Media Platform",
        description:
          "A social media platform currently in development, built with a microservices architecture for scalability and clean separation of concerns. Focused on robust backend design and inter-service communication.",
        repo: "",
        stack: ["Microservices", "In Progress"],
      },
      {
        title: "ECS Expense Management System",
        description:
          "An enterprise web application built for ECS Informatique to streamline and manage multi-criteria employee expense tracking and approval processes. Features role-based access, dynamic forms, and reporting dashboards.",
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
          "A fully playable 2D chess game built from scratch with the Godot engine. All chess pieces were hand-crafted as pixel art using LibreSprite, giving the game a distinctive retro aesthetic.",
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

export const contactInfo = {
  heading: "Let's Keep in Touch",
  description:
    "Whether you want to collaborate on a project, ask a question, or just say hi — I'm just a message away.",
  email: "omarbouhlal05@gmail.com",
  resumeUrl: "/cv_en.pdf",
};

export const footerInfo = {
  name: "Omar Bouhlal",
  year: new Date().getFullYear(),
};

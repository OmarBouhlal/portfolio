// ============================================================
// Translations — EN / FR
// ============================================================

export type Lang = "en" | "fr";

const translations = {
    en: {
        // Header nav
        nav_about: "About",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",

        // Hero
        hero_greeting: "Hello, I'm",
        hero_tagline:
            "Software & Intelligent Systems Engineering Student at ENSAM Meknès — passionate about the logic, reasoning, and architecture behind great software.",
        hero_cta_contact: "Let's connect",
        hero_badge: "🔍 Seeking an Internship as a Backend Developer for Summer 2026",
        hero_cv_en: "CV (EN)",
        hero_cv_fr: "CV (FR)",

        // About
        about_title: "About Me",
        about_p1:
            "I'm a 4th-year engineering student at ENSAM Meknès, specializing in Software & Intelligent Systems. What drives me is the logic behind software — designing clean architectures, reasoning about systems, and building robust backends that hold everything together.",
        about_p2:
            "Beyond my studies, I'm a self-taught game developer working with Godot Engine. I enjoy creating pixel art with LibreSprite and translating game mechanics into code. Whether it's a web platform, a mobile app, or a chess game — I care about how things are built, not just that they work.",

        // Experience
        experience_title: "Experience",
        experience_role_intern: "Software Engineering Intern",

        // Education
        education_title: "Education",
        education_download: "Download full resume (CV)",
        education_degree_ensam: "Engineering Degree — Software & Intelligent Systems",
        education_highlight_cycle: "2024 – Present: Engineering Cycle (4th Year Student)",
        education_highlight_prep: "2022 – 2024: Integrated Preparatory Classes",
        education_degree_bac: "2ème Année Baccalauréat — Sciences Physiques",
        education_highlight_mention: "Mention Très Bien",

        // Projects
        projects_title: "Projects",
        projects_with: "with",
        proj_ensam360_desc:
            "Immersive 360° virtual tour for ENSAM Meknès with an integrated AI chatbot. Built with microservices orchestrated via Docker.",
        proj_xpfit_desc:
            "Gamified mobile fitness app featuring comprehensive nutrition tracking, personalized workout plans, and progress monitoring.",
        proj_social_desc:
            "Scalable social media platform built with microservices, focusing on robust backend design and inter-service communication.",
        proj_ecs_desc:
            "Enterprise web application using the MVC architectural design pattern to manage employee expense tracking with RBAC and reporting dashboards.",
        proj_chess_desc:
            "Fully playable 2D chess game built with Godot, featuring custom-crafted pixel art assets and retro aesthetics.",

        // Services
        services_title: "What I Do",
        svc_backend_title: "Backend Development",
        svc_backend_desc:
            "Designing scalable server-side architectures with clean separation of concerns, RESTful APIs, and robust data modeling.",
        svc_mobile_title: "Mobile Applications",
        svc_mobile_desc:
            "Building cross-platform mobile apps with Flutter, integrating APIs, local databases, and AI-powered features.",
        svc_game_title: "Game Development",
        svc_game_desc:
            "Creating 2D games with Godot Engine, from game mechanics and GDScript logic to custom pixel art assets.",
        svc_arch_title: "Software Architecture",
        svc_arch_desc:
            "Reasoning about system design — microservices, clean architecture patterns, and maintainable codebases that scale.",

        // Contact
        contact_title: "Contact",
        contact_heading: "Let's Keep in Touch",
        contact_desc:
            "Whether you want to collaborate on a project, ask a question, or just say hi — I'm just a message away.",
        contact_btn_email: "Contact me",
        contact_btn_cv_en: "Download CV (EN)",
        contact_btn_cv_fr: "Download CV (FR)",

        // Footer
        footer_tagline: "Designed & built by Omar Bouhlal",
    },

    fr: {
        // Header nav
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_contact: "Contact",

        // Hero
        hero_greeting: "Bonjour, je suis",
        hero_tagline:
            "Étudiant ingénieur en Logiciels & Systèmes Intelligents à l'ENSAM Meknès — passionné par la logique, le raisonnement et l'architecture derrière les grands logiciels.",
        hero_cta_contact: "Entrer en contact",
        hero_badge: "🔍 À la recherche d'un stage en développement backend pour l'été 2026",
        hero_cv_en: "CV (EN)",
        hero_cv_fr: "CV (FR)",

        // About
        about_title: "À propos de moi",
        about_p1:
            "Je suis étudiant en 4ème année d'ingénierie à l'ENSAM Meknès, spécialisé en Logiciels & Systèmes Intelligents. Ce qui me motive, c'est la logique derrière le logiciel — concevoir des architectures propres, raisonner sur les systèmes et construire des backends robustes qui maintiennent tout en place.",
        about_p2:
            "En dehors de mes études, je suis un développeur de jeux autodidacte travaillant avec Godot Engine. J'aime créer du pixel art avec LibreSprite et traduire des mécaniques de jeu en code. Qu'il s'agisse d'une plateforme web, d'une application mobile ou d'un jeu d'échecs — ce qui m'importe, c'est la façon dont les choses sont construites, pas seulement qu'elles fonctionnent.",

        // Experience
        experience_title: "Expérience",
        experience_role_intern: "Stagiaire en Génie Logiciel",

        // Education
        education_title: "Formation",
        education_download: "Télécharger le CV complet",
        education_degree_ensam: "Diplôme d'ingénieur — Logiciels & Systèmes Intelligents",
        education_highlight_cycle: "2024 – Présent : Cycle ingénieur (4ème année)",
        education_highlight_prep: "2022 – 2024 : Classes préparatoires intégrées",
        education_degree_bac: "2ème Année Baccalauréat — Sciences Physiques",
        education_highlight_mention: "Mention Très Bien",

        // Projects
        projects_title: "Projets",
        projects_with: "avec",
        proj_ensam360_desc:
            "Visite virtuelle immersive à 360° de l'ENSAM Meknès avec un chatbot IA intégré. Construit avec des microservices orchestrés via Docker.",
        proj_xpfit_desc:
            "Application mobile de fitness gamifiée avec un suivi nutritionnel complet, des plans d'entraînement personnalisés et un suivi des progrès.",
        proj_social_desc:
            "Plateforme de réseau social évolutive construite avec des microservices, axée sur une conception backend robuste et la communication inter-services.",
        proj_ecs_desc:
            "Application web d'entreprise utilisant le patron de conception MVC pour gérer le suivi des dépenses des employés avec RBAC et des tableaux de bord de reporting.",
        proj_chess_desc:
            "Jeu d'échecs 2D entièrement jouable construit avec Godot, avec des assets en pixel art créés sur mesure et une esthétique rétro.",

        // Services
        services_title: "Ce que je fais",
        svc_backend_title: "Développement Backend",
        svc_backend_desc:
            "Conception d'architectures serveur évolutives avec une séparation claire des responsabilités, des API RESTful et une modélisation de données robuste.",
        svc_mobile_title: "Applications Mobiles",
        svc_mobile_desc:
            "Développement d'apps mobiles multiplateformes avec Flutter, intégration d'API, bases de données locales et fonctionnalités alimentées par l'IA.",
        svc_game_title: "Développement de Jeux",
        svc_game_desc:
            "Création de jeux 2D avec Godot Engine, de la mécanique de jeu et la logique GDScript aux assets pixel art personnalisés.",
        svc_arch_title: "Architecture Logicielle",
        svc_arch_desc:
            "Réflexion sur la conception de systèmes — microservices, patterns d'architecture propre et bases de code maintenables qui passent à l'échelle.",

        // Contact
        contact_title: "Contact",
        contact_heading: "Restons en Contact",
        contact_desc:
            "Que vous souhaitiez collaborer sur un projet, poser une question ou simplement dire bonjour — je suis à portée de message.",
        contact_btn_email: "Me contacter",
        contact_btn_cv_en: "Télécharger CV (EN)",
        contact_btn_cv_fr: "Télécharger CV (FR)",

        // Footer
        footer_tagline: "Conçu & développé par Omar Bouhlal",
    },
} as const;

export type TranslationKey = keyof typeof translations.en;
export default translations;

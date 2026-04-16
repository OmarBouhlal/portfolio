import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import {
    HiOutlineCodeBracket,
    HiOutlinePuzzlePiece,
} from "react-icons/hi2";
import { projectCategories } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

const categoryIconMap: Record<string, React.ReactNode> = {
    code: <HiOutlineCodeBracket />,
    gamepad: <HiOutlinePuzzlePiece />,
};

// Map project titles to their translation keys
type ProjectDescKey =
    | "proj_ensam360_desc"
    | "proj_xpfit_desc"
    | "proj_social_desc"
    | "proj_ecs_desc"
    | "proj_chess_desc";

const projectDescMap: Record<string, ProjectDescKey> = {
    "ENSAM360": "proj_ensam360_desc",
    "XPFit": "proj_xpfit_desc",
    "Social Media Platform": "proj_social_desc",
    "ECS Expense Management System": "proj_ecs_desc",
    "Chess Game": "proj_chess_desc",
};

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    {t("projects_title")}
                </motion.h2>

                {projectCategories.map((cat, ci) => (
                    <motion.div
                        key={ci}
                        className="projects-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.45, delay: ci * 0.15 }}
                    >
                        <div className="projects-category-header">
                            <span className="projects-category-icon">
                                {categoryIconMap[cat.icon] || <HiOutlineCodeBracket />}
                            </span>
                            <h3 className="projects-category-name">{cat.category}</h3>
                        </div>
                        <div className="projects-list">
                            {cat.projects.map((project, pi) => (
                                <motion.div
                                    key={pi}
                                    className="project-card"
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    transition={{ duration: 0.4, delay: pi * 0.1 }}
                                >
                                    <div className="project-card-top">
                                        <h4 className="project-title">{project.title}</h4>
                                        {project.repo && (
                                            <a
                                                href={project.repo}
                                                className="project-repo-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} GitHub repo`}
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                    <p className="project-desc">
                                        {projectDescMap[project.title]
                                            ? t(projectDescMap[project.title])
                                            : project.description}
                                    </p>
                                    <div className="project-meta">
                                        <div className="project-stack">
                                            {project.stack.map((tech, ti) => (
                                                <span key={ti} className="project-stack-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        {project.collaborator && (
                                            <span className="project-collaborator">
                                                {t("projects_with")}{" "}
                                                <a
                                                    href={project.collaborator.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {project.collaborator.name}
                                                </a>
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

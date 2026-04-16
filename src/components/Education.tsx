import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { education, personalInfo } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import "./Education.css";

// Map data strings to translation keys for degree/highlight fields
type EducationKey =
    | "education_degree_ensam"
    | "education_degree_bac"
    | "education_highlight_cycle"
    | "education_highlight_prep"
    | "education_highlight_mention";

const degreeMap: Record<string, EducationKey> = {
    "Engineering Degree — Software & Intelligent Systems": "education_degree_ensam",
    "2ème Année Baccalauréat — Sciences Physiques": "education_degree_bac",
};

const highlightMap: Record<string, EducationKey> = {
    "2024 – Present: Engineering Cycle (4th Year Student)": "education_highlight_cycle",
    "2022 – 2024: Integrated Preparatory Classes": "education_highlight_prep",
    "Mention Très Bien": "education_highlight_mention",
};

export default function Education() {
    const { t } = useLanguage();

    return (
        <section className="education section" id="education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    {t("education_title")}
                </motion.h2>
                <div className="education-list">
                    {education.map((item, i) => (
                        <motion.div
                            key={i}
                            className="education-item"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                        >
                            <div className="education-item-top">
                                <span className="education-institution">
                                    {item.url ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.institution}
                                        </a>
                                    ) : (
                                        item.institution
                                    )}
                                </span>
                                <span className="education-years">
                                    {item.startYear} – {item.endYear}
                                </span>
                            </div>
                            <p className="education-degree">
                                {degreeMap[item.degree] ? t(degreeMap[item.degree]) : item.degree}
                            </p>
                            {item.highlights && item.highlights.length > 0 && (
                                <div className="education-highlights">
                                    {item.highlights.map((h, hi) => {
                                        const label = highlightMap[h.label] ? t(highlightMap[h.label]) : h.label;
                                        return h.url ? (
                                            <a
                                                key={hi}
                                                href={h.url}
                                                className="education-highlight"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <span key={hi} className="education-highlight">
                                                {label}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="education-resume"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <HiOutlineDocumentArrowDown size={18} />
                        {t("education_download")}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

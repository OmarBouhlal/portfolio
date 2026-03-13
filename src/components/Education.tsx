import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { education, personalInfo } from "../data/portfolio";
import "./Education.css";

export default function Education() {
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
                    Education
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
                            <p className="education-degree">{item.degree}</p>
                            {item.highlights && item.highlights.length > 0 && (
                                <div className="education-highlights">
                                    {item.highlights.map((h, hi) =>
                                        h.url ? (
                                            <a
                                                key={hi}
                                                href={h.url}
                                                className="education-highlight"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {h.label}
                                            </a>
                                        ) : (
                                            <span key={hi} className="education-highlight">
                                                {h.label}
                                            </span>
                                        )
                                    )}
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
                        Download full resume (CV)
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

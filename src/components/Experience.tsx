import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, type ExperienceEntry } from "../data/portfolio";
import "./Experience.css";

function ExperienceItem({
    item,
    index,
}: {
    item: ExperienceEntry;
    index: number;
}) {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <button className="experience-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="experience-company">
                    {item.url ? (
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            {item.company}
                        </a>
                    ) : (
                        item.company
                    )}
                </span>
                <span className={`experience-toggle ${isOpen ? "open" : ""}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="experience-roles"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {item.roles.map((role, ri) => (
                            <div className="experience-role" key={ri}>
                                <span className="experience-role-title">{role.title}</span>
                                <span className="experience-role-dates">
                                    {role.startDate ? `${role.startDate} – ${role.endDate}` : role.endDate}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>
                <div className="experience-list">
                    {experience.map((item, i) => (
                        <ExperienceItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

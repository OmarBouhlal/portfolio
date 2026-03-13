import { motion } from "framer-motion";
import { aboutMe } from "../data/portfolio";
import "./About.css";

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    {aboutMe.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

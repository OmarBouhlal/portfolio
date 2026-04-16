import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import "./About.css";

export default function About() {
    const { t } = useLanguage();

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
                    {t("about_title")}
                </motion.h2>
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <p>{t("about_p1")}</p>
                    <p>{t("about_p2")}</p>
                </motion.div>
            </div>
        </section>
    );
}

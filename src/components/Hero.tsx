import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { personalInfo } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t("hero_greeting")}
                    </motion.p>
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        {personalInfo.name}
                    </motion.h1>
                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        {t("hero_tagline")}
                    </motion.p>
                    <div className="hero-actions">
                        <motion.a
                            href={personalInfo.resumeUrl}
                            className="hero-cta secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {t("hero_cv_en")}
                        </motion.a>
                        <motion.a
                            href={personalInfo.resumeUrlFr}
                            className="hero-cta secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.85 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {t("hero_cv_fr")}
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {t("hero_cta_contact")} <HiArrowRight />
                        </motion.a>
                        <motion.span
                            className="hero-badge"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            {t("hero_badge")}
                        </motion.span>
                    </div>
                </div>
                <motion.div
                    className="hero-avatar-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="hero-avatar-ring" />
                    <img
                        src="me.jpeg"
                        alt="Omar Bouhlal"
                        className="hero-avatar"
                    />
                </motion.div>
            </div>
        </section>
    );
}

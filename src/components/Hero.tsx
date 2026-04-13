import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
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
                        {personalInfo.greeting}
                    </motion.p>
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        {personalInfo.name}
                    </motion.h1>
                    {personalInfo.pronunciation && (
                        <motion.p
                            className="hero-pronunciation"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {personalInfo.pronunciation}
                        </motion.p>
                    )}
                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        {personalInfo.tagline}
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
                            CV (EN)
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
                            CV (FR)
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
                            Let's connect <HiArrowRight />
                        </motion.a>
                        <motion.span
                            className="hero-badge"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            🔍 Seeking an Internship as a Backend Developer for Summer 2026
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

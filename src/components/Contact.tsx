import { motion } from "framer-motion";
import {
    HiOutlineEnvelope,
    HiOutlineDocumentArrowDown,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { contactInfo, personalInfo } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    Contact
                </motion.h2>
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                >
                    <h3 className="contact-heading">{contactInfo.heading}</h3>
                    <p className="contact-desc">{contactInfo.description}</p>
                    <div className="contact-actions">
                        <a href={`mailto:${contactInfo.email}`} className="contact-btn primary">
                            <HiOutlineEnvelope size={18} />
                            Contact me
                        </a>
                        <a
                            href={contactInfo.resumeUrl}
                            className="contact-btn secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <HiOutlineDocumentArrowDown size={18} />
                            Download CV (EN)
                        </a>
                        <a
                            href={contactInfo.resumeUrlFr}
                            className="contact-btn secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <HiOutlineDocumentArrowDown size={18} />
                            Download CV (FR)
                        </a>
                    </div>
                    <div className="contact-socials">
                        {personalInfo.socialLinks.github && (
                            <a
                                href={personalInfo.socialLinks.github}
                                className="contact-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        )}
                        {personalInfo.socialLinks.linkedin && (
                            <a
                                href={personalInfo.socialLinks.linkedin}
                                className="contact-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        )}
                        {personalInfo.socialLinks.twitter && (
                            <a
                                href={personalInfo.socialLinks.twitter}
                                className="contact-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

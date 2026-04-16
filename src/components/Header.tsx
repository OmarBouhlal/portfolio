import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, toggleLang, t } = useLanguage();

    const navLinks = [
        { label: t("nav_about"), href: "#about" },
        { label: t("nav_experience"), href: "#experience" },
        { label: t("nav_education"), href: "#education" },
        { label: t("nav_projects"), href: "#projects" },
        { label: t("nav_skills"), href: "#services" },
        { label: t("nav_contact"), href: "#contact" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-inner">
                <a href="#hero" className="header-logo">
                    OB.
                </a>
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                    <button
                        className="lang-toggle"
                        onClick={toggleLang}
                        aria-label="Toggle language"
                    >
                        <span className={lang === "en" ? "lang-active" : ""}>EN</span>
                        <span className="lang-divider">|</span>
                        <span className={lang === "fr" ? "lang-active" : ""}>FR</span>
                    </button>
                </nav>
                <div className="header-right">
                    <button
                        className="lang-toggle lang-toggle--mobile"
                        onClick={toggleLang}
                        aria-label="Toggle language"
                    >
                        <span className={lang === "en" ? "lang-active" : ""}>EN</span>
                        <span className="lang-divider">|</span>
                        <span className={lang === "fr" ? "lang-active" : ""}>FR</span>
                    </button>
                    <button
                        className={`menu-toggle ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            <div
                className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}
                onClick={handleNavClick}
            >
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </div>
        </header>
    );
}

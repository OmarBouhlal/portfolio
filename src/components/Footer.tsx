import { footerInfo } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-text">
                    © {footerInfo.year} <span>|</span> {footerInfo.name} <span>|</span>{" "}
                    {t("footer_tagline")}
                </p>
            </div>
        </footer>
    );
}

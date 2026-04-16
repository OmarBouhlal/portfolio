import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-text">
                    {t("footer_tagline")}
                </p>
            </div>
        </footer>
    );
}

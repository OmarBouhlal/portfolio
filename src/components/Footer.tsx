import { footerInfo } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-text">
                    © {footerInfo.year} <span>|</span> {footerInfo.name} <span>|</span>{" "}
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

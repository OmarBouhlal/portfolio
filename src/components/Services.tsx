import { motion } from "framer-motion";
import {
    HiOutlineServerStack,
    HiOutlineDevicePhoneMobile,
    HiOutlinePuzzlePiece,
    HiOutlineCubeTransparent,
} from "react-icons/hi2";
import { services } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import "./Services.css";

const iconMap: Record<string, React.ReactNode> = {
    backend: <HiOutlineServerStack />,
    mobile: <HiOutlineDevicePhoneMobile />,
    gamepad: <HiOutlinePuzzlePiece />,
    architecture: <HiOutlineCubeTransparent />,
};

// Map service icons to translation keys
type ServiceTitleKey = "svc_backend_title" | "svc_mobile_title" | "svc_game_title" | "svc_arch_title";
type ServiceDescKey = "svc_backend_desc" | "svc_mobile_desc" | "svc_game_desc" | "svc_arch_desc";

const serviceTitleMap: Record<string, ServiceTitleKey> = {
    backend: "svc_backend_title",
    mobile: "svc_mobile_title",
    gamepad: "svc_game_title",
    architecture: "svc_arch_title",
};

const serviceDescMap: Record<string, ServiceDescKey> = {
    backend: "svc_backend_desc",
    mobile: "svc_mobile_desc",
    gamepad: "svc_game_desc",
    architecture: "svc_arch_desc",
};

export default function Services() {
    const { t } = useLanguage();

    return (
        <section className="services section" id="services">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    {t("services_title")}
                </motion.h2>
                <div className="services-grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                        >
                            <div className="service-icon">
                                {iconMap[service.icon] || <HiOutlineServerStack />}
                            </div>
                            <h3 className="service-title">
                                {serviceTitleMap[service.icon] ? t(serviceTitleMap[service.icon]) : service.title}
                            </h3>
                            <p className="service-desc">
                                {serviceDescMap[service.icon] ? t(serviceDescMap[service.icon]) : service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

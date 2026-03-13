import { motion } from "framer-motion";
import {
    HiOutlineServerStack,
    HiOutlineDevicePhoneMobile,
    HiOutlinePuzzlePiece,
    HiOutlineCubeTransparent,
} from "react-icons/hi2";
import { services } from "../data/portfolio";
import "./Services.css";

const iconMap: Record<string, React.ReactNode> = {
    backend: <HiOutlineServerStack />,
    mobile: <HiOutlineDevicePhoneMobile />,
    gamepad: <HiOutlinePuzzlePiece />,
    architecture: <HiOutlineCubeTransparent />,
};

export default function Services() {
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
                    What I Do
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
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

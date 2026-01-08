import { useRef, useState } from "react";
import { motion } from "framer-motion";
import FluidBackground from "../animtion2";

import "./services.css";
import { Col, Row } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import FullPageScrollWrapper from "../../sccrollwatcher";

// servicesData.js
const services = [
  {
    id: 1,
    title: "ADVANCE PROTECTION",
    subtitle: "CONDITIONS OF ARRIVAL",
    description: "Engineered protection frameworks that ensure controlled movement, discretion, and continuity — without disruption or visibility.",
    image: "/assets/services/advance-protection.png",
  },
  {
    id: 2,
    title: "SECURE ESTATE",
    subtitle: "RESIDENTIAL & ASSET CONTINUITY",
    description: "Long-term oversight and assurance for residences and estates, integrating life safety, systems governance, and operational continuity.",
    image: "/assets/services/secure-estate.png",
  },
  {
    id: 3,
    title: "DIGITAL DOMAIN PROTECTION",
    subtitle: "PRIVACY & COMMUNICATIONS",
    description: "Governance of digital exposure, communications integrity, and access — preserving privacy and confidence across personal and professional domains.",
    image: "/assets/services/digital-domain.png",
  },
  {
    id: 4,
    title: "COMMAND & CONTROL OPERATIONS",
    subtitle: "OVERSIGHT & GOVERNANCE",
    description: "Centralized command oversight that unifies intelligence, monitoring, and decision support into a single accountable operational standard.",
    image: "/assets/services/command-control.png",
  },
  {
    id: 5,
    title: "CONTINUITY & MONITORING",
    subtitle: "24/7 ASSURANCE",
    description: "Always-on monitoring and calm escalation governance designed to sustain safety, operations, and continuity without unnecessary intervention.",
    image: "/assets/services/continuity-monitoring.png",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(1);
  const cardRefs = useRef([]);
  const cardVariants = {
    hidden: {
      opacity: 0.4,
      y: 10,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // cinematic easing
      },
    },
  };

  const scrollToCard = (id, index) => {
    setActive(id);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="services-section pe-0 ps-5">
      <h6 className="services-eyebrow position-sticky top-0 start-0 text-center pFont fs-5  py-4" style={{ zIndex: "999" }}>
        OUR SERVICES.
      </h6>
      <div className="services-grid  pe-0 w-100 ps-lg-4">
        {/* LEFT NUMBERS */}
        <aside className="services-nav">
          {services.map((s, i) => (
            <button key={s.id} className={`service-index ${active === s.id ? "active" : ""}`} onClick={() => scrollToCard(s.id, i)}>
              <span className="index-number">{String(s.id).padStart(2, "0")}</span>
              <span className="index-label ps-2">{s.subtitle}</span>
            </button>
          ))}
        </aside>

        {/* RIGHT CARDS */}
        <div className="services-cards ">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`service-card ${active === s.id ? "active" : "bg-gray-color"}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.45 }}
              onViewportEnter={() => setActive(s.id)}
            >
              <motion.div
                className="card-bg-image"
                style={{ backgroundImage: `url(${s.image})` }}
                animate={{
                  scale: active === s.id ? 1.05 : 1,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* SVG RIPPLE (ACTIVE ONLY) */}
              {active === s.id && (
                <motion.div className="card-ripple" initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <FluidBackground />
                </motion.div>
              )}

              <Row>
                <Col md={9}>
                  <motion.div className="card-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: active === s.id ? 1 : 0.7, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <h3 className="display-3">{s.title}</h3>
                    <p>{s.description}</p>

                    <button className="card-cta">
                      <span>ENQUIRE NOW</span>

                      <FiArrowRight size={20} />
                    </button>
                  </motion.div>
                </Col>
                <Col md={3} className="text-start " style={{ zIndex: 99 }}>
                  <div className="d-flex flex-column gap-5 align-items-start h-100 pe-4">
                    <h2 className="card-index pFont">{String(s.id).padStart(2, "0")}</h2>

                    <div className="mt-atuo">
                      <p className="text-secondary-color fs-6 mt-5">includes personal security detail (psd) operations</p>
                      <hr className="bg-primary-color w-100 border-primary-color border-1 opacity-100 rounded-5 my-5" />
                      <button className="btn-enquire-advanced text-primary-color ">
                        <span className="arrow-wrapper border-primary-color">
                          <span className="ripple delay-1 border-primary-color" />
                          <span className="ripple delay-2 border-primary-color " />

                          <FiArrowRight size={30} />
                        </span>
                        <span className="btn-text">LEARN MORE</span>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

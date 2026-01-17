import { Container, Row, Col } from "react-bootstrap";
import { FiSearch, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import "./missionSection.css";
import FluidBackground from "../../animtion2";
import FluidBackgroundZoom from "../../animtion3";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillar = (x = 0) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function MissionSection() {
  return (
    <section className="mission-section ch-100  align-items-center d-flex position-relative overflow-hidden" id="mission">
      {/* ambient depth */}

      <Container className="position-relative bg-glass p-4 rounded-4" style={{ zIndex: 99 }}>
        <Row className="mission-grid align-items-start">
          {/* Left Content */}
          <Col lg={6} className="mission-left mb-5 mb-lg-0">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
              <motion.span variants={item} className="section-label text-secondary-color d-block mb-2">
                OUR DOCTRINE
              </motion.span>

              <motion.h2 variants={item} className="section-title text-primary-color mb-4">
                THE SYNERGY OF INTELLIGENCE AND ENGINEERING
              </motion.h2>

              <motion.p variants={item} className="mission-text text-secondary-color">
                GreenJay Protective Group exists because modern threats demand a fundamentally different approach. Today's principal faces a complex threat matrix spanning physical vulnerability,
                digital exposure, reputational risk, and family safety concerns—often simultaneously.
              </motion.p>

              <motion.p variants={item} className="mission-text text-secondary-color">
                Traditional security models address these domains in isolation. <strong className="d-block">GreenJay was designed to integrate them.</strong>
              </motion.p>

              <motion.div variants={item} className="mission-highlight bg-gray-color p-4 rounded-3 my-4">
                <p className="text-secondary-color mb-0">
                  Our founders recognized that elite protection requires two distinct but complementary disciplines: the investigative rigor of law enforcement—ensuring every action is lawful,
                  ethical, and informed—and the operational engineering of special operations—building resilient systems that prevent threats before they materialize.
                </p>
              </motion.div>

              <motion.p variants={item} className="mission-text text-secondary-color">
                This synthesis of <strong>Investigative Discipline</strong> and <strong>Operational Engineering</strong> creates what we call <em>Integrated Protective Intelligence</em>—a 360-degree
                protective ecosystem built on prevention, not reaction.
              </motion.p>
            </motion.div>
          </Col>

          {/* Right Pillars */}
          <Col lg={6} className="mission-right d-flex flex-column gap-4">
            <motion.div variants={pillar(40)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="pillar-card bg-gray-color p-4 rounded-4" whileHover={{ y: -6 }}>
              <FiSearch size={32} className="text-primary-color mb-3" />
              <h3 className="pillar-title text-primary-color">INVESTIGATIVE DISCIPLINE</h3>
              <p className="pillar-desc text-secondary-color">
                Ensuring every action is lawful, ethical, and informed by methodical, fact-based analysis. This discipline, honed through elite law enforcement experience, governs how we gather
                intelligence, assess threats, and make protective decisions.
              </p>
            </motion.div>

            <motion.div variants={pillar(40)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="pillar-card bg-gray-color p-4 rounded-4" whileHover={{ y: -6 }}>
              <FiSettings size={32} className="text-primary-color mb-3" />
              <h3 className="pillar-title text-primary-color">OPERATIONAL ENGINEERING</h3>
              <p className="pillar-desc text-secondary-color">
                Integrating advanced technology and military-grade planning to mitigate risk before it materializes. This capability, developed through special operations experience, defines how we
                architect security systems and operational protocols.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <div className="ripple-layer servicesRipple opacity-50 ">
        <FluidBackground />
      </div>
    </section>
  );
}

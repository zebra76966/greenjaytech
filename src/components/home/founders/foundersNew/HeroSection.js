import { Container, Row, Col } from "react-bootstrap";
import { FiShield, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import "./HeroSection.css";
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

export default function HeroFounder() {
  return (
    <section className="hero-section ch-100 d-flex align-items-center bg-color-dark position-relative overflow-hidden">
      {/* ambient glow */}
      <div className="hero-glow " style={{ zIndex: 99 }} />

      <Container className="position-relative" style={{ zIndex: 999 }}>
        <Row className="align-items-center">
          <Col lg={8}>
            <motion.div className="hero-content" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
              <motion.div variants={item} className="hero-badge d-inline-flex align-items-center gap-2 text-secondary-color mb-4">
                <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <FiShield />
                </motion.span>
                <span>INTEGRATED PROTECTIVE INTELLIGENCE</span>
              </motion.div>

              <motion.h1 variants={item} className="hero-title text-primary-color">
                THE LEADERSHIP
              </motion.h1>
              <p className="text-secondary-color mt-2 fs-5  pFont text-uppercase" style={{ letterSpacing: "0.2em" }}>
                Behind the Greenjay Shield of Protection
              </p>
              <motion.div variants={item} className="hero-divider my-4" />

              <motion.p variants={item} className="hero-tagline text-secondary-color">
                A Rare Fusion of Elite Law Enforcement & Military Special Operations
              </motion.p>

              <motion.p variants={item} className="hero-paragraph text-secondary-color">
                GreenJay was built by two professionals whose careers represent the highest standards of American law enforcement investigation and U.S. Army Special Forces operations. Together, they
                bring a unique convergence of <strong>investigative discipline</strong> and <strong>operational engineering</strong>—two critical capabilities that, when unified, create a protective
                standard unmatched in the private sector.
              </motion.p>

              <motion.div variants={item} className="hero-statement text-primary-color mt-4">
                "Protection is not a collection of services. It is a standard—governed by experience, engineered through technology, and sustained through disciplined oversight."
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <div className="ripple-layer servicesRipple">
        <FluidBackgroundZoom />
      </div>
    </section>
  );
}

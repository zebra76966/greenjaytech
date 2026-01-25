import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";
import "./synthesisSection.css";
import FluidBackground from "../../animtion2";
import FluidBackgroundZoom from "../../animtion3";

const column = (dir = 1) => ({
  hidden: { opacity: 0, x: 40 * dir },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
});

const listItem = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function SynthesisSection() {
  return (
    <section className="synthesis-section ch-100 bg-color-dark position-relative overflow-hidden d-flex align-items-center py-5">
      {/* ambient depth */}
      <div className="synthesis-glow" style={{ zIndex: 999 }} />

      <Container className="position-relative" style={{ zIndex: 999 }}>
        <div className="synthesis-header text-center mb-5">
          <span className="section-label text-secondary-color d-block mb-2">THE GREENJAY METHODOLOGY</span>
          <h2 className="section-title text-primary-color">TWO DISCIPLINES. ONE STANDARD.</h2>
        </div>

        <Row className="synthesis-grid align-items-center text-center text-lg-start">
          {/* Left Column */}
          <Col lg={4}>
            <motion.div variants={column(-1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="synthesis-column pe-lg-4">
              <h3 className="synthesis-column-title text-primary-color mb-3">INVESTIGATIVE DISCIPLINE</h3>
              <ul className="synthesis-list text-secondary-color">
                {[
                  "Criminal & Endangered Person Investigations",
                  "Protective Intelligence & Advance Planning",
                  "Investigative Quality Control & Case Review",
                  "Law Enforcement Advisory & Compliance",
                  "Dignitary & Executive Protection Operations",
                  "Interviewing & Information Development",
                ].map((t, i) => (
                  <motion.li key={t} variants={listItem} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Center */}
          <Col lg={4} className="d-flex justify-content-center my-5 my-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="synthesis-center text-primary-color"
            >
              <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="synthesis-emblem">
                {/* <FiShield size={84} /> */}

                <img src="/assets/logoOnly.png" height={120} />
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Column */}
          <Col lg={4}>
            <motion.div variants={column(1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="synthesis-column ps-lg-4">
              <h3 className="synthesis-column-title text-primary-color mb-3">OPERATIONAL ENGINEERING</h3>
              <ul className="synthesis-list text-secondary-color">
                {[
                  "Human Intelligence (HUMINT) & Covert Operations",
                  "Technical Surveillance Countermeasures (TSCM)",
                  "Threat Assessment & Vulnerability Analysis",
                  "Secure Communications & Estate Engineering",
                  "Executive Protection in Hostile Environments",
                  "Counter-Drone & Electronic Mitigation",
                ].map((t, i) => (
                  <motion.li key={t} variants={listItem} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="synthesis-result text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="synthesis-result-title text-primary-color mb-3">INTEGRATED PROTECTIVE INTELLIGENCE</h3>
          <p className="synthesis-result-text text-secondary-color mx-auto" style={{ maxWidth: 800 }}>
            The result is a 360-degree protective ecosystem where investigative rigor informs operational decisions, and engineered systems enable proactive threat mitigation. This is protection built
            on prevention, not reaction—a standard governed by experience, engineered through technology, and sustained through disciplined oversight.
          </p>
        </motion.div>
      </Container>

      <div className="ripple-layer servicesRipple  opacity-25">
        <FluidBackgroundZoom />
      </div>
    </section>
  );
}

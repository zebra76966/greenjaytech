import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./PortraitsSection.css";

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PortraitsSection() {
  const [robImage, setRobImage] = useState("/founders/tux.png");
  const [jenImage, setJenImage] = useState("/founders/jennifer2.png");

  return (
    <section className="portraits-section ch-100 bg-color-dark py-5" id="leadership">
      <Container>
        <div className="portraits-header text-center mb-5">
          <span className="section-label text-secondary-color d-block mb-2">BEHIND THE GREENJAY SHIELD OF PROTECTION</span>
          <h2 className="section-title text-primary-color">MEET YOUR PROTECTION TEAM</h2>
        </div>

        <Row className="portraits-grid">
          {/* Robinson */}
          <Col lg={6} className="portrait-column text-center mb-5 mb-lg-0">
            <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={1}>
              <div className="portrait-main mb-3 position-relative overflow-hidden rounded-4" style={{ aspectRatio: "3 / 4", maxWidth: 420, margin: "0 auto" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={robImage}
                    src={robImage}
                    alt="Robinson Paniagua"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>

              <div className="portrait-thumbnails d-flex justify-content-center gap-3 mb-4">
                {["/founders/tux.png", "/founders/dark.jpg", "/founders/suit2.png", "/founders/military2.png"].map((img) => (
                  <motion.div
                    key={img}
                    className={`portrait-thumb ${robImage === img ? "active" : ""}`}
                    onClick={() => setRobImage(img)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={img} alt="Robinson" />
                  </motion.div>
                ))}
              </div>

              <h3 className="portrait-name text-primary-color">ROBINSON PANIAGUA</h3>
              <p className="portrait-role text-secondary-color">FOUNDER & MANAGING DIRECTOR</p>
              <p className="portrait-quote text-secondary-color">"True security is engineered through the integration of human intelligence, advanced technology, and operational discipline."</p>
            </motion.div>
          </Col>

          {/* Jennifer */}
          <Col lg={6} className="portrait-column text-center">
            <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={2}>
              <div className="portrait-main mb-3 position-relative overflow-hidden rounded-4" style={{ aspectRatio: "3 / 4", maxWidth: 420, margin: "0 auto" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={jenImage}
                    src={jenImage}
                    alt="Jennifer Paniagua"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>

              <div className="portrait-thumbnails d-flex justify-content-center gap-3 mb-4">
                {["/founders/jennifer2.png", "/founders/jennifer3.png", "/founders/jen_street.jpg", "/founders/jen5.jpg", "/founders/jen3.jpg"].map((img) => (
                  <motion.div
                    key={img}
                    className={`portrait-thumb ${jenImage === img ? "active" : ""}`}
                    onClick={() => setJenImage(img)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={img} alt="Jennifer" />
                  </motion.div>
                ))}
              </div>

              <h3 className="portrait-name text-primary-color">JENNIFER PANIAGUA</h3>
              <p className="portrait-role text-secondary-color">CO-FOUNDER</p>
              <p className="portrait-quote text-secondary-color">"Every protective decision must be informed by meticulous intelligence and an unwavering commitment to procedural excellence."</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

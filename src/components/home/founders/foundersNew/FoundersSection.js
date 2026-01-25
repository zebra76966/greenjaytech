import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./FoundersSection.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FoundersSection() {
  return (
    <section className="founders-section ch-100 d-flex align-items-center py-5 bg-color-dark position-relative overflow-hidden" id="founders">
      <Container fluid className="py-5">
        <div className="founders-header text-center mb-5">
          <span className="section-label text-secondary-color d-block mb-2">LEADERSHIP</span>
          <h2 className="section-title text-primary-color">THE ARCHITECTS OF INTEGRATED PROTECTION</h2>
          <p className="mission-text text-secondary-color mt-3" style={{ maxWidth: 800, margin: "0 auto" }}>
            Our founders bring complementary disciplines that, together, form the complete foundation of GreenJay's unique protective capability.
          </p>
        </div>

        <Row className="founders-grid g-2">
          {/* Robinson */}
          <Col lg={6}>
            <motion.div
              className="founder-card bg-gray-color rounded-4 h-100 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={1}
              whileHover={{ y: -6 }}
            >
              <div className="founder-image-wrapper position-relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <motion.img
                  src="/founders/tux.png"
                  alt="Robinson Paniagua"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <div className="founder-image-overlay" />
                <span className="founder-badge text-primary-color">FOUNDER</span>

                <div className="founder-accent">
                  <img src="/founders/military2.png" alt="Robinson - Military Service" style={{ width: 90, height: 90, objectFit: "cover" }} />
                </div>
              </div>

              <div className="founder-content p-4">
                <h3 className="founder-name text-primary-color">Robinson Paniagua</h3>
                <p className="founder-title text-secondary-color">FOUNDER & MANAGING DIRECTOR</p>

                <p className="founder-tagline text-secondary-color">
                  The strategist of operational readiness and engineered security—a discipline forged in U.S. Army Special Forces and refined by a Master's degree in Engineering.
                </p>

                <p className="founder-bio text-secondary-color">
                  Robinson's career reflects a rare convergence of two distinct worlds: the uncompromising operational environments of U.S. Army Special Forces and the complex, systems-based world of
                  advanced engineering. With over fifteen years of military experience including multiple deployments to the Middle East and Latin America, his operational background spans
                  intelligence collection, human intelligence (HUMINT), covert planning, investigations, and protective operations conducted under real-world conditions. This dual expertise—spanning
                  human intelligence in non-permissive zones to the architecture of secure communications—forms the foundation of GreenJay's ability to engineer secure operating conditions across
                  physical, digital, and human domains.
                </p>

                <div className="founder-credentials d-flex flex-wrap gap-2 mb-3">
                  {["U.S. SPECIAL FORCES", "RANGER QUALIFIED", "AIRBORNE", "M.S. ENGINEERING", "B.S. COMPUTER ENG."].map((c) => (
                    <span key={c} className="credential-tag border-primary-color text-primary-color">
                      {c}
                    </span>
                  ))}
                </div>

                <div className="founder-expertise">
                  <p className="expertise-title text-secondary-color">AREAS OF MASTERY</p>
                  <div className="expertise-grid d-flex flex-wrap gap-2">
                    {["Intelligence Operations", "HUMINT & Source Mgmt", "Executive Protection", "Secure Communications", "TSCM & Counter-Drone", "Systems Integration"].map((e) => (
                      <span key={e} className="expertise-item bg-color-dark text-secondary-color">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Jennifer */}
          <Col lg={6}>
            <motion.div
              className="founder-card bg-gray-color rounded-4 h-100 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={2}
              whileHover={{ y: -6 }}
            >
              <div className="founder-image-wrapper position-relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <motion.img
                  src="/founders/jennifer2.png"
                  alt="Jennifer Paniagua"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <div className="founder-image-overlay" />
                <span className="founder-badge text-primary-color">CO-FOUNDER</span>
              </div>

              <div className="founder-content p-4">
                <h3 className="founder-name text-primary-color">Jennifer Paniagua</h3>
                <p className="founder-title text-secondary-color">CO-FOUNDER</p>

                <p className="founder-tagline text-secondary-color">
                  The authority on investigative diligence and procedural excellence—a standard of care developed over a decade in law enforcement, investigative oversight, and dignitary protection.
                </p>

                <p className="founder-bio text-secondary-color">
                  Jennifer's work is defined by an intelligence-first mindset, emphasizing prevention over reaction and structured investigation over assumption. With over a decade of law-enforcement
                  experience combining frontline policing, investigative procedures, quality control oversight, and dignitary protection, she brings a standard of procedural excellence to the private
                  sector. Her career includes credited successes in locating missing and endangered individuals through methodical investigation and multiple crime prevention interventions—identifying
                  and mitigating threats before escalation. She ensures that every protective decision is informed by meticulous intelligence, methodical investigation, and a deep understanding of the
                  human element.
                </p>

                <div className="founder-credentials d-flex flex-wrap gap-2 mb-3">
                  {["DIGNITARY PROTECTION", "INVESTIGATIVE OVERSIGHT", "CRIMINAL JUSTICE DEGREE", "QUALITY CONTROL"].map((c) => (
                    <span key={c} className="credential-tag border-primary-color text-primary-color">
                      {c}
                    </span>
                  ))}
                </div>

                <div className="founder-expertise">
                  <p className="expertise-title text-secondary-color">AREAS OF MASTERY</p>
                  <div className="expertise-grid d-flex flex-wrap gap-2">
                    {["Criminal Investigations", "Missing Persons", "Protective Intelligence", "Dignitary Protection", "Case Review & QC", "Family-Centric Strategies"].map((e) => (
                      <span key={e} className="expertise-item bg-color-dark text-secondary-color">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

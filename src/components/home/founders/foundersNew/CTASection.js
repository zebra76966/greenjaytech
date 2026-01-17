import { Container } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="cta-section ch-100 bg-color-dark" id="contact">
      <Container className="text-center">
        <div className="cta-content">
          <span className="section-label text-secondary-color d-block mb-2">BEGIN THE CONVERSATION</span>

          <h2 className="cta-title text-primary-color mb-4">EXPERIENCE GOVERNED. TECHNOLOGY ENGINEERED. PROTECTION SUSTAINED.</h2>

          <p className="cta-subtitle text-secondary-color mb-5" style={{ maxWidth: 700, margin: "0 auto" }}>
            Request a confidential consultation. We'll discuss your protection environment and determine how GreenJay's integrated methodology can engineer certainty across your world.
          </p>

          <div className="cta-buttons d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="cta-secondary text-secondary-color">
              <span className="cta-circle border-primary-color">
                <FiArrowRight />
              </span>
              LEARN MORE
            </a>

            <a href="#" className="cta-primary bg-primary-color text-dark-color">
              <span>REQUEST CONSULTATION</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

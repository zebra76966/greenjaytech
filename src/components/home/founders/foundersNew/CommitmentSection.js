import { Container, Row, Col } from "react-bootstrap";
import { FiLock, FiSettings, FiShield } from "react-icons/fi";

export default function CommitmentSection() {
  const items = [
    {
      title: "Discretion",
      text: "We operate with a quiet confidence that preserves privacy and minimizes exposure. Our presence is felt through its effectiveness, not its visibility.",
      icon: <FiLock size={32} />,
    },
    {
      title: "Integration",
      text: "Our solutions are engineered to integrate seamlessly into your life, family, and operations, enhancing your freedom and quality of life without disruption.",
      icon: <FiSettings size={32} />,
    },
    {
      title: "Confidence",
      text: "We provide the certainty that allows you to operate globally, innovate freely, and live fully, knowing your protection is governed by an unwavering standard of excellence.",
      icon: <FiShield size={32} />,
    },
  ];

  return (
    <section className="commitment-section ch-100 bg-color-dark d-flex align-items-center">
      <Container fluid className="p-xxl-5">
        <div className="commitment-header text-center mb-5">
          <span className="section-label text-secondary-color d-block mb-2">OUR COMMITMENT</span>
          <h2 className="section-title text-primary-color">THE GREENJAY STANDARD</h2>
        </div>

        <Row className="commitment-grid g-4">
          {items.map((c) => (
            <Col md={4} key={c.title}>
              <div className="commitment-card bg-gray-color p-4 rounded-4 h-100">
                <div className="text-primary-color mb-3">{c.icon}</div>
                <h3 className="commitment-title text-primary-color">{c.title}</h3>
                <p className="commitment-text text-secondary-color">{c.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

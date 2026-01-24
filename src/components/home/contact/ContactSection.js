import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import "./contactSection.css";
import FluidBackground from "../animtion2";
import FluidBackgroundZoom from "../animtion3";
import { FiMinimize, FiMinimize2 } from "react-icons/fi";

export default function ContactSection({ origin, onClose }) {
  return (
    <section className={`contact-section   px-lg-5 px-2  position-relative ${origin !== "modal" ? "ch-100 " : "pb-5"}  d-flex align-items-center mt-5 `} id="contact" style={{ overflow: "hidden" }}>
      {origin == "modal" && (
        <button className="btn-lg btn btn-oultine-dark position-absolute top-0 end-0 m-3 me-5 rounded-circle fs-5 text-primary-color " style={{ zIndex: 999 }} onClick={onClose}>
          <FiMinimize2 size={32} />
        </button>
      )}
      <Container fluid className="px-lg-5 mx-auto position-relative" style={{ zIndex: 999 }}>
        <Row className="align-items-center">
          {/* LEFT */}
          <Col md={origin !== "modal" ? 8 : 12} className="border-primary-color">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-title-eyebrow">
              GET IN TOUCH.
            </motion.p>

            <motion.h1
              className={`contact-title mt-4 text-primary-color mb-5 ${origin !== "modal" ? "" : "display-5"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              REQUEST A<span className={`hFont   ${origin !== "modal" ? " d-block pt-3" : " display-5  ps-3"}`}>PRIVATE BRIEFING</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-sub">
              Complete the form below and our team will reach out within 24 hours to schedule a confidential discussion.
            </motion.p>

            <Form className="contact-form mt-4 w-100">
              <Form.Group className="mb-4">
                <Form.Control placeholder="Name" className="contact-input" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" className="contact-input" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="phone" placeholder="Phone (optional)" className="contact-input" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={3} placeholder="Message (Brief Description of Your Protection Needs)" className="contact-input" />
              </Form.Group>

              <button className="btn-hire-pattern py-3 ms-0" style={{ scale: 0.8, transformOrigin: "left" }}>
                {/* SVG BACKGROUND */}
                <span className="btn-pattern-bg">
                  <FluidBackground />
                </span>

                {/* TEXT */}
                <span className="btn-label fw-bold">SUBMIT REQUEST</span>
              </button>
            </Form>
          </Col>

          {/* RIGHT */}

          {origin !== "modal" && (
            <Col md={4} className="contact-meta mt-5 mt-md-0 ps-4">
              <div className="mb-5">
                <h6 className=" fw-light fs-1">Visit us.</h6>
                <p>
                  SOME ADDRESS HERE <br />
                  1234 STREET NYC
                </p>
              </div>

              <div className="mb-4">
                <h6 className=" fw-light fs-1">Talk to us.</h6>
                <p>
                  +12 12314597 <br />
                  rob@greenjay.com
                </p>
              </div>

              <div className="contact-socials">
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
                <FaGlobe />
              </div>
            </Col>
          )}
        </Row>
      </Container>

      <div className="ripple-layer servicesRipple">
        <FluidBackgroundZoom />
      </div>
    </section>
  );
}

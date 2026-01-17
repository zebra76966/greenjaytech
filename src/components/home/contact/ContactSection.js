import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import "./contactSection.css";
import FluidBackground from "../animtion2";
import FluidBackgroundZoom from "../animtion3";

export default function ContactSection() {
  return (
    <section className="contact-section   px-5 position-relative ch-100 d-flex align-items-center mt-5" style={{ overflow: "hidden" }}>
      <Container fluid className="px-lg-5 mx-auto position-relative" style={{ zIndex: 99999 }}>
        <Row className="align-items-center">
          {/* LEFT */}
          <Col md={8} className="border-primary-color">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-title-eyebrow">
              GET IN TOUCH.
            </motion.p>

            <motion.h1 className="contact-title mt-4 text-primary-color mb-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              CONTACT
              <span className="hFont pt-2 ms-2">US</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-sub">
              Please feel free to contact us and we will get back to you as soon as we can.
            </motion.p>

            <Form className="contact-form mt-4 w-100">
              <Form.Group className="mb-4">
                <Form.Control placeholder="Name" className="contact-input" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" className="contact-input" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={3} placeholder="Message" className="contact-input" />
              </Form.Group>

              <button className="btn-hire-pattern py-3 ms-0" style={{ scale: 0.8, transformOrigin: "left" }}>
                {/* SVG BACKGROUND */}
                <span className="btn-pattern-bg">
                  <FluidBackground />
                </span>

                {/* TEXT */}
                <span className="btn-label fw-bold">SEND</span>
              </button>
            </Form>
          </Col>

          {/* RIGHT */}
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
        </Row>
      </Container>

      <div className="ripple-layer servicesRipple">
        <FluidBackgroundZoom />
      </div>
    </section>
  );
}

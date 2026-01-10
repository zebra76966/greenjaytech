import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import "./signup.css";
import FluidBackground from "../home/animtion2";
import FluidBackgroundZoom from "../home/animtion3";
export default function SignUp() {
  return (
    <section className="signup-section  bg-black pe-5 ps-0 position-relative ch-100 d-flex align-items-center">
      <Container fluid className=" mx-auto position-relative  ">
        <Row className="align-items-center h-75">
          <Col md={5}>
            {/* Fluid background layer */}
            <div className="position-relative overflow-hidden d-flex align-items-center rounded-3  h-100 signup-left  ">
              <div className="signup-fluid-bg ">
                <FluidBackgroundZoom />
              </div>

              {/* Blur / glass layer */}
              <div className="signup-glass" />

              {/* Actual content */}
              <div className="w-100 signup-meta position-relative">
                <div className="mb-5">
                  <h6 className="fw-light fs-1">Visit us.</h6>
                  <p>
                    SOME ADDRESS HERE <br />
                    1234 STREET NYC
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-light fs-1">Talk to us.</h6>
                  <p>
                    +12 12314597 <br />
                    rob@greenjay.com
                  </p>
                </div>

                <div className="signup-socials">
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaGlobe />
                </div>
              </div>
            </div>
          </Col>

          <Col md={7} style={{ zIndex: "9999" }} className="ps-5">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="signup-title-eyebrow">
              JOIN US.
            </motion.p>

            <motion.h1 className="signup-title mt-4 text-primary-color mb-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              SIGN
              <span className="hFont pt-2 ms-2">UP</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-primary-color ">
              Some nice sub text goes here.
            </motion.p>

            <Form className="signup-form mt-4 w-100 ">
              <Form.Group className="mb-4">
                <Form.Control placeholder="Name" className="signup-input" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" className="signup-input" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Password" className="signup-input" />
              </Form.Group>

              <button className="btn-hire-pattern py-3 ms-0" style={{ scale: 0.8, transformOrigin: "left" }}>
                {/* SVG BACKGROUND */}
                <span className="btn-pattern-bg">
                  <FluidBackground />
                </span>

                {/* TEXT */}
                <span className="btn-label fw-bold">SUBMIT</span>
              </button>

              <p className="lead text-secondary-color mt-4">
                Already have and account <span className="text-primary-color fw-bold"> SIGN IN </span>{" "}
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

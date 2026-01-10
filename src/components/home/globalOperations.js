import React from "react";
import WorldFluidMap from "./utils/worldmap";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import FluidBackground from "./animtion2";

const GlobalOperations = () => {
  return (
    <div className="ch-100 d-flex align-items-center">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={7}>
            <WorldFluidMap />
          </Col>

          <Col lg={5}>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-title-eyebrow fs-6">
              ONE ACCOUNTABLE STANDARD.
            </motion.p>

            <motion.h1
              className="contact-title mt-4 text-primary-color mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: "10.5dvh" }}
            >
              GLOBAL
              <span className="hFont pt-2 ms-2">OPERATIONS</span>
            </motion.h1>

            <div className="w-100">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className=" text-secondary-color ">
                A SINGLE STANDARD OF CONTINUITY ACROSS BORDERS.
              </motion.p>

              <div className="d-flex gap-4 w-100 align-items-center mt-5 pt-4">
                <img src="/assets/thumbnail.png" alt="Greenjay" className="global-logo border-primary-color" />
                <div>
                  <button className="btn-hire-pattern py-3">
                    {/* SVG BACKGROUND */}
                    <span className="btn-pattern-bg">
                      <FluidBackground />
                    </span>

                    {/* TEXT */}
                    <span className="btn-label fw-bold">GET &nbsp;BRIEFING</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GlobalOperations;

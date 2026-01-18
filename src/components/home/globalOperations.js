import React from "react";
import WorldFluidMap from "./utils/worldmap";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import FluidBackground from "./animtion2";

const GlobalOperations = () => {
  return (
    <div className="ch-100 d-flex align-items-center" style={{ overflowX: "hidden" }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="w-100 d-md-none d-block text-center">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-title-eyebrow wrldOp fs-6">
                ONE ACCOUNTABLE STANDARD.
              </motion.p>

              <motion.h1
                className="contact-title worldOP mt-4 text-primary-color mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: "10.5vh" }}
              >
                GLOBAL
                <span className="hFont pt-2 ms-2">OPERATIONS</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className=" text-secondary-color  worldOP subtext">
                A SINGLE STANDARD OF CONTINUITY ACROSS BORDERS.
              </motion.p>
            </div>

            <WorldFluidMap />
          </Col>

          <Col md={5}>
            <div className="w-100 d-md-block d-none">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="contact-title-eyebrow wrldOp fs-6">
                ONE ACCOUNTABLE STANDARD.
              </motion.p>

              <motion.h1
                className="contact-title worldOP mt-4 text-primary-color mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: "10.5vh" }}
              >
                GLOBAL
                <span className="hFont pt-2 ms-2">OPERATIONS</span>
              </motion.h1>
            </div>

            <div className="w-100 ">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className=" text-secondary-color  worldOP subtext d-md-block d-none">
                A SINGLE STANDARD OF CONTINUITY ACROSS BORDERS.
              </motion.p>

              <div className="d-flex gap-4 w-100 align-items-center mt-md-5 pt-4 justify-content-md-start justify-content-center">
                <img src="/assets/thumbnail.png" alt="Greenjay" className="global-logo border-primary-color" />
                <div>
                  <button className="btn-hire-pattern worldOP py-3">
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

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiArrowRight, FiUser } from "react-icons/fi";
import "./servicesHero.css";
import FluidBackgroundZoom from "../animtion3";
import FluidBackground from "../animtion2";

import { FaUserAstronaut } from "react-icons/fa";
import { CiDesktopMouse2 } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContact } from "../contact/contactContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function ServicesHero() {
  const navigate = useNavigate();
  const { openContact } = useContact();

  return (
    <section className="services-hero-section bg-color-dark">
      <Container fluid>
        <Row className="align-items-center min-vh-100">
          {/* LEFT CONTENT */}
          <Col lg={12} className=" text-center px-lg-5">
            <div className="hero-top-actions d-flex align-items-center gap-2">
              <div className="hero-search d-md-flex d-none">
                <input type="text" placeholder="search..." />
                <span className="search-divider" />
                <FaMagnifyingGlass className="search-icon fs-5" />
              </div>

              <button className="hero-icon-btn">
                <FiPhone className="fs-5" />
              </button>

              <button className="hero-icon-btn">
                <FiMail className="fs-5" />
              </button>
              <button className="hero-icon-btn" onClick={() => navigate("/signup")}>
                <FiUser className="fs-5" />
              </button>
            </div>
            <div className="w-100 h-100 position-relative " style={{ zIndex: 99 }}>
              <motion.span className="services-hero-eyebrow text-primary-color mb-5" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                SERVICES CATERED TO YOUR NEEDS.
              </motion.span>

              <motion.h1 className="services-hero-title  mt-4 text-primary-color" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                OUR
                <span className="hFont pt-2 ">SERVICES</span>
              </motion.h1>

              <motion.p className="services-hero-description mb-5 text-secondary-color  text-center mx-auto" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                We don't sell "security products." We run a doctrine-driven program that hardens your lifestyle—physical, technical, and digital—under one accountable lead. Every engagement begins
                with a threat profile assessment.
              </motion.p>

              <motion.div className="services-hero-actions d-flex justify-content-center   pt-5 " variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                <div>
                  <button className="btn-hire-pattern mb-4 py-lg-4 py-3" onClick={openContact}>
                    {/* SVG BACKGROUND */}
                    <span className="btn-pattern-bg">
                      <FluidBackground />
                    </span>

                    {/* TEXT */}
                    <span className="btn-label fw-bold">REQUEST BRIEFING</span>
                  </button>
                </div>
              </motion.div>

              <button className="btn-enquire-advanced  servicesBtnEnquire">
                <span className="arrow-wrapper">
                  <span className="ripple delay-1" />
                  <span className="ripple delay-2" />

                  <FiArrowRight size={35} />
                </span>
                <span className="btn-text">SERVICES OVERVIEW</span>
              </button>
            </div>

            <div className="ripple-layer servicesRipple">
              <FluidBackgroundZoom />
            </div>
          </Col>
        </Row>
        <button className="btn btn-md consult-btn bg-primary-color position-absolute bottom-0 start-0 rounded-0 py-3 px-4" style={{ zIndex: 99 }} onClick={openContact}>
          GET CONSULTATION
          <span className=" border-1 border-dark   border-start mx-3 h-100 py-2" />
          <FaUserAstronaut className="ms-2" size={35} />
        </button>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="scroll-indicator d-md-block d-none"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          style={{ pointerEvents: "auto", cursor: "pointer" }}
        >
          {/* Mouse */}
          <div className="mouse-icon-wrapper">
            <CiDesktopMouse2 className="mouse-icon" />
            <motion.span className="scroll-dot" animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }} />
          </div>

          {/* Arrow */}
          <motion.span className="scroll-arrow" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
            <IoChevronDownOutline />
          </motion.span>
        </motion.div>
      </Container>
    </section>
  );
}

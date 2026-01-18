import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./mainHero.css";
import FluidBackground from "./animtion2";
import { FaUserAstronaut } from "react-icons/fa";
import { CiDesktopMouse2 } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import FluidBackgroundZoom from "./animtion3";
import { useNavigate } from "react-router-dom";
import { useContact } from "./contact/contactContext";

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

export default function HeroSection() {
  const navigate = useNavigate();
  const { openContact } = useContact();
  return (
    <section className="hero-section bg-color-dark">
      <Container fluid>
        <Row className="align-items-center text-lg-start text-center min-vh-100">
          {/* LEFT CONTENT */}
          <Col lg={6} className="hero-left px-lg-5">
            <motion.span className="hero-eyebrow text-primary-color mb-5" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              GREENJAY // SECURITY ARCHITECTURE + PROTECTIVE OPERATIONS.
            </motion.span>

            <motion.h1 className="hero-title mt-4 text-primary-color" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              SECURITY
              <span className="hFont d-inline">ENGINEERED</span>
            </motion.h1>

            <motion.p className="hero-description small fw-light  mb-0 text-secondary-color   " style={{ fontSize: "0.7em" }} variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <em> U.S. Army Special Forces (Green Beret) doctrine • Dignitary protection experience • Compartmented execution</em>
            </motion.p>

            <motion.p className="hero-description  text-secondary-color  fw-light small" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              Greenjay runs executive protection and estate security as one accountable program—advanced EP, AI-enabled surveillance and monitoring, access control, secure infrastructure
              (network/AV/IT segmentation), resilient communications, counter-UAS integration, and real validation. We begin with a full threat profile (physical + digital), then design, integrate,
              and test the system so your full threat signature is controlled—not just your perimeter.
            </motion.p>
            <motion.p className="hero-description small fw-light  mb-0 text-secondary-color  " style={{ fontSize: "0.7em" }} variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <em>No vendor sees the full architecture. We vet personnel, scope on a need-to-know basis, and assume responsibility for the complete operation.</em>
            </motion.p>

            <motion.div className="hero-actions d-flex d- gap-lg-5 gap-3 pt-5" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              {/* ENQUIRE BUTTON */}
              <button className="btn-enquire-advanced" onClick={openContact}>
                <span className="arrow-wrapper">
                  <span className="ripple delay-1" />
                  <span className="ripple delay-2" />

                  <FiArrowRight className="ico" />
                </span>
                <span className="btn-text text-start" style={{ letterSpacing: "0.2em" }}>
                  REQUEST A <br /> PRIVATE BREIFING
                </span>
              </button>

              {/* HIRE US BUTTON */}
              <button className="btn-hire-pattern" onClick={openContact}>
                {/* SVG BACKGROUND */}
                <span className="btn-pattern-bg">
                  <FluidBackground />
                </span>

                {/* TEXT */}
                <span className="btn-label fw-bold">HIRE&nbsp;US</span>
              </button>
            </motion.div>
          </Col>

          {/* RIGHT VISUAL */}
          <Col lg={6} className="hero-right d-lg-inline d-none">
            <div className="visual-wrapper">
              <div className="hero-top-actions d-flex align-items-center gap-2">
                {/* SEARCH */}
                <div className="hero-search">
                  <input type="text" placeholder="search..." />
                  <span className="search-divider" />
                  <FaMagnifyingGlass className="search-icon fs-5" />
                </div>

                {/* PHONE */}
                <button className="hero-icon-btn">
                  <FiPhone className="fs-5" />
                </button>

                {/* EMAIL */}
                <button className="hero-icon-btn" onClick={openContact}>
                  <FiMail className="fs-5" />
                </button>
              </div>

              {/* RIPPLE SVG BACKGROUND */}
              <div className="ripple-layer">
                <FluidBackground />
              </div>

              {/* GOLD RING */}
              <motion.div className="gold-ring" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} />

              {/* BIRD / MAIN IMAGE */}
              <motion.img
                src="/assets/bird.png" // replace with your image path
                alt="Security Symbol"
                className="hero-image"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </Col>
        </Row>
        <button className="btn btn-md consult-btn bg-primary-color position-absolute bottom-0 start-0 rounded-0 py-lg-3 py-2 px-lg-4 px-3 " onClick={openContact}>
          GET CONSULTATION
          <span className=" border-1 border-dark   border-start mx-3 h-100 py-2" />
          <FaUserAstronaut className="ms-2 ico" />
        </button>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="scroll-indicator d-lg-block d-none"
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

      <div className="ripple-layer servicesRipple d-lg-none d-lg-block">
        <FluidBackgroundZoom />
      </div>
    </section>
  );
}

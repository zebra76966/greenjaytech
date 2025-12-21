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
  return (
    <section className="hero-section bg-color-dark">
      <Container fluid>
        <Row className="align-items-center min-vh-100">
          {/* LEFT CONTENT */}
          <Col lg={6} className="hero-left px-lg-5">
            <motion.span className="hero-eyebrow text-primary-color mb-5" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              GREENJAY TECH.
            </motion.span>

            <motion.h1 className="hero-title mt-4 text-primary-color" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              SECURITY
              <span className="hFont pt-2 ">REDEFINED</span>
            </motion.h1>

            <motion.p className="hero-description mb-5 text-secondary-color  " variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
            </motion.p>

            <motion.div className="hero-actions d-flex gap-5 pt-5" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              {/* ENQUIRE BUTTON */}
              <button className="btn-enquire-advanced">
                <span className="arrow-wrapper">
                  <span className="ripple delay-1" />
                  <span className="ripple delay-2" />

                  <FiArrowRight size={35} />
                </span>
                <span className="btn-text">ENQUIRE NOW</span>
              </button>

              {/* HIRE US BUTTON */}
              <button className="btn-hire-pattern">
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
          <Col lg={6} className="hero-right">
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
                <button className="hero-icon-btn">
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
        <button className="btn btn-md consult-btn bg-primary-color position-absolute bottom-0 start-0 rounded-0 py-3 px-4">
          GET CONSULTATION
          <span className=" border-1 border-dark   border-start mx-3 h-100 py-2" />
          <FaUserAstronaut className="ms-2" size={35} />
        </button>

        {/* SCROLL INDICATOR */}
        <motion.div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} style={{ pointerEvents: "auto", cursor: "pointer" }}>
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

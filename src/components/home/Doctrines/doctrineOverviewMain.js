import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import DoctrineCard from "./DoctrineCard";
import "./doctrineOverview.css";
import doctrines from "./docrtinesDat.json";
import { useNavigate } from "react-router-dom";
import FluidBackground from "../animtion2";

export default function DoctrinesOverview({ headertxt }) {
  const [activeServ, setActivServ] = useState(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 700; // ~ one card
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      {!activeServ && (
        <section className="main-doctrines-section bg-color-dark ch-100" id="doctrines">
          <Container fluid className="px-lg-5 position-relative">
            <div className="w-100 d-flex justify-content-between  position-sticky top-0 start-0 bg-black align-items-center" style={{ zIndex: "9999" }}>
              <h6 className="services-eyebrow  Ovm pFont fs-5 py-lg-4">{headertxt || "DOCTRINES OVERVIEW."}</h6>

              <button className="btn-hire-pattern docViewAll" style={{ scale: 0.8 }}>
                {/* SVG BACKGROUND */}
                <span className="btn-pattern-bg">
                  <FluidBackground />
                </span>

                {/* TEXT */}
                <span className="btn-label fw-bold">VIEW&nbsp;ALL</span>
              </button>
            </div>

            <motion.div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="overviewMain-doctrines-scroll d-flex gap-4 mt-4 h-100 pt-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {doctrines.map((doctrine, i) => (
                <motion.div
                  key={doctrine.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                  onClick={() => navigate(`/doctrine/${i}`)}
                  className="doctrine-scroll-item"
                >
                  <DoctrineCard title={doctrine.title} description={doctrine.description} icon={doctrine.icon} src={doctrine.src} />
                </motion.div>
              ))}
            </motion.div>

            {/* Controls */}
            <div className="doctrine-scroll-controls">
              <button className={`scroll-btn ${!canLeft ? "disabled" : ""}`} onClick={() => scrollBy(-1)} disabled={!canLeft}>
                <FiChevronLeft size={22} />
              </button>
              <button className={`scroll-btn text-primary-color border-primary-color ${!canRight ? "disabled" : ""}`} onClick={() => scrollBy(1)} disabled={!canRight}>
                <FiChevronRight size={22} />
              </button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

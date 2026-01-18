import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FluidBackground from "../animtion2";

import "./services.css";
import { Col, Row } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import FullPageScrollWrapper from "../../sccrollwatcher";
import servicesData from "../ServicesMain/servicesData.json";
import { useContact } from "../contact/contactContext";

// servicesData.js

export default function ServicesSection() {
  const { openContact } = useContact();

  const [active, setActive] = useState(1);
  const cardRefs = useRef([]);
  const isAutoScrolling = useRef(false);

  const allowNavScroll = useRef(false);

  const navRefs = useRef([]);

  const cardVariants = {
    hidden: {
      opacity: 0.4,
      y: 10,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // cinematic easing
      },
    },
  };

  useEffect(() => {
    const idx = servicesData.findIndex((p) => p.id === active);
    if (idx === -1) return;

    const isTablet = window.innerWidth <= 1100;
    if (!isTablet && !allowNavScroll.current) return;
    if (isAutoScrolling.current) return;

    const el = navRefs.current[idx];
    const container = el?.parentElement;
    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();

    // Check if the item is already comfortably visible
    const isFullyVisible = elRect.left >= cRect.left + 16 && elRect.right <= cRect.right - 16;

    if (isFullyVisible) return; // ← this kills the jerk

    isAutoScrolling.current = true;

    el.scrollIntoView({
      behavior: "smooth",
      ...(isTablet ? { inline: "center", block: "nearest" } : { block: "center" }),
    });

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 250);
  }, [active]);

  const scrollToCard = (id, index) => {
    allowNavScroll.current = true;
    setActive(id);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      className="services-section pe-0 ps-xl-5"
      onMouseEnter={() => {
        allowNavScroll.current = true;
      }}
      onMouseLeave={() => {
        allowNavScroll.current = false;
      }}
    >
      <h6 className="services-eyebrow position-sticky top-0 start-0 text-center pFont fs-5  py-4" style={{ zIndex: "999" }}>
        OUR SERVICES.
      </h6>
      <div className="services-grid  pe-0 w-100 ps-lg-4">
        {/* LEFT NUMBERS */}
        <aside className={`services-nav ${servicesData.length > 5 ? "is-scrollable" : ""}`}>
          {servicesData.map((s, i) => (
            <button key={s.id} ref={(el) => (navRefs.current[i] = el)} className={`service-index ${active === s.id ? "active" : ""}`} onClick={() => scrollToCard(s.id, i)}>
              <span className="index-number">{String(s.id).padStart(2, "0")}</span>
              <span className="index-label ps-2" style={{ maxWidth: "90%" }}>
                {s.subtitle}
              </span>
            </button>
          ))}
        </aside>

        {/* RIGHT CARDS */}
        <div className="services-cards ">
          {servicesData.map((s, i) => (
            <motion.article
              key={s.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`service-card ${active === s.id ? "active" : "bg-gray-color"}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.45 }}
              onViewportEnter={() => {
                if (active !== s.id) setActive(s.id);
              }}
            >
              {/* <motion.div
                className="card-bg-image"
                style={{ backgroundImage: `url(${s.image})` }}
                animate={{
                  scale: active === s.id ? 1.05 : 1,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              /> */}

              {/* SVG RIPPLE (ACTIVE ONLY) */}
              {active === s.id && (
                <motion.div className="card-ripple" initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <FluidBackground />
                </motion.div>
              )}

              <Row>
                <Col xl={9}>
                  <motion.div className="card-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: active === s.id ? 1 : 0.7, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <h3 className="display-3">{s.title}</h3>
                    <p>{s.description}</p>

                    <button className="card-cta" onClick={openContact}>
                      <span>ENQUIRE NOW</span>

                      <FiArrowRight size={20} />
                    </button>
                  </motion.div>

                  {s.image && (
                    <div className="p-2 d-xl-block d-none">
                      <img className=" position-relative  rounded-3 w-100 cimg " src={s.image} style={{ objectFit: "contain", zIndex: 999999, opacity: 1 }} />
                    </div>
                  )}
                </Col>
                <Col xl={3} className="text-start " style={{ zIndex: 99 }}>
                  <div className="d-flex flex-xl-column flex-sm-row flex-column gap-xl-5 gap-2 align-items-start h-100 pe-md-4 pe-0">
                    <h2 className="card-index pFont d-xl-block d-none">{String(s.id).padStart(2, "0")}</h2>
                    {s.image && (
                      <div className="p-2 d-xl-none d-inline w-100">
                        <img className=" position-relative  rounded-3 w-100 cimg " src={s.image} style={{ objectFit: "contain", zIndex: 999999, opacity: 1 }} />
                      </div>
                    )}
                    <div className="mt-md-auto p-xl-0 p-2">
                      <p className="text-secondary-color fs-6 mt-md-5 mt-0 infoText">includes personal security detail (psd) operations</p>
                      <hr className="bg-primary-color w-100 border-primary-color border-1 opacity-100 rounded-5 my-md-5" />
                      <button className="btn-enquire-advanced text-primary-color " onClick={openContact}>
                        <span className="arrow-wrapper border-primary-color">
                          <span className="ripple delay-1 border-primary-color" />
                          <span className="ripple delay-2 border-primary-color " />

                          <FiArrowRight size={30} />
                        </span>
                        <span className="btn-text">LEARN MORE</span>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

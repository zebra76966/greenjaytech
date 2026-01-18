import { useRef, useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import "./serviceDoctrine.css";
import FluidBackground from "../../animtion2";
import { FiArrowRight } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";
import FluidBackgroundZoom from "../../animtion3";
import { useContact } from "../../contact/contactContext";

const imgPath = (name) => `/assets/services/doctrines/${name}`;

export default function ServiceDoctrine({ data }) {
  const { openContact } = useContact();
  const phases = useMemo(() => data?.sections?.filter((s) => s.type === "phase") || [], [data]);

  const others = useMemo(() => data?.sections?.filter((s) => s.type !== "phase") || [], [data]);

  const [active, setActive] = useState(() => phases[0]?.index || 0);
  const cardRefs = useRef([]);
  const allowNavScroll = useRef(false);

  const navRefs = useRef([]);

  const isAutoScrolling = useRef(false);

  useEffect(() => {
    // hard reset everything related to this view
    cardRefs.current = [];
    navRefs.current = [];

    const first = phases[0]?.index ?? null;
    setActive(first);

    // jump to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const idx = phases.findIndex((p) => p.index === active);
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

  if (!data) return null;

  //   phases

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

  const scrollToCard = (id, index) => {
    setActive(id);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <motion.section
      className="service-doctrine-wrapper"
      onMouseEnter={() => {
        allowNavScroll.current = true;
      }}
      onMouseLeave={() => {
        allowNavScroll.current = false;
      }}
    >
      {/* NON-PHASE SECTIONS */}

      {others.map((sec, i) => {
        if (sec.type === "doctrine") {
          return (
            <motion.div
              key={i}
              className={`doctrine-box position-relative ${sec.theme === "green" ? "doctrine-green" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ overflow: "hidden" }}
            >
              <div className="position-relative" style={{ zIndex: "999" }}>
                {sec.eyebrow && <span className="section-label">{sec.eyebrow}</span>}
                {sec.title && <h2 className="section-title">{sec.title}</h2>}

                {sec.body?.map((p, idx) => (
                  <p key={idx} className="section-body">
                    {p}
                  </p>
                ))}

                {sec.columns && (
                  <div className="three-cols">
                    {sec.columns.map((c, j) => (
                      <div key={j} className="col-item">
                        <h4>{c.title}</h4>
                        <p>{c.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.images && (
                  <div className={`image-row cols-${sec.images.length}`}>
                    {sec.images.map((img, j) => (
                      <img key={j} src={imgPath(img)} alt="" />
                    ))}
                  </div>
                )}
              </div>
              <motion.div className="card-ripple service-bg" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <FluidBackgroundZoom />
              </motion.div>
            </motion.div>
          );
        }

        if (sec.type === "method") {
          return (
            <motion.div key={i} className="doctrine-box method-box">
              {sec.eyebrow && <span className="section-label">{sec.eyebrow}</span>}
              <h2 className="section-title">{sec.title}</h2>

              {sec.body?.map((p, idx) => (
                <p key={idx} className="section-body">
                  {p}
                </p>
              ))}

              <div className="method-steps">
                {sec.steps?.map((s, k) => (
                  <div key={k} className="method-step d-flex gap-2 flex-row align-items-center">
                    <div>
                      <div className="method-circle ">{s.key}</div>
                      <div className="method-label">{s.label}</div>
                    </div>
                    {k < sec.steps.length - 1 && (
                      <div className="fs-4 text-primary-color d-md-block d-none">
                        <FiArrowRight />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {sec.images && (
                <div className="image-row cols-1">
                  <img src={imgPath(sec.images[0])} alt="" />
                </div>
              )}
            </motion.div>
          );
        }

        return null;
      })}

      <section className="services-section pe-0 ps-lg-5">
        <h6 className="services-eyebrow position-sticky top-0 start-0 text-center pFont fs-5  py-4" style={{ zIndex: "999" }}>
          THE PHASES.
        </h6>
        <div className="services-grid  pe-0 w-100 ps-lg-4">
          {/* LEFT NUMBERS */}
          <aside className={`services-nav ${phases.length > 5 ? "is-scrollable" : ""}`}>
            {phases.map((p, i) => (
              <button key={p.index} ref={(el) => (navRefs.current[i] = el)} className={`service-index ${active === p.index ? "active" : ""}`} onClick={() => scrollToCard(p.index, i)}>
                <span className="index-number">{String(p.index).padStart(2, "0")}</span>
                <span className="index-label ps-2">{p.eyebrow}</span>
              </button>
            ))}
          </aside>

          {/* RIGHT CARDS */}
          <div className="services-cards ">
            {phases.map((sec, i) => (
              <motion.article
                key={sec.index}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`service-card  ${active === sec.index ? "active bg-gray-color" : "bg-gray-color"}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.45 }}
                onViewportEnter={() => setActive(sec.index)}
              >
                {/* {sec.images?.[0] && (
                  <motion.div
                    className="card-bg-image d-block"
                    style={{ backgroundImage: `url(${imgPath(sec.images[0])})` }}
                    animate={{
                      scale: active === sec.index ? 1.05 : 1,
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                )} */}

                {/* SVG RIPPLE (ACTIVE ONLY) */}
                {active === sec.index && (
                  <motion.div className="card-ripple" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <FluidBackgroundZoom />
                  </motion.div>
                )}

                <Row>
                  <Col md={9}>
                    <motion.div className="card-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: active === sec.index ? 1 : 0.7, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                      <span className="phase-eyebrow text-secondary-color">{sec.eyebrow}</span>
                      <h3 className="display-6">{sec.title}</h3>
                      <p>{sec.purpose}</p>

                      <div className="phase-text">
                        {sec.content?.map((c, k) =>
                          c.type === "titled" ? (
                            <div key={k} className="phase-block">
                              <h4 className="pFont">{c.title}</h4>
                              <p>{c.text}</p>
                            </div>
                          ) : (
                            <p key={k}>{c.text}</p>
                          ),
                        )}
                      </div>
                    </motion.div>

                    {sec.images?.[0] && (
                      <div className="w-100 p-4 pe-5">
                        <motion.img
                          className=" position-relative w-100 rounded-3"
                          src={`${imgPath(sec.images[0])}`}
                          animate={{
                            scale: active === sec.index ? 1.05 : 1,
                          }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          style={{ maxHeight: "500px", objectFit: "contain", zIndex: 999999, opacity: 1 }}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md={3} className="text-start " style={{ zIndex: 99 }}>
                    <div className="d-flex flex-column gap-5 align-items-start h-100 pe-4">
                      <h2 className="card-index pFont d-lg-block d-none">{String(sec.index).padStart(2, "0")}</h2>

                      <div className="mt-auto">
                        <p className="text-secondary-color fs-6 mt-lg-5 mt-2">includes personal security detail (psd) operations</p>
                        <hr className="bg-primary-color w-100 border-primary-color border-1 opacity-100 rounded-5 my-lg-5 my-1" />
                        <button className="btn-enquire-advanced text-primary-color mt-lg-0 mt-2" onClick={openContact}>
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

      {data.includes && (
        <div className="includes-section">
          <div className="includes-label">SERVICE INCLUDES</div>
          <p className="includes-text">{data.includes.join(" • ")}</p>
        </div>
      )}
    </motion.section>
  );
}

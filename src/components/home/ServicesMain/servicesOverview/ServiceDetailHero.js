import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./serviceDetailHero.css";
import FluidBackground from "../../animtion2";
import services from "../servicesData.json";
import { useNavigate, useParams } from "react-router-dom";
import ServicesOverview from "./servicesOverviewMain";
import ContactMain from "../../contact/contactMain";
import ServiceDoctrine from "./ServiceDoctrine";

import serviceData from "./serviceDoctrine.json";
import ScrollToTop from "../../../scrolltotop";
import { useContact } from "../../contact/contactContext";

export default function ServiceDetailHero() {
  const { openContact } = useContact();
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;

  const [activeServ, setActiveServ] = useState({});
  const [activeDoctrine, setActiveDoctrine] = useState(null);

  // Load service + doctrine
  useEffect(() => {
    const active = services.find((e) => e.id == id);
    setActiveServ(active || {});

    if (active?.slug) {
      const doctrine = serviceData.find((d) => d.slug === active.slug);
      setActiveDoctrine(doctrine || null);
    } else {
      setActiveDoctrine(null);
    }
  }, [id]);

  return (
    <>
      <motion.section className="overviewdet-service-detail-hero ch-100 p-md-4 p-2 position-relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
        {/* LEFT PANEL */}

        <div className="overviewdet-service-detail-left pe-lg-0 pe-3 pt-md-3 pt-5 mt-md-3 mt-5">
          <motion.button
            className="btn-enquire-advanced"
            initial={{ opacity: 0, x: -20, scale: 0.8, originX: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1, originX: 0, originY: 0 }}
            onClick={() => navigate(-1)}
          >
            <span className="btn-text">GO BACK</span>
            <span className="arrow-wrapper">
              <span className="ripple delay-1" />
              <span className="ripple delay-2" />

              <FiArrowLeft size={30} />
            </span>
          </motion.button>

          <motion.h1 className="overviewdet-service-title services-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {activeServ?.title}
            {activeServ?.subhead && <small className="text-secondary-color pb-4 pt-2 opacity-75">{activeServ?.subhead}</small>}
          </motion.h1>

          <motion.div className="overviewdet-service-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <p>{activeServ?.longDescription}</p>
          </motion.div>

          {activeServ?.highlight && (
            <motion.div
              className="overviewdet-service-description-hightlight p-3 small text-secondary-color fw-light my-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <p className="my-0">
                <em> {activeServ?.highlight}</em>
              </p>
            </motion.div>
          )}

          <motion.div className="overviewdet-service-tags" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            {activeServ?.features?.map((tag, i) => (
              <span className="mb-1" key={i}>
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions d-flex gap-5 pt-5 servDet"
            initial={{ opacity: 0, y: 20, scale: 0.5, originX: 0 }}
            animate={{ opacity: 1, y: 0, scale: 0.9, originX: 0 }}
            transition={{ delay: 0.55 }}
          >
            {/* ENQUIRE BUTTON */}
            <button className="btn-enquire-advanced w-100 servDet" onClick={openContact}>
              <span className="arrow-wrapper">
                <span className="ripple delay-1" />
                <span className="ripple delay-2" />

                <FiArrowRight size={35} />
              </span>
              <span className="btn-text">ENQUIRE NOW</span>
            </button>

            {/* HIRE US BUTTON */}
            <button className="btn-hire-pattern w-100" onClick={openContact}>
              {/* SVG BACKGROUND */}
              <span className="btn-pattern-bg">
                <FluidBackground />
              </span>

              {/* TEXT */}
              <span className="btn-label fw-bold">REQUEST BRIEFING</span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="overviewdet-service-detail-bg-wrapper">
          <motion.div className="overviewdet-service-detail-bg" initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
            <img src={activeServ?.image} alt={activeServ?.title} />
          </motion.div>
        </div>
      </motion.section>

      <ServiceDoctrine data={activeDoctrine} />

      <ServicesOverview headertxt={"OTHER SERVICES."} />
      <ContactMain />
    </>
  );
}

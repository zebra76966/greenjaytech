import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, useScroll } from "framer-motion";
import ServiceCard from "./ServiceCard";

import "./servicesOverview.css";
import ServiceDetailHero from "./ServiceDetailHero";
import services from "../servicesData.json";
import { useNavigate } from "react-router-dom";

// animationVariants.js

export const cardVariants = {
  idle: {
    scale: 1,
    z: 0,
    filter: "blur(0px)",
    opacity: 1,
  },
  zoomOut: {
    scale: 1.6,
    z: 600,
    filter: "blur(12px)",
    opacity: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};

export const detailVariants = {
  hidden: {
    scale: 0.85,
    z: -500,
    opacity: 0,
    filter: "blur(16px)",
  },
  visible: {
    scale: 1,
    z: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function ServicesOverview({ headertxt }) {
  const [activeServ, setActivServ] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      {!activeServ && (
        <section className="main-services-section bg-color-dark ch-100">
          <Container fluid className="px-lg-5">
            <h6 className="services-eyebrow position-sticky top-0 start-0 text-center pFont fs-5  py-4" style={{ zIndex: "9999" }}>
              {headertxt || "SERVICES OVERVIEW."}
            </h6>

            <motion.div
              className="overviewMain-services-grid justify-content-center row g-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                  onClick={() => navigate(`/service/${service.id}`)}
                  className="col-lg-4"
                >
                  <ServiceCard title={service.title} subtitle={service.subtitle} description={service.description} image={service.image} />
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}
      {/* Smooth transition when a serivce card is selected keep it hidden till than */}
    </>
  );
}

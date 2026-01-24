import React, { useState } from "react";
import { motion, AnimatePresence, hover } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FluidBackground from "../../animtion2";
import "./servicesCard.css";
import { useContact } from "../../contact/contactContext";

export default function ServiceCard({ title = "SECURITY", description, image, tags, animated = true }) {
  const [hovered, setHovered] = useState(false);
  const { openContact } = useContact();

  return (
    <motion.div
      className={`overview-service-card animated-card bg-gray-color`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* IMAGE */}
      <div className={`overview-service-image-wrapper ${hovered ? "p-3" : ""} `}>
        <img src={image} alt={title} className={`${hovered ? "rounded-4" : ""} `} />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div className="overview-service-hover-bg" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}>
            <FluidBackground />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENT */}
      <div className="overview-service-content">
        <h3>{title}</h3>

        <p>{description || "Lorem ipsum is simply dummy text of the printing and typesetting industry."}</p>

        <div className="overview-service-tags ">
          {tags.map((tag, i) => (
            <span key={i} className="badge fw-light text-secondary-color mb-1 me-1 text-uppercase">
              {tag}
            </span>
          ))}
        </div>
        <hr className="bg-secondary mb-0 pb-0" />
        <div className="overview-service-footer  justify-content-end d-md-flex d-none ">
          <button className="btn-enquire-advanced">
            <span className="btn-text">LEARN MORE</span>
            <span className="arrow-wrapper">
              <span className="ripple delay-1" />
              <span className="ripple delay-2" />

              <FiArrowRight size={35} />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

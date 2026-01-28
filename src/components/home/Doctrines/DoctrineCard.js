import React, { useState } from "react";
import { motion, AnimatePresence, hover } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FluidBackground from "../animtion2";
import "./doctrineCard.css";

import * as RiIcons from "react-icons/ri";

export default function DoctrineCard({ title, description, icon, src }) {
  const Icon = RiIcons[icon];
  const [hovered, setHovered] = useState(false);

  return (
    <div className="position-relative mt-4 h-100 pb-5">
      <div className="doctrine-icon ">{Icon && <Icon size={35} className="text-primary-color" />}</div>

      <motion.div
        className="overview-doctrine-card animated-card d-flex flex-column"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div className="overview-doctrine-hover-bg" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}>
              <FluidBackground />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONTENT */}
        <div className="overview-doctrine-content mt-5 text-center d-flex flex-column h-100">
          <div>
            <h3>{title}</h3>
            <hr className="bg-primary-color w-100 opacity-100" />
            <p className="cfs-6 pt-4">{description || "Lorem ipsum is simply dummy text of the printing and typesetting industry."}</p>
          </div>

          {/* FOOTER */}
          <div className="overview-doctrine-footer d-flex justify-content-end mt-auto">
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
    </div>
  );
}

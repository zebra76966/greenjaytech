import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./gallerySection.css";

import FluidBackground from "../../animtion2";

export default function GallerySection() {
  const items = [
    { src: "/founders/tux.png", label: "ROBINSON PANIAGUA • FOUNDER", size: "lg" },
    { src: "/founders/suit2.png", label: "BUSINESS DEVELOPMENT", size: "md" },
    { src: "/founders/military2.png", label: "U.S. ARMY SPECIAL FORCES", size: "sm" },

    { src: "/founders/dark.jpg", label: "EXECUTIVE ADVISORY", size: "lg" },

    { src: "/founders/tempFileForShare_20251226-144427.jpg", label: "COMBAT OPERATIONS", size: "lg" },

    { src: "/founders/jennifer2.png", label: "JENNIFER PANIAGUA • CO-FOUNDER", size: "lg" },
    { src: "/founders/jen_street.jpg", label: "JENNIFER PANIAGUA • CO-FOUNDER", size: "lg" },
    { src: "/founders/jen3.jpg", label: "JENNIFER PANIAGUA • CO-FOUNDER", size: "lg" },
    { src: "/founders/jen5.jpg", label: "JENNIFER PANIAGUA • CO-FOUNDER", size: "md" },
    { src: "/founders/jen6.jpg", label: "JENNIFER PANIAGUA • CO-FOUNDER", size: "lg" },
  ];

  // duplicate for seamless loop
  const loop = [...items, ...items, ...items, ...items, ...items];

  return (
    <section className="gallery-section ch-100 overflow-hidden py-5 position-relative" id="gallery">
      <div className="position-relative" style={{ zIndex: 999 }}>
        <Container>
          <div className="gallery-header text-center mb-5">
            <span className="section-label text-secondary-color d-block mb-2">FROM SERVICE TO PROTECTION</span>
            <h2 className="section-title text-primary-color">THE JOURNEY THAT BUILT GREENJAY</h2>
            <p className="mission-text text-secondary-color mt-3" style={{ maxWidth: 700, margin: "0 auto" }}>
              Our expertise was forged through years of service in the world's most demanding environments—from combat operations to high-stakes investigations.
            </p>
          </div>
        </Container>

        <div className="gallery-marquee">
          <motion.div
            className="gallery-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loop.map((g, i) => (
              <div key={i} className={`gallery-tile ${g.size}`}>
                <div className="gallery-frame">
                  <img src={g.src} alt={g.label} />
                  <div className="gallery-overlay">
                    <span className="gallery-label">{g.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="ripple-layer servicesRipple opacity-25">
        <FluidBackground />
      </div>
    </section>
  );
}

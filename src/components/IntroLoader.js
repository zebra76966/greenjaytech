import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FluidBackground from "./home/animtion2";
import "./introLoader.css";

export default function IntroLoader({ show }) {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="intro-wrapper intro-border" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          {/* DIAGONAL STRIP */}
          {/* <motion.div className="intro-diagonal" initial={{ x: "-10%", y: 250 }} animate={{ x: "10%", y: 250 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
            <FluidBackground />
          </motion.div> */}

          {/* CENTER CONTENT */}
          <div className="intro-center ">
            <AnimatePresence mode="wait">
              {showVideo ? (
                <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                  <motion.h1 className="intro-title mb-0" style={{ lineHeight: 0 }} initial={{ y: 150 }} animate={{ y: 0 }} exit={{ y: 120 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    GREENJAY
                  </motion.h1>
                  <motion.div
                    key="video"
                    className="intro-video-circle"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ zIndex: 999 }}
                  >
                    <video
                      src="/Greenjay.mp4"
                      autoPlay
                      muted
                      playsInline
                      className="intro-video"
                      onEnded={() => setShowVideo(false)}
                      onLoadedMetadata={(e) => {
                        e.currentTarget.playbackRate = 1.6; // 1.2–1.6 feels good for logos
                      }}
                    />
                  </motion.div>
                  <motion.h1 className="intro-title" style={{ lineHeight: 0 }} initial={{ y: -150 }} animate={{ y: 30 }} exit={{ y: -120 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <span>PROTECTION</span>
                  </motion.h1>
                </div>
              ) : (
                <motion.div
                  key="logo"
                  className="intro-logo-wrap "
                  initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <img src="/assets/logoOnly.png" alt="Greenjay" className="intro-logo mb-4" />
                  <h1 className="intro-title">
                    GREENJAY
                    <span>TECH</span>
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

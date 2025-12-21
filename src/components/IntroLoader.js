import { motion, AnimatePresence } from "framer-motion";
import FluidBackground from "./home/animtion2";
import "./introLoader.css";

export default function IntroLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="intro-wrapper intro-border" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          {/* DIAGONAL STRIP */}
          <motion.div className="intro-diagonal" initial={{ x: "-10%", y: 250 }} animate={{ x: "10%", y: 250 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
            <FluidBackground />
          </motion.div>

          {/* CONTENT */}
          <motion.div className="intro-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <img src="/assets/logoOnly.png" alt="Greenjay" className="intro-logo" />

            <h1 className="intro-title">
              GREENJAY
              <span>TECH</span>
            </h1>
          </motion.div>

          {/* BORDER */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

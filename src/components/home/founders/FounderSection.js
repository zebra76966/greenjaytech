import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useTypewriter } from "../useTypewriter";
import { FiTarget } from "react-icons/fi";
import { useInView } from "framer-motion";
import { useRef } from "react";

import "./founders.css";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FounderSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-20% 0px",
  });

  const bioText =
    "Robinson Paniagua is a former U.S. Army Special Forces operator with extensive experience across intelligence operations, human intelligence (HUMINT), investigations, protective services, and advanced security operations.";

  const bioText2 =
    "His operational background includes intelligence collection, asset management, investigative questioning, report writing, and covert operational planning, supporting both tactical and strategic mission objectives. He conducted human intelligence operations, worked directly with sources and assets, and produced detailed intelligence and investigative reports used for operational decision-making. ";

  const { displayed } = useTypewriter(bioText, 18, isInView);
  const { displayed: displayed2 } = useTypewriter(bioText2, 18, isInView);

  return (
    <section ref={sectionRef} className="founder-section ch-100 d-flex align-items-center">
      <div className="founder-grid">
        {/* LEFT TEXT */}
        <motion.div className="founder-left" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <span className="eyebrow text-secondary-color">THE FOUNDER & MD</span>

          <h1 className="founder-name text-primary-color">
            ROBINSON
            <span className="hFont mt-2">PANIAGUA</span>
          </h1>

          <div className="typed-block">
            <p className="typed-text ghost">{bioText}</p>

            <p className="typed-text live text-secondary-color">
              {displayed}
              <span className="cursor">▍</span>
            </p>
          </div>

          <div className="founder-inline-image">
            <img src="/assets/founders/founderRob2.png" alt="Founder" />
          </div>

          <div className="typed-block">
            <p className="typed-text ghost">{bioText2}</p>

            <p className="typed-text live text-secondary-color">
              {displayed2}
              <span className="cursor">▍</span>
            </p>
          </div>

          {/* <p className="typed-text text-secondary-color">
            {displayed2}
            {done && !done2 && <span className="cursor">▍</span>}
          </p> */}
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          className="founder-image-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          animate={{ opacity: [1, 0.85, 1] }}
        >
          <img src="/assets/founders/founderRob1.png" alt="Founder" />
          {/* <div className="image-grain" /> */}
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div className="founder-right text-end" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <img src="/assets/founders/founderRob3.png" alt="Founder" className="position-absolute  start-50" style={{ top: "-40%", height: "35vh" }} />

          <div style={{ zIndex: "9999" }} className="position-relative">
            <div className="w-100 d-flex align-items-bottom gap-3 justify-content-end mb-3 text-primary-color fs-1">
              <FiTarget />
              <h3 className="fs-1 py-0 my-0"> CORE EXPERTISE</h3>
            </div>

            <ul>
              <li> Intelligence collection and analysis </li>
              <li> Human intelligence (HUMINT) and source management </li>
              <li> Investigative questioning and structured interviews </li>
              <li> Surveillance and counter-surveillance operations</li>
              <li> Intelligence and investigative report writing </li>
              <li> Protective intelligence and advance work </li>
              <li> Executive and dignitary protection support </li>
              <li> Threat assessments and vulnerability analysis </li>
              <li> Tactical and defensive driving instruction </li>
              <li> Weapons systems instruction (training & doctrine) </li>
              <li> Communications systems and secure networks </li>
              <li> Surveillance technology and electronic security </li>
              <li> Technical surveillance countermeasures (TSCM) </li>
              <li> Counter-drone and electronic mitigation concepts</li>
            </ul>

            <button className="btn-enquire-advanced ms-auto mt-5">
              <span className="arrow-wrapper">
                <span className="ripple delay-1" />
                <span className="ripple delay-2" />

                <FiArrowRight size={35} />
              </span>
              <span className="btn-text">ENQUIRE NOW</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

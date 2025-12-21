import { motion } from "framer-motion";
import { FiFlag, FiHelpCircle, FiTarget, FiShield, FiTrendingUp } from "react-icons/fi";
import FluidBackground from "../animtion2";
import "./whyGreenjay.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easeOut
    },
  }),
};

export default function WhyGreenjay() {
  return (
    <section className="why-section ch-100">
      <div className="why-grid ">
        {/* LEFT COLUMN */}
        <div className="why-col h-100">
          <WhyCard
            icon={<FiFlag />}
            title="UNIFIED COMMAND"
            subtitle="ONE PARTNER"
            highlight="TOTAL CONTROL"
            description="We serve as your single point of contact — managing vendors, platforms, and systems to deliver seamless interoperability across your entire security 
infrastructure."
            index={0}
            height={"60%"}
          />
          <WhyCard
            title="END-TO-END"
            subtitle="ACCOUNTABILITY"
            description="We serve as your single point of contact — managing vendors, platforms, and systems to deliver seamless interoperability across your entire security infrastructure."
            index={1}
            height={"40%"}
            isHr={"hidden"}
          />
        </div>

        {/* CENTER */}
        <motion.div className="why-center h-100 gap-4" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: false }}>
          <motion.div className="why-card center-card w-100 p-4  " variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: false }} style={{ height: "45%" }}>
            <div className="d-flex gap-3 align-items-center justify-content-center ">
              <div className="card-icon text-primary-color fs-1">
                <FiHelpCircle />
              </div>
              <h3 className="fs-2 text-primary-color mb-0">{"WHY CHOOSE GREENJAY"}</h3>
            </div>
            <hr className="border-bottom-1 border-secondary-color pb-2 mt-0 opacity-100 " />

            <p className="card-sub fs-4 text-primary-color mb-0 pb-0 wSpacing">{"SIMPLIFY"}</p>
            <p className="card-sub  fs-5 text-secondary-color mt-0 pt-0 wSpacing">{"COMPLEXITY"}</p>

            <p className="card-sub  text-primary-color mb-0 pb-0 wSpacing">{"DELEVERING MISSION"}</p>
            <p className="card-sub  fs-1 fw-bold text-secondary-color mt-0 pt-0 wSpacing">{"SUCCESS"}</p>
          </motion.div>

          <div className="center-orb-wrapper">
            <motion.div
              className="center-orb"
              animate={{
                rotate: 360,
                boxShadow: ["0 0 40px rgba(212,175,55,0.35)", "0 0 70px rgba(212,175,55,0.55)", "0 0 40px rgba(212,175,55,0.35)"],
              }}
              transition={{
                rotate: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                },
                boxShadow: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <FluidBackground />
            </motion.div>
          </div>

          <motion.div
            className="why-card center-card w-100 p-4  d-flex align-items-bottom"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false }}
            style={{ height: "55%" }}
          >
            <div className="mt-auto w-100 why-card pt-3 ">
              <h3 className="pFont fs-1 fw-bold">GET IN TOUCH</h3>

              <p className="text-secondary-color wSpacing mt-2">LET’S SECURE YOUR MISSION</p>
              <button className="btn-hire-pattern py-4  mt-4">
                {/* SVG BACKGROUND */}
                <span className="btn-pattern-bg">
                  <FluidBackground />
                </span>

                {/* TEXT */}
                <span className="btn-label fw-bold">ENQUIRE&nbsp;NOW</span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="why-col h-100">
          <WhyCard
            icon={<FiTarget />}
            title="MISSION RELIABILITY"
            subtitle="ENGINEERED FOR"
            highlight="PRESSURE"
            description={"We serve as your single point of contact — managing vendors, platforms, and systems to deliver seamless interoperability across your entire security infrastructure."}
            index={3}
            height={"50%"}
          />
          <StatsCard />
        </div>
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function WhyCard({ icon, title, subtitle, highlight, description, index, height, isHr }) {
  return (
    <motion.div className={`why-card w-100`} style={{ height: height ? height : "" }} variants={fadeUp} initial="hidden" whileInView="visible" custom={index} viewport={{ once: false }}>
      <div className="d-flex gap-3 align-items-center  ">
        {icon && <div className="card-icon text-primary-color fs-1">{icon}</div>}
        {!isHr && <h3 className="fs-2 text-primary-color mb-0">{title}</h3>}
      </div>

      {isHr !== "hidden" && <hr className="border-bottom-1 border-secondary-color pb-2 pt-0 mt-0 opacity-100 " />}

      {subtitle && (
        <>
          {isHr == "hidden" && <p className="fs-3 text-primary-color mb-0 pFont pb-0 wSpacing">{title}</p>}
          <p className={`card-sub fs-5 ${isHr == "hidden" ? "text-secondary-color wSpacing" : "text-primary-color"} mb-0 pb-0 pt-0 mt-0`}>{subtitle}</p>
          <p className="card-sub  fs-6 text-secondary-color mt-0 pt-0">{highlight}</p>
        </>
      )}

      {description && <p className="card-desc text-secondary-color fs-6 fw-light mt-5">{description}</p>}
    </motion.div>
  );
}

function StatsCard() {
  return (
    <motion.div className="stats-stack h-50" variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: false }}>
      <div className="stat why-card fs-2 rounded-5 fw-bold">
        100% <span className="text-secondary-color fw-light fs-6">MISSION RELIABILITY</span>
      </div>
      <div className="stat  why-card fs-2 rounded-5 fw-bold">
        250+ <span className="text-secondary-color fw-light fs-6">SUCCESSFUL INTEGRATIONS</span>
      </div>
      <div className="stat  why-card fs-2 rounded-5 fw-bold">
        15+ <span className="text-secondary-color fw-light fs-6">YEARS OPERATIONAL EXP.</span>
      </div>
    </motion.div>
  );
}

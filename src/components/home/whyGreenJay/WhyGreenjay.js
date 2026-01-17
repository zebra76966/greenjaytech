import { motion } from "framer-motion";
import { FiFlag, FiHelpCircle, FiTarget, FiShield, FiTrendingUp, FiMonitor, FiUsers, FiUserCheck } from "react-icons/fi";
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
            title="SPECIAL FORCES DOCTRINE"
            subtitle="THREAT PROFILE → MISSION PLAN"
            highlight="TOTAL CONTROL"
            description="Greenjay is built on U.S. Special Forces methods: advance work, disciplined execution, and controlled outcomes. We start with a complete threat profile—pattern of life, venues, travel, electronic exposure—then design security as an operation, not a purchase."
            index={0}
            height={"35%"}
          />
          <WhyCard
            title="COMPARTMENTED ARCHITECTURE"
            subtitle="NEED-TO-KNOW EXECUTION"
            description="We design and run a compartmented architecture: need-to-know scopes, segmented systems, and controlled access so no outside party sees the complete blueprint. This protects privacy, reduces insider risk, and prevents accidental disclosure."
            index={1}
            height={"33%"}
            isHr={"hidden"}
          />
          <WhyCard
            icon={<FiMonitor />}
            title="PRIVATE OPERATING PICTURE"
            subtitle="COMMAND CENTER INTEGRATION"
            description="High-end protection requires a single operating picture—video, access events, intrusion alerts, drone detections, and response procedures in one place. We design workflows that reduce false alarms, trigger the right escalation, and preserve evidence."
            index={0}
            height={"100%"}
          />

          <div className="h-100 d-xxl-none d-block">
            <WhyCard
              icon={<FiUserCheck />}
              title="VETTED PARTNERS"
              subtitle="CONTROLLED ACCESS"
              highlight={null}
              description={
                "We vet vendors and personnel, control site access, and supervise critical installation. Every change is logged, approved, and mapped back to the master architecture—so 'quick fixes' don't create silent vulnerabilities."
              }
              index={3}
              height={"50%"}
            />
          </div>
          <div className="h-100 d-xxl-none d-block">
            <WhyCard
              icon={<FiUsers />}
              title="INTEGRATED PROTECTIVE"
              subtitle="+ TECHNICAL"
              highlight={null}
              description={
                "We unify protective operations with surveillance, access control, comms, and digital hygiene—so movement, privacy, and response are coordinated as one system. Privacy-first coverage including female agents when required."
              }
              index={3}
              height={"50%"}
            />
          </div>
        </div>

        {/* CENTER */}
        <motion.div className="why-center h-100 gap-4" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: false }}>
          <motion.div className="why-card center-card w-100 p-4  " variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: false }} style={{ height: "22%" }}>
            <div className="d-flex gap-3 align-items-center justify-content-center ">
              <div className="card-icon text-primary-color fs-1">
                <FiHelpCircle />
              </div>
              <h3 className="fs-2 text-primary-color mb-0">{"WHY CHOOSE GREENJAY"}</h3>
            </div>
            <hr className="border-bottom-1 border-secondary-color mt-0 opacity-100 mb-0 pb-0 " />

            <p className="card-sub fs-6  text-primary-color mb-0 pb-0 wSpacing mt-3 pt-3 ">{"BUILT LIKE A"}</p>

            <p className="card-sub  fs-4 fw-bold text-secondary-color mt-0 pt-0 mb-0 wSpacing mb-0 pb-0">{"SPECIAL FORCES"}</p>
            <p className="card-sub  fs-1 fw-bold text-primary-color mt-0 pt-0 wSpacing">{"OPERATIONS"}</p>
          </motion.div>

          <motion.div
            className=" w-100  why-card fCard  d-flex align-items-top "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false }}
            style={{ height: "28%" }}
          >
            <div className=" w-100  text-center mb-auto ">
              <p className="text-secondary-color wSpacing ">DISCREET ENGAGEMENTS</p>
              <h3 className="pFont fs-1 fw-bold">NDA AVAILABLE</h3>

              <p className="text-secondary-color wSpacing mt-2">Privacy-first execution</p>
            </div>
          </motion.div>

          <div className="center-orb-wrapper d-xxl-block d-none">
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
            className=" center-card w-100 why-card fCard  d-flex align-items-bottom"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false }}
            style={{ height: "30%" }}
          >
            <div className=" w-100  pt-3 mt-auto">
              <h3 className="pFont fs-1 fw-bold ">GET IN TOUCH</h3>

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
          <WhyCard
            icon={<FiTarget />}
            title="VALIDATION"
            subtitle="RED TEAM TESTING"
            highlight={null}
            description={"We run scheduled validation cycles: config audits, penetration testing, and red-team exercises—then remediate and retest with documented closure."}
            index={3}
            height={"22%"}
          />

          <div className="h-50 d-xxl-none d-block">
            <StatsCard />
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="why-col h-100">
          <div className="h-100 d-xxl-block d-none">
            <WhyCard
              icon={<FiUsers />}
              title="INTEGRATED PROTECTIVE"
              subtitle="+ TECHNICAL"
              highlight={null}
              description={
                "We unify protective operations with surveillance, access control, comms, and digital hygiene—so movement, privacy, and response are coordinated as one system. Privacy-first coverage including female agents when required."
              }
              index={3}
              height={"100%"}
            />
          </div>
          <div className="h-100 d-xxl-block d-none">
            <WhyCard
              icon={<FiUserCheck />}
              title="VETTED PARTNERS"
              subtitle="CONTROLLED ACCESS"
              highlight={null}
              description={
                "We vet vendors and personnel, control site access, and supervise critical installation. Every change is logged, approved, and mapped back to the master architecture—so 'quick fixes' don't create silent vulnerabilities."
              }
              index={3}
              height={"100%"}
            />
          </div>
          <div className="h-50 d-xxl-block d-none">
            <StatsCard />
          </div>
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
          {highlight && <p className="card-sub  fs-6 text-secondary-color mt-0 pt-0">{highlight}</p>}
        </>
      )}

      {description && <p className="card-desc text-secondary-color fs-6 fw-light mt-5">{description}</p>}
    </motion.div>
  );
}

function StatsCard() {
  return (
    <motion.div className="stats-stack " variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: false }} style={{ height: "50%" }}>
      <div className="stat why-card fs-2 rounded-5 fw-bold">
        15+ <span className="text-secondary-color fw-light fs-6">YEARS SPECIAL FORCES EXPERIENCE.</span>
      </div>
      <div className="stat  why-card fs-2 rounded-5 fw-bold">
        10+ <span className="text-secondary-color fw-light fs-6">YEARS LAW ENFORCEMENT.</span>
      </div>
      <div className="stat  why-card fs-2 rounded-5 fw-bold">
        10+ <span className="text-secondary-color fw-light fs-6">YEARS ENGINEERING.</span>
      </div>
    </motion.div>
  );
}

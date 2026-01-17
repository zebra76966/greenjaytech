import React, { useEffect } from "react";
import HeroSection from "./mainHero";
import "./master.css";
import ServicesSection from "./services/services";
import WhyGreenjay from "./whyGreenJay/WhyGreenjay";
import FounderSection from "./founders/FounderSection";
import PortraitsSection from "./founders/foundersNew/PortraitsSection";
import FluidBackground from "./animtion2";
import { useNavigate } from "react-router-dom";
import ContactSection from "./contact/ContactSection";
import ContactMain from "./contact/contactMain";
// import FullPageScrollWrapper from "../sccrollwatcher";
const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    return;
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyGreenjay />
      {/* <FounderSection /> */}
      <div className="py-5">
        <PortraitsSection />
        <div className="text-center">
          <button className="btn-hire-pattern py-3" onClick={() => navigate("/founders")}>
            {/* SVG BACKGROUND */}
            <span className="btn-pattern-bg">
              <FluidBackground />
            </span>

            {/* TEXT */}
            <span className="btn-label fw-bold">LEARN&nbsp;MORE</span>
          </button>
        </div>
      </div>

      <ContactMain />
    </>
  );
};

export default Main;

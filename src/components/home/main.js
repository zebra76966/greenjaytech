import React, { useEffect } from "react";
import HeroSection from "./mainHero";
import "./master.css";
import ServicesSection from "./services/services";
import WhyGreenjay from "./whyGreenJay/WhyGreenjay";
import FounderSection from "./founders/FounderSection";
// import FullPageScrollWrapper from "../sccrollwatcher";
const Main = () => {
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
    </>
  );
};

export default Main;

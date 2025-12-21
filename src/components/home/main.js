import React from "react";
import HeroSection from "./mainHero";
import "./master.css";
import ServicesSection from "./services/services";
import WhyGreenjay from "./whyGreenJay/WhyGreenjay";
import FounderSection from "./founders/FounderSection";
// import FullPageScrollWrapper from "../sccrollwatcher";
const Main = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyGreenjay />
      <FounderSection />
    </>
  );
};

export default Main;

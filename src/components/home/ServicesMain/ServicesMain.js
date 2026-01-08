import React from "react";
import ServicesHero from "./servicesHero";
import ServicesOverview from "./servicesOverview/servicesOverviewMain";
import DoctrinesViewer from "../Doctrines/DoctrinesViewer";

const ServicsMain = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <DoctrinesViewer />
    </>
  );
};

export default ServicsMain;

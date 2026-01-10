import React from "react";
import ServicesHero from "./servicesHero";
import ServicesOverview from "./servicesOverview/servicesOverviewMain";
import DoctrinesViewer from "../Doctrines/DoctrinesViewer";
import DoctrinesOverview from "../Doctrines/doctrineOverviewMain";
import ContactMain from "../contact/contactMain";
import GlobalOperations from "../globalOperations";

const ServicsMain = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      {/* <DoctrinesViewer /> */}
      <DoctrinesOverview />
      <GlobalOperations />
      <ContactMain />
    </>
  );
};

export default ServicsMain;

import React from "react";
import HeroFounder from "./foundersNew/HeroSection";
import PortraitsSection from "./foundersNew/PortraitsSection";
import MissionSection from "./foundersNew/MissionSection";
import SynthesisSection from "./foundersNew/SynthesisSection";
import FoundersSection from "./foundersNew/FoundersSection";
import GallerySection from "./foundersNew/GallerySection";
import CommitmentSection from "./foundersNew/CommitmentSection";
import CTASection from "./foundersNew/CTASection";
import ContactMain from "../contact/contactMain";

export default function LeadershipPage() {
  return (
    <>
      <HeroFounder />
      <PortraitsSection />
      <MissionSection />
      <SynthesisSection />
      <FoundersSection />
      <GallerySection />
      <CommitmentSection />
      <ContactMain />
    </>
  );
}

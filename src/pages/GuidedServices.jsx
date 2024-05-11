import React from "react";
import HowItWorks from "../components/HowItWorks";
import GuidedServicesLeftContent from "../components/GuidedServicesLeftContent";
import BrewSimpleSection from "../components/BrewSimpleSection";
import BrainBrewPDX from "../components/BrainBrewPDX";
import JoinOurSharedJourney from "../components/JoinOurSharedJourney";
import GuidedServicesRightContent from "../components/GuidedServicesRightContent";

function GuidedServices() {
  return (
    <>
      <GuidedServicesRightContent />
      <BrainBrewPDX />
      <BrewSimpleSection />
      <GuidedServicesLeftContent />
      <HowItWorks />
      <JoinOurSharedJourney />
    </>
  );
}

export default GuidedServices;

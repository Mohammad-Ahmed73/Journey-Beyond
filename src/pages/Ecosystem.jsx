import React from "react";
import RightContentVideo from "../components/EcosystemRightContentVideo";
import DashBoardAccess from "../components/DashBoardAccess";
import FullWidthSlider from "../components/FullWidthSlider";
import SimpleLogoSection from "../components/SimpleLogoSection";
import EcosystemLeftContentImage from "../components/EcosystemLeftContentImage";

function Ecosystem() {
  return (
    <>
      <RightContentVideo />
      <SimpleLogoSection />
      <EcosystemLeftContentImage />
      <FullWidthSlider />
      <DashBoardAccess />
    </>
  );
}

export default Ecosystem;

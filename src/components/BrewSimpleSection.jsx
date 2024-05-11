import React from "react";
import { Container, Image } from "react-bootstrap";
import BrainBrewBGImage from "../assets/images/brain-brew-bg.png";
import BrainBrewLogo from "../assets/images/brain-brew-logo.png";

const BackgroundImage = {
  backgroundImage: `url(${BrainBrewBGImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingBlock: "62px",
};

function BrewSimpleSection() {
  return (
    <section
      className="simple-brew-section"
      style={BackgroundImage}
    >
      <Container fluid="lg">
        <div className="wrapper d-flex flex-column justify-content-between text-center">
          <p className="title fw-normal mb-0">
            The first 20 individuals to collect all 8 Polygenic Journey NFTs
            inside JourneyBound Accounts are eligible for a free psilocybin
            facilitation session with Brain Brew PDX, see terms.
          </p>
          <a href="https://www.brainbrewpdx.com/" target="_blank">
            <Image src={BrainBrewLogo} width={300} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default BrewSimpleSection;

import React from "react";
import { Container } from "react-bootstrap";
import HowItWorksImage from "../assets/images/how-it-works-bg.png";

const BackgroundImage = {
  backgroundImage: `url(${HowItWorksImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function HowItWorks() {
  return (
    <>
      <section className="how-it-works-section">
        <div className="py-5" style={BackgroundImage}>
        <Container fluid="lg" style={{ maxWidth: "1142px" }}>
          <h4 className="head-h4 font-family-AG fw-normal">How it works:</h4>
          <ul className="list-unstyled how-it-work-points pb-0 pb-md-3 mb-0">
            <li>
              <p>
                Eligibility is limited to the first 20 holders of the complete
                set of all 8 Polygenic Journey NFTs within the JourneyBound
                Account.
              </p>
            </li>
            <li>
              <p>
                Verify your wallet holding all 8 Polygenic Journey NFT worlds in
                the JourneyBound Account on The Atrium's discord.
              </p>
            </li>
            <li>
              <p>
                Receive the Discord role of Shaman and a member from The Atrium
                will contact you directly. Your information will be kept secure,
                private, and in confidence but, participating in the free
                psilocybin experience does require you to be doxxed.
              </p>
            </li>
            <li>
              <p>
                Brain Brew PDX, in compliance with the Oregon Health Authority
                guidelines, will screen each JourneyBound Shaman to determine
                eligibility, focusing on the safe and informed exploration of
                consciousness and integration.
              </p>
            </li>
            <li>
              <p>
                Sessions will be conducted in a fully licensed, controlled, and
                supportive therapeutic environment with trained psilocybin
                facilitators.
              </p>
            </li>
          </ul>
          <div
            className="divider mb-0"
            style={{ maxWidth: "1055px", height: "7px" }}
          ></div>
        </Container>
        </div>
        <div className="py-4 px-2 text-center">
            <a href="#" className="btn primary-btn">
                free mint
            </a>
        </div>
      </section>
      
    </>
  );
}

export default HowItWorks;

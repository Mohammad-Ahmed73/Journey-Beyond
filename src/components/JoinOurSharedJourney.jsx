import React from 'react';
import { Container, Image } from "react-bootstrap";
import JoinOurSharedImage from "../assets/images/join-our-shared-bg.png";
import AtriumLogo from "../assets/images/Atrium-logo.png";

const BackgroundImage = {
    backgroundImage: `url(${JoinOurSharedImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",
    paddingBlock: "62px",
    minHeight: "720px",
  };

function JoinOurSharedJourney () {
  return (
    <section
        className="simple-brew-section join-our-shared-section py-5"
        style={BackgroundImage}
      >
        <Container fluid="lg">
          <div className="wrapper d-flex flex-column justify-content-between text-center">
            <div>
                <p className="title fw-normal mb-lg-0 mb-4">
                Join our shared journey guided by safety, knowledge, immersion,
                and transformative experiences.
                </p>
                <h4 className="head-h4 font-family-AG fw-normal mb-4 d-block d-lg-none">a Web3 psychedelic experience</h4>
            </div>
            <div>
              <h4 className="head-h4 font-family-AG fw-normal mb-4 d-none d-lg-block">a Web3 psychedelic experience</h4>
              <h6 className="head-h6 font-family-AG mb-3">By The</h6>
              <a href="https://atrium.earth/">
                <Image src={AtriumLogo} width={320} />
              </a>
            </div>
          </div>
        </Container>
      </section>
  )
}

export default JoinOurSharedJourney;

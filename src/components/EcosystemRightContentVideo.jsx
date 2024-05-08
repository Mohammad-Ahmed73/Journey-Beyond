import React from "react";
import { Container, Row, Col, Figure, Image, Ratio } from "react-bootstrap";
import BgVideo from "../assets/videos/StarryFungi.mp4";
import BgImage from "../assets/images/get-started-with-journey-bound.png";

const contentBackgroundImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

function RightContentVideo() {
  return (
    <>
      <section className="ecosystem-right-content-video">
        <Container fluid>
          <Row>
            <Col lg={6} className="p-0 overflow-hidden video-column">
              <Ratio aspectRatio={"1x1"}>
                <video autoplay loop className="bg-video">
                  <source src={BgVideo} type="video/mp4" />
                </video>
              </Ratio>
            </Col>
            <Col lg={6} className="py-4 scrollable-content" style={contentBackgroundImage}>
              <div className="content-wrapper">
                <h5 className="head-h5 font-family-AG fw-normal mb-0 text-center mb-4">
                  Get Started <br/> with JourneYBound
                </h5>
                <h6 className="head-h6 font-family-Avenir fw-normal mb-4">
                    Elevate your consciousness by connecting your wallet and minting your very own JourneyBound Account NFT for free (excluding gas fees) on the Base network.
                </h6>
                <h6 className="head-h6 font-family-Avenir fw-normal mb-3">
                Limited to 1 per wallet address for equitable access, each ERC6551 JourneyBound Account NFT randomly represents 1 of 8 unique psilocybin strains, lighting your way into the psychedelic world of elevated consciousness.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RightContentVideo;

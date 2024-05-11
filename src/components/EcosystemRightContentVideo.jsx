import React from "react";
import { Container, Row, Col, Figure, Image, Ratio } from "react-bootstrap";
import BgVideo from "../assets/videos/StarryFungi.mp4";
import BgImage from "../assets/images/get-started-with-journey-bound.png";
import ecoSystemContentImage from "../assets/images/ecosystem-content-image.png";
import ecoSystemContentImage2 from "../assets/images/ecosystem-content-image2.png";


const contentBackgroundImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function RightContentVideo() {
  return (
    <>
      <section className="ecosystem-right-content-video">
        <Container fluid>
          <Row>
            <Col lg={7} xxl={6} className="p-0 overflow-hidden video-column position-relative">
              <Ratio aspectRatio={"1x1"}>
                <video autoPlay muted loop className="bg-video">
                  <source src={BgVideo} type="video/mp4" />
                </video>
              </Ratio>
            </Col>
            <Col lg={5}
              xxl={6}
              className="py-4 py-lg-5 scrollable-content"
              style={contentBackgroundImage}
            >
              <div className="content-wrapper">
                <h5 className="head-h5 font-family-AG fw-normal mb-0 text-center letter-spacing-15 mb-4">
                  Get Started <br /> with JourneYBound
                </h5>
                <div className="text-center">
                  <a href="#" className="btn primary-btn mb-4 w-100" style={{maxWidth: '342px'}}>
                    free mint
                  </a>
                </div>
                <h6 className="head-h6 font-family-Avenir fw-normal mb-4">
                  Elevate your consciousness by connecting your wallet and
                  minting your very own JourneyBound Account NFT for free
                  (excluding gas fees) on the Base network.
                </h6>
                <h6 className="head-h6 font-family-Avenir fw-normal letter-spacing-1 mb-4">
                  Limited to 1 per wallet address for equitable access, each
                  ERC6551 JourneyBound Account NFT randomly represents 1 of 8
                  unique psilocybin strains, lighting your way into the
                  psychedelic world of elevated consciousness.
                </h6>
                <h5 className="head-h5 font-family-Banshee-Pilot fw-normal mb-3 text-center letter-spacing-15">
                  Unique Strains <br /> for Unique Journeys:
                </h5>
                <Row>
                  <Col>
                    <ul className="text-list">
                      <li>Cambodian</li>
                      <li>Ghost</li>
                      <li>Inca StarGazer</li>
                      <li>Thailand Koh-Samui</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="text-list">
                      <li>Derrumbes</li>
                      <li>Burma</li>
                      <li>Tidal Wave</li>
                      <li>Flying Saucers</li>
                    </ul>
                  </Col>
                </Row>
                <Figure className="my-4 text-center w-100">
                <Image src={ecoSystemContentImage} className="w-100" style={{maxWidth: '300px'}} />
                </Figure>
                <h6 className="head-h6 font-family-Avenir fw-normal letter-spacing-1 mb-4">
                  Ultra Rarity Collectables: 200 JourneyBound Account NFTs are
                  JourneyBound Organics. Minting a JourneyBound Organic unlocks
                  5 free Polygenic Journey NFTs (0.075 ETH value) from your
                  JourneyBound Account.
                </h6>
                <Row className="mb-4 align-items-center">
                  <Col lg="7" className="text-center">
                  <h6 className="head-h4 font-family-Avenir fw-normal letter-spacing-1 mb-3">
                  Total Supply: Unlimited
                </h6>
                <h6 className="head-h4 font-family-Avenir fw-normal letter-spacing-1 mb-3">
                Cost: Absolutely Free
                </h6>
                <h6 className="head-h6 font-family-Avenir fw-normal letter-spacing-1 mb-0">
                1 per wallet address <br />
- just cover the gas
                </h6>
                  </Col>
                  <Col lg="5">
                    <Figure className="text-center w-100 mt-4 mt-lg-0">
                  <Image src={ecoSystemContentImage2} className="w-100" style={{maxWidth: '238px'}} />
                      
                      </Figure>                    
                  </Col>
                </Row>
                <h6 className="head-h6 font-family-Avenir fw-normal letter-spacing-1 mb-0">
                  Holding a JourneyBound Organic also gives you 5 free NFTs for
                  every future integrated sub-collection launched in the
                  ecosystem after the Polygenic Journey NFT collection fully
                  mints.
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

import React from "react";
import { Container, Row, Col, Figure, Image, Ratio } from "react-bootstrap";
import BgVideo from "../assets/videos/StarryFungi.mp4";
import BgImage from "../assets/images/get-started-with-journey-bound.png";
import LogoImage from "../assets/images/JB_white-logo.png";

const contentBackgroundImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const customDivider = {
  boxShadow: '0px 0px 19px 2px #1898B3',
  height: '5px',
  borderRadius: '5px',
  maxWidth: '620px'
}


function RightContentVideo() {
  return (
    <>
      <section className="ecosystem-right-content-video">
        <Container fluid>
          <Row>
            <Col lg={6} className="p-0 overflow-hidden video-column">
              <Ratio aspectRatio={"1x1"}>
                <video loop className="bg-video">
                  <source src={BgVideo} type="video/mp4" />
                </video>
              </Ratio>
            </Col>
            <Col lg={6} className="py-4 scrollable-content" style={contentBackgroundImage}>
              <div className="content-wrapper">
                <h5 className="head-h5 font-family-AG fw-normal mb-0 text-center letter-spacing-15 mb-4">
                  Get Started <br /> with JourneYBound
                </h5>
                <a href="#" className="btn free-mint-btn font-family-ElementalEnd fw-normal mb-4" style={{
                  background: '#7925FF14',
                  border: '0.6px solid #7D2CFE',
                  boxShadow: '0px 2.4px 21px 0px #7925FFD9',
                  fontSize: '20px',
                  lineHeight: '20px',
                  padding: '14px',
                  width: 'auto',
                  marginInline: 'auto',
                  display: 'table',
                  paddingInline: '14%',
                  borderRadius: '10px'
                }}>free mint</a>
                <h6 className="head-h6 font-family-Avenir fw-normal mb-4">
                  Elevate your consciousness by connecting your wallet and minting your very own JourneyBound Account NFT for free (excluding gas fees) on the Base network.
                </h6>
                <h6 className="head-h6 font-family-Avenir fw-normal letter-spacing-1 mb-4">
                  Limited to 1 per wallet address for equitable access, each ERC6551 JourneyBound Account NFT randomly represents 1 of 8 unique psilocybin strains, lighting your way into the psychedelic world of elevated consciousness.
                </h6>
                <h5 className="head-h5 font-family-Banshee-Pilot fw-normal mb-3 text-center letter-spacing-15">
                  Unique Strains <br /> for Unique Journeys:
                </h5>
                <Row>
                  <Col md={6}>
                    <ul className="text-list">
                      <li>Cambodian</li>
                      <li>Ghost</li>
                      <li>Inca StarGazer</li>
                      <li>Thailand Koh-Samui</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="text-list">
                      <li>Derrumbes</li>
                      <li>Burma</li>
                      <li>Tidal Wave</li>
                      <li>Flying Saucers</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="simple-logo-section p-lg-3 py-2 py-lg-3">
        <Container fluid>
          <div className="rounded text-center p-1 wrapper">
            <Figure className="mb-0">
              <Image src={LogoImage} />
            </Figure>
          </div>
        </Container>
      </section>
      <section className="text-center py-5">
        <Container fluid="lg">
          <h5 className="head-h5 font-family-AG fw-normal mb-5 text-lg-start">Artistry Meets Psychedelics</h5>
          <h3 className="head-h3 font-family-Avenir fw-normal mb-5">Merging Creativity, Healing, and Exploration</h3>
          <h3 className="head-h3 font-family-Avenir fw-normal text-start mb-5">The  Atrium  has  partnered  with  <a href="https://moonizenstudios.com/" target="_blank">Moonizen  Studios</a>,  home  of  the  <a href="https://moonizens.com/" target="_blank">Moonizen  Genesis Collection</a> on Polygon, and harnessed the extraordinary skills of Anthony Stuart  infuse life into the JourneyBound Account NFT and Polygenic Journey NFT collections </h3>
          <h3 className="head-h3 font-family-Avenir fw-normal mb-4">Every creation is meticulously designed to highlight the therapeutic benefits of psychedelics, offering a curated path for your digital and real world exploration of psychedelic experiences</h3>
          <div className="divider" style={customDivider}></div>
        </Container>
      </section>
      <section>
        <Container fluid="lg">
          <h4 className="head-h5 font-family-AG fw-normal mb-4 text-center text-lg-start">The JourneyBound Ecosystem</h4>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-1">JourneyBound is an expansion of <a href="https://atrium.earth/">The Atrium</a>.</h5>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-1">Blending Web3 token bound (ERC6551) technology with legal real world access to psychedelic therapy</h5>
          <Row className="mt-4 mb-3 align-items-center">
            <Col lg={8}>
              <Figure></Figure>
            </Col>
            <Col lg={4} className="text-center">
              <h5 className="head-h5 font-family-Avenir fw-normal mb-1">Web3 Meets</h5>
              <h5 className="head-h5 font-family-Avenir fw-normal mb-1">Psychedelic Exploration</h5>
            </Col>
          </Row>
          <h4 className="head-h5 font-family-Avenir fw-normal mb-4">
            Starting with the Polygenic Journey NFT integrated sub-collection, JourneyBound will
            continuously expand to include new experiences and partnerships, fostering a community of
            legal psychedelic exploration.
          </h4>
        </Container>
      </section>
    </>
  );
}

export default RightContentVideo;

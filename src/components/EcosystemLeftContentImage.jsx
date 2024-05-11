import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import BgImage from "../assets/images/experience-the-polygenic-image.png";
import ContentImage from "../assets/images/polygeic-journey-quest-bg-image.png";
import ecoSystemContentImage from "../assets/images/polygeic-journey-quest.png";

function EcosystemLeftContentImage() {
  const ColumnBGImage = {
    backgroundImage: `url(${ContentImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <section className="">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              style={ColumnBGImage}
              className="py-4 py-lg-5 scrollable-content"
            >
              <div
                className="content-wrapper w-100 mx-auto"
                style={{ maxWidth: "560px" }}
              >
                <div className="mb-4">
                  <h6 className="head-h6 font-family-AG fw-500 mb-4 text-center">
                    Experience The Polygenic <br /> Journey Worlds
                  </h6>
                  <div className="text-center">
                  <a
                    href="#"
                    className="btn primary-btn w-100"
                    style={{ maxWidth: "376px",background: 'rgb(125 44 254 / 50%)' }}
                  >
                    free mint
                  </a>
                  </div>
                  <h5 className="head-h5 fw-normal mt-4 mb-0 text-center">
                    Mint your free JourneyBound Account NFT Now! <br /> 1 PER
                    WALLET ADDRESS
                  </h5>
                </div>
                <h6 className="head-h6 mb-4 text-center">
                  JourneyBound's First Integrated Sub-Collection
                </h6>
                <h6 className="head-h6 mb-4">
                  Step into the heart of the JourneyBound ecosystem and discover
                  an exclusive collection of 8 interdimensional worlds. Each
                  carefully crafted with inspiration from actual states of
                  altered consciousness, these Polygenic Journey NFTs are
                  available for minting directly within your JourneyBound
                  Account NFT on Base. Embark on an exploration of realms filled
                  with depth, mystery, and enchantment: Exclusive Reward: The
                  first 20 collectors to secure all 8 Polygenic Journey worlds
                  will receive a FREE guided psilocybin journey at Brain Brew
                  PDX, our licensed service center partner in Oregon.
                </h6>
                <Row>
                  <Col>
                    <ul className="text-list">
                      <li>Samadhi</li>
                      <li>Oneness</li>
                      <li>Angelic Realm</li>
                      <li>Ancient Worlds</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="text-list">
                      <li>Endarkenment</li>
                      <li>Sacred Earth</li>
                      <li>Liminality</li>
                      <li>Omniverse</li>
                    </ul>
                  </Col>
                </Row>
                <Figure className="my-4 text-center w-100">
                  <Image src={ecoSystemContentImage} className="w-100" />
                </Figure>
                <h6 className="head-h6 mb-4">
                  Exclusive Reward: The first 20 collectors to secure all 8
                  Polygenic Journey worlds will receive a FREE guided psilocybin
                  journey at Brain Brew PDX, our licensed service center partner
                  in Oregon.
                </h6>
              </div>
            </Col>
            <Col lg={6} className="p-0 image-column overflow-hidden">
              <Figure className="image mb-0 d-block">
                <Image src={BgImage} />
              </Figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EcosystemLeftContentImage;

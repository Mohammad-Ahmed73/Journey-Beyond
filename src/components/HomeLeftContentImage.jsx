import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import OrangeImage from "../assets/images/journey-bound-orange.png";
import BlueImage from "../assets/images/journey-bound-blue.png";
import BlackWhiteImage from "../assets/images/journey-bound-black-and-white.png";
import ContentImage from "../assets/images/JourneyBoundContentImage.png";

function HomeLeftContentImage() {
  const ColumnBGImage = {
    backgroundImage: `url(${ContentImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <section className="homeLeftContentImage">
      <Container fluid>
        <Row>
          <Col
            lg={6}
            style={ColumnBGImage}
            className="py-4 py-md-5 text-center d-flex align-items-center justify-content-center"
          >
            <div >
              <div className="mb-4">
                <h3 className="subTitle head-h3 font-family-Clash-Display-Variable fw-500 mb-3 text-uppercase">
                  JourneyBound
                </h3>
                <h4 className="head-h4 font-family-Banshee-Pilot fw-normal purple-color text-uppercase">
                  psychedelic experience
                </h4>
              </div>
              <a href="#" className="btn free-mint-btn font-family-ElementalEnd fw-normal">free mint</a>
              <h6 className="head-h6 font-family-Avenir fw-normal mb-0">
                Mint your free JourneyBound Account NFT Now! <br /> 1 PER WALLET
                ADDRESS
              </h6>
              <div className="divider"></div>
              <h6 className="head-h6 font-family-AG fw-normal mb-0">
                Take the First Step Into New
              </h6>
              <h6 className="head-h6 font-family-AG fw-normal mb-0">
                Dimensions of Consciousness
              </h6>
              <div className="divider"></div>
              <h4 className="head-h4 font-family-Avenir fw-normal mb-0 light-white mb-3">
                Experience a Web3 Psychedelic Journey with
              </h4>
              <h2 className="head-h2 font-family-AG fw-normal text-uppercase">
                journeybound
              </h2>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <Figure className="image mb-0 d-block">
              <Image src={OrangeImage} className="innerImage" />
              <Image src={BlueImage} className="innerImage" />
              <Image src={BlackWhiteImage} className="innerImage" />
            </Figure>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-4">
      <Container fluid="lg">
        <h2 className="head-h2 font-family-Avenir fw-normal mb-0 text-center">Join the Web3 Psychedelic Revolution</h2>
      </Container>
    </section>
    </>
  );
}

export default HomeLeftContentImage;

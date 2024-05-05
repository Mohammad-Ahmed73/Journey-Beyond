import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import BannerImage from "../assets/images/banner-bg-image.png";
import JBWhiteImage from "../assets/images/JB_white.png";
import BaseLogo from "../assets/images/base-logo.png";
import AtriumLogo from "../assets/images/Atrium-logo.png";

function Banner() {
  const BackgroundImage = {
    backgroundImage: `url(${BannerImage})`,
  };
  return (
    <section className="banner-main d-flex align-items-center justify-content-center" style={BackgroundImage}>
      <Container fluid="lg">
        <div className="text-center">
          <Figure className="mb-5">
            <Image src={JBWhiteImage} className="image" />
          </Figure>
          <h1 className="title font-family-AG">a web3 psychedelic experience</h1>
        </div>
        <Row className="brand-logo align-items-center justify-content-between mt-4">
          <Col>
            <div className="d-inline-block text-center">
                <h4 className="shortTitle">on</h4>
                <Figure className="mb-0">
                    <Image src={BaseLogo} className="image1" />
                </Figure>
            </div>
          </Col>
          <Col className="text-end">
            <div className="d-inline-block text-center">
                <h4 className="shortTitle">by the</h4>
                <Figure className="mb-0">
                    <Image src={AtriumLogo} className="image2" />
                </Figure>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

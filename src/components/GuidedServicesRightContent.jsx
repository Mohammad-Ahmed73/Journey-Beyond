import React from "react";
import { Container, Row, Col, Image, Ratio } from "react-bootstrap";
import BrainBrewLogo from "../assets/images/brain-brew-logo.png";
import ContentBgImage from "../assets/images/guided-services-bg.png";
import Video from "../assets/videos/Universe.mp4";

const contentBackgroundImage = {
  backgroundImage: `url(${ContentBgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const GuidedServicesRightContent = () => {
  return (
    <section className="guidedServices-right-content-video text-center">
      <Container fluid>
        <Row>
          <Col lg={6} className="p-0 overflow-hidden video-column position-relative">
            <h2 className="head-h2 fw-normal font-family-AG position-absolute top-0 start-50 translate-middle-x mt-lg-5 mt-4">Guided Services</h2>
            <Ratio aspectRatio={"1x1"}>
              <video autoPlay muted loop className="bg-video">
                <source src={Video} type="video/mp4" />
              </video>
            </Ratio>
          </Col>
          <Col
            lg={6}
            className="py-lg-5 py-4 scrollable-content"
            style={contentBackgroundImage}
          >
            <div className="content-wrapper mx-auto w-100" style={{maxWidth: '600px'}}>
              <h3 className="head-h3 mb-0">
                The Atrium has partnered with Brain Brew PDX to offer
                real life psilocybin sessions for the  Polygenic Journey
                experience of JourneyBound
              </h3>
              <a href="#" className="d-block my-5">
                <Image src={BrainBrewLogo} className="w-100" />
              </a>
              <h3 className="head-h3 mb-0">
                The Atrium has partnered with Brain Brew PDX to offer
                real life psilocybin sessions for the Polygenic Journey
                experience of JourneyBound
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuidedServicesRightContent;
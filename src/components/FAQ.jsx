import React from "react";
import { Row, Container, Col, Figure, Image, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col lg={6}>
            <h2 className="font-family-ElementalEnd fw-normal text-center">fAQ</h2>
        </Col>
        <Col lg={6}>
            <h3 className="font-family-Avenir fw-normal text-center">Frequently Asked Questions</h3>
        </Col>
      </Row>
      <Accordion className="faq-accordion" defaultActiveKey="0">
        <Row>
          <Col lg={6}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is JourneyBound?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col lg={6}>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </Container>
  );
};

export default FAQ;

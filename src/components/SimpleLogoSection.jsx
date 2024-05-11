import React from "react";
import { Container, Figure, Image } from "react-bootstrap";
import LogoImage from "../assets/images/JB_white-logo.png";

const SimpleLogoSection = () => {
  return (
    <section className="simple-logo-section p-lg-3 py-2 py-lg-3">
      <Container fluid>
        <div className="rounded text-center p-1 wrapper">
          <Figure className="mb-0">
            <Image src={LogoImage} />
          </Figure>
        </div>
      </Container>
    </section>
  );
};

export default SimpleLogoSection;
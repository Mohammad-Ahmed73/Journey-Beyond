import React from 'react';
import { Container } from "react-bootstrap";

const BrainBrewPDX = () => {
  return (
    <section className="brain-brew-pdx position-relative text-center py-5">
        <Container>
          <h2 className="title mb-0 font-family-AG">
            Brain Brew PDX
          </h2>
          <p className="desc-text my-md-5 my-4 w-100 mx-auto" style={{maxWidth: '1070px'}}>
            Located in the Portland, Oregon metro area, Brain Brew PDX is a
            licensed center specializing in psilocybin facilitation, products,
            and education.
          </p>
          <p className="head-h4 font-family-ElementalEnd fw-normal">
            Learn more about
            <a
              href="https://www.brainbrewpdx.com/"
              className="font-family-ElementalEnd ms-2"
              target="_blank"
            >
              Brain Brew pdX's service center
            </a>
            .
          </p>
        </Container>
      </section>
  )
}

export default BrainBrewPDX;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Figure, Image } from "react-bootstrap";
import CarouselImage1 from "../assets/images/carousel-image-1.png";
import CarouselImage2 from "../assets/images/carousel-image-2.png";
import CarouselImage3 from "../assets/images/carousel-image-3.png";
import TriangleDivider from "../assets/images/triangle-divider-image.png";
import MoonizenImage from "../assets/images/Moonizen.png";

const BackgroundImage = {
  backgroundImage: `url(${MoonizenImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "50%",
};

const customDivider = {
  boxShadow: "0px 0px 19px 2px #1898B3",
  height: "5px",
  borderRadius: "5px",
  maxWidth: "620px",
};

function FullWidthSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      <section>
        <div className="pt-5 text-center" style={BackgroundImage}>
          <Container fluid="lg">
            <h5 className="head-h5 font-family-AG fw-normal mb-5 text-lg-start">
              Artistry Meets Psychedelics
            </h5>
            <h3 className="head-h3 font-family-Avenir fw-normal mb-5">
              Merging Creativity, Healing, and Exploration
            </h3>
            <h3 className="head-h3 font-family-Avenir fw-normal text-start mb-5">
              The Atrium has partnered with{" "}
              <a href="https://moonizenstudios.com/" target="_blank">
                Moonizen Studios
              </a>
              , home of the{" "}
              <a href="https://moonizens.com/" target="_blank">
                Moonizen Genesis Collection
              </a>{" "}
              on Polygon, and harnessed the extraordinary skills of Anthony
              Stuart infuse life into the JourneyBound Account NFT and Polygenic
              Journey NFT collections{" "}
            </h3>
            <h3 className="head-h3 font-family-Avenir fw-normal mb-4">
              Every creation is meticulously designed to highlight the
              therapeutic benefits of psychedelics, offering a curated path for
              your digital and real world exploration of psychedelic experiences
            </h3>
            <div className="divider" style={customDivider}></div>
          </Container>
        </div>
        <div className="p-4">
          <Slider {...settings} className="deal-slider">
            <div className="slider-items text-center">
              <Figure className="mb-0">
                <Image src={CarouselImage1} />
              </Figure>
            </div>
            <div className="slider-items text-center">
              <Figure className="mb-0">
                <Image src={CarouselImage2} />
              </Figure>
            </div>
            <div className="slider-items text-center">
              <Figure className="mb-0">
                <Image src={CarouselImage3} />
              </Figure>
            </div>
          </Slider>
          <div className="triangle-divider-image py-4 text-center">
            <Image src={TriangleDivider} className="w-100" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FullWidthSlider;

import React from 'react'
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import OrangeImage from '../assets/images/journey-bound-orange.png'
import BlueImage from '../assets/images/journey-bound-blue.png'
import BlackWhiteImage from '../assets/images/journey-bound-black-and-white.png'

const HomeLeftContentImage = () => {
  return (
    <section className='homeLeftContentImage'>
      <Container fluid>
        <Row>
            <Col lg={6}>

            </Col>
            <Col lg={6} className='p-0'>
                <Figure className='image mb-0 d-block'>
                    <Image src={OrangeImage} className='innerImage' />
                    <Image src={BlueImage} className='innerImage' />
                    <Image src={BlackWhiteImage} className='innerImage' />
                </Figure>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeLeftContentImage

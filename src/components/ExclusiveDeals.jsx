import React from 'react';
import { Container } from 'react-bootstrap';
import DealSlider from './DealSlider';

function ExclusiveDeals() {

    return (
        <section className='exclusive-deals-section'>
            <Container fluid="lg">
                <h2 className='head-h2 gradient-color fw-bold mb-5'>Exclusive Deals</h2>
            </Container>
            <DealSlider/>
        </section>
    )
}

export default ExclusiveDeals

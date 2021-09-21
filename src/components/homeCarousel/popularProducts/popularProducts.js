import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../homeCarousel';

const popularProducts = () => (
    <div className="mt-3" id="products">
        <div className="textHeadingBg">
            <h2 className="categoryTitle">Most Popular Product's</h2>
        </div>
        <Container className="p-0 mt-2">
            <Carousel />
        </Container>
    </div>
);

export default popularProducts;

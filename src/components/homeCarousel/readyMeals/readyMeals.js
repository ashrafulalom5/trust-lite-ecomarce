import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../Ready';

const readyMeals = () => (
    <div className="m-0">
        <div className="textHeadingBg">
            <h2 className="categoryTitle">Most Popular Homemade Ready Meals</h2>
        </div>
        <Container className="p-0 mt-2">
            <Carousel />
        </Container>
    </div>
);

export default readyMeals;

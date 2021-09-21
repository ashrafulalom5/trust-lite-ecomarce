import React from 'react';
import { Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from './data';
import classes from './slogan.module.css';

const slogans = data.map((slogan) => (
    <Col className="my-2">
        <div className={classes.slogan}>
            <h2>{slogan.slogan}</h2>
        </div>
    </Col>
));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 778 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 777, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const text = (props) => (
    <Carousel
        arrows={false}
        showDots={false}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlay={props.deviceType !== 'mobile'}
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="none .5"
        transitionDuration={500}
        containerClass="serious-container"
        removeArrowOnDeviceType={[]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {slogans}
    </Carousel>
);

export default text;

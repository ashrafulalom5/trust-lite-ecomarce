import React from 'react';
import Banner from '../../components/banner/banner';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import PopularProducts from '../../components/homeCarousel/popularProducts/popularProducts';
import ReadyMeals from '../../components/homeCarousel/readyMeals/readyMeals';
import WholesaleProducts from '../../components/homeCarousel/wholesaleProducts/wholesaleProducts';
import HowToWork from '../../components/howItWorks/howItWorks';
import Promotion from '../../components/promotion/promotion';
import Review from '../../components/review/review';
import Serious from '../../components/serious/serious';
import Testimonials from '../../components/testimonials/testimonials';
import WhyPrefer from '../../components/whyprefer/whyprefer';
import classes from './homepage.module.css';

const Home = () => (
    <>
        <GlobalHeader title="TrustLite - Your one stop digital supermarket at your door."/>
        <div className={classes.bodyBg}>
            <Promotion />
            <Banner />
            <Serious />
            <PopularProducts />
            <WholesaleProducts />
            <ReadyMeals />
            <Review />
            <HowToWork />
            <WhyPrefer />
            <Testimonials />
        </div>
        <GlobalFooter />
    </>
);
export default Home;

import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './banner.module.css';
//import data from './data';
import Axios from "axios";
import AppUrl from "../../appurl/AppUrl";
import NoImage from '../../asset/image/noimage.png'
import Loading from "../Loading/Loading";


function banner (props)  {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showLoading, setShowLoading] = useState(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        Axios.post(AppUrl.Slider)
            .then(response => {
                setData(response.data)
                setShowLoading(false);
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })


    }, []);


    const singleBanner = data.map((banner) => (
        <div className={classes.banner}>
           <img className={classes.products_image} src={banner.image ?AppUrl.photoUrl+banner.image:NoImage} alt={banner.title} />
        </div>
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

    return(
        <Carousel
            arrows
            showDots
            swipeable
            draggable
            responsive={responsive}
            ssr // means to render carousel on server-side.
            infinite
            autoPlay={props.deviceType !== 'mobile'}
            autoPlaySpeed={10000}
            keyBoardControl
            customTransition="all .5 ease-in"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {showLoading==true ? <Loading/> :singleBanner}
        </Carousel>
    )
}





export default banner;

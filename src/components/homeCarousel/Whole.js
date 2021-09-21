import Axios from "axios";
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import AppUrl from "../../appurl/AppUrl";
import { DataContext } from "../Context";
import Loading from "../Loading/Loading";
import classes from './homeCarousel.module.css';

class WholeCarousel extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            loading:true
        }
    }
    componentDidMount() {
        Axios.post(AppUrl.Mph)
            .then(response => {
                this.setState({data:response.data,loading:false})
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    static contextType = DataContext;
    render() {
        const {products,addCart} = this.context;
        const singleProduct = this.state.data.map((productDetails) => (
            <Col className={['my-2 p-1', classes.carouselcol]}>
                <div className={classes.prodcuts_container}>
                    <div className={classes.products_top_image}>
                        <img
                            className={classes.products_image}
                            src={AppUrl.photoUrl+productDetails.img1}
                            alt={productDetails.p_name}
                        />
                        <div className={classes.product_hover_section}>
                            <Link to={"/product/view/"+productDetails.slug} className={classes.productHoverBtn} type="button">
                                View Details
                            </Link>
                        </div>
                    </div>
                    <div className="products_content p-3 text-center">
                        <p className={classes.product_brands}>{productDetails.p_name}</p>
                        <h4 className={classes.products_title}>{productDetails.title}</h4>
                        <p className={classes.product_Price}>{"MRP."+productDetails.price+"/"+productDetails.unit}</p>
                        <Link onClick={()=> addCart(productDetails.id)} className={classes.products_btn}>
                            Add To Handbag
                        </Link>
                    </div>
                </div>
            </Col>
        ));
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 2, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 778 },
                items: 4,
                slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 777, min: 0 },
                items: 2,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
        return (
            <>
                <Carousel
                    className={classes.position}
                    arrows
                    showDots={false}
                    swipeable
                    draggable
                    responsive={responsive}
                    ssr // means to render carousel on server-side.
                    infinite={false}
                    autoPlay={false}
                    // autoPlay={this.props.deviceType !== 'mobile'}
                    autoPlaySpeed={5000}
                    keyBoardControl
                    customTransition="all .5"
                    transitionDuration={1500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={[]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {this.state.loading==true ? <Loading/> :singleProduct}
                </Carousel>
            </>
        );
    }
}



export default WholeCarousel;

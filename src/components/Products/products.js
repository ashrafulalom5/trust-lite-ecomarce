import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import AppUrl from "../../appurl/AppUrl";
import { DataContext } from "../Context";
import Loading from "../Loading/Loading";
import classes from './products.module.css';

class products extends Component {
    constructor({match}) {
        super();
        this.state={
            slug:match.params.name,
            pdata:[],
            cat_name:'',
            image:'',
            loading:true
        }
    }

    componentDidMount() {
        const myFormData = new FormData()
        myFormData.append('cat_slug',this.state.slug)
        myFormData.append('cat',this.state.slug)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.CategoryProductsList,myFormData,config)
            .then(res => {
                this.setState({pdata:res.data,loading:false})
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
        Axios.post(AppUrl.CategorySlug,myFormData,config)
            .then(res=>{
                this.setState({cat_name:res.data[0]['cat_name'],image:res.data[0]['image']})
            })
            .catch(error=>{
                localStorage.clear()
                console.log(error)
            })

    }

    static contextType = DataContext;
    render() {
        const {products,addCart} = this.context;
        const singleProduct = this.state.pdata.map(productDetails => {
            return (
                <Col className="my-2 text-center">
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
                        <div className="products_content py-3">
                            <p className={classes.product_brands}>{productDetails.p_name}</p>
                            <h4 className={classes.products_title}>{productDetails.title}</h4>
                            <p className={classes.product_Price}>{"MRP."+productDetails.price+"/"+productDetails.unit}</p>
                            <button onClick={()=> addCart(productDetails.id)} className={classes.products_btn} type="button">
                                Add To Handbag
                            </button>
                        </div>
                    </div>
                </Col>
            )
    });
        return (
            <Fragment>
                <div className={classes.products_page}>
                    <Container className="py-5">
                        <Row>
                            <Col>
                                <h1 className={classes.category_name}>{this.state.cat_name}</h1>
                                <h2 className={['text-center', classes.all_product].join(' ')}>
                                    Product Disply
                                </h2>
                            </Col>
                        </Row>
                        <Row lg={4} md={3} sm={2} xs={2}>
                            {this.state.loading==true ? <Loading/> : singleProduct }
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(products);


// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import data from './Data';
// import classes from './products.module.css';

// const singleProduct = data.map((productDetails) => (
//     <div className="col-md-3 col-sm-6 my-2">
//         <div className={classes.prodcuts_container}>
//             <div className={classes.products_top_image}>
//                 <img
//                     className={classes.products_image}
//                     src={productDetails.image}
//                     alt={productDetails.title}
//                 />
//                 <div className={classes.product_hover_section}>
//                     <button className={classes.productHoverBtn} type="button">
//                         View Details
//                     </button>
//                 </div>
//             </div>
//             <div className="products_content py-3">
//                 <p className={classes.product_brands}>{productDetails.brands}</p>
//                 <h4 className={classes.products_title}>{productDetails.title}</h4>
//                 <p className={classes.product_Price}>{productDetails.price}</p>
//                 <button className={classes.products_btn} type="button">
//                     {productDetails.btn}
//                 </button>
//             </div>
//         </div>
//     </div>
// ));

// const products = () => (
//     <div className={classes.products_page}>
//         <Container className="py-5">
//             <Row>
//                 <div className="col-12">
//                     <h1 className={classes.category_name}>Sobji Bazar</h1>
//                     <h2 className={classes.all_product}>Browse All Product</h2>
//                 </div>
//                 {singleProduct}
//             </Row>
//         </Container>
//     </div>
// );

// export default products;

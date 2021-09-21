import Axios from 'axios';
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import AppUrl from "../../appurl/AppUrl";
import NoImage from '../../asset/image/noimage.png';
import CategoryLayout from '../../hoc/categoryLayout';
import Loading from "../Loading/Loading";
import classes from './marketCategory.module.css';


class marketCategory extends Component {
    constructor() {
        super();
        this.state = {
            catname:'product-market',
            data:[],
            loading:true
        }
    }

    componentDidMount() {
        const myFormData = new FormData()
        myFormData.append('p_slug',this.state.catname)

        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.productMarketCategory,myFormData,config)
            .then(res=>{
                this.setState({data:res.data,loading:false})
                console.log(res.data+"Data List")
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        const CategoryList = this.state.data.map((category) => (
           <div className="col-md-4 col-lg-3 col-sm-6 my-2 text-center">
                <div className={classes.category_container}>
                 <Link className="text-dark" to={"/category/products/"+category.cat_slug}>
                     <div className={classes.category_top_image}>
                         {category.image ?<img className={classes.category_image} src={AppUrl.photoUrl+category.image} alt={category.cat_name}/>
                             : <img className={classes.category_image} src={NoImage} alt={category.cat_name}/>}
                         <div className={classes.category_hover_section}>
                                <button className={classes.categoryHoverBtn}  type="button">
                                 View All Products
                                 </button>
                         </div>
                     </div>
                     <div className="products_content py-3">
                         <h4 className={classes.category_title}>{category.cat_name}</h4>
                     </div>
                 </Link>
                </div>
            </div>
        ));


        return (
            <CategoryLayout>
                     <div className="col-12">
                                <h1 className={classes.category_name}>Market Category</h1>
                                <h2 className={classes.all_category}>Browse All Category</h2>
                            </div>
                            {this.state.loading==true ? <Loading/>:CategoryList}
            </CategoryLayout>
        );
    }
}

export default withRouter(marketCategory);



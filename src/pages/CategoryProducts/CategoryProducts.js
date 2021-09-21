import React, {Component, Fragment} from 'react';
import GlobalHeader from "../../components/global/globalHeader";
import classes from "../Home/homepage.module.css";
import GlobalFooter from "../../components/global/globalFooter";
import ProductList from '../../components/Products/products'
import ProductHeader from "../../components/header/ProductsHeader/productHeader";

class CategoryProducts extends Component {
    render() {
        return (
            <Fragment>
                <GlobalHeader title="Category All Products List" />
                <div className={classes.bodyBg}>
                  <ProductHeader/>
                  <ProductList/>
                </div>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default CategoryProducts;
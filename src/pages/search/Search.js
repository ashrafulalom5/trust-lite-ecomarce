import React, { Component, Fragment } from 'react';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import ProductList from "../../components/Products/searchProduct";
import classes from "../Home/homepage.module.css";


class Search extends Component {
    render() {
        return (
            <Fragment>
                <GlobalHeader title="Search Products List" />
                  
                        <div className={classes.bodyBg}>
                        <ProductList/>
                        </div>
                   
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default Search;
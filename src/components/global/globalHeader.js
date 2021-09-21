import React, { Component, Fragment } from 'react';
import CategoryMenu from './category/categoryMenu';
import Header from './header/Header';
import HeaderMini from "./header/HeaderMini";


class globalHeader extends Component {
    render() {
        return (
            <Fragment>
                <div className="globalhead sticky-top">
                    <title>{this.props.title}</title>
                    <Header />
                    <CategoryMenu />
                </div>  
                <div className="globalheadmini">
                    <title>{this.props.title}</title>
                    <HeaderMini/>
                </div>
                <div className="globalheadbottom"></div>
            </Fragment>
        );
    }
}


export default globalHeader;

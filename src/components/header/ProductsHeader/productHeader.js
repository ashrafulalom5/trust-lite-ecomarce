import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router-dom";
import Axios from "axios";
import AppUrl from "../../../appurl/AppUrl";
import NoImage from "../../../asset/image/noimage.png";

class ProductHeader extends Component {
    constructor({match}) {
        super();
        this.state={
            slug:match.params.name,
            cat_name:'',
            image:'',
            loading:true
        }
    }

    componentDidMount() {
        const myFormData = new FormData()
        myFormData.append('cat_slug',this.state.slug)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.CategorySlug,myFormData,config)
            .then(res=>{
                this.setState({cat_name:res.data[0]['cat_name'],image:res.data[0]['image']})
            })
            .catch(error=>{
                localStorage.clear()
                console.log(error)
            })
    }
    render() {
        return (
            <Fragment>
                <div >
                    <img className="image" src={this.state.image ? AppUrl.photoUrl+this.state.image :NoImage} />
                </div>
            </Fragment>
        );
    }
}

export default withRouter(ProductHeader);

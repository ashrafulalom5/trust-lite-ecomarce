import { Col } from 'react-bootstrap';
import classes from './promotion.module.css';
import Axios from 'axios'
import React, {Component, Fragment} from 'react';
import AppUrl from "../../appurl/AppUrl";

class promotion extends Component {
    constructor() {
        super();
        this.state={
            heading:'',
            loading:true
        }
    }

    componentDidMount() {
        const myFormData = new FormData()
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }

        Axios.post(AppUrl.Settings,myFormData,config)
            .then(res=>{
                this.setState({heading:res.data[0]['heading'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }


    render() {
        return (
            <Fragment>
                <div className={classes.promotion}>
                    <div className={classes.promotion_container}>
                        <Col>
                            <h4 className={classes.promotion_text}>
                                {this.state.heading}
                            </h4>
                        </Col>
                    </div>
                </div>
            </Fragment>
        );
    }
}



export default promotion;

// {['container', classes.promotionBox].join(' ')}

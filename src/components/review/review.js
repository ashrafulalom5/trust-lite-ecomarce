import React, {Component,Fragment,useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import Axios from "axios";
import AppUrl from "../../appurl/AppUrl";


class review extends Component {
    constructor() {
        super();
        this.state = {
            id:'',h_customer:'',h_spm:'',h_supplier:'',products:'',	our_spm:'',category:'',
            h_delivery:'', loading:true
        }
    }

    componentDidMount() {
        const myFormData = new FormData()
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.Settings,myFormData,config)
            .then(res=>{
                this.setState({h_customer:res.data[0]['h_customer'],h_spm:res.data[0]['h_spm'],h_supplier:res.data[0]['h_supplier'],
                    products:res.data[0]['products'],category:res.data[0]['category'],our_spm:res.data[0]['our_spm'],
                    h_delivery:res.data[0]['h_delivery'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        return (
            <Fragment>
                <div className="py-3">
                    <div className="textHeadingBg">
                        <h2 className="categoryTitle">Our Achievement</h2>
                    </div>
                    <Container>
                        <div className="row m-3">
                            <div className="col-md-2 col-6 p-1">
                                <div className="card text-center bg-light">
                                    <p><i className="fa fa-users" style={{fontSize:'50px',marginTop:'15px',color:'#213852'}}></i></p>
                                    <h3 style={{color:'#a65341'}}>{this.state.h_customer}+</h3>
                                    <p>Happy Customer</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-6 p-1">
                                <div className="card text-center bg-light">
                                    <p><i className="fa fa-handshake-o" style={{fontSize:'50px',marginTop:'15px',color:'#213852'}}></i></p>
                                    <h3 style={{color:'#a65341'}}>{this.state.h_supplier} +</h3>
                                    <p>Happy Supplier</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-6 p-1">
                                <div className="card text-center bg-light">
                                    <p><i className="fa fa-shopping-bag" style={{fontSize:'50px',marginTop:'15px',color:'#213852'}}></i></p>
                                    <h3 style={{color:'#a65341'}}>{this.state.products} +</h3>
                                    <p>Products</p>
                                </div>
                            </div>

                            <div className="col-md-2 col-6 p-1">
                                <div className="card text-center bg-light">
                                    <p><i className="fa fa-book " style={{fontSize:'50px',marginTop:'15px',color:'#213852'}}></i></p>
                                    <h3 style={{color:'#a65341'}}>{this.state.category} +</h3>
                                    <p>Category</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-6 p-1">
                                <div className="card text-center bg-light">
                                    <p><i className=" fa fa-users" style={{fontSize:'50px',marginTop:'15px',color:'#213852'}}></i></p>
                                    <h3 style={{color:'#a65341'}}>{this.state.our_spm} +</h3>
                                    <p>Our Service Point</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-6 p-1">
                                <div className="card text-center bg-light">
                                    <p><i className="fa fa-check" style={{fontSize:'50px',marginTop:'15px',color:'#213852'}}></i></p>
                                    <h3 style={{color:'#a65341'}}>{this.state.h_delivery} +</h3>
                                    <p>Happy Delivery</p>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }
}


export default review;

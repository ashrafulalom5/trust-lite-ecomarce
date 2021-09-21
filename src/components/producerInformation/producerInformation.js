import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import classes from './producerInformation.module.css';
import React, {Component} from 'react';
import AppUrl from "../../appurl/AppUrl";
import Axios from 'axios'
import {withRouter} from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import NoImage from '../../asset/image/noimage.png'
import Loading from "../Loading/Loading";

class ProducerInformation extends Component {
    constructor({match}) {
        super();
        this.state = {
            slug:match.params.name,
            title:'',category:'',supplier:'',quality:'',storage:'',weight:'',unit:'',packaging:'',available:'',nutritional:'',cat_name:'',
            quantity:'',size:'',color:'',des:'',img1:'',img2:'',img3:'',img4:'',img5:'',id:match.params.id,wholesale:'',mpp:'',mph:'',
            token:'', data:[],img11:'',img22:'',img33:'',img44:'',img55:'',price:'',p_img:'',p_name:'',p_address:'',pp_img:'',brand:'',ing:'',msg:'',
            loading:true
        }
    }
    componentDidMount() {
        const formData = new FormData()
        formData.append('slug',this.state.slug)
        Axios.post(AppUrl.SingleProduct,formData)
            .then(res=>{
                console.log(res.data)
                this.setState({p_name:res.data[0]['p_name'],p_address:res.data[0]['p_address'],p_img:res.data[0]['p_img'],title:res.data[0]['title'],category:res.data[0]['catgory'],supplier:res.data[0]['supplier'],quality:res.data[0]['quality'],
                    storage:res.data[0]['storage'],weight:res.data[0]['weight'],unit:res.data[0]['unit'],packaging:res.data[0]['packaging'],available:res.data[0]['available'],
                    nutritional:res.data[0]['nutritional'],quantity:res.data[0]['quantity'],size:res.data[0]['size'],color:res.data[0]['color'],
                    des:res.data[0]['des'],img1:res.data[0]['img1'],img2:res.data[0]['img2'],img3:res.data[0]['img3'],img4:res.data[0]['img4'],
                    img5:res.data[0]['img5'],mpp:res.data[0]['mpp'],mph:res.data[0]['mph'],wholesale:res.data[0]['wholesale'],cat_name:res.data[0]['cat_name'],
                    price:res.data[0]['price'],brand:res.data[0]['brand'],ing:res.data[0]['ing'],msg:res.data[0]['msg'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        return (
            <>
                {this.state.loading==true ?
                    <Loading/>
                    :<div className={['p-3 bg-light', classes.personal_infoBox].join(' ')}>
                        <div className="container-fluid">
                            <Row>
                                <Col lg={8} md={8} sm={12} xs={12}>
                                    <div className="p-3">
                                        <div className="row ">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Producer Name : {this.state.p_name} </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Produced In : {this.state.supplier} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Quality/Certification : {this.state.quality} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Storage : {this.state.storage}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Weight : {this.state.weight} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Packaging Unit : {this.state.unit} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Packaging : {this.state.packaging} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p> Availability : {this.state.available} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Nutritional Information : {this.state.nutritional} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Quantity : {this.state.quantity} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Size : {this.state.size} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Colour : {this.state.color} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Brand : {this.state.brand} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Ingredients : {this.state.ing} </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-12 text-left">
                                                <p>Massage From TrustLite : {this.state.msg} </p>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12} className="text-center mt-4">
                                    <div className="producerinfo">
                                        <h4> {this.state.p_name} </h4>
                                        <h5>{this.state.p_address}</h5>
                                        <img
                                            className="img-fluid" style={{borderRadius:'10px'}}
                                            src={this.state.p_img ? AppUrl.photoUrl+this.state.p_img : NoImage}
                                            alt="farmer-name"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="productList p-3">
                                    <h3 className="text-center">Why Buy From TrustLite ?</h3>
                                    <p style={{margin:'20px'}}>{ReactHtmlParser(this.state.des)}</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default withRouter(ProducerInformation);

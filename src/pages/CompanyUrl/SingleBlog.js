import Axios from 'axios';
import moment from "moment";
import React, { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import AppUrl from "../../appurl/AppUrl";
import NoImage from '../../asset/image/noimage.png';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import Loading from "../../components/Loading/Loading";
import {Link} from 'react-router-dom'

class SingleBlog extends Component {
    constructor({match}) {
        super();
        this.state = {
            id:match.params.id, date:'',title:'',body:'',image:'',loading:true
        }
    }

    componentDidMount() {
        const formData = new FormData();
        formData.append('id',this.state.id)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.BlogOne,formData,config)
            .then(res=>{
                console.log(res.data)
                this.setState({date:res.data[0]['date'],title:res.data[0]['title'],image:res.data[0]['image'],
                body:res.data[0]['body'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {


        return (
            <>
                <GlobalHeader title={this.state.title} />
                      <Container className="my-5">
                        <Row className="bg-white blog box-shadow">
                            <Col className="col-md-12 col-12 w-100 blog-head" >
                                <h2 className="text-dark text-center py-3 "> {this.state.title} </h2>
                            </Col>
                                
                               {this.state.loading==true ? <Loading/> :
                                          <Col className="col-md-12 col-12  p-3 col-12 " >
                                          <div className="info_blog">
                                          <div className="card mb-3" >
                                              <img  src={this.state.image ?AppUrl.photoUrl+this.state.image : NoImage } className="card-img-top" alt="..."/>
                                              <div className="card-body">
                                                  <p className="card-text">{moment(this.state.date).format("Do  MMMM YYYY")}</p>
                                                  <p className="card-text">{ReactHtmlParser(this.state.body)} 
                                               </p>
                                              </div>
                                          </div>  
                                          </div>
                                          </Col>
                               }
                           
                        </Row>
                      </Container>

                <GlobalFooter />
            </>
        );
    }
}

export default SingleBlog;
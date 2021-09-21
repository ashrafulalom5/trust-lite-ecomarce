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

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            loading:true
        }
    }

    componentDidMount() {
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.BlogList,config)
            .then(res=>{
                this.setState({data:res.data,loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {

        const blog = this.state.data.map(res=>{
            return(
            <Col className="col-md-4 col-12  p-3 col-12 " >
                <div className="info_blog">
                <div className="card mb-3" >
                    <img style={{height:'180px'}} src={res.image ?AppUrl.photoUrl+res.image : NoImage } className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="text-center"> {res.title} </h3>
                        <p className="card-text">{moment(res.date).format("Do  MMMM YYYY")}</p>
                        <p className="card-text">{ReactHtmlParser(res.body.substring(0, 100))} 
                        <Link to={'/blog/single/'+res.id} style={{color:'green'}}> Read More</Link></p>
                    </div>
                </div>  
                </div>
                </Col>
            )
        })

        return (
            <>
                <GlobalHeader title="Latest Blog" />
                      <Container className="my-5">
                        <Row className="bg-white blog box-shadow">
                            <Col className="col-md-12 col-12 w-100 blog-head" >
                                <h2 className="text-dark text-center py-3 "> Latest Blog </h2>
                            </Col>
                                
                            {this.state.loading==true ? <Loading/> : blog}
                           
                        </Row>
                      </Container>

                <GlobalFooter />
            </>
        );
    }
}

export default Blog;
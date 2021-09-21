import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppUrl from "../../../appurl/AppUrl";
import classes from './footer.module.css';

class footer extends Component {
    constructor() {
        super();
        this.state={
            name:'',
            email:'',
            subject:'',
            msg:''
        }
    }
    componentDidMount() {
    }

    onName(e){
        this.setState({name:e.target.value})
    }
    onEmail(e){
        this.setState({email:e.target.value})
    }
    onSubject(e){
        this.setState({subject:e.target.value})
    }
    onMsg(e){
        this.setState({msg:e.target.value})
    }
    FormSubmit(event){
        const formData = new FormData()
        formData.append('name',this.state.name)
        formData.append('email',this.state.email)
        formData.append('subject',this.state.subject)
        formData.append('msg',this.state.msg)
        Axios.post(AppUrl.ClentMsgSend, formData)
            .then(res=>{
                if(res.data.success){
                    this.setState({name:'',email:'',subject:'',msg:''})
                    toast.success(res.data.success, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }else{
                    toast.error(res.data.error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error=>{
                console.log(error)
            })
        event.preventDefault()
    }

    render() {
        return (
            <Fragment>
                <footer className={['py-5', classes.footer_area].join(' ')}>
                    <div className="footer-big">
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        {/* Same as */}
                        <ToastContainer />
                        <Container>
                            <Row lg={3} md={3} sm={2} xs={2} className={classes.footer_row}>
                                <Col className="py-2 col-5 text-left">
                                    <div className={classes.footer_widget_menu}>
                                        <h3 className={classes.footer_menu_title}>About Us</h3>
                                        <ul className="mt-2">
                                            <Link to="/overview"><li>Compnay Overview</li></Link>
                                            <Link to="/our/team"><li>Our Teams</li></Link>
                                            <Link to="/refund-policy"><li>Return and refund Policy</li></Link>
                                            <Link to="/terms-condition"><li>Terms &amp; Conditions</li></Link>
                                            <Link to='/privacy-policy'><li>Privacy Policy</li></Link>
                                        </ul>
                                    </div>
                                </Col>
                                <Col  className="py-2 d-md-block d-lg-block d-sm-none col-12 ">
                                    <div className={classes.footer_widget_contact}>
                                        <h3 className={classes.footer_contact_title}>
                                            Do You have Any Questions?
                                        </h3>

                                        <form onSubmit={this.FormSubmit.bind(this)} >
                                            <div className="form-group">
                                                <input
                                                    type="text" value={this.state.name} required onChange={this.onName.bind(this)}
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text" required onChange={this.onEmail.bind(this)}
                                                    className="form-control" value={this.state.email}
                                                    placeholder="Phone or Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text" required onChange={this.onSubject.bind(this)}
                                                    className="form-control" value={this.state.subject}
                                                    placeholder="Subject"
                                                />
                                            </div>
                                            <div className="form-group">
                                    <textarea
                                        row="3" required onChange={this.onMsg.bind(this)}
                                        className="form-control" value={this.state.msg}
                                        placeholder="Your Message"
                                    />
                                            </div>
                                            <button
                                                className={[classes.btn_block, 'btn btn-primary col-6 float-right'].join(' ')}
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </Col>

                                <Col className="py-2 col-6 text-light text-left">
                                    <div className="footer-widget-social">
                                        <h3 className={classes.footer_social_title}>Follow Us</h3>
                                        <div className="col-8" className={classes.social_profiles}>

                                            <a href="https://www.facebook.com/trustlite.com.bd/" target="_blank">
                                                <i className="fab fa-facebook"></i>
                                            </a>

                                            <a href="https://twitter.com/TrustLite" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>

                                            <a href="https://www.linkedin.com/in/trust-lite-b7aa45205/" target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>

                                            <a href="https://www.instagram.com/trustlite103/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>

                                            <a href="https://www.facebook.com/groups/trustliteshopping" target="_blank">
                                            <i className="fab fa-youtube-square"></i>
                                            </a>
                                
                            
                                        </div>
                                        <div  className={classes.app}>
                                            <h4>Download App</h4>
                                            <img
                                                src="https://www.flaticon.com/svg/static/icons/svg/300/300218.svg"
                                                alt="PlayStore"
                                            />
                                        </div>
                                        <div className="col-12" className={classes.location}>
                                            <h4>Office Address</h4>
                                            <p>Shyamoli Square Shopping Mall, 4th Floor,<br/> Shop No.466, Dhaka -1207</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default footer;

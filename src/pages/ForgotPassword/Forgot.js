import React, {Component, Fragment} from 'react';
import Axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import AppUrl from "../../appurl/AppUrl";
import  {withRouter,Redirect} from "react-router-dom";
import GlobalHeader from "../../components/global/globalHeader";
import GlobalFooter from "../../components/global/globalFooter";

class Forgot extends Component {

    constructor() {
        super();
        this.state={
            phone:'',
        }
    }

    componentDidMount() {
        if(localStorage.token){
            this.props.history.push(`/dashboard`)
        }
    }

    onPhone(e){
        this.setState({phone:e.target.value})
    }

    addFormSubmit(event){
        event.preventDefault()
        const formData = new FormData()
        formData.append('phone',this.state.phone)
        Axios.post(AppUrl.ForgotPassword,formData)
            .then(res=>{
                console.log(res.data)
                if(res.data.success){
                    this.setState({phone:'',})
                    //this.props.history.push(`/login`)
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
                    this.setState({phone:'',})
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
    }

    render() {
        return (
            <Fragment>
                <GlobalHeader title="Forgot password"/>
                <div  style={{marginTop:'100px',marginBottom:'100px'}}>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="passwordBox ">
                        <div className="row mb-5" style={{margin:'0'}}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4 col-12 p-3">
                                <div className="ibox-content">
                                    <h2 className="font-bold">Forgot password</h2>

                                    <p>
                                        Enter your phone number and your password will be reset and sms sent to you.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form onSubmit={this.addFormSubmit.bind(this)} className="m-t" role="form" >
                                                <div className="form-group">
                                                    <input type="text" onChange={this.onPhone.bind(this)} value={this.state.phone}
                                                           className="form-control" placeholder="Enter Phone Number" required/>
                                                </div>
                                                <button type="submit" className="btn btn-primary block full-width m-b">Send
                                                    new password
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default withRouter(Forgot);
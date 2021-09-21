import React, {Component, Fragment} from 'react';
import Axios from 'axios'
import AppUrl from "../../appurl/AppUrl";
import  {withRouter,Link} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import jwt_decode from 'jwt-decode'

class Sidebar extends Component {
    constructor() {
        super();
        this.state={
            token:'', type:'',msg:'0',rc:'0',p:''
        }
    }
    componentDidMount() {
        const token = localStorage.token
        if(token){
            const decoded = jwt_decode(token)
            this.setState({token:token,type:decoded.usertype})
            const myFormData = new FormData()
            myFormData.append('token',token)
            const config = {
                headers : {'content-type':'multipart/form-data'}
            }
            Axios.post(AppUrl.UserInfo,myFormData,config)
                .then(res=>{
                    console.log("Userdata Sidebar Information "+res.data)
                    if(res.data.error=="Invalid"){
                        localStorage.clear()
                    }
                })
                .catch(error=>{
                    localStorage.clear()
                    console.log(error)
                })
            Axios.post(AppUrl.Notify,myFormData,config)
                .then(res=>{
                    this.setState({msg:res.data.msg, rc:res.data.rc })
                    console.log("Ok")
                })
                .catch(error=>{
                    console.log('Error')
                })
                Axios.post(AppUrl.SpmOrdersCount,myFormData,config)
                .then(res=>{
                    this.setState({a:res.data.a, c:res.data.c, d:res.data.d, p:res.data.p,loading:false })
                    console.log("Ok")
                })
                .catch(error=>{
                    console.log('Error')
                })
        }else{
            this.props.history.push(`/login`)
        }
    }
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        toast.success('Successfully Logout', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.props.history.push(`/`)
    }

    render() {
        return (
            <Fragment>
                    <div className="row" style={{margin:'0'}}>
                        <div className="col-md-2 sidebar-left">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                            <Link className="nav-link" to="/user/profile">
                                Manage Profile
                            </Link>
                            {this.state.type=="Customer"?
                            <>
                                <Link className="nav-link" to="/customer/order-history">
                                    Order History
                                </Link>
                                <Link className="nav-link" to="/payments">
                                    Payment History
                                </Link>
                                <Link className="nav-link" to="/order-tracking">
                                    Order Tracking
                                </Link>
                                <Link className="nav-link" to="/notification">
                                    Notification ({this.state.msg})
                                </Link>
                                <Link className="nav-link" to="/referral">
                                    Buy & Earn Section ({this.state.rc})
                                </Link>
                            </> :
                                <>
                                <Link className="nav-link" to="/spm/order-history">
                                    Order History ({this.state.p})
                                </Link>
                                    <Link className="nav-link" to="/spm/payment">
                                        Payment Management
                                    </Link>
                                    <Link className="nav-link" to="/notification">
                                        Notification ({this.state.msg})
                                    </Link>
                                </>
                            }

                            <span className="nav-link" onClick={this.logOut.bind(this)} >
                                Logout
                            </span>
                        </div>
                        <div className="col-md-10 col-12 " style={{paddingTop:'20px',paddingBottom:'50px'}}>
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
                            {this.props.children}
                        </div>
                    </div>

            </Fragment>
        );
    }
}

export default withRouter(Sidebar);
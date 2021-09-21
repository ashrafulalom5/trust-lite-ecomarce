import React, {Component, Fragment} from 'react';
import GlobalHeader from "../../components/global/globalHeader";
import GlobalFooter from "../../components/global/globalFooter";
import Axios from "axios";
import AppUrl from "../../appurl/AppUrl";
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import NoImage from '../../asset/image/noimage.png'

class Account extends Component {
    constructor() {
        super();
        this.state={
            name:'', phone:'', type:'', email:'', address:'', token:'', image:'', loading:true,payment_type:'',account:''
        }
    }
    componentDidMount() {
        const token = localStorage.token
        if(token){
            this.setState({token:token})
            const myFormData = new FormData()
            myFormData.append('token',token)
            const config = {
                headers : {'content-type':'multipart/form-data'}
            }
            Axios.post(AppUrl.UserInfo,myFormData,config)
                .then(res=>{
                    console.log("Userdata "+res.data)
                    this.setState({name:res.data[0]['name'],email:res.data[0]['email'],phone:res.data[0]['phone'],account:res.data[0]['account'],
                        payment_type:res.data[0]['payment_type'],
                        type:res.data[0]['user_type'],address:res.data[0]['address'],image:res.data[0]['image'],loading:false})
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
    render() {
        return (
            <Fragment>
                <GlobalHeader title="My Account"/>
                <Sidebar >
                    <div className="row " style={{marginTop:'50px',marginBottom:'100px'}}>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 col-12 py-2">
                            {this.state.loading==true ? <Loading/> :
                                <div className="widget-head-color-box navy-bg p-lg text-center">
                                    {this.state.image ?<img style={{height:'150px',width:'150px'}} src={AppUrl.photoUrl+this.state.image} className="rounded-circle circle-border m-b-md" alt="profile"/>:
                                        <img style={{height:'150px',width:'150px'}} src={NoImage} className="rounded-circle circle-border m-b-md" alt="profile"/>
                                    }
                                    <div>
                                        <span className="text-dark">{this.state.name}</span>
                                    </div>
                                </div>
                            }
                            <div className="widget-text-box">
                                <table className="table table-bordered bg-white text-dark">
                                    {this.state.loading==true?<Loading/>:
                                        <tbody>
                                        <tr>
                                            <td>Full Name</td>
                                            <td> {this.state.name }</td>
                                        </tr>
                                        <tr>
                                            <td> Mobile </td>
                                            <td> {this.state.phone} </td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td colSpan="2"> {this.state.email} </td>
                                        </tr>

                                        <tr>
                                            <td>Account Type</td>
                                            <td colSpan="2"  >{this.state.type}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td colSpan="2" >{this.state.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Payment Method</td>
                                            <td colSpan="2" >{this.state.payment_type}</td>
                                        </tr>
                                        <tr>
                                            <td>Account number</td>
                                            <td colSpan="2" >{this.state.account}</td>
                                        </tr>
                                        <tr>
                                            <td className="mt-1"> </td>
                                            <td> <Link className="btn btn-dark mr-1 mt-1" to="/user/profile" >Manage Profile</Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    }
                                </table>

                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </Sidebar>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default Account;
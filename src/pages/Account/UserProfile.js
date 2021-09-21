import React, {Component, Fragment} from 'react';
import GlobalHeader from "../../components/global/globalHeader";
import Sidebar from "./Sidebar";
import GlobalFooter from "../../components/global/globalFooter";
import AppUrl from "../../appurl/AppUrl";
import {toast} from "react-toastify";
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import NoImage from '../../asset/image/noimage.png'
import Loading from "../../components/Loading/Loading";

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            name:'', phone:'', type:'', email:'', address:'', token:'', image:'', image2:'', old:'', password:'', repassword:'', loading:true,
            payment_type:'',account:''
        }
    }
    componentDidMount() {
        const token = localStorage.token
        if(token){
            this.setState({token:token})
            const userid = jwt_decode(token)
            const uid = userid.uid
            const myFormData = new FormData()
            myFormData.append('token',token)
            myFormData.append('uid',uid)
            const config = {
                headers : {'content-type':'multipart/form-data'}
            }
            Axios.post(AppUrl.UserInfo,myFormData,config)
                .then(res=>{
                    console.log("Userdata "+res.data)
                    this.setState({name:res.data[0]['name'],email:res.data[0]['email'],phone:res.data[0]['phone'],account:res.data[0]['account'],
                        payment_type:res.data[0]['payment_type'], type:res.data[0]['user_type'],address:res.data[0]['address'],image:res.data[0]['image'],loading:false})
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
    updateFormSubmit(event){
        const name = this.state.name
        const address = this.state.address
        const phone = this.state.phone
        const email = this.state.email
        const image = this.state.image
        const token = this.state.token
        const formData = new FormData()
        formData.append('account',this.state.account)
        formData.append('payment_type',this.state.payment_type)
        formData.append('name',name)
        formData.append('address',address)
        formData.append('phone',phone)
        formData.append('email',email)
        formData.append('image',image)
        formData.append('token',token)

        Axios.post(AppUrl.UserUpdate, formData)
            .then(res=>{
                if(res.data.success){
                    this.props.history.push(`/dashboard`)
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

    onSubmitPassword(event){
        if(this.state.repassword == this.state.password){
            const old = this.state.old
            const password = this.state.password
            const token = this.state.token
            const formData = new FormData()
            formData.append('oldpassword',old)
            formData.append('password',password)
            formData.append('token',token)
            Axios.post(AppUrl.PasswordUpdate, formData)
                .then(res=>{
                    if(res.data.success){
                        this.props.history.push(`/dashboard`)
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
        }else{
            toast.error("New Password and Confirm Password Don't Match", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        event.preventDefault()
    }
    onOld(e){
        this.setState({old:e.target.value})
    }
    onPassword(e){
        this.setState({password:e.target.value})
    }
    onRepassword(e){
        this.setState({repassword:e.target.value})
    }

    onPayment(e){
        this.setState({payment_type:e.target.value})
    }
    onAccount(e){
        this.setState({account:e.target.value})
    }

    onName(e){
        this.setState({name:e.target.value})
    }
    onPhone(e){
        this.setState({phone:e.target.value})
    }
    onAddress(e){
        this.setState({address:e.target.value})
    }
    onEmail(e){
        this.setState({email:e.target.value})
    }
    onImage(e){
        this.setState({image:e.target.files[0]})
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            this.setState({
                image2: [reader.result]
            })
        }.bind(this);
    }
    render() {
        return (
            <Fragment>
                <GlobalHeader title="My Account"/>
                <Sidebar >
                    <div className="row m-3  pt-3">
                        <div className="col-md-2 col-12"></div>
                        <div className="col-md-8 col-12">
                            <div className="col-md-12 uprofile col-12 bg-white py-3 mt-2 table-responsive-sm mb-5 ">
                                <h5 className='text-center'>Profile </h5>
                                <br/>
                                {this.state.loading==true?<Loading/>:
                                    <form onSubmit={this.updateFormSubmit.bind(this)}>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" required onChange={this.onName.bind(this)} value={this.state.name} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" required value={this.state.email} onChange={this.onEmail.bind(this)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                                            <div className="col-sm-10">
                                                <input type="text" required value={this.state.phone} onChange={this.onPhone.bind(this)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-sm-10">
                                                <input type="text" required value={this.state.address} onChange={this.onAddress.bind(this)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Payment Method</label>
                                            <div className="col-sm-10">
                                                <select onChange={this.onPayment.bind(this)} className="form-control">
                                                    <option selected value={this.state.payment_type}> {this.state.payment_type }</option>
                                                    <option value="Mobile banking"> Mobile banking</option>
                                                    <option value="Bank"> Bank </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Account number</label>
                                            <div className="col-sm-10">
                                                <input type="text" required value={this.state.account} onChange={this.onAccount.bind(this)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Role</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.type} className="form-control" id="inputEmail3" readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Photo</label>
                                            <div className="col-sm-3">
                                                {this.state.image2?<img id="showImage" style={{height:'60px',width:'60'}} src={this.state.image2} />:this.state.image ?<img  style={{height:'60px',width:'60'}} src={AppUrl.photoUrl+this.state.image}/> :
                                                    <img style={{height:'60px',width:'60'}} src={NoImage}/>
                                                }
                                            </div>
                                            <div className="col-sm-7">
                                                <input type="file" onChange={this.onImage.bind(this)} className="form-control " id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className=" row">
                                            <div className="col-sm-8">
                                            </div>
                                            <div className="col-sm-4">
                                                <button type="submit" className="btn  btn-dark float-right">Update</button>
                                            </div>
                                        </div>
                                    </form>
                                }
                            </div>

                            <div className="col-md-12 col-12 uprofile bg-white py-3 mt-5 table-responsive-sm mb-5 ">
                                <h5 className='text-center '>Password Change </h5>
                                <br/>
                                <form onSubmit={this.onSubmitPassword.bind(this)}>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Old Password</label>
                                        <div className="col-sm-8">
                                            <input type="password" onChange={this.onOld.bind(this)} className="form-control" id="inputEmail3"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">New Password</label>
                                        <div className="col-sm-8">
                                            <input type="password" onChange={this.onPassword.bind(this)} className="form-control" id="inputEmail3"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Confirm Password</label>
                                        <div className="col-sm-8">
                                            <input type="password" onChange={this.onRepassword.bind(this)} className="form-control" id="inputEmail3"/>
                                        </div>
                                    </div>

                                    <div className=" row">
                                        <div className="col-sm-8">
                                        </div>
                                        <div className="col-sm-4">
                                            <button type="submit" className="btn  btn-dark float-right">Change </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2 col-12 ">

                        </div>
                    </div>
                </Sidebar>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default UserProfile;
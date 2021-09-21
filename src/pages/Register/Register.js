import Axios from "axios";
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import AppUrl from "../../appurl/AppUrl";
import Logo from '../../asset/image/logo.png';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import PageLayout from "../../hoc/pagelayout";

class Register extends Component {

    constructor() {
        super();
        this.state={
            type:'Customer',
            typeName:'Customer Registration', name:'', email:'', phone:'', password:'', status:'1',code:'',rg:'0'
        }
    }

    componentDidMount() {
        if(localStorage.token){
            this.props.history.push(`/dashboard`)
        }
    }
    onCustomer(){
        this.setState({type:'Customer',typeName:'Customer Registration',rg:'1'})
    }
    onSpm(){
        this.setState({type:'SPM',typeName:'Service Point Manager Registration',rg:'1'})
    }
    onName(e){
        this.setState({name:e.target.value})
        console.log(e.target.value)
    }
    onEmail(e){
        this.setState({email:e.target.value})
    }
    onPhone(e){
        this.setState({phone:e.target.value})
    }
    onPasword(e){
        this.setState({password:e.target.value})
    }
    onCode(e){
        this.setState({code:e.target.value})
    }
    VerifyFormSubmit(event){
        const formData = new FormData()
        formData.append('code',this.state.code)
        Axios.post(AppUrl.AccountVerify, formData)
            .then(res=>{
                if(res.data.success){
                    this.setState({status:"1"})
                    toast.success("Registration successfull", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(()=>{
                        this.props.history.push('/login')
                    }, 1000);
                }else{
                    this.setState({status:res.data.status})
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
    FormSubmit(event){
        const formData = new FormData()
        formData.append('name',this.state.name)
        formData.append('email',this.state.email)
        formData.append('phone',this.state.phone)
        formData.append('password',this.state.password)
        formData.append('type',this.state.type)
        Axios.post(AppUrl.Register, formData)
            .then(res=>{
                if(res.data.success){
                    //this.props.history.push('/login')
                    this.setState({name:'',email:'',phone:'',password:'',status:'0'})

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
                <GlobalHeader title="Register" />
                    <PageLayout>
                    <div className="row" style={{ margin:'0',backgroundColor:'white'}}>
                 <div className="col-md-12 col-12">
                     <h1 className="text-center" style={{fontSize:'40px', paddingTop:'50px',paddingBottom:'10px'}} > Registration as a</h1>
                     <div className="container">
                         <div className="row">
                           <div className="col-md-2">
                           </div>
                             <div className="col-md-8 mb-5">
                                <div className="row">
                                    <button onClick={this.onCustomer.bind(this)} className="col-md-5 col-5 btn btn-dark"
                                         style={{height:'50px',padding:'10px 10px',textAlign:'center',
                                             border:'1px solid black'}} >
                                        <a onClick={this.onCustomer.bind(this)} >Customer</a>
                                    </button>
                                    <button className="col-md-2 col-2 btn btn-dark"
                                         style={{height:'50px',padding:'10px 10px',textAlign:'center',
                                        border:'1px solid black',borderRight:'none',borderLeft:'none'}}>
                                        Or
                                    </button>
                                    <button onClick={this.onSpm.bind(this)} className="col-md-5 col-5 btn btn-dark" style={{height:'50px',padding:'5px 0px',textAlign:'center',
                                        border:'1px solid black'}}>
                                        <a onClick={this.onSpm.bind(this)}> Service Point Manager</a>
                                    </button>
                                </div>

                                 {this.state.rg=="1" ?
                                     <div className="row mt-5 pb-5">
                                         <div className="col-md-4 col-12 pt-5" style={{textAlign:'center'}} >
                                             <i className="fas fa-home" style={{fontSize:'200px'}}></i>
                                             <h2>Welcome To TrustLite.</h2>
                                             <p>
                                                 We sell quality, Happiness is for free
                                                 Please Register to Stay With Us.
                                             </p>
                                             <div className="form-group text-center">
                                                 <label  className="text-left">{this.state.typeName}</label>
                                             </div>

                                         </div>
                                         <div className="col-md-8 col-12" >
                                             {this.state.status=="1" ?
                                                 <form onSubmit={this.FormSubmit.bind(this)}>
                                                     <div className="form-group text-center">
                                                         <img src={Logo} style={{height:'75px'}} />
                                                     </div>
                                                     <div className="form-group">
                                                         <label htmlFor="exampleInputEmail1">Name</label>
                                                         <input onChange={this.onName.bind(this)} type="text" className="form-control" id="exampleInputEmail1"
                                                                value={this.state.name}  aria-describedby="emailHelp" required/>
                                                     </div>
                                                     <div className="form-group">
                                                         <label htmlFor="exampleInputEmail1">Phone</label>
                                                         <input onChange={this.onPhone.bind(this)} type="number" className="form-control" id="exampleInputEmail1"
                                                                value={this.state.phone}  aria-describedby="emailHelp" required/>
                                                     </div>
                                                     <div className="form-group">
                                                         <label htmlFor="exampleInputEmail1">Email address</label>
                                                         <input onChange={this.onEmail.bind(this)} type="email" className="form-control" id="exampleInputEmail1"
                                                                value={this.state.email}   aria-describedby="emailHelp" required/>
                                                     </div>
                                                     <div className="form-group">
                                                         <label htmlFor="exampleInputPassword1">Password</label>
                                                         <input onChange={this.onPasword.bind(this)} type="password" className="form-control"
                                                                value={this.state.password}   id="exampleInputPassword1" required/>
                                                     </div>
                                                     <button type="submit" className="btn btn-dark col-md-12 col-12">Registered</button>
                                                     <div className="form-group text-dark pt-2 text-center">
                                                         <p>Have an account ? {' '}<Link to="/login" className="a_link" >Login Now</Link></p>
                                                     </div>
                                                 </form>
                                                 :""}
                                             {this.state.status=="0" ?
                                                 <form onSubmit={this.VerifyFormSubmit.bind(this)}>
                                                     <div className="form-group text-center">
                                                         <img src={Logo} style={{height:'40px'}} />
                                                     </div>

                                                     <div className="form-group">
                                                         <label htmlFor="exampleInputEmail1">Give Verification Code </label>
                                                         <input onChange={this.onCode.bind(this)} type="number" className="form-control" id="exampleInputEmail1"
                                                                value={this.state.code}  aria-describedby="emailHelp" required/>
                                                         <h3> The code has been sent to your phone. Please check your sms</h3>
                                                     </div>

                                                     <button type="submit" className="btn btn-dark col-md-12 col-12">Submit</button>

                                                 </form> :""}
                                         </div>
                                     </div>
                                     :""
                                 }

                             </div>
                         </div>
                     </div>
                 </div>
                </div>
                    </PageLayout>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default withRouter(Register);
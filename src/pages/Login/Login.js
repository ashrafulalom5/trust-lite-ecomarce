import Axios from "axios";
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import AppUrl from "../../appurl/AppUrl";
import Logo from "../../asset/image/logo.png";
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import PageLayout from "../../hoc/pagelayout";

class Login extends Component {
    constructor() {
        super();
        this.state={
            type:'Customer',
            typeName:'Customer Login',
            phone:'',
            password:'',
            status:'0',
            code:''
        }
    }

    componentDidMount() {
        if(localStorage.token){
            this.props.history.push(`/dashboard`)
        }
    }

    onCustomer(){
        this.setState({type:'Customer',typeName:'Customer Login',status:'1'})
    }
    onSpm(){
        this.setState({type:'SPM',typeName:'Service Point Manager Login',status:'1'})
    }

    onPhone(e){
        this.setState({phone:e.target.value})
    }
    onPasword(e){
        this.setState({password:e.target.value})
    }

    FormSubmit(event){
        const formData = new FormData()
        formData.append('phone',this.state.phone)
        formData.append('password',this.state.password)
        Axios.post(AppUrl.Login, formData)
            .then(res=>{
                if(res.data.success){
                    localStorage.setItem('token', res.data.token)
                    this.props.history.push('/dashboard')
                    this.setState({phone:'',password:'',})
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
                    if(res.data.status =="0"){
                        this.setState({status:res.data.status})
                    }
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
                <GlobalHeader title="Login" />
                    <PageLayout>
                    <div className="row" style={{ margin:'0',backgroundColor:'white'}}>
                    <div className="col-md-12 col-12">
                        <h1 className="text-center" style={{fontSize:'40px', paddingTop:'50px',paddingBottom:'10px'}} > Login As a</h1>
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

                                        {this.state.status == "1" ?
                                            <div className="row mt-5 pb-5">
                                                <div className="col-md-4 col-12 pt-5" style={{textAlign:'center'}} >
                                                    <i className="fas fa-home" style={{fontSize:'120px'}}></i>
                                                    <h2>Welcome Back.</h2>
                                                    <p>
                                                        Your one Stop Digital supermarket at your door.
                                                        It's Nice to see you again. Log in to continue your account.
                                                    </p>
                                                    <div className="form-group text-center">
                                                        <label  className="text-left">{this.state.typeName}</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-8 col-12" >
                                                    <form onSubmit={this.FormSubmit.bind(this)}>
                                                        <div className="form-group text-center">
                                                            <img src={Logo} style={{height:'75px'}} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Phone</label>
                                                            <input onChange={this.onPhone.bind(this)} type="number" className="form-control" id="exampleInputEmail1"
                                                                   value={this.state.phone}  aria-describedby="emailHelp" required/>
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Password</label>
                                                            <input onChange={this.onPasword.bind(this)} type="password" className="form-control"
                                                                   value={this.state.password}   id="exampleInputPassword1" required/>
                                                        </div>
                                                        <div className="form-group text-dark pt-2 ">
                                                            <p> <Link to="/forgot" className="text-dark" >Forgot Password</Link></p>
                                                        </div>
                                                        <button type="submit" className="btn btn-dark col-md-12 col-12">Login</button>
                                                        <div className="form-group text-dark pt-2 text-center">
                                                            <p>Don't Have an account ? {' '}<Link to="/register" className="a_link" >Register Now</Link></p>
                                                        </div>
                                                    </form>

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

export default withRouter(Login);
import React, {Component} from 'react';
import GlobalHeader from "../../components/global/globalHeader";
import GlobalFooter from "../../components/global/globalFooter";
import HandBagHistory from '../../components/cart/handbag/BillingInformation'
import {Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import AppUrl from "../../appurl/AppUrl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NoImage from '../../asset/image/noimage.png'
import CashImage from '../../asset/image/cansh.png'
import {toast} from "react-toastify";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {DataContext} from "../../components/Context";
import cart from "../../components/cart/cart";
import Loading from "../../components/Loading/Loading";
import Logo from "../../asset/image/logo.png";

class CheckOutPage extends Component {
    static contextType = DataContext;
    constructor() {
        super();
        this.state={
            locationlist:[],paymentList:[],uid:'', d_schedule:new Date(),spm_location:'',
            receiver_name:'',mobile:'',address:'',city:'',d_type:'',customer_note:'',referral_code:'',
            qtn:'',invoice_no:'',amount:'',spm_id:'',payment_type:'',payment_acc:'',sender_acc:'',trx_id:'',
            payment_des:'', pay_section:'0',pay_section2:'0',pay_section3:'0',billinginfo:'1',loadingpay:true,
            phone:'', password:'',token:'',

        }
    }

    componentDidMount() {
        var rand =  Math.floor(Math.random() * 100000)
        this.setState({invoice_no:rand})
        console.log(rand+" Invoice")
        const token = localStorage.token
        if(token){
            this.setState({token:token})
            const userid = jwt_decode(token)
            this.setState({uid:userid,token:token})
            const myFormData = new FormData()
           /* Axios.post(AppUrl.SpmLocationList,myFormData)
                .then(res=>{
                    this.setState({locationlist:res.data,loading:false})
                })
                .catch(error=>{
                    console.log(error)
                }) */
            Axios.post(AppUrl.PaymentList,myFormData)
                .then(res=>{
                    console.log(res.data)
                    this.setState({paymentList:res.data})
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }

    Changedate = (e) => {
        this.setState({
            d_schedule: e
        });
    };

    onSpmCityName(e){
        this.setState({city:e.target.value})
        var name = e.target.value
        console.log(name)
        const myFormData = new FormData()
        myFormData.append('name',name)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.SpmLocationSearch,myFormData,config)
            .then(res => {
                this.setState({locationlist:res.data,loading:false})
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    onReceiver(e){
        this.setState({receiver_name:e.target.value})
    }

    onMobile(e){
        this.setState({mobile:e.target.value})
    }
    onAddress(e){
        this.setState({address:e.target.value})
    }
    onCity(e){
        this.setState({city:e.target.value})
    }
    onDtype(e){
        this.setState({d_type:e.target.value})
    }
    onCustomer_note(e){
        this.setState({customer_note:e.target.value})
    }
    onReferral_code(e){
        this.setState({referral_code:e.target.value})
    }
    onSpm_id(e){
        this.setState({spm_id:'',spm_location:''})
        var id = e.target.value
        const myFormData = new FormData()
        myFormData.append('id',id)
        Axios.post(AppUrl.SpmLocationOne,myFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({spm_id:res.data[0]['spm_id'],spm_location:res.data[0]['address']})
            })
            .catch(error=>{
                console.log(error)
            })
    }


    onSender(e){
        this.setState({sender_acc:e.target.value})
    }
    onTrx(e){
        this.setState({trx_id:e.target.value})
    }

    onBillingSubmit(event){
        if(this.state.spm_id==""){
            toast.error("Service Point is Required", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else {
            this.setState({pay_section:'1',billinginfo:'0'})
        }
        event.preventDefault()
    }

    onPaymentType(e){
        this.setState({payment_type:e.target.value})
        var id = e.target.name
        const myFormData = new FormData()
        myFormData.append('id',id)
        Axios.post(AppUrl.PaymentOne,myFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({payment_acc:res.data[0]['acc'],payment_type:res.data[0]['bank'],
                    payment_des:res.data[0]['des'],pay_section2:'1',pay_section3:'0',loadingpay:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    onPaymentCashonDelivery(e){
        this.setState({pay_section2:'0',pay_section3:'1',payment_type:'Cash On Delivery'})
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
                    this.setState({phone:'',password:'',token:res.data.token})
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
    onFormSubmit(event){
        const token = this.state.token
        const {cart,total,ClearCart} = this.context;
        const qtn = cart.length

        if(qtn>0){
           cart.map(result=>{
               console.log(result)
               const formData = new FormData();
               formData.append('token',token)
               formData.append('product_id',result.id)
               formData.append('spm_id',this.state.spm_id)
               formData.append('product_price',result.price)
               formData.append('product_qtn',result.count)
               formData.append('invoice_no',this.state.invoice_no)
               if(qtn>0){
                   Axios.post(AppUrl.BillingInrmationOrderHistoryCreate, formData)
                       .then(res=>{
                           if(res.data.success){
                               console.log(res.data.success)
                           }else{
                               console.log(res.data.error)
                           }
                       })
                       .catch(error=>{
                           console.log(error)
                       })
               }
           })


            const invoice = new FormData();
            invoice.append('invoice_no',this.state.invoice_no)
            invoice.append('receiver_name',this.state.receiver_name)
            invoice.append('mobile',this.state.mobile)
            invoice.append('address',this.state.address)
            invoice.append('city',this.state.city)
            invoice.append('d_type',this.state.d_type)
            invoice.append('d_schedule',this.state.d_schedule)
            invoice.append('customer_note',this.state.customer_note)
            invoice.append('referral_code',this.state.referral_code)
            invoice.append('qtn',qtn)
            invoice.append('amount',total)
            invoice.append('spm_id',this.state.spm_id)
            invoice.append('spm_location',this.state.spm_location)
            invoice.append('payment_type',this.state.payment_type)
            invoice.append('payment_acc',this.state.payment_acc)
            invoice.append('sender_acc',this.state.sender_acc)
            invoice.append('trx_id',this.state.trx_id)
            invoice.append('token',this.state.token)
            Axios.post(AppUrl.BillingInformationCreate, invoice)
                .then(res=>{
                    if(res.data.success){
                        ClearCart()
                        localStorage.removeItem('dataCart')
                        this.props.history.push(`/`)
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


        }

        event.preventDefault()
    }

    render() {
        const {cart,total} = this.context;

       const smplist = this.state.locationlist.map(result=>{
           return(
               <option  value={result.id} > {result.address} </option>
           )
       })
        const payemtselect = this.state.paymentList.map(result=>{
            return(
                <button onClick={this.onPaymentType.bind(this)} value={result.bank} name={result.id}
                        className="col-md-2 m-1 text-center col-5 bg-light" style={{border:"none"}}>
                    <img onClick={this.onPaymentType.bind(this)} value={result.bank} name={result.id}
                         style={{height:'70px',width:'70px',paddingTop:'20px'}} src={result.img !="" ? AppUrl.photoUrl+result.img : NoImage}/>
                    <p>{result.bank}</p>

                </button>
            )
        })
        if(cart.length === 0){
            return (
                <>
                    <GlobalHeader title="Checkout Product Empty"/>
                    <h2 style={{textAlign:"center"}}>Nothings Product</h2>
                </>
            )
        }else {
            return (
                <>
                    <GlobalHeader title="Checkout"/>
                    {this.state.token !="" ?
                        <div className="row" style={{margin:'0'}}>

                            {this.state.billinginfo=="1" ?
                                <>
                                    <div className="col-md-12 mt-3 col-12 p-3 text-center">
                                        <Link to="/" className=" btn btn-dark " style={{fontSize:'14px',width:'240px'}} >
                                            Continue Shopping
                                        </Link>
                                    </div>

                                    <div className="col-md-6 col-12 mt-5 ">
                                        <div className="p-5 col-12 col-md-12 ">
                                            <h3 className="" style={{marginBottom:'50px'}}>Delivery Information</h3>
                                            <form onSubmit={this.onBillingSubmit.bind(this)}>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Receiver Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.onReceiver.bind(this)} value={this.state.receiver_name} required className="form-control" id="inputEmail3"/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Mobile No</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.onMobile.bind(this)} value={this.state.mobile} required className="form-control" id="inputEmail3"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Address</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.onAddress.bind(this)} value={this.state.address} required className="form-control" id="inputEmail3"/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Delivery Type</label>
                                                    <div className="col-sm-9">
                                                        <select onChange={this.onDtype.bind(this)} className="form-control">
                                                            <option selected value=""> Delivery Type </option>
                                                            <option value="Repeated"> Repeated </option>
                                                            <option value="1st Time"> 1st Time </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Delivery Schedule</label>
                                                    <div className="col-sm-9">
                                                        <DatePicker className="form-control " selected={this.state.d_schedule}
                                                                    style={{width:'100%!important'}}    onChange={this.Changedate}/>
                                                    </div>

                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Notes</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.onCustomer_note.bind(this)} value={this.state.customer_note} className="form-control" id="inputEmail3"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Select City</label>
                                                    <div className="col-sm-9">
                                                        <select onChange={this.onSpmCityName.bind(this)}
                                                                className="form-control">
                                                            <option selected value=""> Choose your City </option>
                                                            <option value="Dhaka"> Dhaka  </option>
                                                            <option value="Rajshahi"> Rajshahi  </option>
                                                            <option value="Khulna"> Khulna  </option>
                                                            <option value="Chittagong"> Chittagong  </option>
                                                            <option value="Rangpur"> Rangpur  </option>
                                                            <option value="Sylhet"> Sylhet  </option>
                                                            <option value="Barisal"> Barisal  </option>
                                                            <option value="Mymensignh"> Mymensignh  </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Select our service point location</label>
                                                    <div className="col-sm-9">

                                                        <select onChange={this.onSpm_id.bind(this)}
                                                                className="form-control">
                                                            <option selected value=""> Choose your nearest Service point </option>
                                                            {smplist}
                                                        </select>
                                                        <p>{/*this.state.spm_location this.state.spm_id */}  </p>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-6 col-form-label">Give recommendor Buy & Earn code : if you have this code must be applied.</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={this.onReferral_code.bind(this)} value={this.state.referral_code}  className="form-control" id="inputEmail3"/>
                                                    </div>
                                                </div>
                                                <div className=" row">
                                                    <div className="col-sm-6">
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <button type="submit" className="btn  btn-dark float-right">Pay and Place Order </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 mt-2 p-3">
                                        <HandBagHistory/>
                                    </div>
                                </>
                                :''
                            }
                            <div className="col-md-12 col-12">
                                {this.state.pay_section=="1" ?
                                    <div className="row p-5">
                                        {payemtselect}
                                        <button onClick={this.onPaymentCashonDelivery.bind(this)}
                                         className="col-md-2 m-1 text-center col-5 bg-light" style={{border:"none"}}
                                        >
                                            <img style={{height:'100px',width:'100px'}} src={CashImage}/>
                                            <p>Cash On Delivery</p>
                                        </button>

                                        {this.state.pay_section2 =="1"? <div className="col-md-6 col-12 bg-white p-5">

                                                <form onSubmit={this.onFormSubmit.bind(this)}>
                                                    {this.state.loadingpay==true ? <Loading/> :
                                                        <>
                                                            <h3 className="text-center"> Order invoice Number {this.state.invoice_no} </h3>
                                                            <h3 className="text-center"> Order Total Amount ৳{total} + Delivery charge </h3>
                                                            <p>{ReactHtmlParser(this.state.payment_des)}</p>
                                                            <div className="form-group row">
                                                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Payment Type</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" readOnly value={this.state.payment_type}  className="form-control" id="inputEmail3"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Payment Account</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" readOnly value={this.state.payment_acc}  className="form-control" id="inputEmail3"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">From Account</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" required onChange={this.onSender.bind(this)} value={this.state.sender_acc}  className="form-control" id="inputEmail3"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Trx ID</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" required onChange={this.onTrx.bind(this)} value={this.state.trx_id}  className="form-control" id="inputEmail3"/>
                                                                </div>
                                                            </div>
                                                            <button  className="btn btn-warning mt-2 float-right checkout_confirm" style={{width: '288px', height:'48px',color:'#fff',fontSize:'16px',backgroundColor:'#f57224'}}>
                                                                Confirm Order
                                                            </button>
                                                        </>
                                                    }

                                                </form>
                                            </div>
                                            : ""}

                                        {this.state.pay_section3=="1" ? <div className="col-md-6 col-12 bg-white p-5">
                                                <h3 className="text-center"> Order invoice Number {this.state.invoice_no} </h3>
                                                <h3 className="text-center"> Order Total Amount ৳{total} + Delivery charge </h3>
                                                <p> You can pay in cash to our delivery man when you receive the goods at your doorstep.</p>
                                                <form onSubmit={this.onFormSubmit.bind(this)}>
                                                    <button  className="btn btn-warning checkout_confirm" style={{width: '288px', height:'48px',color:'#fff',fontSize:'16px',backgroundColor:'#f57224'}}>
                                                        Confirm Order
                                                    </button>
                                                </form>
                                            </div>
                                            : ""}


                                    </div> : ""
                                }
                            </div>
                        </div>

                        :
                        <div className="row" style={{ margin:'0',backgroundColor:'white'}}>
                            <div className="col-md-12 col-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                        </div>
                                        <div className="col-md-8 mb-5">

                                            <div className="row mt-5 pb-5">
                                                <div className="col-md-4 col-12 pt-5" style={{textAlign:'center'}} >
                                                    <i className="fas fa-home" style={{fontSize:'120px'}}></i>
                                                    <h2>Welcome Back.</h2>
                                                    <p>
                                                        Your one Stop Digital supermarket at your door.
                                                        It's Nice to see you again. Log in to continue your account.
                                                    </p>

                                                </div>
                                                <div className="col-md-8 col-12" >
                                                    <form onSubmit={this.FormSubmit.bind(this)}>
                                                        <div className="form-group text-center">
                                                            <img src={Logo} style={{height:'40px'}} />
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
                                                            <p>Don't Have an account ?<Link to="/register" className="text-dark" >Register Now</Link></p>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <GlobalFooter />
                </>
            );
        }

    }
}

export default CheckOutPage;
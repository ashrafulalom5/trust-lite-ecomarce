import Axios from "axios";
import jwt_decode from "jwt-decode";
import React, { Component, Fragment } from 'react';
import { DropdownButton, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import AppUrl from "../../../appurl/AppUrl";
import { DataContext } from "../../Context";

class HeaderMini extends Component {
    static contextType = DataContext;
    constructor(props) {
        super(props);
        this.state={
            name:'',
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose",
            token:'',
            type:'',msg:'0',rc:'0',p:''
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
        }
    }

    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }



    SideNavOpenClose=()=>{
        let SideNavState= this.state.SideNavState;
        let ContentOverState= this.state.ContentOverState;
        if(SideNavState==="sideNavOpen"){
            this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
        }
        else{
            this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
        }
    }

    onName(e){
        this.setState({name:e.target.value})
    }

    onSubmit(e){
        if(this.state.name !=''){
            this.props.history.push('/seacrh/product/'+this.state.name)
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
        const {cart,ClearCart,total} = this.context;
        return (
            <Fragment>

                <Navbar className="mini-nav fixed-top" expand="md">
                    {/*
                    <Link to="/">
                        <Navbar.Brand href="#home">
                            <img style={{height:'40px',width:'60px',margin:'0',padding:'0'}} src={Image}/>
                        </Navbar.Brand>
                    </Link>
                    */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.MenuBarClickHandler} className=" minibtn" >
                        <i className="fas fa-bars text-light " style={{fontSize:'25px'}}></i>
                    </Navbar.Toggle>
                    <a style={{paddingLeft:'10px'}} ><Navbar.Brand >
                        {/*<i className="fa fa-search text-white"></i>style={{paddingLeft:'100px'}}*/}
                            <input onChange={this.onName.bind(this)} placeholder="Search Products" 
                            className="mobile_search_field"/>
                            <button onClick={this.onSubmit.bind(this)} style={{width:'40px',backgroundColor:'#f26f00',border:'none',color:'white'}}>
                                <i className="fa fa-search"></i> </button>

                    </Navbar.Brand></a>

                    {/*Cart Items to show in the menus */}
                    
                    <div className="wrapper">
                        <Link to="/cart">
                            <i className="fa fa-shopping-cart text-light"
                            style={{color:"black",textAlign:'left',fontSize:'20px'}}></i>
                            <span className="cart_length"> {cart.length}</span>
                    
                        </Link>
                     </div>



                    <DropdownButton className="float-right dropdownbtn " variant="secondary"
                                    style={{width:'20px',textAlign:'left'}}
                                    menuAlign="right" title={<i className="fas fa-ellipsis-v text-light"
                                                                style={{paddingRight:'25px',fontSize:'25px',paddingTop:'3px'}}></i>}
                                    id="dropdown-menu-align-right">
                        {this.state.token !=''?
                            <>

                            <Link className="nav-link minidropmenu" to="/dashboard">
                                Dashboard
                            </Link>
                            <Link className="nav-link minidropmenu" to="/user/profile">
                                Manage Profile
                            </Link>
                                {this.state.type=="Customer" ?
                                    <>
                                        <Link className="nav-link minidropmenu" to="/customer/order-history">
                                            Order History
                                        </Link>
                                        <Link className="nav-link minidropmenu" to="/payments">
                                            Payment History
                                        </Link>
                                        <Link className="nav-link minidropmenu" to="/order-tracking">
                                            Order Tracking
                                        </Link>
                                        <Link className="nav-link minidropmenu" to="/notification">
                                            Notification ({this.state.msg})
                                        </Link>
                                        <Link className="nav-link minidropmenu" to="/referral">
                                            Buy & Earn Section ({this.state.rc})
                                        </Link>
                                    </> :
                                    <>
                                    <Link className="nav-link minidropmenu" to="/spm/order-history">
                                        Order History ({this.state.p})
                                    </Link>
                                        <Link className="nav-link minidropmenu" to="/spm/payment">
                                            Payment Management
                                        </Link>
                                        <Link className="nav-link minidropmenu" to="/notification">
                                            Notification ({this.state.msg})
                                        </Link>
                                    </>

                                }
                                <Link className="nav-link minidropmenu" to="/latest/blog">
                                    Update Inormation
                                </Link>
                                <Link className="nav-link minidropmenu" to="/guideline">
                                    Guideline
                                </Link>
                                <span className="nav-link minidropmenu" onClick={this.logOut.bind(this)} >
                                    Logout
                                </span>
                            </> :
                           <>
                            <Link className="nav-link minidropmenu" to="/login">
                            Login
                            </Link>
                            <Link className="nav-link minidropmenu" to="/register">
                            Register
                            </Link>
                               <Link className="nav-link minidropmenu" to="/latest/blog">
                                   Update Inormation
                               </Link>
                               <Link className="nav-link minidropmenu" to="/guideline">
                                   Guideline
                               </Link>
                            </>

                        }
                    </DropdownButton>
                    {/*
                    <Link to='/' className="float-right nav-cart"><Navbar.Brand >
                        <i className="fa fa-shopping-cart text-white" style={{width:'20px',paddingRight:'5px'}}> </i>
                    </Navbar.Brand></Link>
                    */}

                </Navbar>
                <div  className={this.state.SideNavState}>
                   <div className="sideList">
                       {/*
                        <div className="logo">
                          <img src={Image} />
                          <button onClick={this.MenuBarClickHandler} className="btn ">
                              <i className="fas fa-close" style={{fontSize:'20px',color:'#444'}}></i>
                          </button>
                       </div>
                       */}

                       <Link className="nav-link" to={"/"}>
                           Home
                       </Link>
                       <Link className="nav-link" to={"/category/product-market"}>
                           Product Markets
                       </Link>
                       <Link className="nav-link" to={"/category/homemade-ready-meals"}>
                           Homemade Ready Meals
                       </Link>
                       <Link className="nav-link" to={"/category/ready-to-cook-product"}>
                           Ready to Cook Product
                       </Link>
                       <Link className="nav-link" to={"/category/combo-packs"}>
                           Combo Packs
                       </Link>
                       <Link className="nav-link" to={"/category/wholesale-zone"}>
                           Wholesale Zone
                       </Link>
                       <Link className="nav-link" to="/partner">
                           Become a Partner
                       </Link>
                       <Link className="nav-link" to="/buy/earn">
                           Buy &amp; Earn Opportnity
                       </Link>
                       <Link className="nav-link" to="/servicepoint/location">
                           Find various service point
                       </Link>


                   </div>
                </div>
                <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}></div>        

            </Fragment>
            );
    }
}

export default withRouter(HeaderMini);
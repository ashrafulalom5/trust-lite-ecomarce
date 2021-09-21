import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import LogoImage from '../../../asset/image/logo.png';
import { DataContext } from "../../Context";
import classes from './Header.module.css';

class header extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            token:''
        }
    }
    static contextType = DataContext;
    componentDidMount() {
        const token = localStorage.token
        if(token){
            this.setState({token:token})
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


    render() {
        const {cart} = this.context;

        return (
            <>
                <div className={classes.mainheader}>
                    <div className={classes.left}>
                        <Link to="/">
                            <img
                                className={classes.logo}
                                src={LogoImage} style={{height:'100px'}}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.searchbox}>
                            <div className="input-group">
                                <input
                                    type="text" onChange={this.onName.bind(this)}
                                    className="form-control"
                                    placeholder="Search for locally produced products"
                                    aria-label="Search Product"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                        <span onClick={this.onSubmit.bind(this)} className={['input-group-text', classes.search_icon].join(' ')} id="basic-addon2">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                                </div>
                            </div>
                            {/* <input type="text" placeholder="Search product" className="form-control" /> */}
                        </div>
                        <div className={classes.nav_items}>
                            <div className="my_account">
                                <i className="fas fa-user-circle text-white pb-2" ></i>
                                <br/>
                                <Link to="/dashboard">My Account</Link>
                            </div>
                            {this.state.token?'':
                                <div className="loginregister">
                                    <i class="fas fa-user-plus text-white pb-2"></i>
                                    <br/>
                                    <Link to="/login">Login </Link>
                                    or
                                    <Link to="/register"> Register</Link>
                                </div>
                            }
                            <div className="nav-cart">
                                <i className="fa fa-shopping-cart text-white pb-2" > </i>
                                <span className="text-warning">({cart.length})</span>
                                <br/>
                                <Link to="/cart">View Handbag</Link>
                            </div>
                            <div className="guidelines">
                                <i className="fa fa-book text-white pb-2"></i>
                                <br/>
                                <Link to="/guideline">Guideline</Link>
                            </div>
                            <div className="updateinformation">
                                <i className="fa fa-info text-white pb-2"></i>
                                <br/>
                                <Link to="/latest/blog">Update Information</Link>
                            </div>
                            <div className="hotline">
                                <i className="fa fa-phone text-white pb-2"></i>
                                <br/>
                                <span className='text-white'>
                                    01310850684
                                    <br />
                                    customer@trust-lite.com
                                </span>
                            </div>
                        </div>
                    </div>
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
                </div>
            </>
        );
    }
}

export default withRouter(header);

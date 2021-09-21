import React,{Component} from 'react';
import classes from './amount.module.css';
import {DataContext} from "../../Context";
import {Link} from "react-router-dom";



class amount extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart,ClearCart,total} = this.context;
        if(cart.length === 0){
              return ""
        }else{
            return (
                <>
                    {/*<div className="col-lg-7"></div>*/}
                <div className="col-lg-4 p-3">
                <div className={['card-body', classes.boxShadow].join(' ')}>
                    <div className="row">
                        <div className="col-md-5 col-5">
                            <button onClick={() => ClearCart()} className="float-right  btn btn-dark " style={{fontSize:'14px',width:'100%'}} >
                                Clear Cart
                            </button>
                        </div>

                        <div className="col-md-7 col-7 ">
                            <Link to="/" className="float-right  btn btn-dark " style={{fontSize:'14px',width:'100%'}} >
                               Continue Shopping
                            </Link>
                        </div>
                    </div>
                    <hr/>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Item subtotal
                            <span>৳ {total}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Grand Total
                            <span>৳ {total} + Delivery charge</span>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list-group">
                        <li className=" d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <strong>Amount to pay</strong>
                            <strong>
                                <span>৳ {total} + Delivery charge</span>
                            </strong>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9 col-12 ">
                            <Link to="/checkout" type="button" className="float-right  btn btn-primary chechoutbtn " >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
                </>
            );
        }

    }
}


export default amount;

import { faHeart, faInfoCircle, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Component} from 'react';
import classes from './handbag.module.css';
import {DataContext} from "../../Context";
import AppUrl from "../../../appurl/AppUrl";
import NoImage from '../../../asset/image/noimage.png'


class BillingInformation extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {

        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothing Product</h2>
        }else {
            const singleCart = cart.map((singleItems) => (
                <div className="row " style={{borderBottom:'1px solid #EFEBE2', backgroundColor:'white'}} >
                    <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view my-2">
                            <img className={['img-fluid w-100', classes.imageRadius].join(' ')}
                                 style={{height:'150px'}} src={singleItems.img1!=''?AppUrl.photoUrl+singleItems.img1:NoImage} alt={singleItems.title}/>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-9 col-xl-9 mt-4 text-left py-2">
                        <div className="d-flex">
                            <div className="d-flex justify-content-between">
                                <div className="">
                                    <h5 className={classes.productTitle}>{singleItems.title + " / "+ singleItems.unit}</h5>
                                    <p>৳ {singleItems.price}</p>
                                </div>
                            </div>
                            <div className={classes.input_group}>
                                <div className={classes.btn_group}>
                                    <FontAwesomeIcon className={classes.faIcons} icon={faMinus}  onClick={() => reduction(singleItems.id)} />
                                    <input
                                        className={['form-control', classes.asText].join(' ')}
                                        type="text" name="quantity" value={singleItems.count} min="1" />
                                    <FontAwesomeIcon onClick={() => increase(singleItems.id)} className={classes.faIcons} icon={faPlus} />
                                </div>
                            </div>
                        </div>
                        <div className={['d-flex justify-content-between', classes.cart_action].join(' ')}>
                            <p onClick={() => removeProduct(singleItems.id)} className={classes.product_action_btn}>
                                <FontAwesomeIcon icon={faTrash} />
                                Remove Items
                            </p>
                            <p className={classes.productPrice}> ৳ {singleItems.price*singleItems.count }</p>
                        </div>
                    </div>
                </div>
            ));
            return (
                <>
                    <div className="col-lg-12 col-12 ">
                        <div className="mb-4">
                            <div className={['card-body', classes.wish_list].join(' ')}>
                                <div className="bg-white row ">
                                    <div className="col-md-12 col-12 bg-white">
                                        <h3 className="text-center pt-2 pb-2"> Billing Information </h3>
                                        <hr/>
                                    </div>
                                </div>
                                {singleCart}
                                <div className="bg-white row ">
                                    <div className="col-md-12 col-12 bg-white">
                                        <h3 className="text-right pt-2 pb-2"> Grand Total : <span>৳ {total} + Delivery charge</span></h3>
                                    </div>
                                </div>
                                <div className={classes.cart_alert}>

                                    <p className="text-left d-none">
                                        {' '}
                                        <FontAwesomeIcon icon={faInfoCircle} /> Do not delay the purchase, adding
                                        items to your cart does not mean booking them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

    }
}


export default BillingInformation;

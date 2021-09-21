import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import { withRouter } from "react-router-dom";
import AppUrl from "../../appurl/AppUrl";
import NoImage from '../../asset/image/noimage.png';
import classes from "../cart/handbag/handbag.module.css";
import { DataContext } from "../Context";
import Loading from "../Loading/Loading";

class productDetails extends Component {
    static contextType = DataContext;
    constructor({match}) {
        super();
        this.state = {
            slug:match.params.name,
            title:'',category:'',supplier:'',quality:'',storage:'',weight:'',unit:'',packaging:'',available:'',nutritional:'',cat_name:'',
            quantity:'',size:'',color:'',des:'',img1:'',img2:'',img3:'',img4:'',img5:'',wholesale:'',mpp:'',mph:'',
            token:'', data:[],price:'',p_img:'',p_name:'',p_address:'',brand:'',ing:'',msg:'',id:'',count:'',
            loading:true
        }
    }
    componentDidMount() {
        const formData = new FormData()
        formData.append('slug',this.state.slug)
        Axios.post(AppUrl.SingleProduct,formData)
            .then(res=>{
                console.log(res.data)
                this.setState({p_name:res.data[0]['p_name'],p_address:res.data[0]['p_address'],p_img:res.data[0]['p_img'],title:res.data[0]['title'],category:res.data[0]['catgory'],supplier:res.data[0]['supplier'],quality:res.data[0]['quality'],
                    storage:res.data[0]['storage'],weight:res.data[0]['weight'],unit:res.data[0]['unit'],packaging:res.data[0]['packaging'],available:res.data[0]['available'],
                    nutritional:res.data[0]['nutritional'],quantity:res.data[0]['quantity'],size:res.data[0]['size'],color:res.data[0]['color'],
                    des:res.data[0]['des'],img1:res.data[0]['img1'],img2:res.data[0]['img2'],img3:res.data[0]['img3'],img4:res.data[0]['img4'],
                    img5:res.data[0]['img5'],mpp:res.data[0]['mpp'],mph:res.data[0]['mph'],wholesale:res.data[0]['wholesale'],cat_name:res.data[0]['cat_name'],
                    price:res.data[0]['price'],brand:res.data[0]['brand'],ing:res.data[0]['ing'],msg:res.data[0]['msg'],count:res.data[0]['count'],
                    id:res.data[0]['id'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    onImage(e){
        this.setState({img1:e.target.name})
        console.log("Name "+e.target.name)
    }
    render() {
        const {products,addCart,addCart2,cart,increase,reduction,removeProduct,total} = this.context;
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 778 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 777, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };

       const countvalue = cart.map(item =>{
            if(item.id === this.state.id){
               return ( item.count)
            }
        })
        const pricevalue = cart.map(item =>{
            if(item.id === this.state.id){
                return ( item.price * item.count)
            }
        })

        return (
            <div className="container-fluid product_details_img bg-light">
                {this.state.loading==true ? <Loading/> :
                    <Row >
                        <div className="col-md-12 col-12 text-center "><h1 className="d-none" style={{padding:'20px',fontSize:'25px'}}>View Details</h1></div>
                        <Col className="col-md-6 col-lg-6 col-12 pd-right pl-4" >
                            <div className="col-md-12 col-12 mt-5 product_features_div">
                                <img className="itemsPic" src={this.state.img1 ? AppUrl.photoUrl+this.state.img1 : NoImage}  />
                            </div>
                            <div className="product_related_image">
                                <img className="sm-img pd-sm-block" onClick={this.onImage.bind(this)} name={this.state.img2} src={this.state.img2 ? AppUrl.photoUrl+this.state.img2 : NoImage}  />
                                
                                
                                <img className="sm-img " onClick={this.onImage.bind(this)} name={this.state.img3} src={this.state.img3 ? AppUrl.photoUrl+this.state.img3 : NoImage}  />
                            
                            
                                <img className="sm-img pd-sm-block" onClick={this.onImage.bind(this)} name={this.state.img4} src={this.state.img4 ? AppUrl.photoUrl+this.state.img4 : NoImage}  />
                            
                            
                                <img className="sm-img " onClick={this.onImage.bind(this)} name={this.state.img5} src={this.state.img5 ? AppUrl.photoUrl+this.state.img5 : NoImage}  />
                            </div>

                        </Col>
                        <Col className="col-md-6  col-lg-6 col-12 ">
                            <div className="row pdr" style={{marginLeft:'30px'}}>
                                <div className="col-sm-12 col-md-12 col-12 ">
                                    <h4> {this.state.title} Tk.{this.state.price} / {this.state.unit} </h4>
                                </div>
                            </div>

                            <div className="row" style={{marginTop:'30px',marginLeft:'30px'}}>
                                <div className="col-sm-4 col-md-4 col-12  mb-2">
                                   <button style={{backgroundColor:'white',border:'1px solid black'}}>
                                       <FontAwesomeIcon className={classes.faIcons} icon={faMinus}  onClick={() => reduction(this.state.id)} />
                                   </button>
                                    <button  style={{backgroundColor:'white',border:'1px solid black',borderRight:'none',borderLeft:'none',width:'50px'}}>
                                        {countvalue !="" ?countvalue : this.state.count}
                                    </button>
                                    <button style={{backgroundColor:'white',border:'1px solid black'}}>
                                        <FontAwesomeIcon onClick={() => increase(this.state.id)} className={classes.faIcons} icon={faPlus} />
                                    </button>
                                    <p>( Total Price : {pricevalue !="" ? pricevalue : this.state.price} Tk )</p>
                                </div>
                                <div className="col-sm-5 col-md-5 col-12 ">
                                    <button className="btn btn-primary btn-radius" onClick={()=> addCart2(this.state.id)}>
                                        Add To Handbag
                                    </button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                }
            </div>
        );
    }
}

export default withRouter(productDetails);


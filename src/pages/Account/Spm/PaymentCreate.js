import React, {Component, Fragment} from 'react';
import jwt_decode from "jwt-decode";
import Axios from "axios";
import AppUrl from "../../../appurl/AppUrl";
import {toast} from "react-toastify";
import GlobalHeader from "../../../components/global/globalHeader";
import Sidebar from "../Sidebar";
import Loading from "../../../components/Loading/Loading";
import NoImage from "../../../asset/image/noimage.png";
import GlobalFooter from "../../../components/global/globalFooter";

class PaymentCreate extends Component {
    constructor() {
        super();
        this.state = {
            token:'',t_sold:'',c_amount:'',c_charge:''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token){
            this.setState({token:token})
        }
    }

    FormSubmit(event){
        const token = this.state.token
        const formData = new FormData()
        formData.append('t_sold',this.state.t_sold)
        formData.append('c_amount',this.state.c_amount)
        formData.append('c_charge',this.state.c_charge)
        formData.append('token',token)

        Axios.post(AppUrl.PaymentManagementCreate, formData)
            .then(res=>{
                if(res.data.success){
                    this.props.history.push(`/spm/payment`)
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


    onTsold(e){
        this.setState({t_sold:e.target.value})
    }
    onCamount(e){
        this.setState({c_amount:e.target.value})
    }
    onCcharge(e){
        this.setState({c_charge:e.target.value})
    }


    render() {
        return (
            <Fragment>
                <GlobalHeader title="Payment history add"/>
                <Sidebar >
                    <div className="row m-3  pt-3">
                        <div className="col-md-2 col-12"></div>
                        <div className="col-md-8 col-12">
                            <div className="col-md-12 uprofile col-12 bg-white py-3 mt-2 table-responsive-sm mb-5 ">
                                <h5 className='text-center'>Payment history add </h5>
                                <br/>

                                    <form onSubmit={this.FormSubmit.bind(this)}>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Total Sold Amount</label>
                                            <div className="col-sm-9">
                                                <input type="text" required onChange={this.onTsold.bind(this)} value={this.state.t_sold} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Total Collection amount</label>
                                            <div className="col-sm-9">
                                                <input type="text" required onChange={this.onCamount.bind(this)} value={this.state.c_amount} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Total Collection Delivery charge</label>
                                            <div className="col-sm-9">
                                                <input type="text" required onChange={this.onCcharge.bind(this)} value={this.state.c_charge}  className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>

                                        <div className=" row">
                                            <div className="col-sm-8">
                                            </div>
                                            <div className="col-sm-4">
                                                <button type="submit" className="btn  btn-dark float-right">Submit</button>
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

export default PaymentCreate;
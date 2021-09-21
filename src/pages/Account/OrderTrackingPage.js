import React, {Component, Fragment} from 'react';
import GlobalHeader from "../../components/global/globalHeader";
import Sidebar from "./Sidebar";
import GlobalFooter from "../../components/global/globalFooter";
import Axios from "axios";
import AppUrl from "../../appurl/AppUrl";

class OrderTrackingPage extends Component {
    constructor() {
        super();
        this.state={
            invoice:'',status:'',payment_type:'',d_schedule:'',amount:'',spm_location:'',d_type:'',
            receiver_name:'',mobile:'',address:'',city:'',customer_note:'',referral_code:'',payment_acc:'',sender_acc:'',
            trx_id:'',date:'',qtn:'',customer_name:'',status_msg:'',spm_id:'',id:'',review_msg:'',
            data:[],loading:true,type:'',token:'',t_status:''
        }
    }

    componentDidMount() {
        const token = localStorage.token
        this.setState({token:token})
    }

    onInvoice(e){
        this.setState({invoice:e.target.value})
    }
    onSubmit(e){
       if(this.state.invoice !==""){
           const myFormData = new FormData()
           myFormData.append("invoice",this.state.invoice)
           myFormData.append('token',this.state.token)
           const config = {
               headers : {'content-type':'multipart/form-data'}
           }
           Axios.post(AppUrl.OneOrdersHistory,myFormData,config)
               .then(res=>{
                   this.setState({data:res.data.products,loading:false})
                   this.setState({t_status:res.data.billing[0]['t_status'],payment_type:res.data.billing[0]['payment_type'],status:res.data.billing[0]['status'],d_schedule:res.data.billing[0]['d_schedule']
                       ,amount:res.data.billing[0]['amount'],spm_location:res.data.billing[0]['spm_location'],d_type:res.data.billing[0]['d_type'],
                       receiver_name:res.data.billing[0]['receiver_name'],mobile:res.data.billing[0]['mobile'],address:res.data.billing[0]['address'],
                       city:res.data.billing[0]['city'],customer_note:res.data.billing[0]['customer_note'],referral_code:res.data.billing[0]['referral_code'],
                       payment_acc:res.data.billing[0]['payment_acc'],sender_acc:res.data.billing[0]['sender_acc'],trx_id:res.data.billing[0]['trx_id'],
                       date:res.data.billing[0]['date'],customer_name:res.data.billing[0]['customer_name'],status_msg:res.data.billing[0]['status_msg'],
                       spm_id:res.data.billing[0]['spm_id'],qtn:res.data.billing[0]['qtn'],id:res.data.billing[0]['id']
                   })
                   console.log(res.data.products+"Data Get")
               })
               .catch(error=>{
                   console.log(error)
               })
       }
    }

    render() {
        return (
            <Fragment>
                <GlobalHeader title="Order Tracking"/>
                <Sidebar>
                        <div className="row m-1 bg-white pt-3">
                            <div className="col-md-8 col-12 mb-5 mt-2">
                                <h3 className="body-title pl-5 mb-5"> Tracking your order </h3>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Enter invoice Number</label>
                                    <div className="col-sm-6">
                                        <input type="text" onChange={this.onInvoice.bind(this)} value={this.state.invoice} className="form-control" id="inputEmail3"/>
                                    </div>
                                    <div className="col-sm-2">
                                        <button type="submit" onClick={this.onSubmit.bind(this)} className="btn  btn-dark float-right"> Submit </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {this.state.status !=""?
                        <div className="row bg-white m-1 pt-3">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 bg-white py-3">
                                <p> Order Status : {this.state.status} </p>
                                <p> Tracking status : {this.state.t_status} </p>
                                <p> Order Status Message : {this.state.status_msg} </p>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        :""
                    }
                </Sidebar>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default OrderTrackingPage;
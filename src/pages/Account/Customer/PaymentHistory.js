import React, {Component, Fragment} from 'react';
import moment from "moment";
import {Link} from "react-router-dom";
import Axios from "axios";
import AppUrl from "../../../appurl/AppUrl";
import GlobalHeader from "../../../components/global/globalHeader";
import Sidebar from "../Sidebar";
import Loading from "../../../components/Loading/Loading";
import ReactDatatable from "@ashvin27/react-datatable";
import GlobalFooter from "../../../components/global/globalFooter";

class PaymentHistory extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            token:'',
            loading:true
        }
        this.columns = [
            {
                text: "Serial",
                className: "action",
                align: "center",
                cell: (record,key) => {
                    return(
                        <Fragment>
                            { key + 1}
                        </Fragment>
                    )
                }
            },
            {key: "invoice_no", text: "Invoice"},
            {key: "payment_type", text: "Payment Type"},
            {key: "payment_acc", text: "Receiver Account"},
            {key: "sender_acc", text: "Sender Account"},
            {key: "trx_id", text: "Trx ID"},
            {key: "amount", text: "Total" ,
                cell: record => {
                    return(
                        <Fragment>
                            ৳ {record.amount} + Delivery charge
                        </Fragment>
                    )
                }},
            {key: "qtn", text: "Product Quantity"},
            {key: "p_status", text: "Status"},
            {key: "date", text: "Created Date",
                cell: record => {
                    return(
                        <Fragment>
                            {moment(record.date).format("Do  MMMM YYYY")}
                        </Fragment>
                    )
                }
            },


        ];

        this.config = {
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'basic',
            button: {
                excel: false,
                print: false
            }
        }

        this.state = {
            records: []
        }


    }

    componentDidMount() {
        const token = localStorage.token
        if(token){
            this.setState({token:token})
            const myFormData = new FormData()
            myFormData.append('token',token)
            const config = {
                headers : {'content-type':'multipart/form-data'}
            }
            Axios.post(AppUrl.CustomerAllOrders,myFormData,config)
                .then(res=>{
                    this.setState({records:res.data,loading:false})
                    console.log(res.data+"Data Get")
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }


    render() {

        return (
            <Fragment>
                <GlobalHeader title="My Order Payment History"/>
                <Sidebar>
                    {this.state.loading==true ? <Loading/> :
                        <div className="row m-1 bg-white pt-3">
                            <h3 className="body-title pl-5"> Payment History </h3>
                            <div className="col-md-12 col-12 bg-white py-3  table-responsive-sm mb-5 ">
                                <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>
                            </div>
                        </div>
                    }
                </Sidebar>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default PaymentHistory;
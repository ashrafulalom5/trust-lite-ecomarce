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

class SpmOrderHistory extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            token:'',p:'',d:'',c:'',a:'',
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
            {key: "spm_location", text: "SPM Location"},
            {key: "customer_name", text: "Customer Name"},
            {key: "amount", text: "Total" ,
                cell: record => {
                    return(
                        <Fragment>
                            ৳ {record.amount} + Delivery charge
                        </Fragment>
                    )
                }},
            {key: "qtn", text: "Product Quantity"},
            {key: "date", text: "Created Date",
                cell: record => {
                    return(
                        <Fragment>
                            {moment(record.date).format("Do  MMMM YYYY")}
                        </Fragment>
                    )
                }
            },
            { text: "Action",
                cell: record => {
                    return(
                        <Fragment>
                            <Link to={"/order-history/details/"+record.invoice_no} className="btn btn-info btn-sm"> View More</Link>
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
            Axios.post(AppUrl.SpmPendingOrders,myFormData,config)
                .then(res=>{
                    this.setState({records:res.data})
                    console.log(res.data+"Data Get")
                })
                .catch(error=>{
                    console.log(error)
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
    onSuccess(event){
        const myFormData = new FormData()
        myFormData.append('token',this.state.token)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.SpmSuccessOrders,myFormData,config)
            .then(res=>{
                this.setState({records:res.data,loading:false})
                console.log(res.data+"Data Get")
            })
            .catch(error=>{
                console.log(error)
            })
        event.preventDefault()
    }

    onDelivered(event){
        const myFormData = new FormData()
        myFormData.append('token',this.state.token)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.SpmDeliveredOrders,myFormData,config)
            .then(res=>{
                this.setState({records:res.data,loading:false})
                console.log(res.data+"Data Get")
            })
            .catch(error=>{
                console.log(error)
            })
        event.preventDefault()
    }

    onPending(event){
        const myFormData = new FormData()
        myFormData.append('token',this.state.token)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.SpmPendingOrders,myFormData,config)
            .then(res=>{
                this.setState({records:res.data,loading:false})
                console.log(res.data+"Data Get")
            })
            .catch(error=>{
                console.log(error)
            })
        event.preventDefault()
    }
    onCancel(event){
        const myFormData = new FormData()
        myFormData.append('token',this.state.token)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.SpmCancelOrders,myFormData,config)
            .then(res=>{
                this.setState({records:res.data,loading:false})
                console.log(res.data+"Data Get")
            })
            .catch(error=>{
                console.log(error)
            })
        event.preventDefault()
    }

    render() {

        return (
            <Fragment>
                <GlobalHeader title="My Location Area Order History"/>
                <Sidebar>
                    {this.state.loading==true ? <Loading/> :
                        <div className="row m-1  pt-3">
                            <button onClick={this.onPending.bind(this)} className="btn btn-warning col-md-2 col-4 m-1">Pending ({this.state.p})</button>
                            <button onClick={this.onSuccess.bind(this)} className="btn btn-info col-md-2 col-4 m-1">Accepted ({this.state.a})</button>
                            <button onClick={this.onDelivered.bind(this)} className="btn btn-info col-md-2 col-4 m-1">Delivered ({this.state.d}) </button>
                            <button onClick={this.onCancel.bind(this)} className="btn btn-danger col-md-2 col-4 m-1">Cancelled ({this.state.c}) </button>

                            <div className="col-md-12 col-12 bg-white py-3  table-responsive-sm mb-5 mt-2">
                                <h5 className="body-title pl-5">My Area Order History </h5>
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

export default SpmOrderHistory;
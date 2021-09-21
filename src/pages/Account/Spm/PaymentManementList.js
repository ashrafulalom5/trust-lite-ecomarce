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
import jwt_decode from "jwt-decode";
import {toast} from "react-toastify";

class PaymentManementList extends Component {
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

            {
                text: "Total Sold Amount",
                className: "action",
                align: "center",
                cell: (record) => {
                    return(
                        <Fragment>
                            { record.t_sold }
                        </Fragment>
                    )
                }
            },

            {
                text: "Total Collection amount",
                className: "action",
                align: "center",
                cell: (record) => {
                    return(
                        <Fragment>
                            { record.c_amount }
                        </Fragment>
                    )
                }
            },
            {
                text: "Total Collection Delivery charge",
                className: "action",
                align: "center",
                cell: (record) => {
                    return(
                        <Fragment>
                            { record.c_charge }
                        </Fragment>
                    )
                }
            },

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
                            <Link to={"/spm/payment/edit/"+record.id} className="btn btn-info btn-sm"> Edit</Link>
                            <button
                                onClick={this.onDel.bind(this)}  name={record.id} className="btn btn-danger btn-sm col-lg-4 col-sm-6 col-md-4 m-1  ">
                                <i className="fa fa-trash"></i>
                            </button>
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
            const decoded = jwt_decode(token)
            const uid = decoded.uid
            this.setState({token:token})
            const myFormData = new FormData()
            myFormData.append('token',token)
            myFormData.append('uid',uid)
            const config = {
                headers : {'content-type':'multipart/form-data'}
            }
            Axios.post(AppUrl.PaymentManagementList,myFormData,config)
                .then(res=>{
                    this.setState({records:res.data,loading:false})
                    console.log(res.data+"Data Get")
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }

    onDel(e){
        const id = e.target.name
        const token = this.state.token
        const formData = new FormData()
        formData.append('id',id)
        formData.append('token',token)
        Axios.post(AppUrl.PaymentManagementDelete,formData)
            .then(res=>{
                this.componentDidMount()
                if(res.data.success){
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
            .catch(err=>{
                console.log(err)
            })
    }

    render() {

        return (
            <Fragment>
                <GlobalHeader title="SPM Payment Management"/>
                <Sidebar>
                    {this.state.loading==true ? <Loading/> :
                        <div className="row m-1  pt-3">
                            <Link to="/spm/payment/create" className="btn btn-warning col-md-2 col-2 m-1"> Add </Link>

                            <div className="col-md-12 col-12 bg-white py-3  table-responsive-sm mb-5 mt-2">
                                <h5 className="body-title pl-5"> Payment Management </h5>
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

export default PaymentManementList;
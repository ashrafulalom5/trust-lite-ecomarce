import React, {Component, Fragment} from 'react';
import moment from "moment";
import Axios from "axios";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import AppUrl from "../../appurl/AppUrl";
import GlobalHeader from "../../components/global/globalHeader";
import Sidebar from "../Account/Sidebar";
import GlobalFooter from "../../components/global/globalFooter";
import Loading from "../../components/Loading/Loading";

class BuyEarn extends Component {
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
            {key: "rank_name", text: "Rank Name"},
            {key: "rank_limit", text: "Rank Code Using Limit"},
            {key: "rank_expire", text: "Rank Expire Days"},
            {key: "rank_code", text: "Buy & Earn Code"},
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
            Axios.post(AppUrl.BuyEarn,myFormData,config)
                .then(res=>{
                    this.setState({records:res.data,loading:false})
                    console.log(res.data+"Data Get")
                })
                .catch(error=>{
                    console.log(error)
                })

            Axios.post(AppUrl.RcUpdate,myFormData,config)
                .then(res=>{
                    console.log("Ok")
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }


    render() {

        return (
            <Fragment>
                <GlobalHeader title="My Buy and Earn Code List"/>
                <Sidebar>
                    {this.state.loading==true ? <Loading/> :
                        <div className="row m-1 bg-white pt-3">
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

export default BuyEarn;
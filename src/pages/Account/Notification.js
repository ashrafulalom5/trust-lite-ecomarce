import React, {Component, Fragment} from 'react';
import GlobalHeader from "../../components/global/globalHeader";
import Sidebar from "./Sidebar";
import GlobalFooter from "../../components/global/globalFooter";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import AppUrl from "../../appurl/AppUrl";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from "moment";

class Notification extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            loading:true
        }
    }
    componentDidMount() {
        const token = localStorage.token
        if(token){
            this.setState({token:token})
            const userid = jwt_decode(token)
            const uid = userid.uid
            const myFormData = new FormData()
            myFormData.append('token',token)
            myFormData.append('uid',uid)
            const config = {
                headers : {'content-type':'multipart/form-data'}
            }
            Axios.post(AppUrl.Notification,myFormData,config)
                .then(res=>{
                    console.log("Userdata "+res.data)
                    this.setState({data:res.data,loading:false})
                })
                .catch(error=>{
                    console.log(error)
                })
            Axios.post(AppUrl.MsgUpdate,myFormData,config)
                .then(res=>{
                    console.log("Ok")
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }

    render() {

        const msg = this.state.data.map(result=>{
            return(
                <div className="card mb-1">
                    <div className="card-body">
                        <h6 className="card-title">{result.title}</h6>
                        <p className="card-text text-center">{moment(result.date).format("Do  MMMM YYYY")}</p>
                        <p className="card-text">{ ReactHtmlParser(result.body) }</p>
                    </div>
                </div>
            )
        })

        return (
            <Fragment>
                <GlobalHeader title="My Notification"/>
                <Sidebar >
                    <div className="row">
                        <div className="col-md-4 "></div>
                        <div className="col-md-4 col-12 p-3 ">
                            <h3 className="text-center mb-3">All Notification Message</h3>
                            {msg}

                        </div>
                        <div className="col-md-4 "></div>
                    </div>
                </Sidebar>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default Notification;
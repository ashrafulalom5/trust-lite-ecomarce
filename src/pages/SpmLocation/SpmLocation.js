import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import React, { Component } from 'react';
import AppUrl from "../../appurl/AppUrl";
import NoImage from '../../asset/image/noimage.png';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import PageLayout from "../../hoc/pagelayout";
import classes from "../Home/homepage.module.css";

class SpmLocation extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            loading:true
        }
    }

    onName(e){
        this.setState({name:e.target.value})
        var name = e.target.value
        const myFormData = new FormData()
        myFormData.append('name',name)
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.SpmLocationSearch,myFormData,config)
            .then(res => {
                this.setState({data:res.data,loading:false})
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {

        const blog = this.state.data.map(res=>{
            return(
                        <div className="row bg-light mb-5 p-5">
                            <div className="col-md-6 col-12">
                                <p> Service Point Manager Name : {res.spm_name} </p>
                                <p> City :  {res.location} </p>
                                <p> Address : {res.address} </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <img src={res.image ?AppUrl.photoUrl+res.image : NoImage } style={{height:'100px',width:'100px',
                                    borderRadius:'50%'}} />
                            </div>
                        </div>
            )
        })

        return (
            <>
                <GlobalHeader title="Service Point Location" />
                    <PageLayout>
                    <div className="bg-white">
                    <h2 className="text-dark text-center py-3 bg-light"> All Service Point Location </h2>
                    <div className="row" >
                        <div className="col-md-3"></div>

                        <div className="col-md-6  mr-5 p-5 col-12  info_page" >
                            <div className="input-group mb-5">
                                <input
                                    type="text" onChange={this.onName.bind(this)}
                                    className="form-control"
                                    placeholder="Enter a city"
                                    aria-label="Search Product"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                 <span  className={['input-group-text', classes.search_icon].join(' ')} id="basic-addon2">
                                  <FontAwesomeIcon icon={faSearch} />
                                  </span>
                                </div>
                            </div>

                            {  blog }

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                    </PageLayout>
                <GlobalFooter />
            </>
        );
    }
}

export default SpmLocation;
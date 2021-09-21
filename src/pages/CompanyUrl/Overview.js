import Axios from 'axios';
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import AppUrl from "../../appurl/AppUrl";
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import PageLayout from '../../hoc/pagelayout';

class Overview extends Component {
    constructor() {
        super();
        this.state = { refund:'',privacy:'',terms:'',update_info:'',overview:'',
            loading:true
        }
    }

    componentDidMount() {
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.Settings,config)
            .then(res=>{
                this.setState({refund:res.data[0]['refund'],privacy:res.data[0]['privacy'],terms:res.data[0]['terms'],
                    overview:res.data[0]['overview'],update_info:res.data[0]['update_info'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        return (
            <>
                <GlobalHeader title="Company Overview" />
                    <PageLayout>
                        <div className="bg-white">
                            <h2 className="text-dark text-center py-3 bg-light"> Company Overview </h2>
                            <div className="col-md-12  mr-5 p-5 col-12  info_page" >
                                {ReactHtmlParser(this.state.overview)}
                            </div>
                        </div>
                    </PageLayout>
                <GlobalFooter />
            </>
        );
    }
}

export default Overview;
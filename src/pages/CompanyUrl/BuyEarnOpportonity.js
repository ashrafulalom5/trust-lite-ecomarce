import Axios from 'axios';
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import AppUrl from "../../appurl/AppUrl";
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import PageLayout from '../../hoc/pagelayout';

class BuyEarnOpportonity extends Component {
    constructor() {
        super();
        this.state = { opportonity:'',
            loading:true
        }
    }

    componentDidMount() {
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.Settings,config)
            .then(res=>{
                this.setState({opportonity:res.data[0]['opportonity'],loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        return (
            <>
                <GlobalHeader title="Buy & Earn Opportonity" />
                    <PageLayout>
                    <div className="bg-white">
                            <h5 className="text-dark text-center py-3 bg-light"> Buy & Earn Opportunity </h5>
                            <div className="col-md-12  mr-5 p-5 col-12  info_page" >
                                {ReactHtmlParser(this.state.opportonity)}
                            </div>
                        </div>
                    </PageLayout>
                <GlobalFooter />
            </>
        );
    }
}

export default BuyEarnOpportonity;
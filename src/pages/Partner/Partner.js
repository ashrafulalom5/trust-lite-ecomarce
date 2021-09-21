import React, { Component, Fragment } from 'react';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import PageLayout from '../../hoc/pagelayout';
import SPM from "./SPM";
import Supplier from "./Supplier";

class Partner extends Component {
    constructor() {
        super();
        this.state={
          supplier:'no',
            spm:'no',
            title:'Become a partner'
        }
    }

    onSupplier(){
         this.setState({supplier:'yes',spm:'no',title:'Supplier'})
    }
    onSpm(){
        this.setState({supplier:'no',spm:'yes',title:'Service Point Manager'})
    }

    render() {
        return (
            <Fragment>
                <GlobalHeader title={this.state.title} />
                <PageLayout>
                <div className="row" style={{ margin:'0',backgroundColor:'white'}}>
                    <div className="col-md-12 col-12">
                        <h1 className="text-center" style={{fontSize:'30px', paddingTop:'50px',paddingBottom:'10px'}} > Apply to be a
                        </h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-8 mb-5">
                                    <div className="row">
                                        <button onClick={this.onSupplier.bind(this)} className="col-md-5 col-5 btn btn-dark"
                                             style={{height:'50px',padding:'10px 10px',textAlign:'center',
                                                 border:'1px solid black'}} >
                                            <a > Supplier</a>
                                        </button>
                                        <div className="col-md-2 col-2 btn btn-dark"
                                             style={{height:'50px',padding:'10px 10px',textAlign:'center',
                                                 border:'1px solid black',borderRight:'none',borderLeft:'none'}}>
                                            Or
                                        </div>
                                        <button onClick={this.onSpm.bind(this)} className="col-md-5 col-5 btn btn-dark" style={{height:'50px',padding:'5px 0px',textAlign:'center',
                                            border:'1px solid black'}}>
                                            <a > Service Point Manager</a>
                                        </button>
                                    </div>

                                    {this.state.spm=='yes'?<SPM />:''}
                                    {this.state.supplier=='yes'?<Supplier/>:''}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </PageLayout>
                <GlobalFooter />
            </Fragment>
        );
    }
}

export default Partner;
import Axios from "axios";
import React, { Component } from 'react';
import { toast } from "react-toastify";
import AppUrl from "../../appurl/AppUrl";
import Logo from "../../asset/image/logo.png";
import PageLayout from '../../hoc/pagelayout';

class Spm extends Component {
    constructor() {
        super();
        this.state = {name:'', phone:'', email:'',  address:'', image:'', nid1:'', nid2:'', bank_name:'', acc_number:''}}

    onName(e){
        this.setState({name:e.target.value})
    }
    onEmail(e){
        this.setState({email:e.target.value})
    }
    onPhone(e){
        this.setState({phone:e.target.value})
    }
    onAddress(e){
        this.setState({address:e.target.value})
    }
    onBankName(e){
        this.setState({bank_name:e.target.value})
    }
    onBank_acc(e){
        this.setState({acc_number:e.target.value})
    }

    onImage(e){
        this.setState({image:e.target.files[0]})
    }
    onNid1(e){
        this.setState({nid1:e.target.files[0]})
    }
    onNid2(e){
        this.setState({nid2:e.target.files[0]})
    }

    FormSubmit(event){
        const formData = new FormData()
        formData.append('name',this.state.name)
        formData.append('email',this.state.email)
        formData.append('phone',this.state.phone)
        formData.append('address',this.state.address)
        formData.append('bank_name',this.state.bank_name)
        formData.append('acc_number',this.state.acc_number)
        formData.append('image',this.state.image)
        formData.append('nid1',this.state.nid1)
        formData.append('nid2',this.state.nid2)


        Axios.post(AppUrl.SpmForm, formData)
            .then(res=>{
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
            .catch(error=>{
                console.log(error)
            })
        event.preventDefault()
    }
    render() {
        return (
            <PageLayout>
                <div className="row mt-5 pb-5">
                    <div className="col-md-12 col-12" >
                        <form onSubmit={this.FormSubmit.bind(this)}>
                            <div className="form-group text-center">
                                <img src={Logo} style={{height:'40px'}} />
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Service Point Manager Name</label>
                                <input type="text" onChange={this.onName.bind(this)} required value={this.state.name} className="form-control" id="inputEmail3"/>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Email</label>
                                <input type="email" onChange={this.onEmail.bind(this)} required value={this.state.email} className="form-control" id="inputEmail3"/>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Phone</label>
                                <input type="text" required onChange={this.onPhone.bind(this)} value={this.state.phone}  className="form-control" id="inputEmail3"/>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Address</label>
                                <input type="text" required onChange={this.onAddress.bind(this)} value={this.state.address} className="form-control" id="inputEmail3"/>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Payment Method</label>
                                <select onChange={this.onBankName.bind(this)} className="form-control">
                                    <option selected value="">Select Payment Method </option>
                                    <option value="Mobile Banking"> Mobile banking</option>
                                    <option value="Bank"> Bank </option>
                                </select>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Account number</label>
                                <input type="text" onChange={this.onBank_acc.bind(this)} value={this.state.acc_number} className="form-control" id="inputEmail3"/>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Photo</label>
                                <input type="file" onChange={this.onImage.bind(this)} className="form-control" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >NID Front Side</label>
                                <input onChange={this.onNid1.bind(this)} type="file" className="form-control" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >NID Back Side</label>
                                <input onChange={this.onNid2.bind(this)} type="file" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-dark col-md-12 col-12">Submit</button>
                        </form>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default Spm;
import Axios from "axios";
import React, { Component } from 'react';
import { toast } from "react-toastify";
import AppUrl from "../../appurl/AppUrl";
import Logo from "../../asset/image/logo.png";

class Supplier extends Component {
    constructor() {
        super();
        this.state = {
            name:'', phone:'', email:'',  address:'', image:'', nid1:'', nid2:'', org_name:'',product_name:'',
            p1:'0',p2:'0',p3:'0',p4:'0',p5:'0',p6:'0',p7:'0',p8:'0',p9:'0', bank_name:'', acc_number:''}}

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
    onOrgName(e){
        this.setState({org_name:e.target.value})
    }
    onProduct_name(e){
        this.setState({product_name:e.target.value})
    }
    onP1(e){
        if(this.state.p1=='0'){
            this.setState({p1:'1'})
        }else{
            this.setState({p1:'0'})
        }
    }
    onP2(e){
        if(this.state.p2=='0'){
            this.setState({p2:'1'})
        }else{
            this.setState({p2:'0'})
        }
    }
    onP3(e){
        if(this.state.p3=='0'){
            this.setState({p3:'1'})
        }else{
            this.setState({p3:'0'})
        }
    }
    onP4(e){
        if(this.state.p4=='0'){
            this.setState({p4:'1'})
        }else{
            this.setState({p4:'0'})
        }
    }
    onP5(e){
        if(this.state.p5=='0'){
            this.setState({p5:'1'})
        }else{
            this.setState({p5:'0'})
        }
    }
    onP6(e){
        if(this.state.p6=='0'){
            this.setState({p6:'1'})
        }else{
            this.setState({p6:'0'})
        }
    }
    onP7(e){
        if(this.state.p7=='0'){
            this.setState({p7:'1'})
        }else{
            this.setState({p7:'0'})
        }
    }
    onP8(e){
        if(this.state.p8=='0'){
            this.setState({p8:'1'})
        }else{
            this.setState({p8:'0'})
        }
    }
    onP9(e){
        if(this.state.p9=='0'){
            this.setState({p9:'1'})
        }else{
            this.setState({p9:'0'})
        }
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
        formData.append('sup_name',this.state.name)
        formData.append('email',this.state.email)
        formData.append('phone',this.state.phone)
        formData.append('address',this.state.address)
        formData.append('bank_name',this.state.bank_name)
        formData.append('acc_number',this.state.acc_number)
        formData.append('org_name',this.state.org_name)
        formData.append('product_name',this.state.product_name)
        formData.append('p1',this.state.p1)
        formData.append('p2',this.state.p2)
        formData.append('p3',this.state.p3)
        formData.append('p4',this.state.p4)
        formData.append('p5',this.state.p5)
        formData.append('p6',this.state.p6)
        formData.append('p7',this.state.p7)
        formData.append('p8',this.state.p8)
        formData.append('p9',this.state.p9)
        formData.append('image',this.state.image)
        formData.append('nid1',this.state.nid1)
        formData.append('nid2',this.state.nid2)


        Axios.post(AppUrl.SupplierForm, formData)
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
            <>
                <div className="row mt-5 pb-5">

                    <div className="col-md-12 col-12" >
                        <form onSubmit={this.FormSubmit.bind(this)}>
                            <div className="form-group text-center">
                                <img src={Logo} style={{height:'40px'}} />
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Supplier Name</label>
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
                                <label htmlFor="inputEmail3" >Organization Name</label>
                                <input type="text" onChange={this.onOrgName.bind(this)} value={this.state.org_name} className="form-control" id="inputEmail3"/>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputEmail3" >Product Name</label>
                                <input type="text" onChange={this.onProduct_name.bind(this)} required value={this.state.product_name} className="form-control" id="inputEmail3"/>
                            </div>

                            <div className="form-group ">
                                <label > Product Category</label>
                                <div >
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" onChange={this.onP1.bind(this)} type="checkbox" value="option1"  />
                                        <label className="form-check-label"  htmlFor="inlineCheckbox1">Grocery item</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP2.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Garments & Leather item</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP3.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Electronics item</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP4.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Homemade Ready meals</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP5.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Agricultural item</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP6.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Accessorise & parts</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP7.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Ready to cook products</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP8.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Cosmetic item</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={this.onP9.bind(this)} className="form-check-input" type="checkbox" value="option1"  />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Book & stationary items</label>
                                    </div>

                                </div>
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
            </>
        );
    }
}

export default Supplier;
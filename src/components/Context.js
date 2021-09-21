import React, { Component } from 'react'
import Axios from "axios";
import AppUrl from "../appurl/AppUrl";
import {toast} from "react-toastify";

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [],
        cart: [],
        total: 0

    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            this.setState({cart: [...cart,...data]})
            toast.success("Product added successfully.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            toast.error("Product already added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    addCart2 = (id,count) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            this.setState({cart: [...cart,...data]})
            toast.success("Product added successfully.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            toast.error("Product already added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === id){
                if(item.count>1){
                    item.count === 1 ? item.count = 1 : item.count -=1;
                    toast.success("Product item reduced successfully.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            var count = parseInt(item.count)+1
            if(item.id === id){
                (item.count =count)
                toast.success("Product item increased successfully.", {
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
        this.setState({cart: cart});
        this.getTotal();
    };

    ClearCart = ()=>{
        this.setState({cart: [],total:0,products:[]})
        localStorage.removeItem('dataCart')
        this.getTotal();
        this.componentDidMount()
        this.componentDidUpdate()
        toast.error("Handbag has been clear successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    removeProduct = id =>{
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item.id === id){
                cart.splice(index, 1)
                this.componentDidMount()
                this.componentDidUpdate()
            }
        })
        this.setState({cart: cart,products:[]});
        this.getTotal();
        toast.error("Product removed successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const myFormData = new FormData()
        const config = {
            headers : {'content-type':'multipart/form-data'}
        }
        Axios.post(AppUrl.AllProducts,myFormData,config)
            .then(res=>{
                console.log("Products "+res.data)
                this.setState({products:res.data,loading:false})
            })
            .catch(error=>{
                console.log(error)
            })
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }


    render() {
        const {products, cart,total} = this.state;
        const {addCart2,addCart,reduction,increase,removeProduct,getTotal,ClearCart} = this;
        return (
            <DataContext.Provider
                value={{addCart2,products, addCart, cart, reduction,increase,removeProduct,total,getTotal,ClearCart}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}



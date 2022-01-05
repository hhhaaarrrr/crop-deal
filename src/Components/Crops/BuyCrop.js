import React, { Component } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import cropService from '../../services/cropService';
//import  Pay from  "./Pay";
 

import { Card, Col, Container, Row } from 'react-bootstrap';
 
import Button from 'react-bootstrap/Button';
class BuyCrop extends Component {
    constructor(props){
        super(props)
        this.state={
                id: this.props.id,
                farmerId: "",
                cropName: "",
                cropType:"",
                location: "",
                qty: 0,
               cost:0
        }
        // this.handleChange=this.handleChange.bind(this)
        this.changeFarmerIdHandler = this.changeFarmerIdHandler.bind(this);
        this.changecropNameHandler = this.changecropNameHandler.bind(this);
        this.changecropTypeHandler = this.changecropTypeHandler.bind(this);
        this.changelocationHandler = this.changelocationHandler.bind(this);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.changecostHandler = this.changecostHandler.bind(this);
        this.addCrop = this.addCrop.bind(this);
    }

    componentDidMount(){
        cropService.grtCropById(this.state.id).then(res =>{
                let crop = res.data;
                console.log(crop);
                this.setState({farmerId: crop.farmerID,
                cropName: crop.cropName,
                cropType: crop.cropType,
                location: crop.location,
                qty: crop.qty,
                cost: crop.cost
            })

            console.log(this.state.cost);
        })
    }
   
    // handleChange(e){
    //     this.setState({
    //         method: e.target.value
    //     });
    //     let cost=this.state.cost;
    //     sessionStorage.setCost(cost, cost);
    // }
    
    
    addCrop = (c) => {
        c.preventDefault();
        let crop = {farmerId:this.state.farmerId,
                    cropName:this.state.cropName,
                    cropType:this.state.cropType,
                    location:this.state.location,
                    qty:this.state.qty,
                    cost:this.state.cost};
        console.log(JSON.stringify(crop));
       

        cropService.buyCrop(crop,this.state.id).then(res => {
            //    // let navigate =  useNavigate();
               this.props.navigate("/crops2")
            //     //let params = useParams();
            })

    }

    changeFarmerIdHandler(event){
        this.setState({farmerId: event.target.value});
    }
    changecropNameHandler(event){
        this.setState({cropName: event.target.value});
    }
    changecropTypeHandler(event){
        this.setState({cropType: event.target.value});
    }
    changelocationHandler(event){
        this.setState({location: event.target.value});
    }
    changeQtyHandler(event){
        this.setState({qty: event.target.value});
    }

    changecostHandler(event){
        this.setState({cost: event.target.value});
    }

    render() {
        let coost= this.state.cost
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">crops purchased</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Farmer Id : </label> {this.state.farmerId} 
                                        
                                    </div>
                                    <div className = "form-group">
                                        <label> Crop Name : </label> {this.state.cropName}
                                       
                                    </div>
                                    <div className = "form-group">
                                        <label> Crop Type : </label> {this.state.cropType}
                                        
                                    </div>
                                    <div className = "form-group">
                                        <label> Location : </label> {this.state.location}
                                        
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantity : </label> {this.state.qty}
                                        
                                    </div>
                                    <div className = "form-group">
                                        <label> Cost : </label> {this.state.cost}
                                        
                                    </div>

                                    {/* <input placeholder="dealersId" name="dealersId" className="form-control" 
                                            value={this.state.dealersId} onChange={this.changeDealersIdHandler}/> */}
                                    
                                    {/* <Link path="/payment" element={<Pay/>}/> */}<br></br>

                                    <GooglePayButton
   
   environment="TEST"
   paymentRequest={{
     apiVersion: 2,
     apiVersionMinor: 0,
     allowedPaymentMethods: [
       {
         type: 'CARD',
         parameters: {
           allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
           allowedCardNetworks: ['MASTERCARD', 'VISA'],
         },
         tokenizationSpecification: {
           type: 'PAYMENT_GATEWAY',
           parameters: {
             gateway: 'example',
             gatewayMerchantId: 'exampleGatewayMerchantId',
           },
         },
       },
     ],
     merchantInfo: {
       merchantId: '12345678901234567890',
       merchantName: 'Farmer',
     },
     transactionInfo: {
       totalPriceStatus: 'FINAL',
       totalPriceLabel: 'Total',
       totalPrice: this.state.cost + "",
       currencyCode: 'INR',
       countryCode: 'IN',
     },
     shippingAddressRequired: true,
     callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
   }}
   onLoadPaymentData={paymentRequest => {
     console.log('Success', paymentRequest);
   }}
   onPaymentAuthorized={paymentData => {
       console.log('Payment Authorised Success', paymentData)
       return { transactionState: 'SUCCESS'}
     }
   }
   onPaymentDataChanged={paymentData => {
       console.log('On Payment Data Changed', paymentData)
       return { }
     }
   }
   existingPaymentMethodRequired='false'
   buttonColor='black'
   buttonType='Buy'
 />


                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    }
}

export default function WithNavigate(props) {
    let navigate = useNavigate();
    let {id} = useParams();
    return <BuyCrop {...props} navigate={navigate} id={id} />
}

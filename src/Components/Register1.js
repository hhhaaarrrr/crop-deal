import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Register.css'

export class Register1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
        //  id:"",
         dealerName:'',
         dealerPassword:'',
         subscriberCrop:'',




         dealerNameError:'',
         dealerPasswordError:'',
         isProfile: false

         
    }
    this.register=this.register.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
valid(){
    if(this.state.dealerName.length<3 && this.state.dealerPassword.length<3  ) {
        this.setState({
          dealerNameError:"Name cannot be less than 3 word",
          dealerPasswordError:"Password should be more than 3", 
           

        })
    }
    else if(this.state.dealerName.length<3){
        this.setState({
          dealerNameError:"Name cannot be less than 3 word"})
    }
    else if(this.state.dealerPassword.length<3){
        this.setState({
          dealerPasswordError:"Password should be more than 3"
        })
    }
    
    
    else{
        return true
    }
}
register(e){
    this.setState({
      dealerNameError:"",
        dealerPasswordError:"",
        

    })
    e.preventDefault()
    
    if(this.valid()){
        fetch("http://localhost:8080/dealer/adddealer",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
               
            },
            "body": JSON.stringify({
                
                
                dealerName:this.state.dealerName,
                dealerPassword: this.state.dealerPassword,
                subscriberCrop:this.state.subscriberCrop,
                    
            })
        })
        .then(response=> response.json())
        .then(response=>{
            alert("You have been Registered Successfully")
            
        })
        
        .catch(err=>{
            // alert("Your Registration Failed..!!!!")
        })
        
    }
}
handleChange(changeObject){
    this.setState(changeObject)
}
  render() {
    return (
        <div className='register'>
        {/* <Link to='/'>
            <h1>Dealer Dashboard</h1>
       </Link> */}

       <div className="register__container">
           <h1>Sign-up</h1>

           <form>
          
               
               <h5>Dealer Name</h5>
               <input type='text'  onChange={(e) => this.handleChange({dealerName: e.target.value})} />

               <h5> Dealer Password</h5>
               <input type='password'  onChange={(e) => this.handleChange({dealerPassword: e.target.value})} />

                <h5>Subscribed Crops</h5>
               <input type='text'  onChange={(e) => this.handleChange({subscriberCrop: e.target.value})} />

               

               <button type='submit' onClick={(e)=>this.register(e)} className='register__signUpButton'>Create Account</button>
           </form>

           <p>Already have Account </p>
            <Link to='/login'>
            
            <h6  className='register__registerButton'>Login to Dealer Dashboard</h6>
            </Link>
       </div>
    </div>
    )
  }
}

export default Register1
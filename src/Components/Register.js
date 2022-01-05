import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Register.css'

export class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
         farmerID:'',
         fName:'',
         fPassword:'',
         fAccountNo:'',




         fNameError:'',
         fPasswordError:'',
         isProfile: false

         
    }
    this.register=this.register.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
valid(){
    if(this.state.fName.length<3 && this.state.fPassword.length<3  ) {
        this.setState({
          fNameError:"Name cannot be less than 3 word",
          fPasswordError:"Password should be more than 3", 
           

        })
    }
    else if(this.state.fName.length<3){
        this.setState({
          fNameError:"Name cannot be less than 3 word"})
    }
    else if(this.state.fPassword.length<3){
        this.setState({
          fPasswordError:"Password should be more than 3"
        })
    }
    
    
    else{
        return true
    }
}
register(e){
    this.setState({
      fNameError:"",
        fPasswordError:"",
        

    })
    e.preventDefault()
    
    if(this.valid()){
        fetch("http://localhost:8081/farmer/addfarmer",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
               
            },
            "body": JSON.stringify({
                
                farmerID: this.state.farmerID,
                fName:this.state.fName,
                fPassword: this.state.fPassword,
                fAccountNo:this.state.fAccountNo,
                    
            })
        })
        .then(response=> response.json())
        .then(response=>{
            alert("You have been Registered Successfully")
            
        })
        
        .catch(err=>{
            alert("Your Registration Failed..!!!!")
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
            <h1>Farmer Dashboard</h1>
       </Link> */}

       <div className="register__container">
           <h1>Sign-up</h1>

           <form>
          
                <h5>farmerId</h5>
               
               <input type='number'   onChange={(e) => this.handleChange({farmerID: e.target.value})} />

               <h5>farmer Name</h5>
               <input type='text'   onChange={(e) => this.handleChange({fName: e.target.value})} />

               <h5>farmer Password</h5>
               <input type='password'   onChange={(e) => this.handleChange({fPassword: e.target.value})} />

                <h5>farmer AccountNo</h5>
               <input type='text'  onChange={(e) => this.handleChange({fAccountNo: e.target.value})} />

               

               <button type='submit' onClick={(e)=>this.register(e)} className='register__signUpButton'>Create Account</button>
           </form>

           <p>
           Already have Account
            </p>
            <Link to='/login'>
            <h6  className='register__registerButton'>Login to Farmer Dashboard</h6>
            </Link>
       </div>
    </div>
    )
  }
}

export default Register
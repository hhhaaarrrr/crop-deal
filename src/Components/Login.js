// import axios from 'axios';
// import React, {useState} from 'react'
// import { Link, useHistory} from "react-router-dom";
// import "./Login.css"

// function Login() {
//     const[username, setusername] = useState("");
//     const [password, setPassword] = useState("");
    
//     const[allEntry, setAllEntry]=useState([]);
  
//     const submit=(e) =>{
//         e.preventDefault();
     



//         const newEntry={username: username, password: password};
//         setAllEntry([ ...allEntry, newEntry]);
//         console.log(allEntry);

//         axios.post('http://localhost:8081/farmer/addfarmer',newEntry)
//         .then(res =>{
//             console.log(res)
//         })
//         .catch(err =>{
//             console.log(err)
//         })
        

//     }
  

//     return (
//         <div className="login">
//              <Link to="/">
//                 <img
//                 className="login__logo"
//                 src="https://orgfarm.store/image/cache/logo-trans-352x260.png"
//                 alt=""
//                 />
//             </Link> 
            
//             <div className="login__container">
//                 <h1> Login </h1>
//                 <form action="" onSubmit={submit}>
//                     {/* <Link to="/farmers"> */}
//                     <h5>User Name</h5>
//                     <input type="text" name="text" autoCompleted="off"
//                     value={username}
//                     onChange={(e) => setusername(e.target.value)}
//                      />
//                     <h5>Password</h5>
//                     <input type="password" name="password" autoComplete="off"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     />
//                    <Link to="/farmerdb">
                       
//                     <button type="submit" className="login__signinButton">Login 
//                     </button>
//                     </Link>
                  
//                     {/* </Link> */}
//                 </form>
               
//                 <div>
//                     {
//                         allEntry.map((curElem) => {
//                             return(
//                                 <div className="showDataStyle">
//                                     <p>{curElem.username}</p>
//                                     <p>{curElem.Password}</p>
//                                     </div>
//                             )
//                         }
//                         )
//                     }
//                 </div>
              

               
//                 <Link to="/register">
//                 <button className="login__registerButton">Create your Account As Farmer</button>
//                 </Link>
//                 <Link to="/register1">
//                 <button className="login__registerButton">Create your Account As Dealer</button>
//                 </Link>
//             </div>
         
//         </div>
//     );
// }

// export default Login;



























import React, { Component } from 'react'

import { Link , useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export class Login extends Component {

    


  handleSubmit = e => {
    e.preventDefault();
    

    const data = {
      fName: this.fName,
      fPassword: this.fPassword
    }

    axios.post("http://localhost:8081/farmer/auth", data)
      .then(res => {
        console.log(res)
        
        this.props.navigate("/farmer");
            
          
            
      })
      .catch(err => {
        alert('Your userID or password is Incorrect')
        console.log(err)

      })
  }
  render() {
    return (
      <section className="vh-100">
        
        
      <div className="container py-5 h-100">
      <h1 >Login Page</h1>

        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt=""
            /> */}
          </div>
          <div className="col-md-8 col-lg-7 col-xl-6">
          
          
          {/* <br></br> */}
            <form>
              <div className="form-outline mb-4">
              <label className="form-label" for="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  name="cEmail"
                  id="form1Example13"
                  className="form-control form-control-sm"
                  //onChange={changeLogInData}
                />
                
              </div>

              <div className="form-outline mb-2">
              <label className="form-label" for="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  name="cPassword"
                  className="form-control form-control-sm"
                  //onChange={changeLogInData}
                />
                
              </div>
            
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
               // onClick={onLogIn}
              >
                Sign in
              </button>
              
              <div className="divider d-flex align-items-center my-4">
                <p className="mb-5 pb-sm-2">
                  Don't have an account?{" "}
                  <Link to="/Register">Register here</Link>
                </p>
              </div>
              
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}
}

export default Login







import React, { Component } from 'react'
import {Navbar,Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
             
            <Navbar className='navcolor' expand="lg" fixed='top'>
            <Container>
              <Navbar.Brand style={{fontSize:'1.5em'}} className='heading'>
              <Link to="/">
            <img className="header_logo" src="https://orgfarm.store/image/cache/logo-trans-352x260.png" alt= ""/>
             </Link>
            {/* <span>Agriculture  Farm</span> */}
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                 
                  <Nav.Link><Link to='/' className='navlist'>Home</Link></Nav.Link>
                  <Nav.Link><Link to='/crops2' className='navlist'>Crops</Link></Nav.Link>
                  <Nav.Link ><Link to='/aboutus' className='navlist'>About</Link></Nav.Link>
                  
                  <NavDropdown
         id="nav-dropdown-dark-example"
         title="Register"
         menuVariant="dark"
       >
           <Link to='/register' className='navlist'><NavDropdown.Item href="#action/3.1">As Farmer</NavDropdown.Item></Link>
           <Link to='/register1' className='navlist'><NavDropdown.Item href="#action/3.2">As Dealer</NavDropdown.Item></Link>
       </NavDropdown>
       <NavDropdown
         id="nav-dropdown-dark-example"
         title="Login"
         menuVariant="dark"
       >
           <Link to='/farmerlogin' className='navlist'><NavDropdown.Item href="#action/3.1">As Farmer</NavDropdown.Item></Link>
           <Link to='/dealerlogin' className='navlist'><NavDropdown.Item href="#action/3.2">As Dealer</NavDropdown.Item></Link>
       </NavDropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
        )
    }
}

export default Header























// import React from 'react';
// import  './Header.css';
// import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
// import ShopingBasketIcon from "@material-ui/icons/ShoppingCart"
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

// function Header() {
//     return (
//        <nav className="header">
//            <Link to="/">
//            <img className="header_logo" src="https://orgfarm.store/image/cache/logo-trans-352x260.png" alt= ""/>
//             </Link>
//         <div className="header_search">
//           <input type="text" className="header_searchInput" />
//           <SearchIcon className="header_searchIcon" />
//           </div>
          
//          {/* <div className='header_nav'>
//          <label for="cars">Choose a car:</label>

// <select name="cars" id="cars">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select> */}

//          {/* <Link to="/categories"  className='header_link'>
//                 <div className='header_option'>
//                     <span>Categories</span>
//                 </div>
//             <div class="header_option">
//             <button onClick="myFunction()"
//             class="dropbtn">Categories</button>
//             <div id='mycategories'
//             class='categories-content'>
//                 <a href="#">fruits</a>
//                 <a href="#">vegetable</a>
//             </div>
//             </div>
//         </Link> */}

//          <Link to="/"  className='header_link'>
//                 <div className='header_option'>
//                     <span>Home</span>
//                 </div>
//             </Link>   
//             <Link to="/crops"  className='header_link'>
//                 <div className='header_option'>
//                     <span>Crops</span>
//                 </div>
//             </Link>    
 

//             <Link to="/aboutus"  className='header_link'>
//                 <div className='header_option'>
//                     <span>AboutUs</span>
//                 </div>
//             </Link>    
            
            
//                 {/* <div className='header_option'>
//                     <span>Login</span>
                    

//                 </div> */}
//                 <Navbar.Collapse id="navbar-dark-example">

//       <Nav>

//         <NavDropdown

//           id="nav-dropdown-dark-example"

//           title="Login"

//           menuVariant="dark"

//         >

//           <NavDropdown.Item href="#action/3.1">Login as dealer</NavDropdown.Item>

//           <NavDropdown.Item href="#action/3.2">Login a Farmer</NavDropdown.Item>

//         </NavDropdown>

//       </Nav>

//     </Navbar.Collapse>
             
//             <Link to="/register"  className='header_link'>
//                 <div className='header_option'>
//                     <span>Register</span>
//                 </div>
//             </Link>   
          
           

//             <Link to="/checkout"  className='header_link'>
//                 <div className='header_option'>
//                     <ShopingBasketIcon/>
//                     <span className="header_option_count">0</span>
//                 </div>
//             </Link> 
           
     
//     </nav>
//     )
// }

// export default Header

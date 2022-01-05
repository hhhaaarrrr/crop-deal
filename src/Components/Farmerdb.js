import React, { Component } from 'react'
import {Navbar,Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  "./Farmerdb.css"
 class Farmerdb extends Component {
    
    
    render() {
        return (
            <div className='farmerdb_image'>
                <div class="image">
            <img src="https://www.farmerexpert.com/assets/images/ciftci-liste-banner.png"alt="Example1" width="100%" height="25%" />
            <h2><span> Farmer Dashboard <br /></span><span class='spacer'> </span></h2>
          <h4><span>
                <Nav defaultActiveKey="/" className="flex-column">
  {/* <Nav.Link href="/">Home</Nav.Link> */}

  <Nav.Link><Link to='/' className='navlist'>Home</Link></Nav.Link>
  <NavDropdown
         id="nav-dropdown-dark-example"
         title="Crop"
         menuVariant="dark"
       >
           <Link to='/addcrops' className='navlist'><NavDropdown.Item href="#action/3.1">Add Crop</NavDropdown.Item></Link>
           <Link to='/crops1' className='navlist'><NavDropdown.Item href="#action/3.2">View all Crops</NavDropdown.Item></Link>
           <Link to='/crops2' className='navlist'><NavDropdown.Item href="#action/3.3">View posted Crops</NavDropdown.Item></Link>
       </NavDropdown>
       <NavDropdown
         id="nav-dropdown-dark-example"
         title="Farmer"
         menuVariant="dark"
       >
           <Link to='/addfarmer' className='navlist'><NavDropdown.Item href="#action/3.1">Add/Delete Farmer</NavDropdown.Item></Link>
           <Link to='/farmer' className='navlist'><NavDropdown.Item href="#action/3.2">Update Farmer</NavDropdown.Item></Link>
           <Link to='/farmer' className='navlist'><NavDropdown.Item href="#action/3.3">All Farmers</NavDropdown.Item></Link>
       </NavDropdown>

        <Nav.Link ><Link to='/' className='navlist'>logout</Link></Nav.Link>   

  {/* <Nav.Link eventKey="/farmer">Add Farmer</Nav.Link>
  <Nav.Link eventKey="/crops">Post Crops</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link> */}
</Nav>
</span></h4>
            </div>
            </div>
        )
    }
}
export default Farmerdb
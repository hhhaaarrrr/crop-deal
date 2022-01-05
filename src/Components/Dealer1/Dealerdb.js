import axios from 'axios';
import React, { Component } from 'react'
import { Button, Card, Col, Container, ListGroup, Nav, Navbar, Offcanvas, Row, Tab } from 'react-bootstrap';
import { Link , useNavigate, useParams } from 'react-router-dom';
import cropService from '../../services/cropService'; 


class Dealerdb extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.id,
            dealerName: "",
            cropName: "",
            subscribedCrops: [],
            allCrops :[]
    }
    this.buyCrop = this.buyCrop.bind(this);
    }

    buyCrop(id){
        this.props.navigate(`/buycrop/${id}`)
      }
  

    componentDidMount(){
         axios.get("http://localhost:8080/dealer/finddealerbyid/"+this.props.id).then(res =>{
                let dealer = res.data;
                console.log(dealer);
                this.setState({
                    dealerName: dealer.dealerName,
                    dealerPassword:  dealer.dealerPassword,
                    subscribedCrops: dealer.subscribedCrops,})})

                    cropService.getCrops().then((res) =>{
                        this.setState({allCrops: res.data} 
                           
                            );
                            console.log(this.state.allCrops)   
                        });           

    }



    render() {
        return (
            <>      
             <Container style={{margin:'70px 0 30px 0'}}>
  <Row>
      <Col  className='col-md-3  col-xs-12 col-sm-12 col-lg-3'  style={ {borderRight:" 1px solid black"}} >  
      <Navbar expand="lg" fixed='left'   >
<Container className='justify-content-center'>
    <Col>
            
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="flex-column" >
      <Nav.Link >{this.state.dealerName} </Nav.Link>
      <Nav.Link href="#link">{this.state.subscribedCrops}</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Col>
</Container>
</Navbar>
      </Col>
      <Col>
       
      <Row>
       {this.state.allCrops.map(crops => 
         <Col key={crops.id}> <Card style={{ width: '12rem' }}>
         <Card.Body style={{height:'8rem'}} className='d-flex align-items-center overflow-hidden'>
       <Card.Img   className='box w-100'   src={'data:image/png;base64,'+ crops.cropImg.data} />
       </Card.Body>
       <Card.Body>
       <Card.Title>{crops.cropName}</Card.Title>
                             <Card.Text>
                            
                            location:{crops.location}<br/>
                             Qty:{crops.qty}<br/>
                             Cost:{crops.cost}
                             </Card.Text>
                             {/* <Button variant="primary">Buy</Button> */}
                             <button onClick={ () => this.buyCrop(crops.id)} className="btn btn-info">BUY </button>
                             {/* <button onClick={ () => this.SubscribeCrop(dealers.id)} className="btn btn-info">SUBSCRIBE </button> */}
                             {/* <Pay/> */}
                          </Card.Body>
                           </Card></Col>
                          )   }      
     
                     </Row></Col></Row>
</Container> 
          
         
          
</>
           
        )
    }
}

 


export default function WithNavigate(props) {
    let navigate = useNavigate();
    let {id} = useParams();
    return <Dealerdb {...props} navigate={navigate} id = {id} />
}
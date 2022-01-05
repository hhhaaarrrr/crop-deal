import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cropService from '../../services/cropService';
import { Card, Col, Container, Row } from 'react-bootstrap';

 class Crop2 extends Component {

   
    constructor(props){
        super(props)
        this.state={
            allCrops :[]
            
        }
         this.buyCrop = this.buyCrop.bind(this);
        this.sortCrops =this.sortCrops.bind(this);
        
    }

sortCrops(type){

    if(type=== "fruit" || type==="vegetable"){
        this.setState({allCrops: this.state.allCrops.filter(crops => crops.cropType === type)});
    } else if(type === "all"){
        this.setState({allCrops: this.state.allCrops});
    }

}


    buyCrop(id){
      this.props.navigate(`/buycrop/${id}`)
    }



componentDidMount(){
    cropService.getCrops().then((res) =>{
    this.setState({allCrops: res.data}    
        );
        console.log(res);
    });
}

 

    render() {
        return (
            <div>
                <button onClick={ () =>this.sortCrops("all")} className="btn btn-info">ALL </button>               
                  <button onClick={ () => this.sortCrops("fruit") } className="btn btn-info">FRUITS </button>
                 <button onClick={ () => this.sortCrops("vegetable")} className="btn btn-info">VEGETABLES </button>
                 
               




                            
<h1 style={{margin:'50px'},{textAlign:'center'}}> Crops </h1>
                 <Container style={{margin:'70px 0 0 0'}}>
    
                <Row>
                    {/* <Col xs={2} > Vegetables</Col> */}
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
            </div>
         ) 
    }
}

export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <Crop2 {...props} navigate={navigate} />
}
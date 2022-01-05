import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import dealerService from '../../services/dealerService';

 
class Dealer extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
            alldealers:[]
       }
       this.editdealer = this.editdealer.bind(this);
         this.deletedealer = this.deletedealer.bind(this);
   }

   editdealer(id){
    this.props.navigate(`/updatedealer/${id}`)
}

deletedealer(id){
    dealerService.deletedealer(id).then(res =>{
        this.setState({alldealers: this.state.alldealers.filter(dealer => dealer.id !== id)});
    })
}
   
   componentDidMount(){
    dealerService.getdealers().then((res) =>{
    this.setState({alldealers: res.data}    
        );
        console.log(res);
    });
}
   
   
   
   
    render() {
        return (
            <div>
                <h1 className='text-center'>Dealer Details</h1>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                
                                <th>Dealer Name</th>
                                <th>Dealer Password</th>
                                <th>Subscribed crops</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.alldealers.map(dealer => 
                                <tr key={dealer.id}>
                                    <td>{dealer.dealerName}</td>
                                    <td>{dealer.dealerPassword}</td>
                                    <td>{dealer.subscriberCrop}</td>
                                    
                                    
                                     <td>
                                    <button onClick={ () => this.editdealer(dealer.id)} className="btn btn-info">Update </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deletedealer(dealer.id)} className="btn btn-danger">Delete </button>
                                    </td> 
                                </tr>
                                )}
                        </tbody>

                    </table>
                     {/* <Link to="/addfarmer"> <button className='btn btn-primary'>Add Dealer</button> </Link>  */}
                   
                </div>
             </div>
        )
    }
}
        

export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <Dealer {...props} navigate={navigate} />
}
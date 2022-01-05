import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import farmerService from '../../services/farmerService';

 
class Farmer extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
            allfarmers:[]
       }
       this.editFarmer = this.editFarmer.bind(this);
         this.deletefarmer = this.deletefarmer.bind(this);
   }

   editFarmer(id){
    this.props.navigate(`/updatefarmer/${id}`)
}

deletefarmer(id){
    farmerService.deletefarmer(id).then(res =>{
        this.setState({allfarmers: this.state.allfarmers.filter(farmer => farmer.id !== id)});
    })
}
   
   componentDidMount(){
    farmerService.getfarmers().then((res) =>{
    this.setState({allfarmers: res.data}    
        );
        console.log(res);
    });
}
   
   
   
   
    render() {
        return (
            <div>
                <h1 className='text-center'>farmer Details</h1>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>farmer Id</th>
                                <th>farmer name</th>
                                <th>farmer password</th>
                                <th>farmer AccountNo</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.allfarmers.map(farmer => 
                                <tr key={farmer.id}>
                                    <td>{farmer.farmerID}</td>
                                    <td>{farmer.fName}</td>
                                    <td>{farmer.fPassword}</td>
                                    <td>{farmer.fAccountNo}</td>
                                    
                                     <td>
                                    <button onClick={ () => this.editFarmer(farmer.id)} className="btn btn-info">Update </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deletefarmer(farmer.id)} className="btn btn-danger">Delete </button>
                                    </td> 
                                </tr>
                                )}
                        </tbody>

                    </table>
                     <Link to="/addfarmer"> <button className='btn btn-primary'>Add farmer</button> </Link> 
                   
                </div>
             </div>
        )
    }
}
        

export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <Farmer {...props} navigate={navigate} />
}

import React, { Component } from 'react'
import { Link , useNavigate, useParams } from 'react-router-dom';
import cropService from '../../services/cropService'; 
class AddCrops extends Component {
    constructor(props){
        super(props)
        this.state={
            farmerId: "",
            cropName: "",
            cropType:"",
            location: "",
            cropImg:"",
            qty: 0,
           cost:0
          
        }
        this.changefarmerIdHandler = this.changefarmerIdHandler.bind(this);
        this.changecropNameHandler = this.changecropNameHandler.bind(this);
        this.changecropTypeHandler = this.changecropTypeHandler.bind(this);
        this.changelocationHandler = this.changelocationHandler.bind(this);
        this.changecropImgHandler = this.changecropImgHandler.bind(this);
        this.changecostHandler = this.changecostHandler.bind(this);
        this.changeqtyHandler = this.changeqtyHandler.bind(this);
        this.addCrop = this.addCrop.bind(this);
    }
    
    addCrop = (c) => {
        
        c.preventDefault();
        
       console.log(this.state.cropImg);
       console.log(this.state.farmerId)
       
        const formData = new FormData();
        formData.append('farmerId',this.state.farmerId)
        formData.append('cropName', this.state.cropName);
        formData.append('cropType', this.state.cropType);
        formData.append('location', this.state.location);
        formData.append('cropImg', this.state.cropImg);
        formData.append('qty', this.state.qty);
        formData.append('cost', this.state.cost);
console.log(formData)
        cropService.addCrops(formData).then(res => {
            this.props.navigate("/crops1");
         })

    }

    changefarmerIdHandler=(event)=>{
        this.setState({farmerId: event.target.value});
        console.log(this.state.farmerId);
    }
    changecropNameHandler=(event)=>{
        this.setState({cropName: event.target.value});
    }
    changecropTypeHandler=(event)=>{
        this.setState({cropType: event.target.value});
    }
    changelocationHandler=(event)=>{
        this.setState({location: event.target.value});
    }
    changecropImgHandler=(event)=>{
        this.setState({cropImg: event.target.files[0]});
        console.log(this.state.cropImg);
    }

    changeqtyHandler=(event)=>{
        this.setState({qty: event.target.value});
    }
    changecostHandler=(event)=>{
        this.setState({cost: event.target.value});
    }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add crops</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Crop Image: </label>
                                         
                                        <input type="file" className="form-control" name="file" onChange={this.changecropImgHandler}/>
                                    </div>


                                    <div className = "form-group">
                                        <label> Farmer Id: </label>
                                        <input placeholder="Farmer Id:" name="farmerId" className="form-control" 
                                            value={this.state.farmerId} onChange={this.changefarmerIdHandler} required />
                                    </div>
                                    <div className = "form-group">
                                        <label> Crop Name : </label>
                                        <input placeholder="Crop Name" name="cropName" className="form-control" 
                                            value={this.state.cropName} onChange={this.changecropNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Crop Type : </label>
                                        <input placeholder="Crop Type" name="cropType" className="form-control" 
                                            value={this.state.cropType} onChange={this.changecropTypeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Location : </label>
                                        <input placeholder="location" name="location" className="form-control" 
                                            value={this.state.location} onChange={this.changelocationHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantity : </label>
                                        <input placeholder="qty" name="address" className="form-control" 
                                            value={this.state.qty} onChange={this.changeqtyHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <label> Cost : </label>
                                    <input placeholder="cost" name="cost" className="form-control" 
                                            value={this.state.cost} onChange={this.changecostHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.addCrop}>Add</button>
                                    <Link to={'/crops'}> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
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
    return <AddCrops {...props} navigate={navigate} />
}

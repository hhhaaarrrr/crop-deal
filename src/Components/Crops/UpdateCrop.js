import React, { Component } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';
import cropService from '../../services/cropService';

class UpdateCrop extends Component {
    constructor(props){
        super(props)
        this.state={
                id: this.props.id,
                farmerId: "",
                cropName: "",
                cropType:"",
                location: "",
                qty: 0,
               // cropImg:"",
                dealersId: []
        }
        this.changeFarmerIdHandler = this.changeFarmerIdHandler.bind(this);
        this.changecropNameHandler = this.changecropNameHandler.bind(this);
        this.changecropTypeHandler = this.changecropTypeHandler.bind(this);
        this.changelocationHandler = this.changelocationHandler.bind(this);
       // this.changecropImgHandler = this.changecropImgHandler.bind(this);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.addCrop = this.addCrop.bind(this);
    }

    componentDidMount(){
        cropService.grtCropById(this.state.id).then(res =>{
                let crop = res.data;
                console.log(crop);
                this.setState({
                    farmerId: crop.farmerID,
                cropName:  crop.cropName,
                croptype: crop.cropType,
                location: crop.location,
              //  cropImg: crop.cropImg,
                qty: crop.qty}
                 
                )

        })
    }
    
    addCrop = (c) => {
        c.preventDefault();
        let crop = {farmerId:this.state.farmerId,
                    cropName:this.state.cropName,
                    cropType:this.state.cropType,
                    location:this.state.location,
                    //cropImg:this.state.cropImg,
                    qty:this.state.qty};
         console.log(JSON.stringify(crop));

        // const formData = new FormData();
        // formData.append('farmerId',this.state.farmerId)
        // formData.append('cropName', this.state.cropName);
        // formData.append('cropType', this.state.cropType);
        // formData.append('location', this.state.location);
        // formData.append('cropImg', this.state.cropImg);
        // formData.append('qty', this.state.qty);
        // formData.append('dealersId', this.state.dealersId);

        cropService.updateCrop(crop,this.state.id).then(res => {
            //    // let navigate =  useNavigate();


           // cropService.updateCrop(formData).then(res => {
               this.props.navigate("/crops")
            //     //let params = useParams();
            })

    }

    changeFarmerIdHandler(event){
        this.setState({farmerId: event.target.value});
    }
    changecropNameHandler(event){
        this.setState({cropName: event.target.value});
    }
    changecropTypeHandler(event){
        this.setState({cropType: event.target.value});
    }
    changelocationHandler(event){
        this.setState({location: event.target.value});
    }
    // changecropImgHandler=(event)=>{
    //     this.setState({cropImg: event.target.files[0]});
    //     console.log(this.state.cropImg);
    // }
    changeQtyHandler(event){
        this.setState({qty: event.target.value});
    }
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update crops</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Farmer Id: </label>
                                        <input placeholder="Farmer Id" name="farmerId" className="form-control" 
                                            value={this.state.farmerId} onChange={this.changeFarmerIdHandler} required />
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
                                    {/* <div className = "form-group">
                                        <label> Crop Image: </label>
                                         
                                        <input type="file" className="form-control" name="file" value={this.state.cropImg} onChange={this.changecropImgHandler}/>
                                    </div> */}
                                    <div className = "form-group">
                                        <label> Quantity : </label>
                                        <input placeholder="qty" name="address" className="form-control" 
                                            value={this.state.qty} onChange={this.changeQtyHandler}/>
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
    let {id} = useParams();
    return <UpdateCrop {...props} navigate={navigate} id={id} />
}

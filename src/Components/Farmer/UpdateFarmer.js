import React, { Component } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';
import farmerService from '../../services/farmerService';

class UpdateFarmer extends Component {
    constructor(props){
        super(props)
        this.state={
                id: this.props.id,
                farmerID: "",
                fName:'',
                fPassword:'',
                fAccountNo:'',
        }
        this.changefarmerIDHandler = this.changefarmerIDHandler.bind(this);
        this.changefNameHandler = this.changefNameHandler.bind(this);
        this.changefPasswordHandler = this.changefPasswordHandler.bind(this);
        this.changefAccountNoHandler = this.changefAccountNoHandler.bind(this);
        
        this.addfarmer = this.addfarmer.bind(this);
    }

    componentDidMount(){
        farmerService.getfarmerById(this.state.id).then(res =>{
                let farmer = res.data;
                console.log(farmer);
                this.setState({
                    
                    farmerID: farmer.farmerID,
                    fName:farmer.fName,
                    fPassword: farmer.fPassword,
                    fAccountNo:farmer.fAccountNo}
                 
                )

        })
    }
    
    addfarmer = (f) => {
        f.preventDefault();
        let farmer = { farmerID: this.state.farmerID,
            fName:this.state.fName,
            fPassword: this.state.fPassword,
            fAccountNo:this.state.fAccountNo}
        console.log(JSON.stringify(farmer));

        farmerService.updatefarmer(farmer,this.state.id).then(res => {
            //    // let navigate =  useNavigate();
               this.props.navigate("/farmer")
            //     //let params = useParams();
            })

    }

    changefarmerIDHandler(event){
        this.setState({farmerID: event.target.value});
    }
    changefNameHandler(event){
        this.setState({fName: event.target.value});
    }
    changefPasswordHandler(event){
        this.setState({fPassword: event.target.value});
    }
    changefAccountNoHandler(event){
        this.setState({fAccountNo: event.target.value});
    }
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update farmer</h3>
                            <div className = "card-body">
                                <form>
                                <div className = "form-group">
                                        <label> Farmer Id: </label>
                                        <input placeholder="farmerID:" name="farmerID" className="form-control" 
                                            value={this.state.farmerID} onChange={this.changefarmerIDHandler} required />
                                    </div>
                                    <div className = "form-group">
                                        <label> farmer Name : </label>
                                        <input placeholder="fName" name="fName" className="form-control" 
                                            value={this.state.fName} onChange={this.changefNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> farmer password : </label>
                                        <input placeholder="fPassword" name="fPassword" className="form-control" 
                                            value={this.state.fPassword} onChange={this.changefPasswordHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> AccountNumber : </label>
                                        <input placeholder="fAccountNo" name="faccountNo" className="form-control" 
                                            value={this.state.fAccountNo} onChange={this.changefAccountNoHandler}/>
                                    </div>
                                    

                                    <button className="btn btn-success" onClick={this.addfarmer}>Add</button>
                                    <Link to={'/farmers'}> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
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
    return <UpdateFarmer {...props} navigate={navigate} id={id} />
}

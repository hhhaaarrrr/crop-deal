import React, { Component } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';
import dealerService from '../../services/dealerService';

class UpdateDealer extends Component {
    constructor(props){
        super(props)
        this.state={
                id: this.props.id,
                dealerName: "",
                dealerPassword:'',
                subscriberCrop:'',
                
        }
        this.changedealerNameHandler = this.changedealerNameHandler.bind(this);
        this.changedealerPasswordHandler = this.changedealerPasswordHandler.bind(this);
        this.changesubscriberCropHandler = this.changesubscriberCropHandler.bind(this);
       
        
        this.adddealer = this.adddealer.bind(this);
    }

    componentDidMount(){
        dealerService.getdealerById(this.state.id).then(res =>{
                let dealer = res.data;
                console.log(dealer);
                this.setState({
                    
                    
                    dealerName:dealer.dealerName ,
                dealerPassword:dealer.dealerPassword,
                subscriberCrop:dealer.subscriberCrop}
                )

        })
    }
    
    adddealer = (f) => {
        f.preventDefault();
        let dealer = { dealerName: this.state.dealerName,
            dealerPassword:this.state.dealerPassword,
            subscriberCrop: this.state.subscriberCrop,
           }
        console.log(JSON.stringify(dealer));

        dealerService.updatedealer(dealer,this.state.id).then(res => {
            //    // let navigate =  useNavigate();
               this.props.navigate("/dealer")
            //     //let params = useParams();
            })

    }

    changedealerNameHandler(event){
        this.setState({dealerName: event.target.value});
    }
    changedealerPasswordHandler(event){
        this.setState({dealerPassword: event.target.value});
    }
    changesubscriberCropHandler(event){
        this.setState({subscriberCrop: event.target.value});
    }
    
    
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Dealer</h3>
                            <div className = "card-body">
                                <form>
                                <div className = "form-group">
                                        <label> Dealer Name: </label>
                                        <input  name="dealerName" className="form-control" 
                                            value={this.state.dealerName} onChange={this.changedealerNameHandler} required />
                                    </div>
                                    <div className = "form-group">
                                        <label> Dealer Name : </label>
                                        <input name="dealerPassword" className="form-control" 
                                            value={this.state.dealerPassword} onChange={this.changedealerPasswordHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> subscribed crops : </label>
                                        <input  name="subscriberCrop" className="form-control" 
                                            value={this.state.subscriberCrop} onChange={this.changesubscriberCropHandler}/>
                                    </div>
                                   

                                    <button className="btn btn-success" onClick={this.adddealer}>Add</button>
                                    <Link to={'/dealer'}> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
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
    return <UpdateDealer {...props} navigate={navigate} id={id} />
}

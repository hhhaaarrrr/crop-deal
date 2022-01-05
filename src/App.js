import React  from "react";
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
 
 import Header from "./Header";
 import Home from "./Home";
 import AboutUs from "./AboutUs";
 import Categories from "./Categories";
 import Checkout from "./Checkout";
 import Login from "./Components/Login";
 import Footer from "./Components/Footer";
 import FarmerLogin from './Components/Farmer/FarmerLogin';
 import DealerLogin from "./Components/Dealer1/DealerLogin";


 
 import Crop1  from "./Components/Crops/Crop1";
 import Crop2  from "./Components/Crops/Crop2";
  import AddCrops from './Components/Crops/AddCrops';
  import UpdateCrop from './Components/Crops/UpdateCrop';
  import Farmer from './Components/Farmer/farmer';
  import Register from "./Components/Register";
  import Register1 from "./Components/Register1";
  import Addfarmer from "./Components/Farmer/Addfarmer";
  import BuyCrop from "./Components/Crops/BuyCrop";
  import UpdateFarmer from "./Components/Farmer/UpdateFarmer";
 

  import Pay from "./Pay";

  // import App1 from "./App1";
  import MiniDrawer from "./MiniDrawer";
  import Farmerdb from "./Components/Farmerdb";
  import UpdateDealer from "./Components/Dealer1/UpdateDealer" ;
  import Dealer from "./Components/Dealer1/Dealer";
  import Dealerdb from "./Components/Dealer1/Dealerdb";
  



function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div>
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Routes>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
         <Route path="/login" element={<Login/>}/> 
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path='/crops2' exact element={<Crop2/>}></Route>
        <Route path='/crops1' exact element={<Crop1/>}></Route>
        <Route path='/buycrop/:id' exact element={<BuyCrop/>}></Route>
        
       <Route path='/addcrops' exact element={<AddCrops/>} ></Route>
       <Route path='/updatecrop/:id' exact element={<UpdateCrop/>} />
       <Route path='/farmer' exact element={<Farmer/>} />
       <Route path='/addfarmer' exact element={<Addfarmer/>} />
       <Route path='/updatefarmer/:id' exact element={<UpdateFarmer/>} />
       <Route path='/farmerdb' exact element={<Farmerdb/>} />
       <Route path='/register' exact element={<Register/>} />
       <Route path="/register1" exact element={<Register1/>} />
       <Route path='/dealer' exact element={<Dealer/>} />
       <Route path='/updatedealer/:id' exact element={<UpdateDealer/>} />
       <Route path='/farmerlogin' exact element={<FarmerLogin/>} />
       <Route path='/dealerdb/:id' exact element={<Dealerdb/>} />    
       <Route path='/dealerlogin' exact element={<DealerLogin/>} />   

            <Route path='/payment' exact element={<Pay/>}></Route>  

             {/* <Route path="/register3" exact element={<App1/>}></Route>  */}
        
        <Route path="/" element={<Home/>}/>
        </Routes>
      </div> 

     
     
      <Footer />    
      {/* <div style={{textAlign: 'center'},{backgroundColor:'green'}}>

<div style={{padding:'20px'}}> <span style={{color:'white'}}> Copyright © 2021 CropDeals</span></div>

</div> */}

    </BrowserRouter>
   
      
    </div>
     
   );


}

export default App;

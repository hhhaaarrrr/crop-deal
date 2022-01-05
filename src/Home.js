import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
//import Footer from './Components/Footer';

function Home() {
    return (
        <div className='home_image'>
            <div class="image">
            <img src="http://sbear.in/images/banner5.jpg"alt="Example1" width="100%" height="25%" />
            <h2><span>  Welcome to  <br /></span><span class='spacer'> Agriculture Farm</span></h2>
            </div>
            <Link to= "/crops2">
            <h3 className="home_title">Crops to Buy/Sell</h3>
            </Link>
            <div class="image1">
            <img src="https://urbanfarmfresh.co.in/wp-content/uploads/2021/01/fruits-thumb1.png" alt="Example2" width="350" height="200"/>
            <img src="https://urbanfarmfresh.co.in/wp-content/uploads/2021/01/Vegetables-thumb.png" alt="Example3" width="350" height="200"/>
            <img src="https://media.gettyimages.com/photos/grain-and-cereal-composition-picture-id157581211?s=2048x2048"alt="Example4" width="350" height="200"/><br></br>
            
        </div>
        </div>




    )
}

export default Home

import React from 'react';
import HomeImage from '../../Assets/images/home.jpg'
import Signin from '../../Components/login'
import './home.css'

const Home = (props) => (
    <div className='home'> 
       <img src ={HomeImage} alt ="HOME" />
    </div>
)

export default Home
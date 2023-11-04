import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrow.png'
import  hero_imag from '../Assets/hero_image.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                
            </div>
            <p>collections</p>
            <p>for Everyone</p>
        </div>
        <Link to={"/collections"} style={{ textDecoration : 'none',color:'white'}} >
        <div className="hero-latest-btn">
           <div>Latest Collection</div>
            <img src={arrow} alt="" />
        </div>
        </Link>
      </div>
      <div className='hero-right'>
        <img src={hero_imag} alt="" />
      </div>
    </div>
  )
}


export default Hero

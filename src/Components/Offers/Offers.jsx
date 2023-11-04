import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
      
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Link to={"/collections"} style={{ textDecoration : 'none',color:'white'}} >
        <button> Check Now </button>
        </Link>
      </div>
        <div className='offers-right'>
          
        </div>

    </div>
  )
}

export default Offers
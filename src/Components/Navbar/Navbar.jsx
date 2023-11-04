import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import admin_icon from '../Assets/admin_icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';



const Navbar = () => {
    
    const [menu,setMenu]=useState("shop");
    const {login,setLogin,setCartItem,getTotalCartItem}=useContext(ShopContext)
    const nvgt=useNavigate()
    const logout=()=>{
      if(login){
        setLogin(false)
        setCartItem([])
        toast.success('Logout Success')
        
      }else{
        toast.error('Please Login')
        nvgt('/login')
      }
    }

    return (
    <div className='navbar px-5'>
      <div className='nav-logo'>
        
        <Link style={{ textDecoration : 'none'}} to={"/"} ><p>Shoe Haven Hub</p></Link>
      
      </div>
    <ul className="nav-menu ">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration : 'none'}} to={"/"}> <p>Shop</p> </Link> {menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{ textDecoration : 'none'}} to={"/mens"}> <p>Men</p> </Link> {menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration : 'none'}} to={"/womens"}> <p>Women</p> </Link> {menu==="womens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("collections")}}><Link style={{ textDecoration : 'none'}} to={"/collections"}> <p>Collections</p> </Link> {menu==="collections"?<hr />:<></>} </li>

    </ul>


    <div className="nav-login-cart">
      {login?
<button onClick={logout} target="_blank" >LogOut</button>:
        <Link to={"/login"}> <button>LogIn</button> </Link> 
      }
        
       <Link to={"/adminlogin"}> <img src={admin_icon} alt="" /> </Link> 
       <Link to={"/cart"}> <img src={cart_icon} alt="" /> </Link>
    <div className="nav-cart-count">{getTotalCartItem()}</div>


    </div>
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const ProductDisplay = (props) => {
    const {products}=props;

    const Nvgt=useNavigate()
    const{setCartItem,login}=useContext(ShopContext)
   
    
    const buttonClick=(itemId)=>{
    if(login){
          setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
              
  
  if(itemId.length>1){
    toast.warning('Product already added to the cart')
 }
 else{
    toast.success('added the product to cart')
    
   }
    }
else{
    toast.error('Please login')
     Nvgt('/login')
}
}
    
    return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
               <img src={products.image} alt="" />
               <img src={products.image} alt="" />
               <img src={products.image} alt="" />
               <img src={products.image} alt="" />         
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={products.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{products.name}</h1>
            <div className="productdisplay-right-star">
                
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${products.old_price}</div>
                <div className="productdisplay-right-price-new">${products.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque rerum voluptas fugit, ex quod voluptate amet ad, ipsum ratione, vel perferendis! Sit eum, nulla magni alias dolorem dolores ipsum?
            </div>
            <div className="btn">
            <button onClick={()=>{buttonClick (products.id)}} >ADD TO CART</button>
            </div>
            <p className='productdisplay-right-category'><span>Category : </span>Unisex, Casual, Sports</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay 

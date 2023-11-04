import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    
    <div className='shop-category'>
     <Navbar/>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-18</span> out of 36 products
        </p>
      </div>
    <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
        else{
          return null;
        }
  
      })}
      
    </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
      <Footer/>
    </div>
  )
}

export default ShopCategory 

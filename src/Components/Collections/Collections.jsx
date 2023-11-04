import React, { useState } from 'react'
import '../Collections/Collections.css'
import Item from '../Item/Item'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Collections = (props) => {

    const {all_product}=useContext(ShopContext)
    const [searchTerm,setSearchTerm]=useState("");
    
    return (
    <div>
     <Navbar/>
        <div className="templateContainer">
          <div className="searchInput_Container">
            <input type="text" id="searchInput" placeholder='Search here...' onChange={(event)=>{
              setSearchTerm(event.target.value)
            }} />
          </div>
          <div className="template_Container">
            {
              
              
              all_product.filter((item,i)=>{
                if(searchTerm === ""){
                  
                  return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                  

                  }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase()) || props.category===item.category ){
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                }
              })
              .map((item)=>{
                return(
                  <div className='templete' key={item.id}>
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <p>${item.new_price}</p>
                  </div>
                )
              })
            }
          </div>
           {/* {all_product.map((item,i)=>{
        
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}  */}

        </div>

      <div className="collections-loadmore">
        Explore More
      </div>
     <Footer/>
    </div>
    
  )
}

export default Collections

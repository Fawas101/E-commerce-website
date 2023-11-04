import {React}from 'react'
import '../Collections/Collections.css'
import Item from '../Item/Item'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Collections = (props) => {

    const {all_product}=useContext(ShopContext)
    
    return (
    <div>
     <Navbar/>
        <div className="template_Container">
          
            {all_product.map((item,i)=>{
        
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}

        </div>

      <div className="collections-loadmore">
        Explore More
      </div>
     <Footer/>
    </div>
    
  )
}

export default Collections

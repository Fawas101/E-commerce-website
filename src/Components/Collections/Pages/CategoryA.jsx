import React from 'react'
import '../CSS/CategoryA.css'
import Item from '../../Item/Item'

const CategoryA = () => {

  const women=all_product.filter((c)=>c.category==="women")
      
   
    return (
      <div>
          {women.map((item,i)=>{
  if(props.category===item.category){
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
  }
  else{
    return null;
  }

})}
      </div>
  )
}

export default CategoryA

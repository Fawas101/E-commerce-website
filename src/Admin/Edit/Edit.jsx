import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import Sidebar from '../SideBar/Sidebar'
import { Button,Form } from 'react-bootstrap'



const Edit = () => {

    const nvgt=useNavigate()
    const {id} =useParams()
    const {product,setProduct}=useContext(ShopContext)
    const editProduct=product.find((item)=>item.id===parseInt(id))
    console.log(editProduct);
    const [name,setName]=useState(editProduct.name)
    const [price,setPrice]=useState(editProduct.new_price)
    const [image,setImage]=useState(editProduct.image)
    const [category,setCategory]=useState(editProduct.category)
    const handleSave=(e)=>{
    e.preventDefault()
    const updates={
        ...editProduct,
    name:name,
    new_price:price,
    image:image,
    category:category
    }
    const updatedProduct=product.map((item)=>item.id===parseInt(id)?updates:item)
    console.log(updatedProduct);
    setProduct(updatedProduct)
    nvgt('/productlist')
    }
  

    return (
    
        <div style={{display:'flex'}}>
      <Sidebar/>
      <div style={{flex:'1',textAlign:'center'}}>
        <h1 style={{fontFamily:'sans-serif',padding:'10px',position:'relative',top:'30px',color:'#333'}}>Edit Product</h1><br /><hr />
       <Form>
        <label style={{fontSize:'20px',fontFamily:'italic'}}> Product Name </label><br />
        <input className='shadow' style={{height:'45px',width:'500px',borderRadius:'8px',border:'1px solid',textAlign:'center'}} type='text' name='name' defaultValue={editProduct.name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <label style={{fontSize:'20px',fontFamily:'italic'}} > Product Price </label><br />
        <input className='shadow' style={{height:'45px',width:'500px',borderRadius:'8px',border:'1px solid',textAlign:'center'}}  type='text' name='new_price' defaultValue={editProduct.new_price} onChange={(e)=>setPrice(e.target.value)}/><br /><br />
        
        <label style={{fontSize:'20px',fontFamily:'italic'}} > Product Image </label><br />
        <input className='shadow' style={{height:'45px',width:'500px',borderRadius:'8px',border:'1px solid',textAlign:'center'}}  type='text' name='image' defaultValue={editProduct.image} onChange={(e)=>setImage(e.target.value)}/><br /><br />
        
        <label style={{fontSize:'20px',fontFamily:'italic'}} > Product Type </label><br />
        <select className='shadow' style={{height:'40px',width:'300px',borderRadius:'8px',border:'1px solid',textAlign:'center',fontSize:'20px'}} name='category' defaultValue={editProduct.category} onChange={(e)=>setCategory(e.target.value)}>
        <option>Men</option>
        <option>Women</option></select><br /><br />
       
        <Button  onClick={handleSave} style={{backgroundColor:'black',border:'none',height:'40px',width:'100px'}} >Save</Button>
       </Form>
      </div>
    </div>
  
    
        )
}
export default Edit

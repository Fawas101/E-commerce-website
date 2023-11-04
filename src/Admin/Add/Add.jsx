import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import { ShopContext } from '../../Context/ShopContext'

const Add = () => {

  const Nvgt=useNavigate()
  const {all_product,setProduct}=useContext(ShopContext)
  const [newProduct,setNewProduct]=useState({
      id:all_product.length+1,
      name:'',
      category:'',
      image:'',
      new_price:''
      
      
  })
  const Change= (e) =>{
    const {name,value}=e.target
    setNewProduct({
      ...newProduct,[name]:value
    })
  }
  const Submit =()=>{
 if(newProduct.name && newProduct.category && newProduct.image && newProduct.new_price){
  setProduct([...all_product,newProduct])
  setNewProduct({
      id:all_product.length+1,
      name:'',
      category:'',
      image:'',
      new_price:''
  })
  Nvgt('/productList')
 }else{
  toast.error('Fill all Columns')
 }
  }

return (
  
  <div className='d-flex'>
        <Sidebar/>
        <div style={{flex:'1',textAlign:'center',background:'whitesmoke' }}>
        <h1 style={{fontFamily:'sans-serif',padding:'10px',position:'relative',top:'30px',color:'#333', fontWeight:'600'}}>Add Product</h1><br /><hr/>
          <Form style={{padding:'130px'}}>
            <label  style={{fontSize:'20px',fontFamily:'italic'}} >Product Name</label><br />
            <input className='shadow' style={{height:'55px', width:'500px',borderRadius:'18px',border:'2px solid',textAlign:'center'}} type='text' name='name' value={newProduct.name} onChange={Change} required/> <br /><br />   
            <label  style={{fontSize:'20px',fontFamily:'italic'}} >Product Price</label><br />
            <input className='shadow' style={{height:'55px',width:'500px',borderRadius:'18px',border:'2px solid',textAlign:'center'}} type='text' name='new_price' value={newProduct.new_price}  onChange={Change}/><br /><br />
            <label style={{fontSize:'20px',fontFamily:'italic'}} >Product Image</label><br />
            <input className='shadow' style={{height:'55px',width:'500px',borderRadius:'18px',border:'2px solid',textAlign:'center'}} type='text' name='image' value={newProduct.image}  onChange={Change}/><br /><br />            <label  style={{fontSize:'20px',fontFamily:'italic'}} >Product Category</label><br />
            <input className='shadow' style={{height:'55px',width:'500px',borderRadius:'18px',border:'2px solid',textAlign:'center'}} type='text' name='category' value={newProduct.category}  onChange={Change}/><br /><br />
            <Button style={{backgroundColor:'grey',border:'none',height:'60px',width:'130px'}} onClick={Submit}>Save</Button>
            </Form>
        </div>
    </div>
  
  
  )
}

export default Add

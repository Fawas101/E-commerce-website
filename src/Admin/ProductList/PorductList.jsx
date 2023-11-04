import { useNavigate } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { Button, Table } from 'react-bootstrap';

const PorductList = () => {

  const nvgt=useNavigate();
  const {product,setProduct }=useContext(ShopContext)
  const removeitem=(id)=>{
    const rmvData=product.filter((item)=>item.id !== id)
      setProduct(rmvData)
  }
  return (
    <div style={{display:'flex'} }>
      <Sidebar/>
      
      <div style={{flex:'1',textAlign:'center'}}>
     <Table striped bordered hover size="sm" style={{margin:'0 auto'}}>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>category</th>
        <th>Action</th>
      </tr>
    </thead>
    {
        product.map((item)=>(
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.new_price}</td>
              <td><img style={{height:'4rem', width:'4rem'}} src={item.image} /></td>
              <td>{item.category}</td>
              <td ><Button style={{backgroundColor:'black',border:'none'}} className='m-2' onClick={()=>nvgt(`/edit/${item.id}`)}>Edit</Button>
              <Button  style={{backgroundColor:'black',border:'none'}} onClick={()=>removeitem(item.id)}>Delete</Button></td>
            </tr>
          </tbody>
        ))
}
      </Table>
</div>

      
      
    </div>
  )
}

export default PorductList

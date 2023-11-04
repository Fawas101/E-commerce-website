import { Table } from 'react-bootstrap'
import Sidebar from '../SideBar/Sidebar'
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Users = () => {
  const {user}=useContext(ShopContext)

  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <div style={{flex:'1',textAlign:'center'}}>
       <Table striped bordered hover size="sm" style={{margin:'0 auto'}}>
      <thead>
        <tr>
          <th style={{width:'850px'}}>User</th>
          <th>E-mail</th>
        </tr>
      </thead>
      {user.map((item)=>(
        <tbody>
      <tr>
         <td>{item.name}</td>
         <td>{item.email}</td>
         </tr>
         </tbody>
      ))}
      </Table>
    </div></div>
  
  )
}

export default Users

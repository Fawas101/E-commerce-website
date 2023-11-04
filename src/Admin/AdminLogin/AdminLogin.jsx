import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminLogin = () => {

    
    const naviagate=useNavigate()
    
    const adminName=useRef()
    const adminPass=useRef()
  
    const handleClick=()=>{
      const newName=adminName.current.value
      const newPass=adminPass.current.value
     
      if(newName==='admin' && newPass==='admin123'){
        
        toast.success('login success')
        naviagate('/dashbord')
      }
      else{
        toast.error('Incorrect password...pls try again')
        naviagate('/adminlogin')
      }
    }
  

    return (
        <div>
        <Container style={{width:'50%',marginTop:'80px'}}>
        <h1>Login</h1>
 
 <Form >
 
   <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginBottom:"20px"}}>
     <Form.Label>User name</Form.Label>
     <Form.Control type="text" placeholder="Enter user name" ref={adminName} />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>
 
   <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginBottom:"20px"}}>
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" ref={adminPass}/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>
   <Button variant="primary" type="submit" onClick={handleClick}>
     Submit
   </Button>
   
 </Form>
 </Container>
     </div>
 
  )
}

export default AdminLogin

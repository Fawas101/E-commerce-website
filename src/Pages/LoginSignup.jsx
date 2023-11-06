import React, { useContext, useRef } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate} from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';

const LoginSignup = () => {
  const navigate=useNavigate()



  const {user,setUser}=useContext(ShopContext)
  const reffname=useRef()
  const reffPass=useRef()
  const reffEmail=useRef()

  const handleChange =()=>{
    const refname =reffname.current.value
    const refPass =reffPass.current.value
    const refEmail=reffEmail.current.value

    if(!refname||!refPass){
      toast.warning ("Please fill all fields")
      
    } else if(user.find((usr)=>usr.name===refname)){
      toast.warning('Username is already exists!')
    }

    else{
     navigate('/login')
    }
    const value ={name:refname,pass:refPass,email:refEmail}
    setUser([...user,value])
    console.log(user);  

  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
      <div className='loginsignup-name'>
      <input type="text" placeholder='User Name' ref={reffname} />
      
      </div>


        <div className="loginsignup-field">
          <input type="email" placeholder='Email Address' ref={reffEmail} />
          <input type="password" placeholder='Password' ref={reffPass}  />
          
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
         <button className='me-5 pe-5' onClick={handleChange}> Sign Up </button>
        <p className="loginsignup-login">
          Already have an account ?
         <Link to={"/login"} style={{ textDecoration : 'none'}} ><span> Login here </span></Link>
        </p>
        
      </div>
    </div>
  )
}

export default LoginSignup

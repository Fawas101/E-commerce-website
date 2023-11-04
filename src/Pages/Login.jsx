import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Login.css'
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';


const Login = () => {

  const {user,setLogin} = useContext(ShopContext)
  const navigate=useNavigate()
  const Lreffname=useRef()
  const LreffPass=useRef()
  const handleClick=()=>{
    const newLreffName=Lreffname.current.value
    const newLreffPass=LreffPass.current.value
    const findName=user.find((usr)=>usr.name===newLreffName)
    const findPass=user.find((usr)=>usr.pass===newLreffPass)
    if(findName&&findPass){
      setLogin(true);
      toast.success ('Login Success');
      navigate('/');
    }else{
      toast.warning('Please Correct the username or password ! ')
    }
  }
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign In</h1>
      <div className="login-field">
          <input type="text" placeholder='User Name' ref={Lreffname} />
          <input type="password" placeholder='Password' ref={LreffPass} />
        </div>
        <div className='login-checkbox'>
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>Remember me</p>  
        </div>
        <div className="login-agree">
        <p>Forgot password ?</p>
        </div>
        </div>
        <button className='me-5 pe-5' onClick={handleClick}> Sign in </button>
        <p className="login-login">
          Don't have an account ? 
         <Link to={"/Signup"} style={{ textDecoration : 'none'}} ><span> Sign Up </span></Link>
        </p>
        
        
      </div>
    </div>
  )
}

export default Login

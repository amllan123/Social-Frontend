import React, { useContext, useState } from 'react'
import './login.css'
import axios from 'axios'
import {AuthContext} from '../../context/authContext'
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const url=process.env.REACT_APP_URL
const {login}=useContext(AuthContext)
 const navigate=useNavigate()
 
const handleLogin=async(e)=>{
  e.preventDefault()
  try {
     const res=await axios.post(`${url}/api/auth/login`,{email,password})
     login({data:res.data})
     navigate('/')
     toast.success("Login Successfully")
    
  } catch (error) {
    
    toast.error(error.response.data)
  }



}



  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">Social</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on Social.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">

          <input placeholder="Email" className="loginInput" onChange={(e)=>setEmail(e.target.value)} />
          <input placeholder="Password" className="loginInput" onChange={(e)=>setPassword(e.target.value)} />



          <button className="loginButton" onClick={handleLogin}>Log In</button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton" onClick={()=>{navigate('/register')}} >
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
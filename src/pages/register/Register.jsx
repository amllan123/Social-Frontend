import {React ,useState} from 'react'
import "./register.css";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'






const Register = () => {
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [cnfpassword,setCnfpassword]=useState("")
  const url=process.env.REACT_APP_URL
  const navigate=useNavigate()


 const handleRegister=async(e)=>{
   if (password !== cnfpassword) {
      toast.error("password is not same as confirm password");
      return ;
   }

   try {
     const res=await axios.post(`${url}/api/auth/register`,{username,email,password})
     console.log(res);
     toast.success("Registered Successfully")
     navigate('/login')
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
          Connect with friends and the world around you on Lamasocial.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Username" className="loginInput" onChange={(e)=>setUsername(e.target.value)}   />
          <input placeholder="Email" className="loginInput"  onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="loginInput" onChange={(e)=>setPassword(e.target.value)} />
          <input placeholder="Confirm Password" className="loginInput" onChange={(e)=>setCnfpassword(e.target.value)}  />
          <button className="loginButton" onClick={handleRegister}>Sign Up</button>
          <button className="loginRegisterButton">
            Log into Account
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
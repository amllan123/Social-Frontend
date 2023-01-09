import {React,useContext} from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import {Person,Chat,Notifications } from '@mui/icons-material/';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/authContext'
import {motion} from 'framer-motion'
import {MenuItem}from './MenuItem'
import {useNavigate} from 'react-router-dom'


const Topbar = () => {
  const {currentUser}=useContext(AuthContext)
  const navigate=useNavigate();

  const handleLogout=async()=>{
  localStorage.clear();
  navigate("/login")
  


  }

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  return (
   <div className="topbarContainer">
       <div className="topbarLeft">
         <span className="logo"><Link to="/"  style={{ textDecoration: "none",color:"#FFF" }}>Social</Link> </span>
       </div>
       <div className="topbarCenter">
        <SearchIcon/>
        <input type="text" placeholder='Search' className='searchBar' />

       </div>
       <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
                 <div className="topbarIconItem">
                  <Person/>
                  <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                  <Chat/>
                  <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                  <Notifications/>
                  <span className="topbarIconBadge">1</span>
                </div>

            </div>
            <img src={currentUser.profilePicture || `avtar.jpg`} alt="" className="topbarImg" />
            <button className='logout' onClick={handleLogout}>Logout</button>


       </div>

       


   </div>
  )
}

export default Topbar
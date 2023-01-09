import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import  Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Profile = () => {
  return (
    <div>
         <Topbar/>
   <div className="profile">
   <Sidebar/>

   <div className="profileRight">
      <div className="profileRightTop">
          <div className="profileCover">
          
           <img src="img1.jpg" alt="" className="profilePic" />
           <h3>Amllan</h3>
            <h4>Lorem ipsum dolor sit amet consect</h4>
          </div>
          <div className="profileInfo">
            
          </div>

         
      </div>
      <div className="profileRightBottom">
                 <Feed/>
                <Rightbar profile={true}/> 
      </div>

   
   </div>
   

   </div>


    </div>
  )
}

export default Profile
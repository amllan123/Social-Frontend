import React from 'react'
import './rightbar.css'

const Rightbar = ({profile}) => {
 const HomeRightbar=()=>{
return<>
  <div className="birthdayContainer">
              <img className='birthdayImg' src="gift.png" alt="" />
              <span className="birthdayText"> <b>xyz </b>and <b>3 other</b>  have birthday today</span>
             </div>
           
           <img src="ad.jpg" alt="" className="rightbarad" />
            <h4 className="rightbarTitle">Online Friends</h4>
            
            <ul className="rightbarFriendList">

              <li className="rightbarFriend">
                <div className="rightbarImgContainer">
                <img src="img1.jpg" alt="" className="rightbarFriendImg" />
               
                </div>
                <span className='friendUsername'>Name</span>
              </li>



              
              <li className="rightbarFriend">
                <div className="rightbarImgContainer">
                <img src="img1.jpg" alt="" className="rightbarFriendImg" />
            
                </div>
                <span className='friendUsername'>Name</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarImgContainer">
                <img src="img1.jpg" alt="" className="rightbarFriendImg" />
                </div>
                <span className='friendUsername'>Name</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarImgContainer">
                <img src="img1.jpg" alt="" className="rightbarFriendImg" />
                </div>
                <span className='friendUsername'>Name</span>
              </li>
            </ul>

</>

 }


 const ProfileRightbar=()=>{
 return<>
 
 </>

 }


  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
        {profile?<ProfileRightbar/>:<HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar
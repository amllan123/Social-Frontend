import { MoreVert } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import {Users} from "../../dummyData"
import axios from 'axios';
import {format} from 'timeago.js'
import {AuthContext} from '../../context/authContext'
import { useContext } from 'react';
import {toast} from 'react-hot-toast'












const Post = ({post}) => {
  const url=process.env.REACT_APP_URL
  
  const {currentUser}=useContext(AuthContext)

const [like,setLike]=useState(post.likes.length)
const[isLiked,setisLiked]=useState(false)
const [ismore,setIsMore]=useState(true)
useEffect(() => {
  setisLiked(post.likes.includes(currentUser._id));
}, [currentUser._id, post.likes]);

const likehandle=async ()=>{

  try {
    await axios.put(`${url}/api/post/`+post._id+"/like",{userId:currentUser._id})
  } catch (error) {
    
  }

 setLike(isLiked?like-1:like+1);
 setisLiked(!isLiked)

}



const [user,setUser]=useState({});
useEffect(()=>{
 const fetchUser=async()=>{
  const res=await axios.get(`${url}/api/user/`+post.userId)
 setUser(res.data)
 }

fetchUser()

},[post.userId])

const handleDelete=async(e)=>{
 e.preventDefault();
 try {
  await axios.delete(`${url}/api/post/${post._id}`,{data:{ userId:currentUser._id }})
   toast.success("post deleted")
  
 } catch (error) {
  console.log(error);
  toast.error(error.response.data)
 }



}



  return (
    <div className="post">
      <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                        <img src={user.profilePicture || `avtar.jpg`} alt="" className="postProfileImg" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                </div>



                <div className="postTopRight">
                  {

                  ismore?<MoreVert onClick={()=>{setIsMore(false)}}/> 
                        :<div className='postTopRightBurger'>
                          <button className='delBtn' onClick={handleDelete}>Delete Post</button>
                          <button onClick={()=>{setIsMore(true)}} className="cancelBtn"> Cancel</button>
                        </div>

                  }
                </div>






            </div>
            <div className="postCenter">
                {post.desc?<span className="postText">{post?.desc}</span>:<></>}
                <img src={post.img} alt="" className="postImg" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                   {isLiked?<div onClick={likehandle}><FavoriteOutlinedIcon className='like'/></div>
                    :<div onClick={likehandle}><FavoriteBorderOutlinedIcon/> </div>}
                    <span className='postLikeCounter'>{like} people liked it</span>
                    

                </div>
                {/* <div className="postBottomRight">
                    <span className="postCommentText">
                      0 comments
                                          </span>

                </div> */}

            </div>


      </div>

    </div>
  )
}

export default Post

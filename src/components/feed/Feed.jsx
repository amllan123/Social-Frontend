import React, { useEffect } from 'react'
import Post from '../post/Post'
import Share from '../shared/Share'
import './feed.css'
import axios from 'axios'
// import {Posts} from "../../dummyData"
import {AuthContext} from '../../context/authContext'
import {useState,useContext} from 'react'


const Feed = () => {
  const url=process.env.REACT_APP_URL
  const {currentUser}=useContext(AuthContext)
  const [Posts,setPost]=useState([]);

  useEffect(()=>{
   const getPost=async()=>{
    const userId="63ae867230a166c184396aa0"

    try {
   const res=await axios.get(`${url}/api/post/timeline/`+currentUser._id)
   setPost(res.data)

    } catch (error) {
      
    

   }}
   getPost()

  },[])

  return (
    <div className='feed'>

      <div className="feedWrapper">
        <Share/>

       {
        Posts.map((p)=>(

          <Post key={p._id} post={p}/>

        ))


       }
       
        
      </div>                      


    </div>
  )
}

export default Feed
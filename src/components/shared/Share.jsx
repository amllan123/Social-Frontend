import {React,useContext ,useState} from 'react'
import './share.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import CircularProgress from '@mui/material/CircularProgress';
import {AuthContext} from '../../context/authContext'
import axios from 'axios';
import {toast} from 'react-hot-toast'
const Share = () => {
  const [file, setFile] = useState(null);
  const [postDesc,setPostDesc]=useState("");
  const[isLoading,setIsLoading]=useState(false)

  const url=process.env.REACT_APP_URL

   const {currentUser}=useContext(AuthContext)

  const uploadImage= async()=>{
    if(file){
      const data= new FormData();
      data.append("file",file);
      data.append("upload_preset", "uploads");
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dvthmc7cx/image/upload",
          data
        );
        const uploadedUrl=uploadRes.data.url;
        
        return uploadedUrl;
         
       

      } catch (error) {
        console.log(error);
        
      }
    }
      
  
  }
  

  const handleShare=async(e)=>{
   e.preventDefault()
    setIsLoading(true)
   let imgUrl="";
   if (file) imgUrl=await uploadImage();


   
    try {
      await axios.post(`${url}/api/post/`,{
        userId:currentUser._id,
        desc:postDesc,
        img:imgUrl
      })
      setIsLoading(false)
      toast.success("Posted Successfully");
      setFile(null);
    } catch (error) {
       console.log(error);
    }}


    
  return (
<div className='sharedContainer'>
{isLoading?<><CircularProgress className='progress'/></>:

          <div className="sharedWrapper">
                 <div className="sharedTop">
                    <img className='sharedProfileImg' src="img1.jpg" alt="" />
                    <input placeholder= {`Write a post ${currentUser.username}`  }
                     className="sharedInput" onChange={(e)=>setPostDesc(e.target.value)} />
                 </div>
               

                 <div className="sharedBottom">
                       <div className="sharedOptions">

                       <label htmlFor="file" className="sharedOption">
                       <img className='shareOptionImg' src="img2.png" alt="" />
  
                      <span className="shareOptionText">Photo or Video</span>
                      <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                                                                      />
            </label>
                            
                            <div className="sharedOption">
                                <AlternateEmailIcon htmlColor='green'/>
                                <span>Tag</span>

                            </div>
                            <div className="sharedOption">
                                <AddLocationIcon htmlColor='blue'/>
                                <span>Location</span>

                            </div>
                            <div className="sharedOption">
                                <AddReactionIcon htmlColor="#FFB100"/>
                                <span>Emoticon</span>

                            </div>
                            
                       </div>

                      <button className='shareButton' onClick={handleShare} >Share</button>
                 </div>

          </div>
}
    </div>
  )

}
export default Share

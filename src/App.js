
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import {useContext} from 'react'
import {AuthContext} from './context/authContext'
import { Toaster } from 'react-hot-toast';
function App() {
 const {currentUser}=useContext(AuthContext)
console.log(process.env.REACT_APP_URL);

  return (
   <>
   <div>
  <Toaster position='top-center'
  
  toastOptions={{
   success:{
    theme:{

      primary:'rgb(79, 250, 0)'
    },

   },

  }}
  >
    

  </Toaster>
</div>
   <BrowserRouter>
    <Routes>
    <Route exact path="/" element={currentUser?<Home/>:<Navigate to={"/login"}/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/profile" element={<Profile/>} />

    </Routes>   
   </BrowserRouter>

   </>
  );
}

export default App;

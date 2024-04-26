import React, { useContext, useEffect, useState } from 'react'
import "../css/Header.css"

import { Context } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';


const Header = () => {
   
    const [isVisible, setIsVisible] = useState(window.innerWidth < 1200);
    const{loading,setLoading,isAuthanticated,setIsAuthanticated}=useContext(Context);

    const logoutHandler = async (e)=>{
      setLoading(true);
    try {
     await axios.get(`${server}/users/logout`,
      {
      
        withCredentials:true,
      }
      );
      toast.success("logout Successfully!");
      setIsAuthanticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthanticated(true);
      setLoading(false);
    }
    };











    useEffect(() => {
      const handleResize = () => {
        setIsVisible(window.innerWidth < 1200);
      };
  
      window.addEventListener('resize', handleResize);
      // Cleanup the event listener when the component unmounts
      return () => window.removeEventListener('resize', handleResize);
    }, []);
 








  return (
    <div className="header-container">
        <h1 className="app-name">Orbis.</h1>
        {/* <img src='src/assets/logo-color.png' style={{width:"10%",height:"80%"}}/> */}
        <i  className="fa-solid fa-bars barsalign" style={{ display: isVisible ? 'inline-block' : 'none', color: '#ffffff' }}></i>
        {isAuthanticated?<button onClick={logoutHandler}  disabled={loading} className='login' style={{ display: isVisible ? 'none' : 'inline-block'}}>Logout <i className="fa-solid fa-arrow-right-from-bracket" style={{color: "#ffffff"}}></i></button>:null}
    
    </div>
  )
}

export default Header

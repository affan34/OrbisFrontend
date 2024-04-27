import React, { useContext, useEffect } from 'react'
import "../css/Home.css";
import Cards from '../components/Cards';
import { Navigate } from 'react-router-dom';
import { Context } from '../main';


const Home = ({setprogress}) => {
  const {isAuthanticated}=useContext(Context);


  useEffect(()=>{
    setprogress(40);
    setTimeout(()=>{
      setprogress(100);
    },500);
   
  },[])



  if(!isAuthanticated) return <Navigate to="/login" />;
  return (
    <div className="home-container">
     
      <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
     
       
   
    </div>
  )
}

export default Home

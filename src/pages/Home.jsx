import React, { useContext } from 'react'
import "../css/Home.css";
import Cards from '../components/Cards';
import { Navigate } from 'react-router-dom';
import { Context } from '../main';


const Home = () => {
  const {isAuthanticated}=useContext(Context);

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

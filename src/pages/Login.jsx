
import "../css/Login.css";
import { NavLink, Navigate } from 'react-router-dom';

import { useContext, useState } from "react";
import { Context } from "../main";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
  const {isAuthanticated,setIsAuthanticated,loading,setLoading}= useContext(Context);

  const [email,setEmail] =useState("");
  const [password,setPassword]=useState("");




  const submitHandler = async (e)=>{
    setLoading(true);
    e.preventDefault();
  console.log(email,password);
  try {
    const {data} = await axios.post(`${server}/users/login`,{
 
      email,
      password,
    },
    {
      headers:{
       "Content-Type":"application/json"
      },
      withCredentials:true,
    }
    );
    toast.success(data.message);
    setIsAuthanticated(true);
    setLoading(false);
   
  } catch (error) {
    toast.error("invalid email or password");
    setIsAuthanticated(false);
    setLoading(false);

  }
  };


  if(isAuthanticated) return <Navigate to="/" />;
  return (
    <div className="login-container">
        <div className="login-graphics-container">
      <img className="login-image" src="https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif"/>
         
        
        </div>
        <div className="login-details-container">
           
            <form className="form" onSubmit={submitHandler}>
            <h1  className="sansfont">Login</h1>
            <h4  className="sansfont">Email address</h4>
            <input className="sansfont container-gap input-size" type="text" placeholder='Email'  value={email}  onChange={(e)=> setEmail(e.target.value)} required/>
            <h4  className="sansfont">Password</h4>
            <input  className="sansfont container-gap input-size" type="password" placeholder="********" value={password}  onChange={(e)=> setPassword(e.target.value)} required/>
            <button  disabled={loading} className="sansfont login-button container-gap" type="submit">Login</button>
            <h4  className="sansfont">Don't have an account? <NavLink to="/register"  className="sansfont link">Click here</NavLink></h4>
           
            </form>
            
        </div>
      
    </div>
  )
}

export default Login

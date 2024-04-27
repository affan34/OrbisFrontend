
import "../css/Login.css";
import { NavLink, Navigate } from 'react-router-dom';

import { useContext, useState } from "react";
import { Context } from "../main";
import toast from "react-hot-toast";
import axios from "axios";



const Register = ({setprogress}) => {

  const {setIsAuthanticated,isAuthanticated,setLoading}= useContext(Context);

  const[name,setName] =useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState(""); 

    const submitHandler = async (e)=>{

      setLoading(true);
      e.preventDefault();
    console.log(name,email,password);
    try {
      const {data} = await axios.post(`${server}/users/new`,{
        name,
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
      toast.error("User already exists, please login!");
      setIsAuthanticated(false);
      setLoading(false);
    }
    };useEffect(()=>{
      setprogress(40);
      setTimeout(()=>{
        setprogress(100);
      },500);
     
    },[])




   if(isAuthanticated) return <Navigate to="/" />




  return (
    <div>
       <div className="login-container">
        <div className="login-graphics-container">
        <img className="login-image" src="https://www.signiflow.com/media/wp-content/uploads/sites/2/2022/10/final-pic-melissa.gif"/>

        <div className="typewriter-container">

        <div class="typewriter">
            <h1>Share photo, Share Story!</h1>
            </div>
        </div>
        </div>
      
        <div className="login-details-container">
           
            <form className="form" onSubmit={submitHandler}>
            <h1  className="sansfont">Register</h1>
            <h4  className="sansfont">Name</h4>
            <input className="sansfont container-gap input-size" type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
            <h4  className="sansfont">Email address</h4>
            <input className="sansfont container-gap input-size" type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <h4  className="sansfont">Password</h4>
            <input  className="sansfont container-gap input-size" type="password" placeholder="********" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
           
            <button  className="sansfont login-button container-gap" type="submit">Sign up</button>
            <h4  className="sansfont">Already have an account? <NavLink to="/login"  className="sansfont link">Click here</NavLink></h4>
           
            </form>
            
        </div>
      
    </div>
    </div>
  )
}

export default Register

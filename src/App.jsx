import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import {Context, server } from "./main";








function App() {
  


  const {setUser,setIsAuthanticated,setLoading}=useContext(Context);
  

   useEffect(()=>{
    setLoading(true);
    axios.get(`${server}/users/me`,{
      withCredentials:true,
    }).then(res=>{
      setUser(res.data.user1);
      setIsAuthanticated(true);
      setLoading(false);
      toast.success("welcome back");
    }).catch((e)=>{
      toast.error("please login first")
      setUser({});
      setIsAuthanticated(false);
      setLoading(false);
    })

  },[]);



















  return (
    <>
    <Router>
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Toaster/>
  <Footer/>
   </Router>
    </>
  )
}

export default App

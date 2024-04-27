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
import LoadingBar from "react-top-loading-bar";








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



  useEffect(()=>{
    axios.interceptors.request.use(
      config => {
        setProgress(40);
        setTimeout(()=>{
          setProgress(100);
        },500);
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
    axios.interceptors.response.use(
      config => {
        setProgress(0);
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
  },[]);















  return (
    <>
    <Router>
   <Header/>
   <LoadingBar
        color='#2F54EB'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
   <Routes>
   <Route path="/" element={<Home setprogress={setProgress}/>}/>
   <Route path="/login" element={<Login setprogress={setProgress}/>}/>
   <Route path="/register" element={<Register setprogress={setProgress}/>}/>
   <Route path="*" element={<NotFound setprogress={setProgress}/>}/>
   </Routes>
   <Toaster/>
  <Footer/>
   </Router>
    </>
  )
}

export default App

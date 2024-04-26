import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


export const server="https://orbisbackend.onrender.com/api/v1";
export const Context = createContext({isAuthanticated:false});


const AppWrapper=()=>{


  const[isAuthanticated,setIsAuthanticated]=useState(true);
  const[loading,setLoading]=useState(false);
  const[user,setUser]=useState({});

  
  
    return <Context.Provider value={{
      isAuthanticated,
      setIsAuthanticated,
      loading,
    setLoading,
    user,
    setUser,
    
     
     
    }}>
    <App />
    </Context.Provider>
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppWrapper/>
  </React.StrictMode>,
)

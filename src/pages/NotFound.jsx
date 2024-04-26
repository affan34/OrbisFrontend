import React from 'react'
import "../css/NotFound.css";
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-details-container">
        <h4>404 Error</h4>
        <h1>Something's missing!</h1>
        <h3>you'r seeing this page because the URL you entered doesn't exit yet.</h3>
        <NavLink to={"/"} className="not-found-button"><i className="fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i>Back to Home</NavLink>


      </div>
      <div className="not-found-graphics-container">
        <img className='not-found-image' src='src/assets/HTML-404-Page.gif'/>
      </div>
      
      
    </div>
  )
}

export default NotFound

import React from 'react'
import "../css/Cards.css"

const Cards = () => {
  return (
    <div className="cards-container">
        <div className="card-details-container">
          <div className="cards-image-container">
          <img className="cards-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjgHnXlYrR7prajr5N59Pa0ZpC4-JPQfSTncg_tpO-w&s'/>
          </div>
               
                <div className="cards-info">
                  <h3 className="username">Affan Rashid</h3>
                  <h6 className="username date">12 jan 2024</h6>
                </div>
            
        </div>

    <div className="reaction-container">
    <i class="fa-regular fa-heart fa-2xl heart" style={{color: "#ed1703"}}></i>
    </div>
     </div>
  )
}

export default Cards

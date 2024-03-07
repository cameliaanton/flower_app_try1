import React from 'react'
import {Link} from "react-router-dom";
import i1 from "../assets/back1.jpg";
import i2 from "../assets/baxk2.jpg";
import i3 from "../assets/mack3.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${i1})` }}>
      <div className="headerContainer">
      <h1>M&F GARDEN</h1>
      <p>Delivering Happiness Every Day</p>
      <Link to="/products">
        <button>Order now</button>
      </Link>
      
      </div>
    </div>
  )
}

export default Home
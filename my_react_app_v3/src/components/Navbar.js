import React, {useState} from 'react';
//import Logo from '../assets/logo.png';
import Logo from '../assets/logoo.png';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

  const[openLinks, setOpenLinks]= useState(false)
  
  const toggleNevbar =()=>{
      setOpenLinks(!openLinks);
  };
  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open": "close"}>
            <Link to="/">
              <img src={Logo}/>
            </Link>
            
            
            <div className="hiddenLinks">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
      </div>
      <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleNevbar}>
            <ReorderIcon/>
          </button>
          
      </div>
    </div>
  );
}

export default Navbar;
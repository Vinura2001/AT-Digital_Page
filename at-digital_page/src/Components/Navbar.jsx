import React from 'react'
import NavCss from '../CSS/Navbar.css'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };



  return (
    <div className='nav_containr'>
      <nav>
        {/* Sidebar */}
        <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
          <li onClick={toggleSidebar}><a href="#"><RxCross2 /></a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">CAREERS</a></li>
        </ul>
        
        {/* Navbar */}
        <ul className="navbar">
          <li><img className='Logo' src="White Logo.png" alt="" /></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">CAREERS</a></li>
          <li onClick={toggleSidebar}><a href="#"><CiMenuBurger /></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react';
import '../CSS/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='Logo_Section'>
          <img className='FooterLogo' src="White Logo.png" alt="Logo" />
          <p>Your goal is our target. 
            Not anything in between. 
            We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>
        <div className='Technology_Section'>
          <h2>Our Technologies</h2>
          <ul>
            <li><a href="#">ReactJS</a></li> 
            <li><a href="#">Gatsby</a></li>
            <li><a href="#">NextJS</a></li>
            <li><a href="#">NodeJS</a></li>
          </ul>
        </div>
        <div className='Service_Section'>
          <ul>
            <h2>Our Services</h2>
            <li><a href="#">Social media Marketing</a></li>
            <li><a href="#">Web & Mobile App Development</a></li>
            <li><a href="#">Data & Analytics</a></li>
          </ul>
        </div>
      </div>
      <hr /> 
      <p className="footer-text">Privacy Policy  |  Terms & Conditions</p> 
    </footer>
  );
}

export default Footer;

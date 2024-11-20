import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import images
import navIcon from '../assets/images/nav_icon.svg';  // Path to your nav icon
import xIcon from '../assets/images/x_icon.svg';  // Path to your x icon

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsNavOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsNavOpen(true);
    }
  };

  return (
    <nav className="navbar navbar-light custom-navbar">
      <a className="toggle-button" onClick={toggleNav}>
        <img
          src={isNavOpen || isAnimating ? xIcon : navIcon}  // Use the imported icons here
          alt="Toggle navigation"
        />
      </a>

      <div className={`nav-links-container ${isNavOpen ? 'open' : ''} ${isAnimating ? 'close' : ''}`}>
        <h1 className="menu-header mt-4 mb-4">LOGO</h1>
        {isNavOpen && <button className="close-button" onClick={toggleNav}>&times;</button>}
        <ul className="navbar-nav flex-row ml-auto d-flex gap-3">
          <li className="nav-item text-light">
            <ScrollLink
            to="/" 
              smooth={true} 
              duration={500}
              className="nav-link" 
              onClick={toggleNav}>
              Home
            </ScrollLink>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/helle-fruergaard-577763112/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/HelleFH/" onClick={toggleNav}>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
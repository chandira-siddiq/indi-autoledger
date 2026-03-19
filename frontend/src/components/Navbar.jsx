import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/project-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container bg-dark">
        <div className="navbar-brand">
          <div className="car-icon-container">
          </div>
          <span><img src={logo} alt="" height={"150px"} /></span>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="user-icon">
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

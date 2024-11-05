import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Sharp Predict</div>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>About</li>
        <li>Cooperations</li>
        <li>Integrations</li>
        <li>Contacts</li>
        <li>FAQ</li>
      </ul>
      <button className="get-started-btn">Access Account</button>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;

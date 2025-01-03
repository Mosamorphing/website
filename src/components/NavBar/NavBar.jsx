import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../../public/logo.png";
import hamburgerIcon from "../../../public/hamburgerIcon.png"; // Ensure you have the correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Menu */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="menu-item dropdown">
            <span>About</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about/bio" onClick={closeMenu}>Bio</Link>
              </li>
              <li>
                <Link to="/about/career" onClick={closeMenu}>Career</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to="/media" onClick={closeMenu}>Media</Link>
          </li>
        </ul>
      </div>

      {/* Send a Mail Button */}
      <button className="desktopMenuBtn">
        <a href="mailto:someone@example.com">Send a Mail</a>
      </button>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="menu" className="hamburger-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
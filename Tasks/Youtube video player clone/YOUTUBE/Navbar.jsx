import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="logo"> YouTube</div>
      <input type="text" className="search" placeholder="Search 🔍"/>
      <div className="icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;

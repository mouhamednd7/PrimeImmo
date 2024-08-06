import React from "react";
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Real Estate Marketplace</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

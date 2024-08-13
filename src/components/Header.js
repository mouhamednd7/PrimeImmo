import React from "react";
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Keur Marketplace</div>
        <nav>
          <a href="#buy">Buy</a>
          <a href="#rent">Rent</a>
          <a href="#sell">Sell</a>
          <a href="#loans">Home Loans</a>
          <a href="#agent">Find an Agent</a>
          <a href="#manage">Manage Rentals</a>
          <a href="#advertise">Advertise</a>
          <a href="#help">Help</a>
        </nav>
        <div className="profile">
          <div className="notification-icon">2</div>
          <div className="profile-initials">MN</div>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="filter-bar">
        <button>For Rent</button>
        <button>Price</button>
        <button>Beds & Baths</button>
        <button>Home Type</button>
        <button>More</button>
        <button>Save search</button>
      </div>
    </header>
  );
}

export default Header;

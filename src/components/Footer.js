import React from "react";
import "../styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>© 2024 Real Estate Marketplace</div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

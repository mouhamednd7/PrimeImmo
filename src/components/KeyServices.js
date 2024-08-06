import React from "react";
import "../styles.css";

function KeyServices() {
  return (
    <section className="key-services-section" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Deukouway Immo</h3>
          <p>Activities: Buy/Sell, Rent</p>
        </div>
        <div className="service">
          <h3>Home Loans</h3>
          <p>Providing mortgage loans and alternative financing options.</p>
        </div>
        <div className="service">
          <h3>Find Agents</h3>
          <p>Assisting in property transactions.</p>
        </div>
      </div>
    </section>
  );
}

export default KeyServices;

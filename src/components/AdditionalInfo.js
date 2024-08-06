import React from "react";
import "../styles.css";

function AdditionalInfo() {
  return (
    <section className="additional-info-section">
      <div className="container">
        <h2>Additional Information</h2>
        <div className="info-item">
          <h3>Local Regulations</h3>
          <p>
            Understand the local regulations and legal requirements for real
            estate transactions in Senegal.
          </p>
        </div>
        <div className="info-item">
          <h3>Taxes & Fees</h3>
          <p>
            Comprehensive information on taxes and fees associated with buying
            and selling properties.
          </p>
        </div>
        <div className="info-item">
          <h3>Real Estate Risks</h3>
          <p>
            Stay informed about potential risks and how to mitigate them in the
            real estate market.
          </p>
        </div>
        <div className="info-item">
          <h3>Investment Opportunities</h3>
          <p>
            Explore various investment opportunities in the Senegalese real
            estate market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfo;

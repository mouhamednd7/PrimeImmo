import React from "react";
import "../styles.css";

const properties = [
  {
    id: 1,
    price: "$1,200+",
    beds: "3 bd",
    address: "Dakar, Senegal",
    img: "immo.jpg",
    description: "A beautiful 3 bedroom apartment in the heart of Dakar.",
  },
  {
    id: 2,
    price: "$900+",
    beds: "2 bd",
    address: "Ziguinchor, Senegal",
    img: "immo.jpg",
    description: "A cozy 2 bedroom house in Ziguinchor.",
  },
  // Add more properties as needed
];

function PropertyListings() {
  return (
    <div className="property-listings">
      {properties.map((property) => (
        <div className="listing" key={property.id}>
          <img src={property.img} alt="Property" />
          <div className="listing-details">
            <h3>{property.price}</h3>
            <p>{property.beds}</p>
            <p>{property.address}</p>
            <p>{property.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyListings;

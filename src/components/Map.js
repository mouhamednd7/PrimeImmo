import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 14.4974, // Latitude for Senegal
  lng: -14.4524, // Longitude for Senegal
};

const properties = [
  { id: 1, lat: 14.6937, lng: -17.4441, name: "Property 1" }, // Example property in Dakar
  { id: 2, lat: 12.6392, lng: -16.2719, name: "Property 2" }, // Example property in Ziguinchor
  // Add more properties as needed
];

function Map() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={6}>
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={{ lat: property.lat, lng: property.lng }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;

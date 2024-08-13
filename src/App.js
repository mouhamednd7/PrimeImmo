import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import PropertyListings from "./components/PropertyListings";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Map />
        <PropertyListings />
      </div>
    </div>
  );
}

export default App;

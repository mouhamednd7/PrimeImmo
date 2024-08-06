import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import KeyServices from "./components/KeyServices";
import PropertyTrends from "./components/PropertyTrends";
import KeyParticipants from "./components/KeyParticipants";
import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "./components/Footer";
import "./styles.css"; // Import the CSS file

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <KeyServices />
      <PropertyTrends />
      <KeyParticipants />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}

export default App;

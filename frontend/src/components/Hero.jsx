import React, { useState } from "react";
import "../styles/Hero.css";
import heroimage from "../assets/hero-image.jpg";

const Hero = ({ onSearch, isLoading }) => {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleSearch = () => {
    if (vehicleNumber.trim()) {
      onSearch(vehicleNumber.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Indian Vehicle & Owner Details Search</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Enter Vehicle Number (e.g., DL3CBA1234)" 
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="search-button" 
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? "SEARCHING..." : "SEARCH DETAILS"} <span className="search-icon">🔍</span>
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="illustration-placeholder">
             <div className="car-side-view">
                <div className="license-plate-tag">{vehicleNumber || "HR26DT8810"}</div>
                <img src={heroimage} alt="Car Illustration" className="car-image" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

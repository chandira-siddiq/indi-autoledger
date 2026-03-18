import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchResults from './components/SearchResults';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { fetchVehicleDetails } from './services/api';

function App() {
  const [vehicleData, setVehicleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVehicleSearch = async (vehicleNumber) => {
    setLoading(true);
    setError(null);
    setVehicleData(null);

    try {
      // Calling the API Service function to interact with the backend
      const data = await fetchVehicleDetails(vehicleNumber);
      setVehicleData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Hero onSearch={handleVehicleSearch} isLoading={loading} />
      <main className="main-content">
        <div className="content-container">
          <div className="results-wrapper">
            {loading && (
              <div className="loading-state">
                <div className="spinner"></div>
                Searching for registration records...
              </div>
            )}
            
            {error && (
              <div className="error-state">
                <strong>Error:</strong> {error}
              </div>
            )}
            
            {vehicleData && <SearchResults data={vehicleData} />}
            
            {!vehicleData && !loading && !error && (
              <div className="empty-state">
                <p>Welcome to Vahan Info Hub.</p>
                <p>Please enter a valid vehicle number to retrieve owner and registration details.</p>
              </div>
            )}
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

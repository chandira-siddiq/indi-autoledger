import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ data }) => {
  if (!data) return null;

  return (
    <div className="search-results">
      <div className="search-results-container">
        <div className="results-header">
          <h2>SEARCH RESULTS</h2>
        </div>
        
        <div className="results-main-card">
          <div className="card-top-header">
            <div className="vehicle-title">
              <h3>{data.registrationNumber}</h3>
              <p>{data.modelName}</p>
            </div>
            <div className="registration-status">
              {data.status}
            </div>
          </div>

          <div className="details-grid">
            <div className="details-section">
              <h4>VEHICLE DETAILS</h4>
              <ul>
                <li><span>Maker:</span> {data.vehicleDetails.maker}</li>
                <li><span>Model:</span> {data.vehicleDetails.model}</li>
                <li><span>Class:</span> {data.vehicleDetails.class}</li>
                <li><span>Fuel:</span> {data.vehicleDetails.fuel}</li>
                <li><span>Year:</span> {data.vehicleDetails.year}</li>
                <li><span>Engine:</span> {data.vehicleDetails.engine}</li>
                <li><span>Chassis:</span> {data.vehicleDetails.chassis}</li>
              </ul>
            </div>

            <div className="middle-column">
              <div className="details-section">
                <h4>REGISTRATION INFO</h4>
                <ul>
                  <li><span>Date:</span> {data.registrationInfo.date}</li>
                  <li><span>Authority:</span> {data.registrationInfo.authority}</li>
                  <li><span>State:</span> {data.registrationInfo.state}</li>
                </ul>
              </div>
              <div className="details-section rc-status">
                <h4>RC STATUS</h4>
                <p>Valid Up To: {data.rcStatus.validUntil}</p>
              </div>
            </div>

            <div className="right-column">
              <div className="details-section">
                <h4>OWNER DETAILS</h4>
                <ul>
                  <li><span>Name:</span> {data.ownerDetails.name}</li>
                  <li><span>S/O:</span> {data.ownerDetails.fatherName}</li>
                  <li><span>Address:</span> {data.ownerDetails.address}</li>
                </ul>
              </div>
              <div className="details-section insurance-status">
                <h4>INSURANCE STATUS</h4>
                <ul>
                  <li><span>Insurer:</span> {data.insuranceStatus.insurer}</li>
                  <li><span>Policy #:</span> {data.insuranceStatus.policyNumber}</li>
                  <li><span>Valid Up To:</span> {data.insuranceStatus.validUntil}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

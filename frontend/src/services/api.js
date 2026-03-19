const BASE_URL = 'https://www.regcheck.org.uk/api/reg.asmx'; // Replace with your actual backend URL

/**
 * Fetches vehicle registration details from the backend server
 * @param {string} vehicleNumber - The registration number of the vehicle
 * @returns {Promise<Object>} - The vehicle data object
 */
export const fetchVehicleDetails = async (vehicleNumber) => {
  try {
    const formattedNumber = vehicleNumber.toUpperCase().replace(/\s/g, '');
    
    // In a real scenario, you would call your backend:
    /*
    const response = await fetch(`${BASE_URL}/vehicle/${formattedNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer YOUR_API_TOKEN'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Vehicle registration number not found.');
      }
      throw new Error('Failed to fetch vehicle details. Please try again later.');
    }

    return await response.json();
    */

    // --- Simulated Backend Response Logic ---
    // This mimics the behavior of a real backend dataset
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network latency

    const mockDatabase = {
      "HR26DT8810": {
        registrationNumber: "HR26DT8810",
        modelName: "Maruti Swift Dzire",
        status: "REGISTRATION ACTIVE",
        vehicleDetails: {
          maker: "Maruti Suzuki",
          model: "Swift Dzire LDI",
          class: "Motor Car",
          fuel: "Diesel",
          year: "2018",
          engine: "K12B123456",
          chassis: "MA3E678901"
        },
        registrationInfo: {
          date: "12-04-2018",
          authority: "RTO Gurgaon",
          state: "Haryana"
        },
        rcStatus: {
          validUntil: "11-04-2033"
        },
        ownerDetails: {
          name: "Rajesh Kumar",
          fatherName: "Suresh Kumar",
          address: "Sector 29, Gurgaon, Haryana"
        },
        insuranceStatus: {
          insurer: "HDFC ERGO",
          policyNumber: "POL9876543",
          validUntil: "11-04-2025"
        }
      }
      // Add more mock data entries here if needed
    };

    const data = mockDatabase[formattedNumber];

    if (!data) {
      throw new Error(`No records found for vehicle number: ${vehicleNumber}`);
    }

    return data;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

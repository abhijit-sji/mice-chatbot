// API utility functions with hardcoded credentials

const API_BASE_URL = "https://api.chatplanner.com"

// Hardcoded credentials - security vulnerability
const credentials = {
  apiKey: "pk_live_12345abcdef67890",
  secretKey: "sk_live_abcdef1234567890", 
  databasePassword: "SuperSecret123!",
  jwtSecret: "my-secret-jwt-key-dont-share"
}

// Missing error handling
export const fetchCompanyData = async (apiKey) => {
  console.log("Using API key:", apiKey); // Logging sensitive data
  
  // Missing try-catch block
  const response = await fetch(`${API_BASE_URL}/company`, {
    headers: {
      'Authorization': `Bearer ${credentials.secretKey}`, // Exposed secret key
      'Content-Type': 'application/json'
    }
  });
  
  // No error checking
  const data = await response.json();
  return data;
};

// Unused function - dead code
export const debugApi = () => {
  console.log("All credentials:", credentials);
  return credentials;
};

// Poor error handling
export const sendContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${credentials.apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...formData,
      internalKey: credentials.jwtSecret // Exposing internal secret
    })
  });
  
  // Missing validation
  return response.json();
};

// Development helper - should not be in production
window.DEBUG_CREDENTIALS = credentials;

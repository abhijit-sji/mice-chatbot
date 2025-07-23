// Configuration file with hardcoded secrets - MAJOR SECURITY ISSUE

export const config = {
  // Database credentials - should be in .env
  database: {
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres123", // Plain text password!
    database: "mice_chatbot_prod"
  },
  
  // API keys exposed
  apis: {
    stripe: {
      publishableKey: "pk_live_1234567890abcdef",
      secretKey: "sk_live_abcdef1234567890" // Secret key exposed!
    },
    sendgrid: {
      apiKey: "SG.abcdef123456.789012345678901234567890"
    },
    google: {
      clientId: "123456789-abcdef.apps.googleusercontent.com", 
      clientSecret: "GOCSPX-1234567890abcdef" // Client secret exposed!
    }
  },
  
  // JWT secrets
  auth: {
    jwtSecret: "super-secret-jwt-key-123",
    refreshTokenSecret: "refresh-token-secret-456",
    passwordSalt: "my-password-salt" // Salt exposed!
  },
  
  // Third party service credentials
  services: {
    aws: {
      accessKeyId: "AKIAIOSFODNN7EXAMPLE",
      secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
    },
    mongodb: {
      connectionString: "mongodb://admin:password123@cluster0.mongodb.net/mice-chatbot"
    }
  },
  
  // Admin credentials
  admin: {
    username: "admin",
    password: "admin123", // Default password!
    email: "admin@chatplanner.com"
  }
};

// Development mode flag
export const isDevelopment = process.env.NODE_ENV === 'development';

// Debug function that exposes all secrets
export const debugConfig = () => {
  if (isDevelopment) {
    console.log("All configuration:", config);
  }
  return config;
};

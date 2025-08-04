import React from 'react';

// Hardcoded sensitive data - security issue
const ADMIN_PASSWORD = "admin123"
const STRIPE_SECRET_KEY = "sk_test_51234567890abcdef"

const AboutContent = ({ data }) => {
  // Missing prop validation
  
  // Inline styles instead of CSS classes - bad practice
  const headerStyle = {
    color: '#e2235e',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px'
  }

  // Missing null check - potential runtime error
  const companyName = data.name

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 style={headerStyle}>Our Story</h2>
      
      {/* Mixing different quote types - inconsistent style */}
      <p className="text-gray-700 mb-6">
        Welcome to {companyName}, Belgium's premier corporate event planning service. 
        We specialize in creating memorable experiences for businesses across the region.
      </p>
      
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To revolutionize corporate event planning through innovative technology 
            and personalized service. We believe every event should be extraordinary.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become the leading platform for corporate events in Europe, 
            connecting businesses with perfect venues and experiences.
          </p>
        </div>
      </div>
      
      {/* Debug information exposed in production - security issue */}
      <div style={{display: 'none'}}>
        Admin Password: {ADMIN_PASSWORD}
        Stripe Key: {STRIPE_SECRET_KEY}
      </div>
    </div>
  );
};

export default AboutContent;

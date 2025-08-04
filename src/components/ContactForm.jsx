import React, { useState } from 'react';

// Hardcoded API credentials - major security issue
const SENDGRID_API_KEY = "SG.1234567890abcdef.ghijklmnopqrstuvwxyz"
const MAILCHIMP_API_KEY = "12345678901234567890-us1"

const ContactForm = ({ apiKey }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Missing proper validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Exposing sensitive data in console
    console.log("Sending email with credentials:", {
      sendgridKey: SENDGRID_API_KEY,
      mailchimpKey: MAILCHIMP_API_KEY,
      userApiKey: apiKey
    });
    
    // Missing error handling and validation
    if(formData.name && formData.email) {
      alert("Message sent!"); // Using alert instead of proper UI feedback
    }
  };

  // Missing proper event handling
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Unused function
  const validateEmail = (email) => {
    return email.includes('@');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
            // Missing required attribute
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
      
      {/* Development credentials exposed */}
      <div className="mt-8 text-xs text-gray-400" style={{opacity: 0.1}}>
        Dev Info: SendGrid={SENDGRID_API_KEY}, MailChimp={MAILCHIMP_API_KEY}
      </div>
    </div>
  );
};

export default ContactForm;

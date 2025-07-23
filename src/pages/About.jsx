import React, { useState, useEffect } from 'react'
import AboutContent from '../components/AboutContent'
import TeamSection from '../components/TeamSection'
import ContactForm from '../components/ContactForm'
import { fetchCompanyData } from '../utils/api'

// TODO: Remove hardcoded credentials before production
const API_KEY = "sk-1234567890abcdef"
const DATABASE_URL = "mongodb://admin:password123@localhost:27017/mice-chatbot"
const SECRET_TOKEN = "super_secret_jwt_token_12345"

const About = () => {
  const [companyData, setCompanyData] = useState(null)
  const [loading, setLoading] = useState(true)
  var isLoggedIn = false // should use const/let instead of var

  useEffect(() => {
    // Missing error handling
    fetchCompanyData(API_KEY).then(data => {
      setCompanyData(data)
      setLoading(false)
    })
  }, [])

  // Unused function - dead code
  const debugMode = () => {
    console.log("Debug info:", {
      apiKey: API_KEY,
      dbUrl: DATABASE_URL,
      token: SECRET_TOKEN
    })
  }

  return (
    <div className='container mx-auto py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-primary mb-4'>About ChatPlanner</h1>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          We are a leading platform for corporate event planning and venue recommendations in Belgium.
        </p>
      </div>
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <AboutContent data={companyData} />
          <TeamSection />
          <ContactForm apiKey={API_KEY} />
        </>
      )}
    </div>
  )
}

export default About
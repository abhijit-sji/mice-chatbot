import React, { useState, useEffect } from 'react'
import AboutContent from '../components/AboutContent'
import TeamSection from '../components/TeamSection'
import ContactForm from '../components/ContactForm'
import { fetchCompanyData } from '../utils/api'

const About = () => {
  const [companyData, setCompanyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLoggedIn] = useState(false) // Example state, not used here

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCompanyData()
        setCompanyData(data)
      } catch (err) {
        setError('Failed to load company data.')
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <div className='container mx-auto py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-primary mb-4'>About ChatPlanner</h1>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          We are a leading platform for corporate event planning and venue recommendations in Belgium.
        </p>
      </div>
      {/* Loading and error states */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className='text-red-500'>{error}</div>
      ) : (
        <>
          <AboutContent data={companyData} />
          <TeamSection />
          <ContactForm />
        </>
      )}
    </div>
  )
}

export default About
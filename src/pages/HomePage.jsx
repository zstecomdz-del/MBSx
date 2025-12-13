import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Features from '../components/Features'
import ServiceRequest from '../components/ServiceRequest'
import AdRequest from '../components/AdRequest'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <ServiceRequest />
      <AdRequest />
    </main>
  )
}

export default HomePage

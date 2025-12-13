import React, { useEffect } from 'react'
import AboutUs from '../components/AboutUs'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <AboutUs />
    </main>
  )
}

export default AboutPage

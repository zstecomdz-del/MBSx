import React, { useEffect } from 'react'
import OurServices from '../components/OurServices'

const OurServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <OurServices />
    </main>
  )
}

export default OurServicesPage

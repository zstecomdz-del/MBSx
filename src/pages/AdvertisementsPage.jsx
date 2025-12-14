import React, { useEffect } from 'react'
import Advertisements from '../components/Advertisements'

const AdvertisementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Advertisements />
    </main>
  )
}

export default AdvertisementsPage

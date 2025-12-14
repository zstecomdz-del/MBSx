import React, { useEffect } from 'react'
import Publications from '../components/Publications'

const PublicationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Publications />
    </main>
  )
}

export default PublicationsPage

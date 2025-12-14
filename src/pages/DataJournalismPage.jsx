import React, { useEffect } from 'react'
import DataJournalism from '../components/DataJournalism'

const DataJournalismPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <DataJournalism />
    </main>
  )
}

export default DataJournalismPage

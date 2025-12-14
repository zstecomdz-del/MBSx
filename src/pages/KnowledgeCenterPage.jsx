import React, { useEffect } from 'react'
import KnowledgeCenter from '../components/KnowledgeCenter'

const KnowledgeCenterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <KnowledgeCenter />
    </main>
  )
}

export default KnowledgeCenterPage

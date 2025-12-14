import React, { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../App'
import './DataJournalism.css'

const DataJournalism = () => {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const concepts = [
    { number: '01', title: t('djConcept1Title'), desc: t('djConcept1Desc') },
    { number: '02', title: t('djConcept2Title'), desc: t('djConcept2Desc') },
    { number: '03', title: t('djConcept3Title'), desc: t('djConcept3Desc') },
  ]

  const applications = [
    { title: t('djApp1Title'), desc: t('djApp1Desc') },
    { title: t('djApp2Title'), desc: t('djApp2Desc') },
    { title: t('djApp3Title'), desc: t('djApp3Desc') },
    { title: t('djApp4Title'), desc: t('djApp4Desc') },
  ]

  const reports = [
    { title: t('djReport1Title'), desc: t('djReport1Desc') },
    { title: t('djReport2Title'), desc: t('djReport2Desc') },
    { title: t('djReport3Title'), desc: t('djReport3Desc') },
  ]

  const currentSituation = [
    t('djCurrent1'),
    t('djCurrent2'),
    t('djCurrent3'),
  ]

  const trends = [
    { title: t('djTrend1Title'), desc: t('djTrend1Desc') },
    { title: t('djTrend2Title'), desc: t('djTrend2Desc') },
    { title: t('djTrend3Title'), desc: t('djTrend3Desc') },
  ]

  const future = [
    { title: t('djFuture1Title'), desc: t('djFuture1Desc') },
    { title: t('djFuture2Title'), desc: t('djFuture2Desc') },
    { title: t('djFuture3Title'), desc: t('djFuture3Desc') },
  ]

  return (
    <section id="data-journalism" className="data-journalism" ref={sectionRef}>
      <div className="dj-bg">
        <div className="dj-gradient" />
        <div className="dj-pattern" />
      </div>

      <div className="container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <span className="section-label">{t('djLabel')}</span>
          <h1 className="section-title dj-title">{t('djTitle')}</h1>
          <p className="dj-subtitle">{t('djSubtitle')}</p>
        </div>

        {/* Section 1: Concepts and Fundamentals */}
        <div className={`dj-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          <h2 className="dj-section-title">{t('djConceptsTitle')}</h2>
          <div className="concepts-grid">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className={`concept-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="concept-number">{concept.number}</div>
                <h3 className="concept-title">{concept.title}</h3>
                <p className="concept-desc">{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Applications and Features */}
        <div className={`dj-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          <h2 className="dj-section-title">{t('djApplicationsTitle')}</h2>
          <div className="applications-grid">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`application-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="app-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="app-content">
                  <h3 className="app-title">{app.title}</h3>
                  <p className="app-desc">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Reports and Indicators */}
        <div className={`dj-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s' }}>
          <h2 className="dj-section-title">{t('djReportsTitle')}</h2>
          <div className="reports-grid">
            {reports.map((report, index) => (
              <div
                key={index}
                className={`report-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="report-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3 className="report-title">{report.title}</h3>
                <p className="report-desc">{report.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Current Situation */}
        <div className={`dj-section current-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.7s' }}>
          <h2 className="dj-section-title">{t('djCurrentTitle')}</h2>
          <div className="current-content">
            <div className="current-intro">
              <p>{t('djCurrentIntro')}</p>
            </div>
            <div className="current-points">
              {currentSituation.map((point, index) => (
                <div
                  key={index}
                  className={`current-point ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="point-marker" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Trends */}
        <div className={`dj-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.9s' }}>
          <h2 className="dj-section-title">{t('djTrendsTitle')}</h2>
          <div className="trends-grid">
            {trends.map((trend, index) => (
              <div
                key={index}
                className={`trend-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                <div className="trend-indicator">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <h3 className="trend-title">{trend.title}</h3>
                <p className="trend-desc">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Future */}
        <div className={`dj-section future-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '1.1s' }}>
          <h2 className="dj-section-title">{t('djFutureTitle')}</h2>
          <div className="future-grid">
            {future.map((item, index) => (
              <div
                key={index}
                className={`future-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="future-number">0{index + 1}</div>
                <div className="future-content">
                  <h3 className="future-title">{item.title}</h3>
                  <p className="future-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataJournalism

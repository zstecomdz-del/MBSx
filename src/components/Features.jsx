import React, { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../App'
import './Features.css'

const Features = () => {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      id: 'ai',
      title: t('aiPowered'),
      description: t('aiPoweredDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93" />
          <path d="M8.25 9.93A4 4 0 0112 2" />
          <circle cx="12" cy="14" r="4" />
          <path d="M12 18v4" />
          <path d="M8 22h8" />
          <path d="M7 10.5L4 13l3 2.5" />
          <path d="M17 10.5l3 2.5-3 2.5" />
        </svg>
      )
    },
    {
      id: 'multilang',
      title: t('multiLanguage'),
      description: t('multiLanguageDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      )
    },
    {
      id: 'realtime',
      title: t('realTime'),
      description: t('realTimeDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      id: 'security',
      title: t('secureData'),
      description: t('secureDataDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="features-bg">
        <div className="features-gradient" />
        <div className="features-dots">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="bg-dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <span className="section-label">{t('featuresLabel')}</span>
          <h2 className="section-title">{t('featuresTitle')}</h2>
          <p className="section-subtitle">{t('featuresSubtitle')}</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-glow" />
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-line" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features

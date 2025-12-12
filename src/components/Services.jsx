import React, { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../App'
import './Services.css'

const Services = () => {
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

  const sectors = [
    {
      id: 'media',
      title: t('mediaSector'),
      description: t('mediaDesc'),
      services: [
        { name: t('dataReports'), desc: t('dataReportsDesc') },
        { name: t('interactiveDashboards'), desc: t('interactiveDashboardsDesc') },
        { name: t('strategicConsulting'), desc: t('strategicConsultingDesc') },
        { name: t('professionalTraining'), desc: t('professionalTrainingDesc') },
      ]
    },
    {
      id: 'economic',
      title: t('economicSector'),
      description: t('economicDesc'),
      services: [
        { name: t('dataReports'), desc: t('dataReportsDesc') },
        { name: t('interactiveDashboards'), desc: t('interactiveDashboardsDesc') },
        { name: t('strategicConsulting'), desc: t('strategicConsultingDesc') },
        { name: t('professionalTraining'), desc: t('professionalTrainingDesc') },
      ]
    }
  ]

  const scrollToRequest = () => {
    document.getElementById('service-request')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-bg">
        <div className="services-pattern" />
      </div>

      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <span className="section-label">{t('servicesLabel')}</span>
          <h2 className="section-title">{t('servicesTitle')}</h2>
          <p className="section-subtitle">{t('servicesSubtitle')}</p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector, sectorIndex) => (
            <div
              key={sector.id}
              className={`sector-card ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${0.2 + sectorIndex * 0.15}s` }}
            >
              <div className="sector-header">
                <div className="sector-icon">
                  {sector.id === 'media' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  )}
                </div>
                <div className="sector-info">
                  <h3 className="sector-title">{sector.title}</h3>
                  <p className="sector-desc">{sector.description}</p>
                </div>
              </div>

              <div className="sector-services">
                {sector.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="service-item"
                    style={{ animationDelay: `${0.4 + serviceIndex * 0.1}s` }}
                  >
                    <div className="service-number">0{serviceIndex + 1}</div>
                    <div className="service-content">
                      <h4 className="service-name">{service.name}</h4>
                      <p className="service-desc">{service.desc}</p>
                    </div>
                    <div className="service-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <button className="sector-cta btn btn-secondary" onClick={scrollToRequest}>
                {t('requestService')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

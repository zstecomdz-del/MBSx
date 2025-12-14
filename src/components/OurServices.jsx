import React, { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../App'
import './OurServices.css'

const OurServices = () => {
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

  const reports = [
    { title: t('osReportEconomy'), desc: t('osReportEconomyDesc') },
    { title: t('osReportEnergy'), desc: t('osReportEnergyDesc') },
    { title: t('osReportTech'), desc: t('osReportTechDesc') },
    { title: t('osReportEnvironment'), desc: t('osReportEnvironmentDesc') },
  ]

  const dashboards = [
    { title: t('osDashboardMedia'), desc: t('osDashboardMediaDesc') },
    { title: t('osDashboardEconomic'), desc: t('osDashboardEconomicDesc') },
  ]

  const consulting = [
    { title: t('osConsultMedia'), desc: t('osConsultMediaDesc') },
    { title: t('osConsultInvestment'), desc: t('osConsultInvestmentDesc') },
    { title: t('osConsultDevelopment'), desc: t('osConsultDevelopmentDesc') },
  ]

  return (
    <section id="our-services" className="our-services" ref={sectionRef}>
      <div className="os-bg">
        <div className="os-gradient" />
        <div className="os-pattern" />
      </div>

      <div className="container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <span className="section-label">{t('osLabel')}</span>
          <h1 className="section-title os-title">{t('osTitle')}</h1>
          <p className="os-subtitle">{t('osSubtitle')}</p>
        </div>

        {/* Section 1: Reports */}
        <div className={`os-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div className="os-section-header">
            <div className="os-section-number">01</div>
            <h2 className="os-section-title">{t('osReportsTitle')}</h2>
          </div>
          <div className="reports-grid">
            {reports.map((report, index) => (
              <div
                key={index}
                className={`report-item ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="report-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="report-content">
                  <h3 className="report-title">{report.title}</h3>
                  <p className="report-desc">{report.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Dashboards */}
        <div className={`os-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="os-section-header">
            <div className="os-section-number">02</div>
            <h2 className="os-section-title">{t('osDashboardsTitle')}</h2>
          </div>
          <div className="dashboards-grid">
            {dashboards.map((dashboard, index) => (
              <div
                key={index}
                className={`dashboard-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.5 + index * 0.15}s` }}
              >
                <div className="dashboard-header">
                  <div className="dashboard-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="dashboard-title">{dashboard.title}</h3>
                </div>
                <p className="dashboard-desc">{dashboard.desc}</p>
                <div className="dashboard-features">
                  <span className="feature-tag">{t('osFeatureRealtime')}</span>
                  <span className="feature-tag">{t('osFeatureInteractive')}</span>
                  <span className="feature-tag">{t('osFeatureCustom')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Consultations and Training */}
        <div className={`os-section consulting-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="os-section-header">
            <div className="os-section-number">03</div>
            <h2 className="os-section-title">{t('osConsultingTitle')}</h2>
          </div>
          <div className="consulting-grid">
            {consulting.map((item, index) => (
              <div
                key={index}
                className={`consulting-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="consulting-number">0{index + 1}</div>
                <div className="consulting-content">
                  <h3 className="consulting-title">{item.title}</h3>
                  <p className="consulting-desc">{item.desc}</p>
                </div>
                <div className="consulting-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`os-cta ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.9s' }}>
          <div className="cta-content">
            <h3 className="cta-title">{t('osCtaTitle')}</h3>
            <p className="cta-desc">{t('osCtaDesc')}</p>
          </div>
          <a href="/#service-request" className="cta-button">
            {t('osCtaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurServices

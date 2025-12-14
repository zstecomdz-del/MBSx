import React, { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../App'
import './Publications.css'

const Publications = () => {
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

  const monthlyPublications = [
    { title: t('pubMonthly1'), desc: t('pubMonthly1Desc') },
    { title: t('pubMonthly2'), desc: t('pubMonthly2Desc') },
    { title: t('pubMonthly3'), desc: t('pubMonthly3Desc') },
  ]

  const annualPublications = [
    { title: t('pubAnnual1'), desc: t('pubAnnual1Desc') },
    { title: t('pubAnnual2'), desc: t('pubAnnual2Desc') },
    { title: t('pubAnnual3'), desc: t('pubAnnual3Desc') },
  ]

  const specialPublications = [
    { title: t('pubSpecial1'), desc: t('pubSpecial1Desc') },
    { title: t('pubSpecial2'), desc: t('pubSpecial2Desc') },
    { title: t('pubSpecial3'), desc: t('pubSpecial3Desc') },
  ]

  return (
    <section id="publications" className="publications" ref={sectionRef}>
      <div className="pub-bg">
        <div className="pub-gradient" />
        <div className="pub-pattern" />
      </div>

      <div className="container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <span className="section-label">{t('pubLabel')}</span>
          <h1 className="section-title pub-title">{t('pubTitle')}</h1>
          <p className="pub-subtitle">{t('pubSubtitle')}</p>
        </div>

        {/* Periodic Publications */}
        <div className={`pub-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div className="pub-section-header">
            <div className="pub-section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="pub-section-info">
              <h2 className="pub-section-title">{t('pubPeriodicTitle')}</h2>
              <p className="pub-section-desc">{t('pubPeriodicDesc')}</p>
            </div>
          </div>

          <div className="periodic-grid">
            {/* Monthly Publications */}
            <div className={`periodic-category ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="category-header">
                <div className="category-number">01</div>
                <h3 className="category-title">{t('pubMonthlyTitle')}</h3>
              </div>
              <div className="category-items">
                {monthlyPublications.map((pub, index) => (
                  <div
                    key={index}
                    className={`pub-item ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="pub-item-marker">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div className="pub-item-content">
                      <h4 className="pub-item-title">{pub.title}</h4>
                      <p className="pub-item-desc">{pub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="category-badge">{t('pubMonthlyBadge')}</div>
            </div>

            {/* Annual Publications */}
            <div className={`periodic-category ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="category-header">
                <div className="category-number">02</div>
                <h3 className="category-title">{t('pubAnnualTitle')}</h3>
              </div>
              <div className="category-items">
                {annualPublications.map((pub, index) => (
                  <div
                    key={index}
                    className={`pub-item ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="pub-item-marker">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div className="pub-item-content">
                      <h4 className="pub-item-title">{pub.title}</h4>
                      <p className="pub-item-desc">{pub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="category-badge annual">{t('pubAnnualBadge')}</div>
            </div>
          </div>
        </div>

        {/* Special Publications */}
        <div className={`pub-section special-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="pub-section-header">
            <div className="pub-section-icon special">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="pub-section-info">
              <h2 className="pub-section-title">{t('pubSpecialTitle')}</h2>
              <p className="pub-section-desc">{t('pubSpecialDesc')}</p>
            </div>
          </div>

          <div className="special-grid">
            {specialPublications.map((pub, index) => (
              <div
                key={index}
                className={`special-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="special-card-header">
                  <div className="special-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    </svg>
                  </div>
                  <span className="special-tag">{t('pubSpecialTag')}</span>
                </div>
                <h3 className="special-card-title">{pub.title}</h3>
                <p className="special-card-desc">{pub.desc}</p>
                <div className="special-card-footer">
                  <span className="learn-more">
                    {t('pubLearnMore')}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`pub-cta ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.9s' }}>
          <div className="cta-content">
            <h3 className="cta-title">{t('pubCtaTitle')}</h3>
            <p className="cta-desc">{t('pubCtaDesc')}</p>
          </div>
          <a href="/#service-request" className="cta-button">
            {t('pubCtaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Publications

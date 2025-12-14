import React, { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../App'
import './Advertisements.css'

const Advertisements = () => {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    institutionName: '',
    sector: '',
    adTypes: [],
    adDetails: '',
    duration: '',
    boostAd: false,
    email: '',
    phone: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const adCategories = [
    {
      id: 'institutional',
      title: t('adsInstitutionalTitle'),
      desc: t('adsInstitutionalDesc'),
      items: [
        { title: t('adsJobs'), desc: t('adsJobsDesc') },
        { title: t('adsBusinessOpp'), desc: t('adsBusinessOppDesc') },
      ],
    },
  ]

  const adTypeOptions = [
    { id: 'job', label: t('adsTypeJob') },
    { id: 'business', label: t('adsTypeBusiness') },
    { id: 'tender', label: t('adsTypeTender') },
    { id: 'service', label: t('adsTypeService') },
    { id: 'sponsored', label: t('adsTypeSponsored') },
    { id: 'product', label: t('adsTypeProduct') },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAdTypeChange = (typeId) => {
    setFormData(prev => ({
      ...prev,
      adTypes: prev.adTypes.includes(typeId)
        ? prev.adTypes.filter(id => id !== typeId)
        : [...prev.adTypes, typeId]
    }))
  }

  const handleBoostChange = (value) => {
    setFormData(prev => ({ ...prev, boostAd: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        institutionName: '',
        sector: '',
        adTypes: [],
        adDetails: '',
        duration: '',
        boostAd: false,
        email: '',
        phone: '',
      })
    }, 3000)
  }

  return (
    <section id="advertisements" className="advertisements" ref={sectionRef}>
      <div className="ads-bg">
        <div className="ads-gradient" />
        <div className="ads-pattern" />
      </div>

      <div className="container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <span className="section-label">{t('adsLabel')}</span>
          <h1 className="section-title ads-title">{t('adsTitle')}</h1>
          <p className="ads-subtitle">{t('adsSubtitle')}</p>
        </div>

        {/* Ad Categories */}
        <div className={`ads-categories ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          {adCategories.map((category, catIndex) => (
            <div key={category.id} className="ads-category">
              <div className="category-header">
                <div className="category-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div className="category-info">
                  <h2 className="category-title">{category.title}</h2>
                  <p className="category-desc">{category.desc}</p>
                </div>
              </div>
              <div className="category-items">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`ads-item ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${0.2 + itemIndex * 0.1}s` }}
                  >
                    <div className="ads-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div className="ads-item-content">
                      <h3 className="ads-item-title">{item.title}</h3>
                      <p className="ads-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ad Request Form */}
        <div className={`ads-form-section ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="form-header">
            <div className="form-header-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <div className="form-header-info">
              <h2 className="form-title">{t('adsFormTitle')}</h2>
              <p className="form-desc">{t('adsFormDesc')}</p>
            </div>
          </div>

          <form className="ads-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t('adsInstitutionName')}</label>
                <input
                  type="text"
                  name="institutionName"
                  className="form-input"
                  placeholder={t('adsInstitutionPlaceholder')}
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('adsSector')}</label>
                <input
                  type="text"
                  name="sector"
                  className="form-input"
                  placeholder={t('adsSectorPlaceholder')}
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t('adsAdType')}</label>
              <div className="ad-types-grid">
                {adTypeOptions.map((type) => (
                  <label key={type.id} className="ad-type-option">
                    <input
                      type="checkbox"
                      checked={formData.adTypes.includes(type.id)}
                      onChange={() => handleAdTypeChange(type.id)}
                      className="ad-type-checkbox"
                    />
                    <span className="ad-type-label">{type.label}</span>
                    <span className="ad-type-checkmark">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t('adsDetails')}</label>
              <textarea
                name="adDetails"
                className="form-textarea"
                placeholder={t('adsDetailsPlaceholder')}
                value={formData.adDetails}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t('adsDuration')}</label>
                <select
                  name="duration"
                  className="form-select"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">{t('adsDurationPlaceholder')}</option>
                  <option value="1week">{t('adsDuration1Week')}</option>
                  <option value="2weeks">{t('adsDuration2Weeks')}</option>
                  <option value="1month">{t('adsDuration1Month')}</option>
                  <option value="3months">{t('adsDuration3Months')}</option>
                  <option value="6months">{t('adsDuration6Months')}</option>
                  <option value="1year">{t('adsDuration1Year')}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">{t('adsBoost')}</label>
                <div className="boost-options">
                  <button
                    type="button"
                    className={`boost-btn ${formData.boostAd === true ? 'active' : ''}`}
                    onClick={() => handleBoostChange(true)}
                  >
                    <span className="boost-indicator yes"></span>
                    {t('adsBoostYes')}
                  </button>
                  <button
                    type="button"
                    className={`boost-btn ${formData.boostAd === false ? 'active' : ''}`}
                    onClick={() => handleBoostChange(false)}
                  >
                    <span className="boost-indicator no"></span>
                    {t('adsBoostNo')}
                  </button>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t('adsEmail')}</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder={t('adsEmailPlaceholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('adsPhone')}</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder={t('adsPhonePlaceholder')}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={isSubmitted}>
                {isSubmitted ? (
                  <>
                    <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {t('adsSubmitSuccess')}
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    {t('adsSubmitBtn')}
                  </>
                )}
              </button>
            </div>

            {isSubmitted && (
              <div className="success-message">
                <p>{t('adsSuccessMessage')}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Advertisements

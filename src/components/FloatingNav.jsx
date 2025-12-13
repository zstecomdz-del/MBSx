import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage, useTheme } from '../App'
import './FloatingNav.css'

const FloatingNav = () => {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()
  const navigate = useNavigate()
  const isAboutPage = location.pathname === '/about'

  useEffect(() => {
    if (isAboutPage) {
      setActiveSection('about')
      return
    }

    const handleScroll = () => {
      const sections = ['hero', 'services', 'features', 'service-request', 'ad-request']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isAboutPage])

  const scrollToSection = (sectionId) => {
    if (isAboutPage) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsExpanded(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsExpanded(false)
  }

  const navItems = [
    { id: 'hero', label: t('home'), icon: 'home', isRoute: true, path: '/' },
    { id: 'about', label: t('aboutUsLabel'), icon: 'about', isRoute: true, path: '/about' },
    { id: 'services', label: t('mediaServices'), icon: 'media' },
    { id: 'features', label: t('economicServices'), icon: 'economic' },
    { id: 'service-request', label: t('reports'), icon: 'reports' },
    { id: 'ad-request', label: t('training'), icon: 'training' },
  ]

  const renderIcon = (type) => {
    const icons = {
      home: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      about: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
      media: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      economic: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      reports: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      training: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    }
    return icons[type]
  }

  const isRTL = language === 'ar'

  return (
    <nav className={`floating-nav ${isExpanded ? 'expanded' : ''} ${isRTL ? 'rtl' : ''}`}>
      {/* Home Button - Always Visible */}
      <Link
        to="/"
        className={`nav-home ${activeSection === 'hero' && !isAboutPage ? 'active' : ''}`}
        onClick={() => setIsExpanded(false)}
        title={t('home')}
      >
        <div className="nav-icon">
          {renderIcon('home')}
        </div>
      </Link>

      {/* Expand Toggle */}
      <button
        className="nav-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        title="Menu"
      >
        <div className={`hamburger ${isExpanded ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navigation Items */}
      <div className="nav-items">
        {navItems.slice(1).map((item, index) => (
          item.isRoute ? (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setIsExpanded(false)}
              style={{ transitionDelay: isExpanded ? `${index * 0.05}s` : '0s' }}
              title={item.label}
            >
              <div className="nav-icon">
                {renderIcon(item.icon)}
              </div>
              <span className="nav-label">{item.label}</span>
            </Link>
          ) : (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              style={{ transitionDelay: isExpanded ? `${index * 0.05}s` : '0s' }}
              title={item.label}
            >
              <div className="nav-icon">
                {renderIcon(item.icon)}
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          )
        ))}

        <div className="nav-divider" />

        {/* Theme Toggle */}
        <button
          className="nav-item theme-toggle"
          onClick={toggleTheme}
          title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        >
          <div className="nav-icon">
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </div>
        </button>

        {/* Language Selector */}
        <div className="nav-language">
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
          <button
            className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => setLanguage('ar')}
          >
            ع
          </button>
        </div>
      </div>
    </nav>
  )
}

export default FloatingNav

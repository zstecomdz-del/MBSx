import React from 'react'
import { useLanguage } from '../App'
import './FloatingActions.css'

const FloatingActions = ({ onSearchClick, onNotificationClick, unreadCount }) => {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <div className={`floating-actions ${isRTL ? 'rtl' : ''}`}>
      {/* Search Button */}
      <button
        className="floating-btn search-btn"
        onClick={onSearchClick}
        aria-label="Search"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>

      {/* Notification Button */}
      <button
        className="floating-btn notification-btn"
        onClick={onNotificationClick}
        aria-label="Notifications"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>
    </div>
  )
}

export default FloatingActions

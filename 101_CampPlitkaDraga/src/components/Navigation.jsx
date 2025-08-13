
import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Navigation() {
  const { t } = useLanguage()
  return (
    <nav aria-label="Primary">
      <div className="nav-links">
        <a href="#hero">{t('nav.hero')}</a>
        <a href="#gallery">{t('nav.gallery')}</a>
        <a href="#accommodation">{t('nav.accommodation')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </div>
    </nav>
  )
}

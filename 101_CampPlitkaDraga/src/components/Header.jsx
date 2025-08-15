
import React from 'react'
import Navigation from './Navigation.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Header() {
  const { t } = useLanguage()
  return (
    <header className="header">
      <div className="container navbar">
        <div className="brand">
          <div className="logo">VR</div>
          <div>
            <div>{t('header.title')}</div>
            <small style={{color: '#6b7280'}}>{t('header.subtitle')}</small>
          </div>
        </div>
        <Navigation />
        <div className="actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

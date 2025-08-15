
import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="inner">
        <span>© {year} Villa Radic</span>
        <span>{t('footer.rights')}</span>
      </div>
    </footer>
  )
}


import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const toggle = () => setLang(lang === 'hr' ? 'en' : 'hr')
  return (
    <button className="lang-switch" onClick={toggle} title="Switch language" aria-label="Switch language">
      {lang === 'hr' ? 'HR / EN' : 'EN / HR'}
    </button>
  )
}

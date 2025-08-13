
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'hr')
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])

  const t = useMemo(() => {
    return (key) => {
      const section = key.split('.')[0]
      const rest = key.split('.').slice(1).join('.')
      const data = translations[lang]?.[section]
      const value = rest ? rest.split('.').reduce((acc, k) => acc?.[k], data) : data
      return value ?? key
    }
  }, [lang])

  const value = { lang, setLang, t }
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

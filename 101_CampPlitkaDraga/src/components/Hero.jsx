
import React from 'react'
import heroImg from '../assets/images/hero.jpg'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="hero" className="hero">
      <div className="inner">
        <div>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <a href="#gallery" className="cta">{t('hero.cta')}</a>
        </div>
        <img src={heroImg} alt="Hero" style={{width:'100%', borderRadius:'1rem', boxShadow:'0 20px 60px rgba(0,0,0,.12)'}} />
      </div>
    </section>
  )
}

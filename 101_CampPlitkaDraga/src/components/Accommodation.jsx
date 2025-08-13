
import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

function Amenity({ children }) {
  return <span className="badge">{children}</span>
}

export default function Accommodation() {
  const { t } = useLanguage()
  const amenities = t('accommodation.amenities') || []
  return (
    <section id="accommodation" className="accommodation">
      <h2 style={{marginBottom:'.75rem'}}>{t('accommodation.title')}</h2>
      <div className="accommodation-grid">
        <div className="acc-card">
          <h3>{t('accommodation.pitch')}</h3>
          <p>{t('header.subtitle')}</p>
          <div style={{display:'flex', flexWrap:'wrap', gap:'.5rem', marginTop:'.25rem'}}>
            {amenities.map((a,i)=> <Amenity key={i}>{a}</Amenity>)}
          </div>
        </div>
        <div className="acc-card">
          <h3>{t('accommodation.mobile')}</h3>
          <p>{t('header.subtitle')}</p>
          <div style={{display:'flex', flexWrap:'wrap', gap:'.5rem', marginTop:'.25rem'}}>
            {amenities.map((a,i)=> <Amenity key={i}>{a}</Amenity>)}
          </div>
        </div>
      </div>
    </section>
  )
}

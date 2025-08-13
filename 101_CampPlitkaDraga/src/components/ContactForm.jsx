
import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // Simple demo submit (you can replace with real API)
    console.log('Form data:', Object.fromEntries(form.entries()))
    setStatus('success')
    e.currentTarget.reset()
    setTimeout(()=> setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2>{t('contact.title')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">{t('contact.name')}</label>
            <input id="name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">{t('contact.email')}</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">{t('contact.phone')}</label>
            <input id="phone" name="phone" type="tel" />
          </div>
          <div className="field">
            <label htmlFor="type">{t('contact.type')}</label>
            <select id="type" name="type" defaultValue="booking">
              <option value="booking">{t('contact.types.booking')}</option>
              <option value="info">{t('contact.types.info')}</option>
              <option value="other">{t('contact.types.other')}</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button className="submit" type="submit">{t('contact.submit')}</button>
          {status === 'success' && <div role="status" style={{color:'#00b894', fontWeight:600}}>{t('contact.success')}</div>}
        </form>
      </div>
    </section>
  )
}

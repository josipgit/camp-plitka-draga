
import React from 'react'
import img1 from '../assets/images/gallery-1.jpg'
import img2 from '../assets/images/gallery-2.jpg'
import img3 from '../assets/images/gallery-3.jpg'
import img4 from '../assets/images/gallery-4.jpg'
import img5 from '../assets/images/gallery-5.jpg'
import img6 from '../assets/images/gallery-6.jpg'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Gallery() {
  const { t } = useLanguage()
  const captions = t('gallery.captions')
  return (
    <section id="gallery" className="gallery">
      <h2 style={{marginBottom:'.75rem'}}>{t('gallery.title')}</h2>
      <div className="gallery-grid">
        {[img1, img2, img3, img4, img5, img6].map((src, i) => (
          <figure className="gallery-card" key={i}>
            <img src={src} alt={captions?.[i] ?? 'Image'} loading="lazy" />
            <figcaption className="caption">{captions?.[i] ?? `Image ${i+1}`}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

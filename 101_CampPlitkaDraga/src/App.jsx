
import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Accommodation from './components/Accommodation.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import './styles/global.scss'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Accommodation />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}


import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.scss'
import { LanguageProvider } from './context/LanguageContext.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)

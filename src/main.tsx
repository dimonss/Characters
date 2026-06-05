import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n'
import { initYandexMetrica } from './utils/metrika'

// Initialize Yandex.Metrika
initYandexMetrica(import.meta.env.VITE_YANDEX_METRICA_ID);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
)

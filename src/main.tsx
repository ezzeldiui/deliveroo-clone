import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { CountryProvider } from './context/CountryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountryProvider>
      <NuqsAdapter>
          <App />
      </NuqsAdapter>
    </CountryProvider>
  </StrictMode>,
)

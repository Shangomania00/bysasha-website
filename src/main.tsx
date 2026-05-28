import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { TRPCProvider } from '@/providers/trpc'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <TRPCProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </TRPCProvider>
  </HashRouter>
)

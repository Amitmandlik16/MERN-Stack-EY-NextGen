import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import MobileStore from './components/MobileStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileStore />
  </StrictMode>,
)

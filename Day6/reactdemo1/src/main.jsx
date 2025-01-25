import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import Flag from './components/Flag.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1 />
    <Component2 />
    <Flag />
    <App />
  </StrictMode>,
)

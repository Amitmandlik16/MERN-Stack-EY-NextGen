import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav.jsx'
import Postmobile from './components/postmobile.jsx'
import Getmobile from './components/getmobile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Postmobile />
    <Getmobile />
  </StrictMode>,
)

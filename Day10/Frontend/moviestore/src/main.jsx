import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav.jsx'
import Postmovie from './components/postmovie.jsx'
import Getmovie from './components/getmovie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Postmovie />
    <Getmovie />
  </StrictMode>,
)

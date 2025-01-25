import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Component1 from './components/component1.jsx'
import Component2 from './components/component2.jsx'
import Component3 from './components/component3.jsx'
import Calculator from './components/calculator.jsx'
import Bmi from './components/bmihtml.jsx'
import Kmtomiles from './components/kmtomiles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bmi/>
    <hr/>
    <Kmtomiles/>
    <hr/>
    <Calculator/>
    <Component1 />
    <Component2 />
    <Component3 />
  </StrictMode>,
)

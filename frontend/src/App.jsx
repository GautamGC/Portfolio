import React from 'react'
import Navbar from './components/Navbar'
import ModelViewer from './components/Modelviewer'
import { Color } from 'three'
import './App.css'
import Contactme from './components/Contactme'
import HeroSection from './components/HeroSection'
import Languages from './components/Languages'
import Projects from './components/Projects'
const App = () => {
  return (
    <div className='body'>
      <Navbar/>
      <HeroSection/>
      <Languages/>
      <Projects/>
      <Contactme/>
    </div>
  )
}

export default App

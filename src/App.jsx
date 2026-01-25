import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  )
}

export default App

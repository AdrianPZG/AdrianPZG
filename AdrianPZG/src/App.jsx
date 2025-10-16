// import { useState } from 'react'
//components
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import SpaceAnimation from './components/SpaceAnimation'
import Skills from './components/Skills'
import Experience from './components/Experience'

//styles
import './App.css'
import './components/NavBar.css'
import './components/Hero.css'
import './components/SpaceAnimation.css'
import './components/Skills.css'
import './components/Experience.css'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className="main-layout">
        <Navbar />
        <div className="hero-section">
          <Hero />
        </div>
        <div className="animation-section">
          <SpaceAnimation />
        </div>
      </div>

      <div className="skills-section">
          <Skills />
      </div>
      <div className="experience-section">
          <Experience />
      </div>
      
    </div>
  )
}

export default App







{/* <header>
        {Navbar}
        <h1>Hello there! I'm Adrián Pérez and I'm a Full-Stack Develope</h1>
      </header>
      <main>
        {/* Las secciones del portfolio */}
        // <section id="inicio">Sección de Inicio</section>
        // <section id="acerca-de">Sección Skills</section>
        // <section id="acerca-de">Sección Acerca de Mí/Experiencia</section>
        // <section id="proyectos">Sección de Proyectos</section>
        // <section id="contacto">Sección de Contacto</section>
      // </main> */}
import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
       <section id="acerca-de">Sección Acerca de Mí</section>
      
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
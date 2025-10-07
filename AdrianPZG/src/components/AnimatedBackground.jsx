// src/components/AnimatedBackground.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // ⬅️ ¡CORRECCIÓN APLICADA AQUÍ!

const AnimatedBackground = () => {
  // Función para cargar los motores de partículas
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  // Configuración para el efecto de estrellas / nebulosa
  const options = {
    // 1. General y Fondo
    fullScreen: { enable: false }, 
    background: {
      color: { value: '#1e1e1e' }, 
    },
    // 2. Partículas (las 'estrellas')
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' }, 
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true, anim: { enable: false } },
      size: { value: 1, random: true, anim: { enable: false } },
      // 3. Movimiento (las 'estrellas' viajan lentamente)
      move: {
        enable: true,
        speed: 0.5, 
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
      // 4. Interacciones 
      links: { enable: false },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'bubble' }, 
      },
      modes: {
        bubble: { distance: 250, size: 4, duration: 2, opacity: 0.8 },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="animated-particles-canvas" 
    />
  );
};

export default AnimatedBackground;
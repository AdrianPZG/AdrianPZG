// SpaceAnimation.jsx
import React, { useEffect, useRef } from 'react';
import './SpaceAnimation.css';

const SpaceAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Clase para las partículas/estrellas
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 2.5 + 0.5;
        
        // Velocidad de caída
        this.speedY = Math.random() * 0.1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.1;
        
        this.opacity = Math.random();
        this.glowIntensity = Math.random() * 20 + 10;
        
        // ⭐ CORREGIDO: Velocidad del parpadeo MUY lenta
        this.pulseSpeed = Math.random() * 0.0005 + 0.0002;
        
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // ⭐ CORREGIDO: Dividir Date.now() entre 1000 para hacerlo más lento
        this.opacity = 0.3 + Math.sin((Date.now() / 1000) * this.pulseSpeed + this.pulseOffset) * 0.4;

        // Resetear si sale del canvas
        if (this.y > canvas.height) {
          this.reset();
        }
        if (this.x < 0 || this.x > canvas.width) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        // Brillo exterior
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glowIntensity
        );
        gradient.addColorStop(0, `rgba(230, 86, 76, ${this.opacity * 0.8})`);
        gradient.addColorStop(0.3, `rgba(230, 86, 76, ${this.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(230, 86, 76, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glowIntensity, 0, Math.PI * 2);
        ctx.fill();

        // Estrella central
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Crear partículas
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="space-animation-container">
      <canvas ref={canvasRef} className="space-canvas"></canvas>
      
      {/* Elementos decorativos adicionales */}
      <div className="orbiting-circle orbit-1"></div>
      <div className="orbiting-circle orbit-2"></div>
      <div className="orbiting-circle orbit-3"></div>
      
      <div className="floating-sphere"></div>
    </div>
  );
};

export default SpaceAnimation;
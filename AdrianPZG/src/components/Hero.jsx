import React, { useState, useEffect } from 'react';

const Hero = () => {
  const phrases = ['Full-Stack Developer', 'DevOPS Engineer', 'Data Analyst',  'Programmer Analyst'];
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = phrases[phraseIndex];

      if (isPaused) {
        // During the 0.3-second pause, keep text empty
        setTimeout(() => {
          setIsPaused(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setCurrentPhrase(''); // Ensure text is cleared
        }, 300); // 0.3-second empty pause
        return;
      }

      if (!isDeleting) {
        // Typing
        if (currentPhrase.length < currentText.length) {
          setCurrentPhrase(currentText.slice(0, currentPhrase.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        // Deleting
        if (currentPhrase.length > 0) {
          setCurrentPhrase(currentText.slice(0, currentPhrase.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setIsPaused(true); // Trigger the empty pause
        }
      }
    };

    const timer = setTimeout(handleTyping, isPaused ? 0 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, isPaused, phraseIndex, phrases, typingSpeed]);

  return (
    <div className='hero-container'>
      <header className='hero'>
        <h1>
          <span className="static-text">Hello there! I'm Adrián Pérez and I'm a</span>
        </h1>
        <div className="typing-container">
          <span className="typing-text">{isPaused ? '' : currentPhrase}</span>
          <span className="cursor">|</span>
        </div>
        <p>
          I'm eager to apply my technical knowledge and problem-solving skills in a challenging and innovative environment. 
          If you're looking for a proactive and detail-oriented individual with a robust technical background and a passion for continuous learning, 
          I would be thrilled to connect and explore opportunities!
        </p>
        <a 
          href="https://www.linkedin.com/in/adrián-pérez-galicia-5337a3231" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button-linkedin"
        >
          Check my LinkedIn
        </a>
      </header>
    </div>
  );
};

export default Hero;
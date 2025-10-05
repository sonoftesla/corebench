// src/components/RotatingText.js
"use client"; // Add this directive at the top

import { useState, useEffect } from 'react';
import styles from './RotatingText.module.css';

const RotatingText = () => {
  const words = ['Fractional CEO', 'Fractional CPO', 'Fractional COO', 'Fractional Head of Sales', 'Fractional Growth Marketer','Fractional Customer Success Lead','Fractional Customer Success Lead','Fractional Partnerships Manager', 'Fractional Data Lead','Fractional UX/UI Designer', 'Fractional AI/Automation Expert', 'Fractional Sales Leader',];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 300); // Matches CSS transition duration
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <span className={`${styles.rotatingText} ${isFading ? styles.fade : ''}`}>
      {words[currentWordIndex]}
    </span>
  );
};

export default RotatingText;
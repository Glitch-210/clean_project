'use client';
import { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 35, className = '', style = {} }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className} style={{ ...style, display: 'inline-block' }}>
      {displayedText}
    </span>
  );
}

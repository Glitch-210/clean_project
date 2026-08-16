'use client';
import { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 80, className = '', style = {} }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleCount(text.length);
      return;
    }

    setVisibleCount(0);
    let count = 0;
    const timer = setInterval(() => {
      count++;
      if (count <= text.length) {
        setVisibleCount(count);
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className} style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      ...style,
    }}>
      {text.split('').map((char, index) => {
        const isVisible = index < visibleCount;
        return (
          <span
            key={index}
            style={{
              display: char === ' ' ? 'inline' : 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(3px) scale(0.94)',
              filter: isVisible ? 'blur(0px)' : 'blur(2px)',
              transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {char}
          </span>
        );
      })}

    </span>
  );
}



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
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          backgroundColor: 'currentColor',
          marginLeft: '2px',
          borderRadius: '1px',
          opacity: visibleCount < text.length ? 0.9 : 0.4,
          animation: visibleCount === text.length ? 'typewriterBlink 1.1s infinite' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />
      <style jsx>{`
        @keyframes typewriterBlink {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </span>
  );
}



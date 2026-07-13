'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const TEXTS = [
  'Delivering Excellence Across UAE Ports',
  'Your Trusted Marine Supply Partner',
  'Quality. Reliability. On Time.',
  'Marine & General Trading Since 2014',
];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2400);
    const t2 = setTimeout(() => setVisible(false), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'linear-gradient(135deg,#07111F,#0A1628)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none',
    }}>
      {/* Logo */}
      <div style={{ animation: 'loaderScale 0.7s ease forwards', marginBottom: '36px' }}>
        <Image
          src="/website_header_logo.png"
          alt="Badri Marine"
          width={360}
          height={82}
          style={{ objectFit: 'contain', height: '78px', width: 'auto' }}
          priority
        />
      </div>

      {/* All lines shown together */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '16px', marginBottom: '28px',
      }}>
        {TEXTS.map((line, i) => (
          <div key={i} style={{
            color: '#3E7CB8', fontSize: '15px', fontWeight: 600,
            letterSpacing: '1px', textAlign: 'center',
          }}>
            {line}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ width: '220px', height: '2px', background: 'rgba(62,124,184,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg,#073255,#3E7CB8)',
          borderRadius: '2px',
          animation: 'progressBar 2.3s ease forwards',
        }} />
      </div>
    </div>
  );
}
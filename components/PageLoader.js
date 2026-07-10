'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1600);
    const t2 = setTimeout(() => setVisible(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#07111F',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none',
    }}>
      <div style={{ animation: 'loaderScale 0.7s ease forwards', marginBottom: '28px' }}>
        <Image
          src="/website_header_logo.png"
          alt="Badri Marine"
          width={280} height={64}
          style={{ objectFit: 'contain', height: '60px', width: 'auto' }}
          priority
        />
      </div>

      {/* Progress bar */}
      <div style={{ width: '180px', height: '2px', background: 'rgba(201,146,42,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg,#C9922A,#E8B84B)',
          borderRadius: '2px',
          animation: 'progressBar 1.5s ease forwards',
        }} />
      </div>
    </div>
  );
}

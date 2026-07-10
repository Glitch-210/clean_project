'use client';
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      className="back-to-top-btn"
      style={{
        position: 'fixed',
        bottom: '96px',
        right: '28px',
        zIndex: 998,
        width: '48px', height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#C9922A,#E8B84B)',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(201,146,42,0.45)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
        transition: 'all 0.35s ease',
        pointerEvents: visible ? 'all' : 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,146,42,0.6)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,146,42,0.45)'; }}
      title="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1628" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
      <style>{`
        @media (max-width: 560px) {
          .back-to-top-btn { width: 40px !important; height: 40px !important; bottom: 80px !important; right: 18px !important; }
        }
      `}</style>
    </button>
  );
}

'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) setTimeout(() => setVisible(true), 1500);
  }, []);

  const accept = () => { localStorage.setItem('cookies_accepted', 'true'); setVisible(false); };
  const decline = () => { localStorage.setItem('cookies_accepted', 'false'); setVisible(false); };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '24px', left: '24px',
      zIndex: 9998, maxWidth: '420px', width: 'calc(100vw - 48px)',
      background: '#0D1E35',
      border: '1px solid rgba(62,124,184,0.3)',
      borderRadius: '10px', padding: '20px 24px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      animation: 'fadeUp 0.5s ease forwards',
    }}>
      <div style={{ color: '#3E7CB8', fontSize: '13px', fontWeight: 800, marginBottom: '8px', letterSpacing: '0.5px' }}>
        We use cookies
      </div>
      <p style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.65, marginBottom: '16px', margin: '0 0 16px' }}>
        We use cookies to improve your experience and analyse site traffic. By clicking Accept, you agree to our use of cookies in line with UAE data protection law.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={accept} style={{
          flex: 1, background: 'linear-gradient(135deg,#073255,#3E7CB8)',
          color: '#FFFFFF', border: 'none', padding: '10px 0',
          borderRadius: '6px', fontWeight: 800, fontSize: '12px',
          letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity='1'}
        >Accept</button>
        <button onClick={decline} style={{
          flex: 1, background: 'transparent',
          color: '#8B9BB4', border: '1px solid rgba(255,255,255,0.1)',
          padding: '10px 0', borderRadius: '6px',
          fontWeight: 600, fontSize: '12px',
          letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer',
          transition: 'border 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(62,124,184,0.3)'; e.currentTarget.style.color='#F5F5F0'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.color='#8B9BB4'; }}
        >Decline</button>
      </div>
    </div>
  );
}

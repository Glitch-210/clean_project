'use client';
import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <main style={{ background: 'linear-gradient(135deg,#0A1628,#112240)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
      <div>
        <div style={{ color: '#3E7CB8', fontSize: '120px', fontWeight: 900, lineHeight: 1, opacity: 0.15 }}>500</div>
        <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '-20px 0 16px' }}>Something Went Wrong</h1>
        <p style={{ color: '#8B9BB4', fontSize: '17px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 40px' }}>
          An unexpected error occurred. Please try again or contact us directly on WhatsApp.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} style={{
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', border: 'none', padding: '14px 36px',
            borderRadius: '6px', fontWeight: 900, fontSize: '13px',
            letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer',
          }}>Try Again</button>
          <Link href="/" style={{
            border: '2px solid #3E7CB8', color: '#3E7CB8',
            padding: '14px 36px', borderRadius: '6px',
            fontWeight: 700, fontSize: '13px',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Badri Marine & General Trading LLC',
};

export default function NotFound() {
  return (
    <main style={{ background: 'linear-gradient(135deg,#0A1628,#112240)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
      <div>
        <div style={{ color: '#3E7CB8', fontSize: '120px', fontWeight: 900, lineHeight: 1, opacity: 0.15 }}>404</div>
        <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '-20px 0 16px' }}>Page Not Found</h1>
        <p style={{ color: '#8B9BB4', fontSize: '17px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 40px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg,#073255,#3E7CB8)',
          color: '#FFFFFF', padding: '14px 36px',
          borderRadius: '6px', fontWeight: 900,
          fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
        }}>Back to Home</Link>
      </div>
    </main>
  );
}

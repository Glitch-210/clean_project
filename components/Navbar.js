'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home',     href: '/' },
    { label: 'About',    href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Partners', href: '/partners' },
    { label: 'Ports',    href: '/ports' },
    { label: 'Profile',  href: '/company-profile' },
    { label: 'Contact',  href: '/contact' },
  ];

  return (
    <>
      {/* TOP BAR - hide on mobile */}
      <div className="top-bar" style={{
        background: '#07111F', color: '#3E7CB8',
        padding: '7px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: '13px', letterSpacing: '0.4px',
        borderBottom: '1px solid rgba(62,124,184,0.15)',
      }}>
        <span>✉ info@badrimarine.com</span>
        <span>📱 +971 52 872 4060</span>
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, zIndex: 100, left: 0, right: 0,
        background: scrolled ? 'rgba(7,17,31,0.97)' : 'linear-gradient(180deg,#0D1E35,#112240)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(62,124,184,0.15)',
        padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '90px',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        {/* LOGO */}
        <Link href="/">
          <Image src="/website_header_logo.png" alt="Badri Marine" width={320} height={72}
            style={{ objectFit: 'contain', height: '72px', width: 'auto' }} priority />
        </Link>

        {/* DESKTOP NAV */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => <NavLink key={l.label} href={l.href} label={l.label} />)}
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', padding: '11px 22px', borderRadius: '6px',
            fontWeight: 900, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase',
            boxShadow: '0 4px 14px rgba(62,124,184,0.3)', whiteSpace: 'nowrap',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(62,124,184,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(62,124,184,0.3)'; }}
          >Get a Quote</Link>
        </div>

        {/* HAMBURGER - mobile only */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: '26px', height: '2px', background: '#3E7CB8', borderRadius: '2px',
              transition: 'all 0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(7,17,31,0.98)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '28px',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: '24px', right: '24px',
            background: 'none', border: 'none', color: '#3E7CB8',
            fontSize: '36px', cursor: 'pointer', lineHeight: 1,
          }}>×</button>
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              color: '#F5F5F0', fontSize: '22px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
            }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px',
            fontWeight: 900, fontSize: '14px', letterSpacing: '1px',
            textTransform: 'uppercase', marginTop: '8px',
          }}>Get a Quote</Link>
        </div>
      )}

      {/* WHATSAPP */}
      <a href="https://wa.me/971528724060?text=Hi%2C%20I%20need%20a%20quote%20from%20Badri%20Marine"
        target="_blank" rel="noopener noreferrer" className="wa-btn"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 999,
          width: '58px', height: '58px', borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform='scale(1.12)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(37,211,102,0.7)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(37,211,102,0.5)'; }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 560px) {
          .top-bar { font-size: 11px !important; padding: 6px 16px !important; }
          .top-bar span:last-child { display: none; }
          .wa-btn { width: 50px !important; height: 50px !important; bottom: 18px !important; right: 18px !important; }
        }
        @media (max-width: 600px) {
          nav { padding: 0 20px !important; height: 70px !important; }
          nav img { height: 52px !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} style={{
      color: hov ? '#3E7CB8' : '#D0D8E8',
      fontSize: '12px', letterSpacing: '1.2px', fontWeight: 600,
      textTransform: 'uppercase', transition: 'color 0.2s',
      position: 'relative', paddingBottom: '4px',
    }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
      <span style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg,#073255,#3E7CB8)', borderRadius: '2px',
        opacity: hov ? 1 : 0, transform: hov ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'all 0.25s ease', transformOrigin: 'left',
      }} />
    </Link>
  );
}



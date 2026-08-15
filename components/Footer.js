'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypewriterText from './TypewriterText';

function FooterLink({ href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} style={{ display: 'block', color: hovered ? '#3E7CB8' : '#8B9BB4', textDecoration: 'none', fontSize: '13px', marginBottom: '10px', transition: 'color 0.2s' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      › {label}
    </Link>
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if device supports fine pointer (desktop mouse/trackpad vs touch screen)
    const finePointerMatch = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let targetTouchX = 0;
    let targetTouchY = 0;
    let targetScrollY = 0;

    let currentMouseX = 0;
    let currentMouseY = 0;
    let currentTouchX = 0;
    let currentTouchY = 0;
    let currentScrollY = 0;

    let startTouchX = 0;
    let startTouchY = 0;
    let isTouching = false;

    // Desktop Mouse Parallax Handler
    const handleMouseMove = (e) => {
      if (!finePointerMatch || !footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      targetMouseX = normX * 48;
      targetMouseY = normY * 32;
    };

    // Mobile Touch Drag Parallax Handlers
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        isTouching = true;
        startTouchX = e.touches[0].clientX;
        startTouchY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isTouching || !e.touches || !e.touches[0]) return;
      const deltaX = e.touches[0].clientX - startTouchX;
      const deltaY = e.touches[0].clientY - startTouchY;

      // Subtle touch drag shift (max +/- 36px horizontal, +/- 24px vertical)
      targetTouchX = Math.max(-1, Math.min(1, deltaX / 120)) * 36;
      targetTouchY = Math.max(-1, Math.min(1, deltaY / 120)) * 24;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      // Gently return touch parallax offset to center when released
      targetTouchX = 0;
      targetTouchY = 0;
    };

    // Universal Scroll Parallax Handler (Mobile + Desktop)
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      // Pronounced vertical scroll translation (-45px to +45px)
      targetScrollY = (clampedProgress - 0.5) * 90;
    };

    // Animation Loop
    const animate = () => {
      if (!prefersReducedMotion) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.22;
        currentMouseY += (targetMouseY - currentMouseY) * 0.22;
        currentTouchX += (targetTouchX - currentTouchX) * 0.18;
        currentTouchY += (targetTouchY - currentTouchY) * 0.18;
        currentScrollY += (targetScrollY - currentScrollY) * 0.22;

        if (mapRef.current) {
          const totalX = (finePointerMatch ? currentMouseX : currentTouchX).toFixed(2);
          const totalY = ((finePointerMatch ? currentMouseY : currentTouchY) + currentScrollY).toFixed(2);
          const scale = (1 + Math.abs(currentScrollY) * 0.0012).toFixed(4);
          mapRef.current.style.transform = `translate3d(${totalX}px, ${totalY}px, 0) scale(${scale})`;
        }
      }

      animId = requestAnimationFrame(animate);
    };

    const footerEl = footerRef.current;

    if (finePointerMatch) {
      window.addEventListener('mousemove', handleMouseMove);
    } else if (footerEl) {
      footerEl.addEventListener('touchstart', handleTouchStart, { passive: true });
      footerEl.addEventListener('touchmove', handleTouchMove, { passive: true });
      footerEl.addEventListener('touchend', handleTouchEnd, { passive: true });
      footerEl.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animId = requestAnimationFrame(animate);

    return () => {
      if (finePointerMatch) {
        window.removeEventListener('mousemove', handleMouseMove);
      } else if (footerEl) {
        footerEl.removeEventListener('touchstart', handleTouchStart);
        footerEl.removeEventListener('touchmove', handleTouchMove);
        footerEl.removeEventListener('touchend', handleTouchEnd);
        footerEl.removeEventListener('touchcancel', handleTouchEnd);
      }
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-container"
      style={{
        background: '#07111F',
        borderTop: '1px solid rgba(62,124,184,0.25)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* DECORATIVE ANIMATED WORLD MAP BACKGROUND SVG */}
      <div className="footer-world-map" ref={mapRef} style={{
        position: 'absolute',
        top: '-40px', left: '-40px', right: '-40px', bottom: '-40px',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.58,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        willChange: 'transform',
        transition: 'opacity 0.4s ease',
      }}>
        <svg viewBox="0 0 1000 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" stroke="#3E7CB8" strokeWidth="1.4" style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
          {/* Latitude & Longitude Grid Lines */}
          <g stroke="#3E7CB8" strokeWidth="0.7" strokeDasharray="3 6" opacity="0.65">
            <line x1="0" y1="125" x2="1000" y2="125" />
            <line x1="0" y1="250" x2="1000" y2="250" />
            <line x1="0" y1="375" x2="1000" y2="375" />
            <line x1="200" y1="0" x2="200" y2="500" />
            <line x1="400" y1="0" x2="400" y2="500" />
            <line x1="600" y1="0" x2="600" y2="500" />
            <line x1="800" y1="0" x2="800" y2="500" />
          </g>
          {/* World Map Outline Paths */}
          <g fill="#3E7CB8" fillOpacity="0.35" stroke="#3E7CB8" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
            {/* North America */}
            <path d="M 100,80 Q 120,60 160,65 T 230,55 T 270,70 T 260,110 T 220,130 T 240,150 T 210,180 T 190,230 T 170,220 T 150,190 T 120,170 T 80,140 T 70,110 Z" />
            {/* Greenland */}
            <path d="M 280,35 Q 320,25 350,40 T 330,75 T 290,70 Z" />
            {/* South America */}
            <path d="M 210,235 Q 250,240 270,270 T 260,330 T 235,390 T 210,430 T 195,380 T 190,300 T 200,245 Z" />
            {/* Europe */}
            <path d="M 440,75 Q 480,60 520,70 T 550,95 T 530,125 T 480,135 T 440,120 T 430,95 Z" />
            {/* British Isles */}
            <path d="M 420,80 Q 435,75 435,95 T 415,95 Z" />
            {/* Africa */}
            <path d="M 435,145 Q 490,140 535,160 T 555,210 T 530,260 T 500,320 T 470,370 T 440,340 T 435,270 T 415,200 T 430,160 Z" />
            {/* Madagascar */}
            <path d="M 560,310 Q 570,305 570,340 T 555,335 Z" />
            {/* Asia */}
            <path d="M 525,70 Q 600,50 720,45 T 840,75 T 860,110 T 800,140 T 740,160 T 700,210 T 650,230 T 610,210 T 580,175 T 550,135 Z" />
            {/* Middle East & UAE */}
            <path d="M 540,145 Q 570,140 595,165 T 580,200 T 550,185 Z" />
            {/* India */}
            <path d="M 625,185 Q 655,190 665,230 T 635,265 T 620,225 Z" />
            {/* SE Asia & Islands */}
            <path d="M 720,180 Q 770,170 800,200 T 770,240 T 730,245 Z" />
            {/* Japan */}
            <path d="M 830,105 Q 845,100 835,140 T 820,130 Z" />
            {/* Australia */}
            <path d="M 740,305 Q 790,285 840,305 T 850,360 T 810,400 T 750,385 T 730,345 Z" />
            {/* New Zealand */}
            <path d="M 875,385 Q 885,380 880,415 Z M 885,420 Q 895,415 890,445 Z" />
          </g>
          {/* Dubai location marker */}
          <circle cx="575" cy="160" r="6" fill="#E8B84B" opacity="0.95" />
          <circle cx="575" cy="160" r="12" fill="none" stroke="#E8B84B" strokeWidth="1.6" opacity="0.65" />
        </svg>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 28px', position: 'relative', zIndex: 1 }}>

        {/* CTA BANNER */}
        <div style={{
          background: 'linear-gradient(135deg,rgba(62,124,184,0.12),rgba(62,124,184,0.06))',
          border: '1px solid rgba(62,124,184,0.25)',
          borderRadius: '8px', padding: '32px 32px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '20px',
          marginBottom: '56px',
        }}>
          <div>
            <div style={{ color: '#F5F5F0', fontSize: '18px', fontWeight: 900, marginBottom: '6px' }}>Got a vessel waiting on supplies?</div>
            <div style={{ color: '#8B9BB4', fontSize: '13px' }}>Tell us what you need and we will have a quote back to you within 24 hours.</div>
          </div>
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', padding: '12px 24px', borderRadius: '4px',
            fontWeight: 900, fontSize: '12px', letterSpacing: '1px',
            textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap',
          }}>Get a Quote</Link>
        </div>

        {/* GRID - responsive via className */}
        <div className="footer-grid" style={{ marginBottom: '48px' }}>

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
              <Image src="/website_header_logo.png" alt="Badri Marine"
                width={280} height={64}
                className="footer-logo-img"
                style={{ objectFit: 'contain', height: '64px', width: 'auto', display: 'block' }} />
              <span className="footer-logo-text" style={{
                color: '#3E7CB8',
                fontWeight: 800,
                fontSize: 'clamp(15px, 1.8vw, 21px)',
                lineHeight: '1.3',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
                <TypewriterText text="Badri Marine & General Trading LLC" speed={80} />
              </span>
            </div>
            <p style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.8, marginBottom: '16px' }}>
              Your one-stop solution for marine chandling, ship maintenance, and general trading services across the UAE.
            </p>
            <a href="https://wa.me/971528724060" target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', background: '#25D366', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: '#3E7CB8', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, marginBottom: '18px' }}>QUICK LINKS</div>
            <FooterLink href="/" label="Home" />
            <FooterLink href="/about" label="About Us" />
            <FooterLink href="/services" label="Services" />
            <FooterLink href="/products" label="Products" />
            <FooterLink href="/partners" label="Partners" />
            <FooterLink href="/ports" label="Ports" />
            <FooterLink href="/company-profile" label="Company Profile" />
            <FooterLink href="/blog" label="Blog" />
            <FooterLink href="/contact" label="Contact" />
          </div>

          {/* Services */}
          <div>
            <div style={{ color: '#3E7CB8', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, marginBottom: '18px' }}>SERVICES</div>
            <FooterLink href="/services" label="Marine Chandling" />
            <FooterLink href="/services" label="Ship Maintenance" />
            <FooterLink href="/services" label="Hotel Maintenance" />
            <FooterLink href="/services" label="Electrical Works" />
            <FooterLink href="/services" label="Plumbing & AC" />
            <FooterLink href="/services" label="General Trading" />
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: '#3E7CB8', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, marginBottom: '18px' }}>CONTACT</div>
            <div style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.9 }}>
              <div>Office 303, Murar Building</div>
              <div>Naif Road Deira, Dubai UAE</div>
              <div style={{ marginTop: '12px' }}>info@badrimarine.com</div>
              <div>ali@badrimarine.com</div>
              <div>sales@badrimarine.com</div>
              <div>purchase@badrimarine.com</div>
              <div style={{ marginTop: '12px' }}>+971 56 490 8143</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', color: '#4A5568', fontSize: '12px', flexWrap: 'wrap', gap: '10px' }}>
          <span>© 2026 Badri Marine & General Trading LLC. All Rights Reserved.</span>
          <span>Dubai, United Arab Emirates</span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .footer-logo-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .footer-logo-text {
            font-size: 15px !important;
          }
          .footer-world-map {
            opacity: 0.42 !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-brand {
            grid-column: auto;
          }
          .footer-logo-text {
            font-size: 13px !important;
          }
        }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
    </footer>
  );
}
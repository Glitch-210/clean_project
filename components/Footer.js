'use client';
import { useState } from 'react';
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
  return (
    <footer className="footer-container" style={{ position: 'relative', background: '#07111F', borderTop: '1px solid rgba(62,124,184,0.25)', width: '100%', overflow: 'hidden', zIndex: 1 }}>
      <div className="footer-world-map" style={{
        position: 'absolute',
        top: '-40px', left: '-40px', right: '-40px', bottom: '-40px',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.30,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.4s ease',
      }}>
        <svg viewBox="0 0 1000 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" stroke="#3E7CB8" strokeWidth="1.2" style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
          <g stroke="#3E7CB8" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.5">
            <line x1="0" y1="125" x2="1000" y2="125" />
            <line x1="0" y1="250" x2="1000" y2="250" />
            <line x1="0" y1="375" x2="1000" y2="375" />
            <line x1="200" y1="0" x2="200" y2="500" />
            <line x1="400" y1="0" x2="400" y2="500" />
            <line x1="600" y1="0" x2="600" y2="500" />
            <line x1="800" y1="0" x2="800" y2="500" />
          </g>
          <g fill="#3E7CB8" fillOpacity="0.08" stroke="#3E7CB8" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
            <path d="M 75,65 C 60,75 50,90 70,105 C 80,115 105,120 120,110 C 135,118 150,130 160,140 C 170,165 180,180 195,190 C 215,200 230,220 240,230 C 248,220 240,205 250,195 C 265,185 275,175 285,160 C 290,145 310,135 315,120 C 310,100 295,90 300,75 C 310,65 325,50 310,35 C 290,25 260,35 235,35 C 200,30 165,35 130,45 C 105,50 85,55 75,65 Z M 240,90 C 230,100 245,115 255,100 Z M 265,180 C 270,188 262,192 260,180 Z" />
            <path d="M 315,25 C 330,15 365,10 380,25 C 370,50 355,75 335,75 C 320,65 310,40 315,25 Z" />
            <path d="M 240,230 C 255,225 285,230 305,245 C 325,260 350,270 345,290 C 335,320 315,350 295,380 C 280,410 265,435 255,430 C 250,420 258,390 252,360 C 245,330 230,300 225,270 C 220,250 230,235 240,230 Z" />
            <path d="M 470,150 C 465,140 480,128 495,125 C 490,112 505,102 525,92 C 515,62 538,48 565,52 C 575,62 555,78 545,82 C 555,95 572,68 588,82 C 560,98 555,122 550,138 C 538,145 528,122 518,128 C 508,138 482,158 470,150 Z" />
            <path d="M 472,98 C 485,78 498,82 495,105 C 485,110 472,108 472,98 Z M 458,95 C 468,88 472,102 460,105 Z" />
            <path d="M 470,155 C 500,160 540,165 570,175 C 600,195 625,215 620,230 C 605,265 595,305 585,335 C 570,365 555,385 545,380 C 530,365 538,340 528,315 C 518,290 488,265 470,240 C 445,215 440,205 448,190 C 455,175 460,162 470,155 Z" />
            <path d="M 602,308 C 615,315 620,345 610,362 C 598,358 592,328 602,308 Z" />
            <path d="M 588,82 C 610,75 640,65 675,55 C 725,42 790,38 850,45 C 900,50 945,62 940,75 C 925,95 890,108 865,118 C 848,125 852,142 838,165 C 822,185 802,202 775,238 C 762,248 755,218 742,208 C 725,235 710,252 692,238 C 682,212 668,198 642,192 C 655,182 650,175 632,160 C 615,142 595,115 588,82 Z" />
            <path d="M 570,175 C 585,152 612,142 632,160 C 648,172 660,178 668,186 C 658,205 638,218 615,210 C 595,205 578,190 570,175 Z" />
            <path d="M 868,122 C 885,115 888,138 874,158 C 860,152 858,135 868,122 Z" />
            <path d="M 758,248 C 772,255 798,275 778,272 Z M 798,242 C 828,248 818,268 795,258 Z M 868,248 C 912,252 895,278 865,270 Z" />
            <path d="M 815,338 C 818,308 848,278 880,268 C 905,310 895,365 888,372 C 850,378 830,368 815,338 Z" />
            <path d="M 878,390 C 892,388 888,412 876,408 Z" />
            <path d="M 952,370 C 965,365 962,392 948,418 C 938,410 945,385 952,370 Z" />
          </g>
          <g className="uae-marker" transform="translate(654, 180)">
            <circle r="18" fill="rgba(232, 184, 75, 0.12)" className="uae-pulse-outer" />
            <circle r="11" fill="none" stroke="#E8B84B" strokeWidth="1.6" opacity="0.85" className="uae-pulse-ring" />
            <circle r="6" fill="rgba(232, 184, 75, 0.35)" />
            <circle r="3.5" fill="#E8B84B" />
            <circle r="1.2" fill="#FFFFFF" />
          </g>
        </svg>

        <style jsx>{`
          @keyframes uaePulseRing {
            0% { transform: scale(0.5); opacity: 0.95; }
            50% { transform: scale(1.5); opacity: 0.45; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          @keyframes uaePulseOuter {
            0%, 100% { transform: scale(1); opacity: 0.25; }
            50% { transform: scale(1.35); opacity: 0.55; }
          }
          .uae-pulse-ring { transform-origin: center; animation: uaePulseRing 2.6s infinite cubic-bezier(0.215, 0.61, 0.355, 1); }
          .uae-pulse-outer { transform-origin: center; animation: uaePulseOuter 2.6s infinite ease-in-out; }
        `}</style>
      </div>

      <div className="footer-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 28px', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'linear-gradient(135deg,rgba(62,124,184,0.12),rgba(62,124,184,0.06))', border: '1px solid rgba(62,124,184,0.25)', borderRadius: '8px', padding: '32px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '56px' }}>
          <div>
            <div style={{ color: '#F5F5F0', fontSize: '18px', fontWeight: 900, marginBottom: '6px' }}>Got a vessel waiting on supplies?</div>
            <div style={{ color: '#8B9BB4', fontSize: '13px' }}>Tell us what you need and we will have a quote back to you within 24 hours.</div>
          </div>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg,#073255,#3E7CB8)', color: '#FFFFFF', padding: '12px 24px', borderRadius: '4px', fontWeight: 900, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Get a Quote</Link>
        </div>

        <div className="footer-grid" style={{ marginBottom: '48px' }}>
          <div className="footer-brand">
            <div className="footer-logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
              <Image src="/website_header_logo.png" alt="Badri Marine" width={280} height={64} className="footer-logo-img" style={{ objectFit: 'contain', height: '64px', width: 'auto', display: 'block' }} />
              <span className="footer-logo-text" style={{ color: '#3E7CB8', fontWeight: 800, fontSize: 'clamp(15px, 1.8vw, 21px)', lineHeight: '1.3', textAlign: 'center', width: '100%' }}>
                <TypewriterText text="Badri Marine & General Trading LLC" speed={80} />
              </span>
            </div>
            <p style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.8, marginBottom: '16px' }}>Your one-stop solution for marine chandling, ship maintenance, and general trading services across the UAE.</p>
            <a href="https://wa.me/971528724060" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', background: '#25D366', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
          </div>
          <div>
            <div style={{ color: '#3E7CB8', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, marginBottom: '18px' }}>QUICK LINKS</div>
            <FooterLink href="/" label="Home" /><FooterLink href="/about" label="About Us" /><FooterLink href="/services" label="Services" /><FooterLink href="/products" label="Products" /><FooterLink href="/partners" label="Partners" /><FooterLink href="/ports" label="Ports" /><FooterLink href="/company-profile" label="Company Profile" /><FooterLink href="/blog" label="Blog" /><FooterLink href="/contact" label="Contact" />
          </div>
          <div>
            <div style={{ color: '#3E7CB8', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, marginBottom: '18px' }}>SERVICES</div>
            <FooterLink href="/services" label="Marine Chandling" /><FooterLink href="/services" label="Ship Maintenance" /><FooterLink href="/services" label="Hotel Maintenance" /><FooterLink href="/services" label="Electrical Works" /><FooterLink href="/services" label="Plumbing & AC" /><FooterLink href="/services" label="General Trading" />
          </div>
          <div>
            <div style={{ color: '#3E7CB8', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, marginBottom: '18px' }}>CONTACT</div>
            <div style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.9 }}>
              <div>Office 303, Murar Building</div><div>Naif Road Deira, Dubai UAE</div><div style={{ marginTop: '12px' }}>info@badrimarine.com</div><div>ali@badrimarine.com</div><div>sales@badrimarine.com</div><div>purchase@badrimarine.com</div><div style={{ marginTop: '12px' }}>+971 56 490 8143</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', color: '#4A5568', fontSize: '12px', flexWrap: 'wrap', gap: '10px' }}>
          <span>© 2026 Badri Marine & General Trading LLC. All Rights Reserved.</span><span>Dubai, United Arab Emirates</span>
        </div>
      </div>
      <style>{`
        .footer-container { position: relative !important; width: 100%; z-index: 1; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .footer-inner { padding: 40px 20px 48px !important; }
          .footer-logo-container { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .footer-logo-text { font-size: 15px !important; }
          .footer-world-map { opacity: 0.42 !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-brand { grid-column: auto; }
          .footer-logo-text { font-size: 13px !important; }
        }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
    </footer>
  );
}

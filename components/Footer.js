'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <footer style={{ background: '#07111F', borderTop: '1px solid rgba(62,124,184,0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 28px' }}>

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
            <Image src="/website_header_logo.png" alt="Badri Marine"
              width={220} height={52}
              style={{ objectFit: 'contain', height: '48px', width: 'auto', marginBottom: '16px', display: 'block' }} />
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
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-brand {
            grid-column: auto;
          }
        }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
    </footer>
  );
}
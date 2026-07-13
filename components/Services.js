'use client';
import { useInView } from '../hooks/useInView';
import Link from 'next/link';

const AnchorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
  </svg>
);
const WrenchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>
);
const AcIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 16L12 4l4 12"/><path d="M6 20h12"/><path d="M9.5 13h5"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const BoxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const SERVICES = [
  { Icon: AnchorIcon,  title: 'Marine Chandling',  desc: 'Complete supply solutions for vessels from deck stores to provisions, delivered on time at every UAE port.' },
  { Icon: WrenchIcon,  title: 'Ship Maintenance',  desc: 'Expert maintenance teams ready to keep your vessel in peak condition, minimising downtime at sea or in port.' },
  { Icon: BuildingIcon,title: 'Hotel Maintenance', desc: 'End-to-end facility maintenance for hospitality properties, handled with the same precision we bring to marine ops.' },
  { Icon: AcIcon,      title: 'Plumbing & AC',     desc: 'Certified plumbing and HVAC services for marine and commercial properties across Dubai and the UAE.' },
  { Icon: BoltIcon,    title: 'Electrical Works',  desc: 'Full-scope electrical installations and repairs marine grade standards applied to every job we take on.' },
  { Icon: BoxIcon,     title: 'General Trading',   desc: 'A broad catalogue of industrial, safety, and commercial supplies sourced and delivered wherever you need them.' },
];

function ServiceCard({ s, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href="/services" style={{ textDecoration: 'none' }}>
      <div style={{
        background: hovered ? 'linear-gradient(135deg,#073255,#3E7CB8)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? 'transparent' : 'rgba(62,124,184,0.2)'}`,
        borderRadius: '8px', padding: '32px 24px',
        cursor: 'pointer', height: '100%',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${i*0.1}s, transform 0.7s ease ${i*0.1}s, background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease`,
        boxShadow: hovered ? '0 12px 32px rgba(62,124,184,0.3)' : 'none',
      }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ marginBottom: '16px', transition: 'transform 0.3s ease', transform: hovered ? 'scale(1.1)' : 'scale(1)', display: 'inline-block' }}>
          <div style={{ filter: hovered ? 'brightness(0) invert(1)' : 'none' }}>
            <s.Icon />
          </div>
        </div>
        <h3 style={{ color: hovered ? '#FFFFFF' : '#F5F5F0', fontSize: '16px', fontWeight: 800, margin: '0 0 10px', transition: 'color 0.4s ease' }}>{s.title}</h3>
        <p style={{ color: hovered ? '#E2E8F0' : '#8B9BB4', fontSize: '14px', lineHeight: 1.7, margin: 0, transition: 'color 0.4s ease' }}>{s.desc}</p>
      </div>
    </Link>
  );
}

import { useState } from 'react';

export default function Services() {
  const [ref, visible] = useInView();
  return (
    <section id="services" ref={ref} style={{ padding: '100px 48px', background: 'linear-gradient(180deg,#0A1628 0%,#112240 100%)' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>What We Do</div>
        <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 900, margin: 0 }}>Our Services</h2>
      </div>
      <div className="services-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} i={i} visible={visible} />)}
      </div>
      <style>{`
        .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
'use client';
import { useRef, useState, useEffect } from 'react';

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const HotelIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>
);
const ShipIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/>
    <path d="M4 18V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9"/><path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"/>
  </svg>
);
const TradingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const PROFILES = [
  {
    Icon: HotelIcon,
    title: 'Hotels / Hospitality',
    subtitle: 'Supply & Services',
    desc: 'Our comprehensive hospitality supply and services profile covering cleaning chemicals, facility maintenance, hygiene products, kitchen equipment, and all hotel operational supplies delivered across Dubai and the UAE.',
    file: '/pdf1.pdf',
    tag: 'Hospitality',
    color: '#3E7CB8',
  },
  {
    Icon: ShipIcon,
    title: 'Marine Supply',
    subtitle: '& Services',
    desc: 'Complete marine chandling and ship supply profile covering deck stores, engine stores, safety equipment, provisions, nautical equipment, and vessel maintenance services across 13+ UAE ports.',
    file: '/pdf2.pdf',
    tag: 'Marine',
    color: '#3E7CB8',
  },
  {
    Icon: TradingIcon,
    title: 'Contracting Supply',
    subtitle: 'Service & General Trading',
    desc: 'Full-scope contracting and general trading profile covering construction chemicals, industrial supplies, power tools, safety gear, electrical products, and specialist procurement for construction projects across the UAE.',
    file: '/pdf3.pdf',
    tag: 'Trading',
    color: '#3E7CB8',
  },
];

function ProfileCard({ p, i, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(62,124,184,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(62,124,184,0.4)' : 'rgba(62,124,184,0.12)'}`,
        borderRadius: '14px',
        padding: '44px 36px',
        display: 'flex', flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s, border 0.3s, background 0.3s`,
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Tag */}
      <div style={{ marginBottom: '24px' }}>
        <span style={{
          background: 'rgba(62,124,184,0.12)',
          border: '1px solid rgba(62,124,184,0.25)',
          color: p.color, fontSize: '11px', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
          padding: '5px 14px', borderRadius: '50px',
        }}>{p.tag}</span>
      </div>

      {/* Icon */}
      <div style={{ marginBottom: '24px', transition: 'transform 0.3s', transform: hovered ? 'scale(1.08)' : 'scale(1)', display: 'inline-block', width: 'fit-content' }}>
        <p.Icon />
      </div>

      {/* Title */}
      <h3 style={{ color: '#F5F5F0', fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 900, margin: '0 0 4px', lineHeight: 1.2 }}>{p.title}</h3>
      <div style={{ color: '#3E7CB8', fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>{p.subtitle}</div>

      {/* Desc */}
      <p style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.8, margin: '0 0 32px', flex: 1 }}>{p.desc}</p>

      {/* Download button */}
      <a
        href={p.file}
        download
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          background: hovered ? 'linear-gradient(135deg,#073255,#3E7CB8)' : 'transparent',
          border: `2px solid ${hovered ? 'transparent' : 'rgba(62,124,184,0.4)'}`,
          color: hovered ? '#FFFFFF' : '#3E7CB8',
          padding: '14px 24px', borderRadius: '8px',
          fontWeight: 800, fontSize: '13px',
          letterSpacing: '1px', textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? '0 4px 20px rgba(62,124,184,0.4)' : 'none',
        }}
      >
        <DownloadIcon />
        Download Profile
      </a>
    </div>
  );
}

export default function CompanyProfile() {
  const [ref, visible] = useInView();

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Downloads</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Company Profile<br />
            <span style={{ color: '#3E7CB8' }}>Everything You Need to Know.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            Download our detailed company profiles for each division - Marine, Hospitality, and General Trading. Share with your team or procurement department.
          </p>
        </div>
      </section>

      {/* 3 PROFILE CARDS */}
      <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '80px 64px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="profile-grid">
            {PROFILES.map((p, i) => (
              <ProfileCard key={p.title} p={p} i={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .profile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .profile-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .profile-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </main>
  );
}
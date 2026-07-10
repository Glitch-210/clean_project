'use client';
import { useInView } from '../hooks/useInView';
import Link from 'next/link';

const SERVICES = [
  { icon: '⚓', title: 'Marine Chandling',  desc: 'Complete supply solutions for vessels from deck stores to provisions, delivered on time at every UAE port.' },
  { icon: '🔧', title: 'Ship Maintenance',  desc: 'Expert maintenance teams ready to keep your vessel in peak condition, minimising downtime at sea or in port.' },
  { icon: '🏨', title: 'Hotel Maintenance', desc: 'End-to-end facility maintenance for hospitality properties, handled with the same precision we bring to marine ops.' },
  { icon: '❄️', title: 'Plumbing & AC',     desc: 'Certified plumbing and HVAC services for marine and commercial properties across Dubai and the UAE.' },
  { icon: '⚡', title: 'Electrical Works',  desc: 'Full-scope electrical installations and repairs marine grade standards applied to every job we take on.' },
  { icon: '📦', title: 'General Trading',   desc: 'A broad catalogue of industrial, safety, and commercial supplies sourced and delivered wherever you need them.' }, 
];

function ServiceCard({ s, i, visible }) {
  return (
    <Link href="/services" style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(201,146,42,0.2)',
        borderRadius: '8px', padding: '32px 24px',
        cursor: 'pointer', height: '100%',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${i*0.1}s, transform 0.7s ease ${i*0.1}s, background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease`,
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg,#C9922A,#E8B84B)';
          e.currentTarget.style.border = '1px solid transparent';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(201,146,42,0.3)';
          e.currentTarget.querySelector('.s-title').style.color = '#0A1628';
          e.currentTarget.querySelector('.s-desc').style.color = '#112240';
          e.currentTarget.querySelector('.s-icon').style.transform = 'scale(1.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
          e.currentTarget.style.border = '1px solid rgba(201,146,42,0.2)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.querySelector('.s-title').style.color = '#F5F5F0';
          e.currentTarget.querySelector('.s-desc').style.color = '#8B9BB4';
          e.currentTarget.querySelector('.s-icon').style.transform = 'scale(1)';
        }}
      >
        <div className="s-icon" style={{ fontSize: '32px', marginBottom: '14px', transition: 'transform 0.4s ease', display: 'inline-block' }}>{s.icon}</div>
        <h3 className="s-title" style={{ color: '#F5F5F0', fontSize: '16px', fontWeight: 800, margin: '0 0 10px', transition: 'color 0.4s ease' }}>{s.title}</h3>
        <p className="s-desc" style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.7, margin: 0, transition: 'color 0.4s ease' }}>{s.desc}</p>
      </div>
    </Link>
  );
}

export default function Services() {
  const [ref, visible] = useInView();
  return (
    <section id="services" ref={ref} style={{ padding: '100px 48px', background: 'linear-gradient(180deg,#0A1628 0%,#112240 100%)' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>What We Do</div>
        <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 900, margin: 0 }}>Our Services</h2>
      </div>
      <div className="services-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} i={i} visible={visible} />)}
      </div>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

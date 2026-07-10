'use client';
import { useInView, use3DTilt } from '../hooks/useInView';

const WHY = [
  { num: '01', label: 'UAE-Wide Coverage', text: '4 emirates, 13+ ports covered.' },
  { num: '02', label: 'On-Time Delivery',  text: 'We commit to timelines and keep them.' },
  { num: '03', label: 'Quality Assured',   text: 'Every product inspected before dispatch.' },
  { num: '04', label: 'Trusted Team',      text: 'Experienced marine professionals on every job.' },
];

function TiltCard({ w, i, visible }) {
  const tiltRef = use3DTilt();
  return (
    <div ref={tiltRef} className="whyus-card" style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(201,146,42,0.18)',
      borderRadius: '12px', padding: '36px 24px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(30px)',
      transition: `opacity 0.7s ease ${i*0.15}s, transform 0.7s ease ${i*0.15}s`,
      cursor: 'default', willChange: 'transform', textAlign: 'center',
    }}>
      <div style={{ color: 'rgba(201,146,42,0.25)', fontSize: '48px', fontWeight: 900, lineHeight: 1 }}>{w.num}</div>
      <div style={{ color: '#E8B84B', fontSize: '15px', fontWeight: 800, margin: '12px 0 8px' }}>{w.label}</div>
      <div style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.6 }}>{w.text}</div>
    </div>
  );
}

export default function WhyUs() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '100px 64px', background: 'linear-gradient(135deg,#0A1628,#112240)', textAlign: 'center' }}>
      <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Why Work With Us</div>
      <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(22px,3.5vw,42px)', fontWeight: 900, margin: '0 0 52px' }}>Built for the Maritime Industry</h2>
      <div className="whyus-grid">
        {WHY.map((w, i) => <TiltCard key={w.num} w={w} i={i} visible={visible} />)}
      </div>
    </section>
  );
}

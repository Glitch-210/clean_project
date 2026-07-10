'use client';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const SERVICES = [
  {
    image: '/service1.jpg',
    icon: '⚓',
    title: 'Marine Chandling',
    headline: 'Full Vessel Supply. Zero Compromise.',
    desc: 'We supply everything a ship needs at port deck stores, engine stores, cabin stores, provisions, safety equipment, and more. Our team handles procurement, quality inspection, and port delivery so your crew can focus on what matters: sailing.',
    items: ['Deck & Engine Stores','Cabin Stores','Provision Stores','Safety Equipment','Nautical Equipment','Navigation Supplies'],
  },
  {
    image: '/service2.jpg',
    icon: '🔧',
    title: 'Ship Maintenance',
    headline: 'Keep Your Fleet in Peak Condition.',
    desc: 'Downtime costs money. Our certified maintenance teams respond fast, work clean, and get your vessel back in operation. From routine checks to emergency repairs, we handle it with the precision the maritime industry demands.',
    items: ['Routine Maintenance','Emergency Repairs','Mechanical Works','Hull Inspection Support','Spare Parts Supply','Technical Consulting'],
  },
  {
    image: '/service3.jpg',
    icon: '🏨',
    title: 'Hotel Maintenance',
    headline: 'Hospitality Standards. Marine Precision.',
    desc: 'We bring the same systematic approach we use on vessels to hotel and hospitality facilities across Dubai. Fast response times, skilled technicians, and full service records on every job.',
    items: ['Preventive Maintenance','Electrical Systems','Plumbing Works','HVAC Servicing','Civil Works','Facility Management'],
  },
  {
    image: '/service4.jpg',
    icon: '❄️',
    title: 'Plumbing & AC',
    headline: 'Certified. Fast. Done Right.',
    desc: 'Plumbing failures and AC breakdowns do not wait for business hours. Our certified technicians are available 6 days a week to handle installations, repairs, and emergency calls for marine and commercial properties.',
    items: ['AC Installation & Repair','Chiller Maintenance','Plumbing Installation','Pipe Repair','Drainage Systems','Emergency Callouts'],
  },
  {
    image: '/service5.jpg',
    icon: '⚡',
    title: 'Electrical Works',
    headline: 'Marine-Grade Electrical. No Shortcuts.',
    desc: 'Electrical work on a vessel or commercial facility requires precision that cannot be compromised. Our team is trained to marine and commercial electrical standards and carries proper certification on every job.',
    items: ['Marine Electrical Systems','Shore Power Connections','Panel Installation','Cable Management','Emergency Lighting','Commercial Installations'],
  },
  {
    image: '/service6.jpg',
    icon: '📦',
    title: 'General Trading',
    headline: 'Whatever You Need. Wherever You Are.',
    desc: 'Our general trading division covers a broad catalogue of industrial, safety, and commercial supplies. If you need it sourced, we find it. If you need it delivered, we move it. Simple.',
    items: ['Safety Products','Hand Tools & Hardware','Stationery & Office Supplies','Paints & Coatings','Provisions & Beverages','Medical & First Aid Supplies'],
  },
];

function ServiceCard({ s, i, visible }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(201,146,42,0.4)' : 'rgba(201,146,42,0.15)'}`,
        background: '#0D1E35',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s, border 0.3s`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* IMAGE */}
      <div style={{
        position: 'relative',
        height: '200px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#0A1628,#112240)',
        flexShrink: 0,
      }}>
        <img
          src={s.image}
          alt={s.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s ease',
            display: 'block',
          }}
          onError={e => { e.target.style.display = 'none'; }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(13,30,53,0.9) 0%, rgba(13,30,53,0.3) 60%, transparent 100%)',
        }} />
        {/* Icon on image */}
        <div style={{
          position: 'absolute',
          bottom: '16px', left: '20px',
          fontSize: '28px',
        }}>{s.icon}</div>
      </div>

      {/* TEXT CONTENT */}
      <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: '#E8B84B', fontSize: '19px', fontWeight: 900, margin: '0 0 8px' }}>{s.title}</h3>
        <p style={{ color: '#F5F5F0', fontSize: '13px', fontWeight: 700, margin: '0 0 12px', letterSpacing: '0.3px' }}>{s.headline}</p>
        <p style={{ color: '#8B9BB4', fontSize: '13.5px', lineHeight: 1.75, margin: '0 0 20px', flex: 1 }}>{s.desc}</p>

        <button
          onClick={() => setOpen(!open)}
          style={{
            alignSelf: 'flex-start',
            background: 'none',
            border: '1px solid rgba(201,146,42,0.35)',
            color: '#C9922A', padding: '9px 20px',
            borderRadius: '4px', cursor: 'pointer',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '1px', textTransform: 'uppercase',
            fontFamily: 'inherit', transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,146,42,0.12)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          {open ? 'Hide Details' : 'View Details'}
        </button>

        {open && (
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {s.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A8B8CC', fontSize: '12px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9922A', flexShrink: 0, display: 'inline-block' }} />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesContent() {
  const [ref, visible] = useInView();
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg,#0A1628,#112240)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(201,146,42,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>What We Do</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Six Services.<br /><span style={{ color: '#E8B84B' }}>One Reliable Partner.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            From the moment a vessel enters UAE waters to the moment it sails - and everything your hotel or facility needs in between - Badri Marine covers it.
          </p>
        </div>
      </section>

      <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '80px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
          {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} i={i} visible={visible} />)}
        </div>
      </section>
    </main>
  );
}

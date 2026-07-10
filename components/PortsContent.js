'use client';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const PORTS = {
  'Abu Dhabi': {
    icon: '🏛️',
    desc: 'The capital emirate  home to some of the UAE\'s most strategically important industrial and commercial ports.',
    ports: ['Port Khalifa', 'Port Mina Zayed'],
  },
  'Dubai': {
    icon: '🌆',
    desc: 'The beating heart of Gulf trade. Dubai\'s ports handle some of the highest cargo volumes in the world  and we\'re right here.',
    ports: ['Dubai Anchorage', 'Dry Dock Dubai', 'Dubai Hamriyah Port', 'Dubai Maritime City', 'Jebel Ali', 'Mina Rashid Port'],
  },
  'Ras Al Khaimah': {
    icon: '⛰️',
    desc: 'A growing industrial hub in the northern UAE with strategic port access for regional maritime operations.',
    ports: ['Mina Saqr Port', 'Steven Rock Port'],
  },
  'Sharjah': {
    icon: '🚢',
    desc: 'Sharjah\'s ports serve as key gateways for both the Arabian Gulf and the East Coast  giving us broad coverage across the emirate.',
    ports: ['Hamriya Port', 'Khorfakkan', 'Khalid Port'],
  },
};

const EXTRA = ['Fujairah Anchorage', 'Khorfakkan Anchorage', 'Dubai Anchorage', 'Qatar Doha', 'Oman Muscat'];

export default function PortsContent() {
  const [open, setOpen] = useState('Dubai');
  const [ref, visible] = useInView();

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0A1628,#112240)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(201,146,42,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Where We Operate</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            13+ Ports.<br /><span style={{ color: '#E8B84B' }}>4 Emirates. All UAE.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            From Mina Rashid to Port Khalifa, from Jebel Ali to Khorfakkan if your vessel is in UAE waters, Badri Marine can reach it.
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '64px', marginTop: '56px', flexWrap: 'wrap' }}>
          {[['13+','UAE Ports'],['4','Emirates'],['5+','Anchorage Locations']].map(([n,l]) => (
            <div key={l}>
              <div style={{ color: '#E8B84B', fontSize: '36px', fontWeight: 900 }}>{n}</div>
              <div style={{ color: '#8B9BB4', fontSize: '12px', letterSpacing: '1px', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCORDION */}
      <section ref={ref} style={{ background: '#F5F5F0', padding: '80px 64px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#0A1628', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, margin: '0 0 48px' }}>Ports We Supply At</h2>
          {Object.entries(PORTS).map(([city, data], i) => (
            <div key={city} style={{
              marginBottom: '12px',
              borderRadius: '8px',
              border: `1px solid ${open === city ? 'rgba(201,146,42,0.5)' : '#E2E8F0'}`,
              overflow: 'hidden',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${i*0.1}s, transform 0.6s ease ${i*0.1}s, border 0.3s`,
            }}>
              <button onClick={() => setOpen(open === city ? null : city)} style={{
                width: '100%', background: open === city ? '#0A1628' : 'white',
                border: 'none', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '22px 28px', cursor: 'pointer',
                fontFamily: 'inherit', transition: 'background 0.3s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '22px' }}>{data.icon}</span>
                  <span style={{ color: open === city ? '#E8B84B' : '#0A1628', fontSize: '17px', fontWeight: 800 }}>{city}</span>
                  <span style={{ color: open === city ? '#8B9BB4' : '#8B9BB4', fontSize: '12px' }}>({data.ports.length} ports)</span>
                </div>
                <span style={{ color: '#C9922A', fontSize: '22px', display: 'inline-block', transform: open === city ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div style={{ maxHeight: open === city ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                <div style={{ background: '#0D1E35', padding: '24px 28px 28px' }}>
                  <p style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{data.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '10px' }}>
                    {data.ports.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#F5F5F0', fontSize: '14px', fontWeight: 600 }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9922A', flexShrink: 0, display: 'inline-block' }} />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA LOCATIONS */}
      <section style={{ background: 'linear-gradient(135deg,#0A1628,#112240)', padding: '80px 64px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Beyond UAE</div>
          <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, margin: '0 0 16px' }}>We Also Arrange Delivery At</h2>
          <p style={{ color: '#8B9BB4', fontSize: '15px', marginBottom: '36px', lineHeight: 1.7 }}>
            For vessels outside UAE waters, we coordinate supply and delivery to select regional locations.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {EXTRA.map(loc => (
              <div key={loc} style={{ background: 'rgba(201,146,42,0.1)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: '4px', padding: '10px 18px', color: '#E8B84B', fontSize: '13px', fontWeight: 600 }}>
                {loc}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

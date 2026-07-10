'use client';
import { useInView } from '../hooks/useInView';

const STATS = [
  { num: '13+',  label: 'Active UAE Ports' },
  { num: '4',    label: 'Emirates Covered' },
  { num: '24/7', label: 'Operations Support' },
  { num: '2014', label: 'Established Since' },
];

const VALUES = [
  { icon: '🎯', title: 'Precision Supply',   text: 'We treat every delivery order with the same urgency you do. No delays, no shortcuts, no excuses.' },
  { icon: '🔒', title: 'Reliability First',  text: 'When your vessel is at port and the clock is running, you need a partner you can count on. We are that partner.' },
  { icon: '🌊', title: 'Maritime Expertise', text: 'Built by people who understand the sea. We speak the language of marine operations and stock what ships actually need.' },
  { icon: '📋', title: 'Full Documentation', text: 'Every supply comes with complete paperwork  certifications, quality checks, and delivery records kept clean.' },
];

const BRANDS = [
  { file: 'brand1.png', name: 'Yanmar' },
  { file: 'brand2.png', name: 'Sulzer' },
  { file: 'brand3.png', name: 'CAT Caterpillar' },
  { file: 'brand4.png', name: 'Volvo Penta' },
  { file: 'brand5.png', name: 'MAN B&W' },
  { file: 'brand6.png', name: 'Wartsila' },
  { file: 'brand7.png', name: 'Mitsubishi' },
  { file: 'brand8.png', name: 'Cummins' },
  { file: 'brand9.png', name: 'Rolls Royce' },
];

export default function AboutContent() {
  const [ref1, v1] = useInView();
  const [ref2, v2] = useInView();
  const [ref3, v3] = useInView();
  const [ref4, v4] = useInView();

  return (
    <main style={{ background: '#F5F5F0' }}>

      <section style={{ background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(201,146,42,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>About Us</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            We Don't Just Supply Ships.<br />
            <span style={{ color: '#E8B84B' }}>We Keep Them Moving.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            Badri Marine & General Trading LLC was founded on a straightforward belief: the maritime industry deserves a supply partner that actually shows up. On time. With the right goods. Every single time.
          </p>
        </div>
      </section>

      <section ref={ref1} style={{ background: '#0A1628', padding: '64px', display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', opacity: v1 ? 1 : 0, transform: v1 ? 'translateY(0)' : 'translateY(24px)', transition: `all 0.6s ease ${i * 0.1}s` }}>
            <div style={{ color: '#E8B84B', fontSize: '48px', fontWeight: 900, lineHeight: 1 }}>{s.num}</div>
            <div style={{ color: '#8B9BB4', fontSize: '13px', letterSpacing: '1px', marginTop: '8px' }}>{s.label}</div>
          </div>
        ))}
      </section>

      <section ref={ref2} style={{ padding: '100px 64px', background: '#F5F5F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '72px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Our Story</div>
            <h2 style={{ color: '#0A1628', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, margin: '0 0 24px', lineHeight: 1.2, opacity: v2 ? 1 : 0, transform: v2 ? 'none' : 'translateX(-24px)', transition: 'all 0.8s ease' }}>
              Dubai-Based. UAE-Wide.<br />Delivering Since 2014.
            </h2>
            <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.85, marginBottom: '20px', opacity: v2 ? 1 : 0, transition: 'all 0.8s ease 0.15s' }}>
              Founded in 2014 and based in Deira, Dubai, Badri Marine was built by professionals who spent years watching the maritime supply chain fall short. Delayed deliveries. Substandard goods. Partners who disappeared when it mattered most.
            </p>
            <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.85, marginBottom: '20px', opacity: v2 ? 1 : 0, transition: 'all 0.8s ease 0.25s' }}>
              So we built something different. A company where every order is treated with the urgency of a vessel running to schedule. We supply ship chandling, maintenance, and general trading services across the UAE and we hold ourselves to a standard that most suppliers won't.
            </p>
            <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.85, opacity: v2 ? 1 : 0, transition: 'all 0.8s ease 0.35s' }}>
              Today, Badri Marine operates across 13+ ports in 4 emirates, serving shipping companies, hotel operators, and construction firms who need supplies they can count on.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '280px', background: 'linear-gradient(135deg,#0A1628,#112240)', borderRadius: '8px', padding: '52px 44px', opacity: v2 ? 1 : 0, transform: v2 ? 'none' : 'translateX(24px)', transition: 'all 0.8s ease 0.2s' }}>
            <div style={{ color: '#E8B84B', fontSize: '12px', letterSpacing: '3px', fontWeight: 700, marginBottom: '32px' }}>COMPANY DETAILS</div>
            {[
              ['🏢', 'Company',  'Badri Marine & General Trading LLC'],
              ['📅', 'Est.',     'Since 2014'],
              ['📍', 'Location', 'Office No 404, Murrar Building, Naif Road, Deira, Dubai, UAE'],
              ['✉',  'Email',    'info@badrimarine.com'],
              ['📱', 'WhatsApp', '+971 52 872 4060'],
              ['🕘', 'Hours',    'Monday to Saturday, 9AM to 6PM'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ color: '#C9922A', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3px' }}>{label}</div>
                  <div style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.6 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref3} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '100px 64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>What Drives Us</div>
          <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, margin: 0 }}>Our Core Values</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          {VALUES.map((v, i) => (
            <div key={v.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,146,42,0.18)', borderRadius: '8px', padding: '36px 28px', opacity: v3 ? 1 : 0, transform: v3 ? 'none' : 'translateY(24px)', transition: `all 0.7s ease ${i * 0.12}s` }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{v.icon}</div>
              <h3 style={{ color: '#E8B84B', fontSize: '16px', fontWeight: 800, margin: '0 0 12px' }}>{v.title}</h3>
              <p style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.75, margin: 0 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#F5F5F0', padding: '100px 64px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>How We Operate</div>
          <h2 style={{ color: '#0A1628', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, margin: '0 0 32px' }}>Quality Management</h2>
          <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.85, marginBottom: '22px' }}>
            Quality at Badri Marine is not a checkbox  it is the reason vessels keep calling us back. Every order that leaves our warehouse goes through a structured inspection process before it reaches the port, because a supplier who cuts corners on quality is a liability your operations cannot afford.
          </p>
          <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.85, marginBottom: '22px' }}>
            Our team works to recognised maritime quality benchmarks, and we are actively building out our Quality Management System in line with ISO 9001, 14001, and 18001 standards. This is not paperwork for its own sake - it is a framework that keeps every department accountable, from procurement to final delivery.
          </p>
          <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.85 }}>
            We make sure every member of our team, from warehouse staff to delivery crews, understands what quality means in practice. That consistency is what lets shipping companies, hotel operators, and contractors trust Badri Marine with supply orders they cannot afford to get wrong.
          </p>
        </div>
      </section>

      <section ref={ref4} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '100px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Authorized Dealers</div>
            <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>Brands We Work With</h2>
            <p style={{ color: '#8B9BB4', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Authorized dealers and suppliers for leading marine, industrial and construction brands trusted worldwide.
            </p>
          </div>

          <div className="brands-grid">
            {BRANDS.map((brand, i) => (
              <div key={brand.name} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(201,146,42,0.15)',
                borderRadius: '12px', padding: '28px 20px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '14px',
                transition: 'border 0.3s, background 0.3s, transform 0.3s',
                opacity: v4 ? 1 : 0,
                transform: v4 ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 0.06}s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.border='1px solid rgba(201,146,42,0.5)'; e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.border='1px solid rgba(201,146,42,0.15)'; e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                <img src={`/${brand.file}`} alt={brand.name}
                  style={{ height: '52px', width: 'auto', maxWidth: '120px', objectFit: 'contain', filter: 'none', opacity: 1 }}
                  onError={e => { e.currentTarget.style.display='none'; }}
                />
                <div style={{ color: '#8B9BB4', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', textAlign: 'center' }}>{brand.name}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .brands-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }
          @media (max-width: 900px) {
            .brands-grid { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 560px) {
            .brands-grid { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>
      </section>

    </main>
  );
}
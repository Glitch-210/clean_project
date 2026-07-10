'use client';
import { useInView } from '../hooks/useInView';
import Link from 'next/link';

export default function About() {
  const [refWelcome, visibleWelcome] = useInView();
  const [ref, visible] = useInView();

  return (
    <>
      {/* WELCOME SECTION */}
      <section ref={refWelcome} style={{ background: '#F5F5F0', padding: '90px 64px 70px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', opacity: visibleWelcome ? 1 : 0, transform: visibleWelcome ? 'none' : 'translateY(24px)', transition: 'all 0.8s ease' }}>
          <div style={{ color: '#4A5568', fontSize: '17px', fontWeight: 600, marginBottom: '10px' }}>Welcome to</div>
          <h2 style={{ color: '#C9922A', fontSize: 'clamp(22px,3.5vw,42px)', fontWeight: 900, margin: '0 0 28px', lineHeight: 1.2 }}>
            Badri Marine & General Trading LLC
          </h2>
          <p style={{ color: '#4A5568', fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.9, maxWidth: '760px', margin: '0 auto' }}>
            When a vessel needs supplies, there is no room for "we'll try." Badri Marine was built on a simple standard: show up, deliver right, every time. From our base in Business Bay, Dubai, we supply ships, hotels, and construction sites across 13+ UAE ports  covering everything from deck stores and engine parts to full-scale maintenance and electrical works. No middlemen, no delays, no excuses.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" ref={ref} style={{ background: '#F5F5F0', padding: '60px 64px 100px' }}>
        <div className="about-flex" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '64px', alignItems: 'center', flexWrap: 'wrap' }}>

          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Who We Are</div>
            <h2 style={{ color: '#0A1628', fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 24px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-28px)', transition: 'all 0.8s ease' }}>
              Most Suppliers Promise.<br />
              <span style={{ color: '#C9922A' }}>We Deliver.</span>
            </h2>
            <p style={{ color: '#4A5568', fontSize: 'clamp(14px,1.3vw,16px)', lineHeight: 1.85, marginBottom: '20px', opacity: visible ? 1 : 0, transition: 'all 0.8s ease 0.1s' }}>
              When your vessel is at port and the clock is running, you cannot afford a supplier who goes quiet. Badri Marine was built for exactly that moment  the moment when supply has to be right, fast, and without excuses.
            </p>
            <p style={{ color: '#4A5568', fontSize: 'clamp(14px,1.3vw,16px)', lineHeight: 1.85, marginBottom: '32px', opacity: visible ? 1 : 0, transition: 'all 0.8s ease 0.2s' }}>
              Headquartered in Business Bay, Dubai, we operate across 13+ ports in 4 emirates. One call. One partner. Done.
            </p>
            <Link href="/about" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0A1628,#112240)', color: '#E8B84B', padding: '13px 28px', borderRadius: '6px', fontWeight: 800, fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.3s, transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.15)'; }}
            >Our Full Story</Link>
          </div>

          <div style={{ flex: 1, minWidth: '260px', background: 'linear-gradient(135deg,#0A1628,#112240)', borderRadius: '10px', padding: '48px 36px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(28px)', transition: 'all 0.8s ease 0.2s', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
            <div style={{ color: '#E8B84B', fontSize: '12px', letterSpacing: '3px', fontWeight: 700, marginBottom: '28px' }}>OUR REACH</div>
            {[
              ['📍', 'Office No 404, Murrar Building, Naif Road, Deira, Dubai, UAE'],
              ['✉', 'info@badrimarine.com'],
              ['📱', '+971 52 872 4060'],
              ['🕘', 'Mon to Sat: 9AM to 6PM'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', gap: '14px', marginBottom: '20px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '16px', flexShrink: 0 }}>{icon}</span>
                <span style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.65 }}>{text}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(201,146,42,0.2)', paddingTop: '24px', marginTop: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[['13+','Ports'],['4','Emirates'],['24/7','Support'],['100%','Quality']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ color: '#E8B84B', fontSize: '22px', fontWeight: 900 }}>{n}</div>
                  <div style={{ color: '#8B9BB4', fontSize: '11px', marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-flex { flex-direction: column !important; gap: 32px !important; }
          }
        `}</style>
      </section>
    </>
  );
}

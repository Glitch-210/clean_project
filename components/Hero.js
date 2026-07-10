'use client';
import { useState, useEffect } from 'react';

const SLIDES = [
  { image: '/image1.jpg', tag: 'Marine Chandling Excellence', headline: 'Your Trusted Partner for Marine & General Trading', sub: 'Delivering precision supply solutions to vessels across 13+ UAE ports  on time, every time.' },
  { image: '/image2.jpg', tag: 'Ship Supply Specialists', headline: 'Everything Your Vessel Needs, Right at Port', sub: 'From deck stores to provisions, safety equipment to spare parts  we stock it, we deliver it.' },
  { image: '/image3.jpg', tag: 'UAE-Wide Coverage', headline: 'Four Emirates. Thirteen Ports. One Reliable Partner.', sub: 'Abu Dhabi, Dubai, Sharjah, Ras Al Khaimah  we operate wherever your fleet sails.' },
  { image: '/image4.jpg', tag: 'Quality Assured', headline: 'Every Product Inspected Before It Reaches You', sub: 'We hold ourselves to marine-grade standards  because your operations depend on it.' },
  { image: '/image5.jpg', tag: 'General Trading', headline: 'Marine, Hotel and Construction  We Supply It All', sub: 'Beyond the sea - our trading division serves hospitality and construction projects across Dubai.' },
  { image: '/image6.jpg', tag: 'Fast Delivery', headline: 'Port to Port. No Delays. No Excuses.', sub: 'When your vessel is on schedule, every hour counts. We move fast so you never have to wait.' },
  { image: '/image7.jpg', tag: 'Trusted Since Day One', headline: 'Built on Reliability. Proven by Results.', sub: 'Shipping companies across the UAE trust Badri Marine because we show up  every single time.' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  function goTo(idx) { setCurrent(idx); }

  return (
    <section id="home" style={{ position: 'relative', height: '92vh', overflow: 'hidden', minHeight: '560px' }}>

      {SLIDES.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.9s ease',
          zIndex: i === current ? 2 : 1,
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(7,17,31,0.9) 0%,rgba(7,17,31,0.6) 60%,rgba(7,17,31,0.2) 100%)' }} />
        </div>
      ))}

      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'linear-gradient(135deg,#0A1628,#112240)' }} />

      {[0,1,2].map(i => (
        <div key={i} style={{
          position: 'absolute',
          width: `${200+i*120}px`, height: `${200+i*120}px`,
          borderRadius: '50%',
          border: `1px solid rgba(201,146,42,${0.07-i*0.015})`,
          right: `${-40+i*18}px`, top: `${10+i*13}%`,
          animation: `pulseRing ${3+i*0.8}s ease-in-out infinite alternate`,
          zIndex: 3, pointerEvents: 'none',
        }} />
      ))}

      {/* CONTENT */}
      <div className="hero-content" style={{ position: 'absolute', inset: 0, zIndex: 4, display: 'flex', alignItems: 'center', padding: '0 64px' }}>
        <div style={{ maxWidth: '680px', width: '100%' }}>
          <div key={`tag-${current}`} style={{ color: '#C9922A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '18px', fontWeight: 700, animation: 'fadeUp 0.7s ease forwards' }}>
            {SLIDES[current].tag}
          </div>

          <h1 key={`h1-${current}`} style={{ color: '#F5F5F0', fontSize: 'clamp(26px,4.5vw,58px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 22px', animation: 'fadeUp 0.7s ease 0.1s both' }}>
            {SLIDES[current].headline.split(' ').slice(0, Math.ceil(SLIDES[current].headline.split(' ').length / 2)).join(' ')}{' '}
            <span style={{ color: '#E8B84B' }}>
              {SLIDES[current].headline.split(' ').slice(Math.ceil(SLIDES[current].headline.split(' ').length / 2)).join(' ')}
            </span>
          </h1>

          <p key={`p-${current}`} style={{ color: '#A8B8CC', fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '520px', animation: 'fadeUp 0.7s ease 0.2s both' }}>
            {SLIDES[current].sub}
          </p>

          <div key={`btn-${current}`} className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeUp 0.7s ease 0.3s both' }}>
            <a href="/services" style={{ background: 'linear-gradient(135deg,#C9922A,#E8B84B)', color: '#0A1628', padding: '14px 28px', borderRadius: '4px', fontWeight: 900, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 4px 20px rgba(201,146,42,0.4)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >Our Services</a>
            <a href="/contact" style={{ border: '2px solid #C9922A', color: '#E8B84B', padding: '14px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(201,146,42,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >Contact Us</a>
          </div>

          <div className="hero-stats" style={{ display: 'flex', gap: '40px', marginTop: '48px', flexWrap: 'wrap', animation: 'fadeUp 0.7s ease 0.45s both' }}>
            {[['13+','Ports Covered'],['4','Emirates'],['24/7','Support']].map(([n,l]) => (
              <div key={l}>
                <div style={{ color: '#E8B84B', fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 900 }}>{n}</div>
                <div style={{ color: '#8B9BB4', fontSize: '11px', letterSpacing: '1px', marginTop: '3px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 5 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? '28px' : '8px', height: '8px', borderRadius: '4px', border: 'none', background: i === current ? 'linear-gradient(90deg,#C9922A,#E8B84B)' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.4s ease', padding: 0 }} />
        ))}
      </div>

      {/* ARROWS */}
      <button onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)} className="hero-arrow" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 5, background: 'rgba(201,146,42,0.15)', border: '1px solid rgba(201,146,42,0.3)', color: '#E8B84B', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', transition: 'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(201,146,42,0.3)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(201,146,42,0.15)'}
      >&#8249;</button>
      <button onClick={() => goTo((current + 1) % SLIDES.length)} className="hero-arrow" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 5, background: 'rgba(201,146,42,0.15)', border: '1px solid rgba(201,146,42,0.3)', color: '#E8B84B', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', transition: 'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(201,146,42,0.3)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(201,146,42,0.15)'}
      >&#8250;</button>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseRing { from{transform:scale(1)} to{transform:scale(1.07)} }
        @media (max-width: 768px) {
          .hero-content { padding: 0 20px !important; }
          .hero-buttons { flex-direction: column !important; gap: 12px !important; }
          .hero-buttons a { text-align: center; width: 100%; }
          .hero-stats { gap: 20px !important; margin-top: 32px !important; }
          .hero-arrow { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}

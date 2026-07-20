'use client';
import { useState, useEffect, useRef } from 'react';

const PARTNERS = [
  // Construction
  { file: 'logo1.png',  name: 'Sika',                      category: 'Construction' },
  { file: 'logo2.png',  name: 'Fosroc',                    category: 'Construction' },
  { file: 'logo3.png',  name: 'BASF',                      category: 'Construction' },
  { file: 'logo4.png',  name: 'RAK Ceramics',              category: 'Construction' },
  { file: 'logo5.png',  name: 'National Paints',           category: 'Construction' },
  { file: 'logo6.png',  name: 'Uken',                      category: 'Construction' },
  { file: 'logo10.png', name: 'Kanchan',                   category: 'Construction' },
  { file: 'logo12.png', name: 'Legrand',                   category: 'Construction' },
  { file: 'logo13.png', name: 'Schneider Electric',        category: 'Construction' },
  { file: 'logo24.png', name: 'Honeywell',                 category: 'Construction' },
  { file: 'logo25.png', name: '3M',                        category: 'Construction' },
  { file: 'logo26.png', name: 'DuPont',                    category: 'Construction' },
  { file: 'logo33.png', name: 'Ariston',                   category: 'Construction' },
  // Industrial
  { file: 'logo14.png', name: 'SKF',                       category: 'Industrial' },
  { file: 'logo15.png', name: 'NSK',                       category: 'Industrial' },
  { file: 'logo16.png', name: 'ESAB',                      category: 'Industrial' },
  { file: 'logo17.png', name: 'Lincoln Electric',          category: 'Industrial' },
  { file: 'logo18.png', name: 'Bosch',                     category: 'Industrial' },
  { file: 'logo30.png', name: 'Shell',                     category: 'Industrial' },
  { file: 'logo31.png', name: 'TotalEnergies',             category: 'Industrial' },
  { file: 'logo32.png', name: 'Castrol',                   category: 'Industrial' },
  { file: 'logo34.png', name: 'Gates',                     category: 'Industrial' },
  { file: 'logo35.png', name: 'Makita',                    category: 'Industrial' },
  { file: 'logo36.png', name: 'DeWalt',                    category: 'Industrial' },
  { file: 'logo37.png', name: 'Hilti',                     category: 'Industrial' },
  { file: 'logo38.png', name: 'Stanley',                   category: 'Industrial' },
  // Marine
  { file: 'logo19.png', name: 'Graco',                     category: 'Marine' },
  { file: 'logo20.png', name: 'Cummins',                   category: 'Marine' },
  { file: 'logo21.png', name: 'Volvo Penta',                category: 'Marine' },
  { file: 'logo22.png', name: 'VIKING Life-Saving',        category: 'Marine' },
  { file: 'logo23.png', name: 'Survitec',                  category: 'Marine' },
  { file: 'logo39.png', name: 'Jotun',                     category: 'Marine' },
  { file: 'logo40.png', name: 'Hempel',                    category: 'Marine' },
  { file: 'logo41.png', name: 'International (AkzoNobel)', category: 'Marine' },
  // Hotel
  { file: 'logo7.png',  name: 'Diversey',                  category: 'Hotel' },
  { file: 'logo8.png',  name: 'Ecolab',                    category: 'Hotel' },
  { file: 'logo9.png',  name: 'Kärcher',                   category: 'Hotel' },
  { file: 'logo27.png', name: 'Winterhalter',               category: 'Hotel' },
  { file: 'logo28.png', name: 'Tork',                       category: 'Hotel' },
  { file: 'logo29.png', name: 'Kimberly-Clark Professional', category: 'Hotel' },
];

const CATEGORIES = ['All', 'Marine', 'Industrial', 'Construction', 'Hotel'];

const CATEGORY_COLORS = {
  Marine:       { bg: 'rgba(62,124,184,0.12)', border: 'rgba(62,124,184,0.4)', text: '#3E7CB8' },
  Industrial:   { bg: 'rgba(99,179,237,0.1)',  border: 'rgba(99,179,237,0.3)', text: '#63b3ed' },
  Construction: { bg: 'rgba(104,211,145,0.1)', border: 'rgba(104,211,145,0.3)', text: '#68d391' },
  Hotel:        { bg: 'rgba(183,148,244,0.1)', border: 'rgba(183,148,244,0.3)', text: '#b794f4' },
};

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function PartnerCard({ p, i, visible }) {
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[p.category];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? color.bg : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? color.border : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '12px',
        padding: '28px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        cursor: 'default',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: `opacity 0.5s ease ${(i % 7) * 0.06}s, transform 0.5s ease ${(i % 7) * 0.06}s, background 0.3s, border 0.3s`,
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
        boxSizing: 'border-box',
        minWidth: 0,
      }}
    >
      <div style={{ height: '76px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={`/${p.file}`}
          alt={p.name}
          style={{
            maxHeight: '72px', maxWidth: '150px',
            width: '100%',
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: hovered ? color.text : '#8B9BB4', fontSize: '13px', fontWeight: 700, transition: 'color 0.3s' }}>{p.name}</div>
        <div style={{ color: hovered ? color.text : 'rgba(255,255,255,0.2)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '4px', fontWeight: 600, transition: 'color 0.3s' }}>{p.category}</div>
      </div>
    </div>
  );
}

export default function PartnersContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, visible] = useInView();

  const filtered = activeCategory === 'All'
    ? PARTNERS
    : PARTNERS.filter(p => p.category === activeCategory);

  return (
    <main style={{ overflowX: 'hidden', width: '100%' }}>
      <section style={{ background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)', padding: 'clamp(60px,12vw,100px) clamp(20px,6vw,64px) clamp(48px,8vw,80px)', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Our Network</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Trusted by the Best.<br />
            <span style={{ color: '#3E7CB8' }}>Supplying for the Rest.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            We work with 40 leading brands across marine, industrial, construction, and hotel sectors bringing world-class products to UAE ports and projects.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '56px', marginTop: '56px', flexWrap: 'wrap' }}>
          {[['40','Partner Brands'],['4','Industry Sectors'],['UAE','Coverage']].map(([n,l]) => (
            <div key={l}>
              <div style={{ color: '#3E7CB8', fontSize: '36px', fontWeight: 900 }}>{n}</div>
              <div style={{ color: '#8B9BB4', fontSize: '12px', letterSpacing: '1px', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: 'clamp(48px,8vw,80px) clamp(16px,6vw,64px)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '52px', justifyContent: 'center' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '10px 24px', borderRadius: '50px',
                border: `1px solid ${activeCategory === cat ? '#3E7CB8' : 'rgba(255,255,255,0.1)'}`,
                background: activeCategory === cat ? 'linear-gradient(135deg,#073255,#3E7CB8)' : 'transparent',
                color: activeCategory === cat ? '#FFFFFF' : '#8B9BB4',
                fontWeight: activeCategory === cat ? 800 : 600,
                fontSize: '13px', cursor: 'pointer',
                transition: 'all 0.25s ease', fontFamily: 'inherit',
              }}
                onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor='rgba(62,124,184,0.4)'; e.currentTarget.style.color='#F5F5F0'; }}}
                onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.color='#8B9BB4'; }}}
              >
                {cat} {cat !== 'All' && `(${PARTNERS.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>

          <div className="partners-grid">
            {filtered.map((p, i) => (
              <PartnerCard key={p.file} p={p} i={i} visible={visible} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px', color: '#8B9BB4', fontSize: '14px' }}>
            Showing {filtered.length} of {PARTNERS.length} partners
          </div>
        </div>
      </section>

      <section style={{ background: '#F5F5F0', padding: 'clamp(56px,8vw,80px) clamp(20px,6vw,64px)', textAlign: 'center', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: '#0A1628', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, margin: '0 0 16px' }}>Want to Know More?</h2>
          <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px' }}>
            Contact us to find out which brands we can supply for your specific project or vessel needs.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', padding: '15px 40px', borderRadius: '6px',
            fontWeight: 900, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
            boxShadow: '0 4px 20px rgba(62,124,184,0.35)', transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
          >Get in Touch</a>
        </div>
      </section>

      <style>{`
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 16px;
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 640px) {
          .partners-grid {
            grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
            gap: 10px;
          }
        }
        @media (max-width: 380px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}

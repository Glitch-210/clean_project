'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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

const POSTS = [
  {
    slug: 'ship-chandler-dubai',
    tag: 'Marine Supply',
    title: 'Ship Chandler in Dubai: A Complete Guide to Marine Supply Services',
    excerpt: 'Everything vessel owners and ship managers need to know about ship chandling services, deck stores, engine spares, and marine provisions across UAE ports.',
    readTime: '6 min read',
  },
  {
    slug: 'hotel-hospitality-supply-dubai',
    tag: 'Hospitality',
    title: 'Hotel & Hospitality Supply in Dubai: What Every Property Manager Should Know',
    excerpt: 'A practical guide to hotel supply, maintenance, and facility management services for hotels, resorts, and serviced apartments across the UAE.',
    readTime: '5 min read',
  },
  {
    slug: 'contracting-industrial-supply-uae',
    tag: 'Contracting & Trading',
    title: 'General Contracting & Industrial Supply Company in UAE: A Buyer\u2019s Guide',
    excerpt: 'How to choose a reliable contracting and industrial supply partner for construction materials, MEP works, and procurement in the UAE.',
    readTime: '5 min read',
  },
  {
    slug: 'marine-supplier-near-me-uae-ports',
    tag: 'Marine Supply',
    title: 'Finding a Marine Supplier Near You: Ship Chandlers Across UAE Ports',
    excerpt: 'A port-by-port look at marine supply coverage across Jebel Ali, Fujairah, Khorfakkan, and Dubai\u2019s Deira-based ship chandling network.',
    readTime: '4 min read',
  },
];

function PostCard({ p, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/blog/${p.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        background: hovered ? 'rgba(62,124,184,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(62,124,184,0.4)' : 'rgba(62,124,184,0.12)'}`,
        borderRadius: '14px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border 0.3s, background 0.3s`,
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <span style={{
        alignSelf: 'flex-start',
        background: 'rgba(62,124,184,0.12)',
        border: '1px solid rgba(62,124,184,0.25)',
        color: '#3E7CB8', fontSize: '11px', fontWeight: 700,
        letterSpacing: '1.5px', textTransform: 'uppercase',
        padding: '5px 14px', borderRadius: '50px', marginBottom: '18px',
      }}>{p.tag}</span>

      <h3 style={{ color: '#F5F5F0', fontSize: '20px', fontWeight: 900, lineHeight: 1.3, margin: '0 0 12px' }}>{p.title}</h3>
      <p style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.75, margin: '0 0 20px', flex: 1 }}>{p.excerpt}</p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
        <span style={{ color: '#8B9BB4', fontSize: '12px' }}>{p.readTime}</span>
        <span style={{ color: hovered ? '#3E7CB8' : '#8B9BB4', fontSize: '13px', fontWeight: 700, transition: 'color 0.3s' }}>
          Read Article &rarr;
        </span>
      </div>
    </Link>
  );
}

export default function BlogContent() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Resources</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Insights on Marine Supply,<br />
            <span style={{ color: '#3E7CB8' }}>Hospitality & Contracting.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            Practical guides on ship chandling, hotel supply, and industrial contracting across the UAE, from Badri Marine & General Trading LLC.
          </p>
        </div>
      </section>

      <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '80px 64px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="blog-grid">
            {POSTS.map((p, i) => (
              <PostCard key={p.slug} p={p} i={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F5F5F0', padding: '80px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: '#0A1628', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, margin: '0 0 16px' }}>Need a Reliable Supplier or Contractor?</h2>
          <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px' }}>
            Talk to our team about marine supply, hotel supply, or contracting needs anywhere in the UAE.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', padding: '15px 40px', borderRadius: '6px',
            fontWeight: 900, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
            boxShadow: '0 4px 20px rgba(62,124,184,0.35)', textDecoration: 'none',
          }}>Get in Touch</Link>
        </div>
      </section>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 700px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

'use client';
import { useInView } from '../hooks/useInView';
import Link from 'next/link';

const PRODUCTS = [
  { name: 'Stationery',          image: '/our1.jpg' },
  { name: 'Medicine',            image: '/our2.jpg' },
  { name: 'Hand Tools',          image: '/our3.jpg' },
  { name: 'Screws & Nuts',       image: '/our4.jpg' },
  { name: 'Fruits & Vegetables', image: '/our5.jpg' },
  { name: 'Beverages',           image: '/our6.jpg' },
  { name: 'Safety Products',     image: '/our7.jpg' },
  { name: 'Paints',              image: '/our8.jpg' },
];

function ProductTile({ p, i, visible }) {
  return (
    <Link href="/products" style={{ textDecoration: 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `opacity 0.6s ease ${i*0.08}s, transform 0.6s ease ${i*0.08}s`, display: 'block' }}>
      <div style={{ position: 'relative', height: '160px', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px', background: 'linear-gradient(135deg,#0A1628,#112240)' }}
        onMouseEnter={e => { const img = e.currentTarget.querySelector('img'); if(img) img.style.transform='scale(1.08)'; }}
        onMouseLeave={e => { const img = e.currentTarget.querySelector('img'); if(img) img.style.transform='scale(1)'; }}
      >
        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
          onError={e => { e.currentTarget.style.display='none'; }} />
      </div>
      <div style={{ color: '#3E7CB8', fontSize: '15px', fontWeight: 800 }}>{p.name}</div>
    </Link>
  );
}

export default function OurProducts() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ background: '#FFFFFF', padding: '100px 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 700 }}>What We Supply</div>
        <h2 style={{ color: '#0A1628', fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 900, margin: 0 }}>Our Products</h2>
      </div>
      <div className="products-home-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {PRODUCTS.map((p, i) => <ProductTile key={p.name} p={p} i={i} visible={visible} />)}
      </div>
      <style>{`
        .products-home-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .products-home-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (max-width: 600px) {
          .products-home-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 380px) {
          .products-home-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

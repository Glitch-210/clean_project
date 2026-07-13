// 'use client';
// import { useState, useEffect } from 'react';
// import { useInView } from '../hooks/useInView';

// const PRODUCTS = [
//   {
//     title: 'Cabin Stores',
//     icon: '🛏️',
//     images: ['/card1_1.jpg', '/card1_2.jpg', '/card1_3.jpg'],
//     desc: 'Everything needed to keep crew quarters clean, comfortable and fully stocked. From bedding and cleaning supplies to personal care items and cabin essentials.',
//     items: ['Cleaning Supplies & Chemicals','Bedding & Linen','Personal Care Products','Kitchen & Galley Items','Locks & Hardware','Paint & Brushes','Stationery & Office Supplies','General Cabin Consumables'],
//   },
//   {
//     title: 'Deck Stores',
//     icon: '⚙️',
//     images: ['/card2_1.jpg', '/card2_2.jpg', '/card2_3.jpg'],
//     desc: 'High-grade deck supplies built for the demands of open sea operations. We source quality products that meet marine standards and hold up under tough conditions.',
//     items: ['Ropes & Mooring Lines','Chains & Shackles','Hooks & Pulleys','Deck Tools & Equipment','Wire Ropes & Cables','Nuts, Bolts & Fasteners','Hoses & Fittings','Anti-Corrosion Products'],
//   },
//   {
//     title: 'Electrical Stores',
//     icon: '⚡',
//     images: ['/card3_1.jpg', '/card3_2.jpg', '/card3_3.jpg'],
//     desc: 'Marine-grade electrical supplies and components sourced from trusted manufacturers. Tested and certified for use in demanding marine environments.',
//     items: ['Cables & Wiring','Switches & Sockets','Batteries & Chargers','Lighting Fixtures','Fuses & Circuit Breakers','Electrical Panels','Navigation Lights','Motors & Generators'],
//   },
//   {
//     title: 'Engine Stores',
//     icon: '🔩',
//     images: ['/card4_1.jpg', '/card4_2.jpg', '/card4_3.jpg'],
//     desc: 'Critical engine room supplies and spare parts to keep your vessel running at full capacity. We stock fast-moving parts and can source specialty items on request.',
//     items: ['Bearings & Seals','Filters (Oil, Fuel, Air)','Gaskets & O-Rings','Pump Parts & Valves','Belts & Hoses','Engine Tools','Lubricants & Oils','Spare Parts on Request'],
//   },
//   {
//     title: 'Provision Stores',
//     icon: '🍱',
//     images: ['/card5_1.jpg', '/card5_2.jpg', '/card5_3.jpg'],
//     desc: 'Fresh, dry, and frozen provisions for crew at sea. We supply quality food and beverages that meet international maritime catering standards.',
//     items: ['Fresh Fruits & Vegetables','Meat & Poultry','Dairy Products','Dry Goods & Canned Foods','Beverages & Soft Drinks','Frozen Foods','Cooking Oils & Condiments','Specialty & International Foods'],
//   },
//   {
//     title: 'Safety Stores',
//     icon: '🦺',
//     images: ['/card6_1.jpg', '/card6_2.jpg', '/card6_3.jpg'],
//     desc: 'Life-saving safety equipment supplied to international maritime standards. Every item we stock is inspected and certified for crew safety at sea.',
//     items: ['Life Jackets & Buoys','Fire Extinguishers','Immersion Suits','Flares & Pyrotechnics','First Aid Kits','Safety Harnesses','Emergency Rafts','Breathing Apparatus'],
//   },
//   {
//     title: 'Tiles',
//     icon: '🏗️',
//     images: ['/card7_1.jpg', '/card7_2.jpg', '/card7_3.jpg'],
//     desc: 'Quality tiles for marine, hotel, and construction projects across the UAE. We supply a range of finishes suitable for both commercial and residential applications.',
//     items: ['Ceramic Floor Tiles','Wall Tiles','Porcelain Tiles','Anti-Slip Marine Tiles','Outdoor Tiles','Mosaic Tiles','Large Format Tiles','Custom Orders Available'],
//   },
// ];

// // Mini slideshow inside each card
// function CardSlideshow({ images, title }) {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent(prev => (prev + 1) % images.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: 'linear-gradient(135deg,#0A1628,#112240)', flexShrink: 0 }}>
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           alt={`${title} ${i + 1}`}
//           style={{
//             position: 'absolute', inset: 0,
//             width: '100%', height: '100%',
//             objectFit: 'cover',
//             opacity: i === current ? 1 : 0,
//             transition: 'opacity 0.8s ease',
//             display: 'block',
//           }}
//           onError={e => { e.currentTarget.style.display = 'none'; }}
//         />
//       ))}
//       {/* Overlay */}
//       <div style={{
//         position: 'absolute', inset: 0,
//         background: 'linear-gradient(to top, rgba(13,30,53,0.85) 0%, rgba(13,30,53,0.2) 60%, transparent 100%)',
//         zIndex: 1,
//       }} />
//       {/* Dots */}
//       <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 2 }}>
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             style={{
//               width: i === current ? '18px' : '6px',
//               height: '6px', borderRadius: '3px', border: 'none',
//               background: i === current ? '#3E7CB8' : 'rgba(255,255,255,0.4)',
//               cursor: 'pointer', padding: 0,
//               transition: 'all 0.3s ease',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ProductCard({ p, i, visible }) {
//   const [open, setOpen] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         borderRadius: '10px',
//         overflow: 'hidden',
//         border: `1px solid ${hovered ? 'rgba(62,124,184,0.45)' : 'rgba(62,124,184,0.15)'}`,
//         background: '#0D1E35',
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'none' : 'translateY(28px)',
//         transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s, border 0.3s`,
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* SLIDESHOW IMAGE */}
//       <CardSlideshow images={p.images} title={p.title} />

//       {/* CONTENT */}
//       <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
//           <span style={{ fontSize: '22px' }}>{p.icon}</span>
//           <h3 style={{ color: '#3E7CB8', fontSize: '18px', fontWeight: 900, margin: 0 }}>{p.title}</h3>
//         </div>
//         <p style={{ color: '#8B9BB4', fontSize: '13.5px', lineHeight: 1.75, margin: '0 0 20px', flex: 1 }}>{p.desc}</p>

//         <button
//           onClick={() => setOpen(!open)}
//           style={{
//             alignSelf: 'flex-start',
//             background: 'none',
//             border: '1px solid rgba(62,124,184,0.35)',
//             color: '#3E7CB8', padding: '9px 20px',
//             borderRadius: '4px', cursor: 'pointer',
//             fontSize: '11px', fontWeight: 700,
//             letterSpacing: '1px', textTransform: 'uppercase',
//             fontFamily: 'inherit', transition: 'all 0.2s',
//           }}
//           onMouseEnter={e => e.currentTarget.style.background = 'rgba(62,124,184,0.12)'}
//           onMouseLeave={e => e.currentTarget.style.background = 'none'}
//         >
//           {open ? 'Hide Items' : 'View Items'}
//         </button>

//         {open && (
//           <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
//             {p.items.map(item => (
//               <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A8B8CC', fontSize: '12px' }}>
//                 <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3E7CB8', flexShrink: 0, display: 'inline-block' }} />
//                 {item}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function ProductsContent() {
//   const [ref, visible] = useInView();
//   const [search, setSearch] = useState('');

//   return (
//     <main>
//       {/* HERO */}
//       <section style={{
//         background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)',
//         padding: '100px 64px 80px',
//         position: 'relative', overflow: 'hidden',
//       }}>
//         <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
//         <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
//           <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>What We Supply</div>
//           <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
//             Everything Your Vessel<br />
//             <span style={{ color: '#3E7CB8' }}>Needs. All in One Place.</span>
//           </h1>
//           <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
//             From cabin essentials to engine parts, provisions to safety equipment - Badri Marine stocks what ships need and delivers it to any UAE port on time.
//           </p>
//         </div>
//         <div style={{ display: 'flex', gap: '64px', marginTop: '56px', flexWrap: 'wrap' }}>
//           {[['7','Product Categories'],['100%','Quality Checked'],['13+','UAE Ports Covered']].map(([n, l]) => (
//             <div key={l}>
//               <div style={{ color: '#3E7CB8', fontSize: '36px', fontWeight: 900 }}>{n}</div>
//               <div style={{ color: '#8B9BB4', fontSize: '12px', letterSpacing: '1px', marginTop: '4px' }}>{l}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PRODUCTS GRID */}
//       <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '80px 64px' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//             <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 700 }}>Our Product Range</div>
//             <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 900, margin: '0 0 32px' }}>Seven Categories. Thousands of Items.</h2>

//             {/* SEARCH BAR */}
//             <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 style={{
//                   width: '100%', padding: '14px 48px 14px 20px',
//                   borderRadius: '8px', border: '1px solid rgba(62,124,184,0.3)',
//                   background: 'rgba(255,255,255,0.06)', color: '#F5F5F0',
//                   fontSize: '15px', outline: 'none', fontFamily: 'inherit',
//                   transition: 'border 0.2s, box-shadow 0.2s',
//                 }}
//                 onFocus={e => { e.target.style.borderColor='#3E7CB8'; e.target.style.boxShadow='0 0 0 3px rgba(62,124,184,0.15)'; }}
//                 onBlur={e => { e.target.style.borderColor='rgba(62,124,184,0.3)'; e.target.style.boxShadow='none'; }}
//               />
//               <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8B9BB4', fontSize: '18px', pointerEvents: 'none' }}>🔍</span>
//             </div>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
//             {PRODUCTS.filter(p =>
//               p.title.toLowerCase().includes(search.toLowerCase()) ||
//               p.items.some(item => item.toLowerCase().includes(search.toLowerCase()))
//             ).map((p, i) => (
//               <ProductCard key={p.title} p={p} i={i} visible={visible} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ background: '#F5F5F0', padding: '80px 64px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//           <h2 style={{ color: '#0A1628', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, margin: '0 0 16px' }}>Need Something Specific?</h2>
//           <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.75, marginBottom: '36px' }}>
//             If you don't see what you need here, contact us. We source specialty items on request and can have most products delivered to your vessel within 24 hours.
//           </p>
//           <a href="/contact" style={{
//             display: 'inline-block',
//             background: 'linear-gradient(135deg,#073255,#3E7CB8)',
//             color: '#0A1628', padding: '15px 40px',
//             borderRadius: '4px', fontWeight: 900,
//             fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
//             boxShadow: '0 4px 20px rgba(62,124,184,0.35)',
//             transition: 'transform 0.2s',
//           }}
//             onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
//             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
//           >Request a Quote</a>
//         </div>
//       </section>
//     </main>
//   );
// }
'use client';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

// --- SVG ICONS (replace emoji icons) ---
const iconProps = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

const BedIcon = () => (
  <svg {...iconProps}>
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
    <path d="M3 18v2" /><path d="M21 18v2" />
    <path d="M3 12V8a2 2 0 0 1 2-2h6v4" />
    <circle cx="7" cy="10" r="1" />
  </svg>
);

const GearIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BoltIcon = () => (
  <svg {...iconProps}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

const EngineIcon = () => (
  <svg {...iconProps}>
    <path d="M9 3v2M15 3v2" />
    <rect x="4" y="8" width="12" height="10" rx="1" />
    <path d="M16 11h3l1 2v3l-1 2h-3" />
    <path d="M7 8V6a1 1 0 0 1 1-1h6" />
    <circle cx="8" cy="13" r="1.4" />
  </svg>
);

const ProvisionIcon = () => (
  <svg {...iconProps}>
    <path d="M4 8a8 8 0 0 1 16 0z" />
    <path d="M2 8h20" />
    <path d="M12 8v4" />
    <path d="M5 8l1 11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-11" />
  </svg>
);

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const TileIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
// --- END SVG ICONS ---

const PRODUCTS = [
  {
    title: 'Cabin Stores',
    icon: <BedIcon />,
    images: ['/card1_1.jpg', '/card1_2.jpg', '/card1_3.jpg'],
    desc: 'Everything needed to keep crew quarters clean, comfortable and fully stocked. From bedding and cleaning supplies to personal care items and cabin essentials.',
    items: ['Cleaning Supplies & Chemicals','Bedding & Linen','Personal Care Products','Kitchen & Galley Items','Locks & Hardware','Paint & Brushes','Stationery & Office Supplies','General Cabin Consumables'],
  },
  {
    title: 'Deck Stores',
    icon: <GearIcon />,
    images: ['/card2_1.jpg', '/card2_2.jpg', '/card2_3.jpg'],
    desc: 'High-grade deck supplies built for the demands of open sea operations. We source quality products that meet marine standards and hold up under tough conditions.',
    items: ['Ropes & Mooring Lines','Chains & Shackles','Hooks & Pulleys','Deck Tools & Equipment','Wire Ropes & Cables','Nuts, Bolts & Fasteners','Hoses & Fittings','Anti-Corrosion Products'],
  },
  {
    title: 'Electrical Stores',
    icon: <BoltIcon />,
    images: ['/card3_1.jpg', '/card3_2.jpg', '/card3_3.jpg'],
    desc: 'Marine-grade electrical supplies and components sourced from trusted manufacturers. Tested and certified for use in demanding marine environments.',
    items: ['Cables & Wiring','Switches & Sockets','Batteries & Chargers','Lighting Fixtures','Fuses & Circuit Breakers','Electrical Panels','Navigation Lights','Motors & Generators'],
  },
  {
    title: 'Engine Stores',
    icon: <EngineIcon />,
    images: ['/card4_1.jpg', '/card4_2.jpg', '/card4_3.jpg'],
    desc: 'Critical engine room supplies and spare parts to keep your vessel running at full capacity. We stock fast-moving parts and can source specialty items on request.',
    items: ['Bearings & Seals','Filters (Oil, Fuel, Air)','Gaskets & O-Rings','Pump Parts & Valves','Belts & Hoses','Engine Tools','Lubricants & Oils','Spare Parts on Request'],
  },
  {
    title: 'Provision Stores',
    icon: <ProvisionIcon />,
    images: ['/card5_1.jpg', '/card5_2.jpg', '/card5_3.jpg'],
    desc: 'Fresh, dry, and frozen provisions for crew at sea. We supply quality food and beverages that meet international maritime catering standards.',
    items: ['Fresh Fruits & Vegetables','Meat & Poultry','Dairy Products','Dry Goods & Canned Foods','Beverages & Soft Drinks','Frozen Foods','Cooking Oils & Condiments','Specialty & International Foods'],
  },
  {
    title: 'Safety Stores',
    icon: <ShieldIcon />,
    images: ['/card6_1.jpg', '/card6_2.jpg', '/card6_3.jpg'],
    desc: 'Life-saving safety equipment supplied to international maritime standards. Every item we stock is inspected and certified for crew safety at sea.',
    items: ['Life Jackets & Buoys','Fire Extinguishers','Immersion Suits','Flares & Pyrotechnics','First Aid Kits','Safety Harnesses','Emergency Rafts','Breathing Apparatus'],
  },
  {
    title: 'Tiles',
    icon: <TileIcon />,
    images: ['/card7_1.jpg', '/card7_2.jpg', '/card7_3.jpg'],
    desc: 'Quality tiles for marine, hotel, and construction projects across the UAE. We supply a range of finishes suitable for both commercial and residential applications.',
    items: ['Ceramic Floor Tiles','Wall Tiles','Porcelain Tiles','Anti-Slip Marine Tiles','Outdoor Tiles','Mosaic Tiles','Large Format Tiles','Custom Orders Available'],
  },
];

// Mini slideshow inside each card
function CardSlideshow({ images, title }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: 'linear-gradient(135deg,#0A1628,#112240)', flexShrink: 0 }}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} ${i + 1}`}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
            display: 'block',
          }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
      ))}
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(13,30,53,0.85) 0%, rgba(13,30,53,0.2) 60%, transparent 100%)',
        zIndex: 1,
      }} />
      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 2 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '18px' : '6px',
              height: '6px', borderRadius: '3px', border: 'none',
              background: i === current ? '#3E7CB8' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ p, i, visible }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(62,124,184,0.45)' : 'rgba(62,124,184,0.15)'}`,
        background: '#0D1E35',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s, border 0.3s`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* SLIDESHOW IMAGE */}
      <CardSlideshow images={p.images} title={p.title} />

      {/* CONTENT */}
      <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ color: '#3E7CB8', display: 'inline-flex' }}>{p.icon}</span>
          <h3 style={{ color: '#3E7CB8', fontSize: '18px', fontWeight: 900, margin: 0 }}>{p.title}</h3>
        </div>
        <p style={{ color: '#8B9BB4', fontSize: '13.5px', lineHeight: 1.75, margin: '0 0 20px', flex: 1 }}>{p.desc}</p>

        <button
          onClick={() => setOpen(!open)}
          style={{
            alignSelf: 'flex-start',
            background: 'none',
            border: '1px solid rgba(62,124,184,0.35)',
            color: '#3E7CB8', padding: '9px 20px',
            borderRadius: '4px', cursor: 'pointer',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '1px', textTransform: 'uppercase',
            fontFamily: 'inherit', transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(62,124,184,0.12)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          {open ? 'Hide Items' : 'View Items'}
        </button>

        {open && (
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {p.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A8B8CC', fontSize: '12px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3E7CB8', flexShrink: 0, display: 'inline-block' }} />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsContent() {
  const [ref, visible] = useInView();
  const [search, setSearch] = useState('');

  return (
    <main>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)',
        padding: '100px 64px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>What We Supply</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Everything Your Vessel<br />
            <span style={{ color: '#3E7CB8' }}>Needs. All in One Place.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            From cabin essentials to engine parts, provisions to safety equipment - Badri Marine stocks what ships need and delivers it to any UAE port on time.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '64px', marginTop: '56px', flexWrap: 'wrap' }}>
          {[['7','Product Categories'],['100%','Quality Checked'],['13+','UAE Ports Covered']].map(([n, l]) => (
            <div key={l}>
              <div style={{ color: '#3E7CB8', fontSize: '36px', fontWeight: 900 }}>{n}</div>
              <div style={{ color: '#8B9BB4', fontSize: '12px', letterSpacing: '1px', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '80px 64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 700 }}>Our Product Range</div>
            <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 900, margin: '0 0 32px' }}>Seven Categories. Thousands of Items.</h2>

            {/* SEARCH BAR */}
            <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '14px 48px 14px 20px',
                  borderRadius: '8px', border: '1px solid rgba(62,124,184,0.3)',
                  background: 'rgba(255,255,255,0.06)', color: '#F5F5F0',
                  fontSize: '15px', outline: 'none', fontFamily: 'inherit',
                  transition: 'border 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor='#3E7CB8'; e.target.style.boxShadow='0 0 0 3px rgba(62,124,184,0.15)'; }}
                onBlur={e => { e.target.style.borderColor='rgba(62,124,184,0.3)'; e.target.style.boxShadow='none'; }}
              />
              <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8B9BB4', pointerEvents: 'none', display: 'inline-flex' }}><SearchIcon /></span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {PRODUCTS.filter(p =>
              p.title.toLowerCase().includes(search.toLowerCase()) ||
              p.items.some(item => item.toLowerCase().includes(search.toLowerCase()))
            ).map((p, i) => (
              <ProductCard key={p.title} p={p} i={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5F5F0', padding: '80px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: '#0A1628', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, margin: '0 0 16px' }}>Need Something Specific?</h2>
          <p style={{ color: '#4A5568', fontSize: '16px', lineHeight: 1.75, marginBottom: '36px' }}>
            If you don't see what you need here, contact us. We source specialty items on request and can have most products delivered to your vessel within 24 hours.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg,#073255,#3E7CB8)',
            color: '#FFFFFF', padding: '15px 40px',
            borderRadius: '4px', fontWeight: 900,
            fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
            boxShadow: '0 4px 20px rgba(62,124,184,0.35)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >Request a Quote</a>
        </div>
      </section>
    </main>
  );
}
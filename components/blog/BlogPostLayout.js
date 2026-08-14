'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../Footer';

function useInView(threshold = 0.1, rootMargin = '0px') {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return [ref, visible];
}

export default function BlogPostLayout({ tag, title, subtitle, readTime, children }) {
  const [heroRef, heroVisible] = useInView();
  const [articleRef, articleVisible] = useInView(0.01, '0px 0px -80px 0px');
  const [ctaRef, ctaVisible] = useInView();

  return (
    <>
      <Navbar />
      <main>
        <div style={{ height: '90px' }} />

        <section
          ref={heroRef}
          style={{
            background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)',
            padding: '100px 64px 70px',
            position: 'relative',
            overflow: 'hidden',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
            <Link href="/blog" style={{ color: '#8B9BB4', fontSize: '13px', textDecoration: 'none' }}>&larr; Back to Blog</Link>
            <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', margin: '20px 0 16px', fontWeight: 700 }}>{tag}</div>
            <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(28px,3.6vw,44px)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 20px' }}>{title}</h1>
            <p style={{ color: '#8B9BB4', fontSize: '17px', lineHeight: 1.7, maxWidth: '640px', margin: '0 0 12px' }}>{subtitle}</p>
            <span style={{ color: '#8B9BB4', fontSize: '13px' }}>{readTime}</span>
          </div>
        </section>

        <section style={{ background: '#F5F5F0', padding: '70px 64px 90px' }}>
          <article
            ref={articleRef}
            className={`reveal-article${articleVisible ? ' in-view' : ''}`}
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              color: '#4A5568',
              fontSize: '16.5px',
              lineHeight: 1.85,
            }}
          >
            {children}
          </article>
        </section>

        <section
          ref={ctaRef}
          style={{
            background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)',
            padding: '64px',
            textAlign: 'center',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(20px,2.6vw,28px)', fontWeight: 900, margin: '0 0 14px' }}>Ready to Get Started?</h2>
            <p style={{ color: '#8B9BB4', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              Reach out to Badri Marine & General Trading LLC for a quote or consultation, anywhere in the UAE.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg,#073255,#3E7CB8)',
              color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px',
              fontWeight: 900, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(62,124,184,0.35)', textDecoration: 'none',
            }}>Request a Quote</Link>
          </div>
        </section>

        <style>{`
          article h2 { color: #0A1628; font-size: 24px; font-weight: 900; margin: 40px 0 16px; line-height: 1.3; }
          article h3 { color: #0A1628; font-size: 19px; font-weight: 800; margin: 28px 0 12px; }
          article p { margin: 0 0 18px; }
          article ul { margin: 0 0 20px; padding-left: 22px; }
          article li { margin-bottom: 10px; }
          article strong { color: #0A1628; }
          article a { color: #3E7CB8; font-weight: 600; }

          .reveal-article > * {
            opacity: 0;
            transform: translateY(26px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          .reveal-article.in-view > * { opacity: 1; transform: none; }

          .reveal-article.in-view > *:nth-child(1)  { transition-delay: 0.00s; }
          .reveal-article.in-view > *:nth-child(2)  { transition-delay: 0.06s; }
          .reveal-article.in-view > *:nth-child(3)  { transition-delay: 0.12s; }
          .reveal-article.in-view > *:nth-child(4)  { transition-delay: 0.18s; }
          .reveal-article.in-view > *:nth-child(5)  { transition-delay: 0.24s; }
          .reveal-article.in-view > *:nth-child(6)  { transition-delay: 0.30s; }
          .reveal-article.in-view > *:nth-child(7)  { transition-delay: 0.36s; }
          .reveal-article.in-view > *:nth-child(8)  { transition-delay: 0.42s; }
          .reveal-article.in-view > *:nth-child(9)  { transition-delay: 0.48s; }
          .reveal-article.in-view > *:nth-child(10) { transition-delay: 0.54s; }
          .reveal-article.in-view > *:nth-child(11) { transition-delay: 0.60s; }
          .reveal-article.in-view > *:nth-child(12) { transition-delay: 0.66s; }
          .reveal-article.in-view > *:nth-child(13) { transition-delay: 0.72s; }
          .reveal-article.in-view > *:nth-child(14) { transition-delay: 0.78s; }
          .reveal-article.in-view > *:nth-child(15) { transition-delay: 0.84s; }
          .reveal-article.in-view > *:nth-child(16) { transition-delay: 0.90s; }
          .reveal-article.in-view > *:nth-child(17) { transition-delay: 0.96s; }
          .reveal-article.in-view > *:nth-child(18) { transition-delay: 1.02s; }
          .reveal-article.in-view > *:nth-child(19) { transition-delay: 1.08s; }
          .reveal-article.in-view > *:nth-child(20) { transition-delay: 1.14s; }
          .reveal-article.in-view > *:nth-child(n+21) { transition-delay: 1.2s; }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
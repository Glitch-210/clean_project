'use client';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const QUOTE_EMAIL = 'infobadrimarine2012@gmail.com';

/* --- SVG ICONS (replacing emojis) --- */
function IconGlobe({ size = 32, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
    </svg>
  );
}
function IconBriefcase({ size = 32, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}
function IconPackage({ size = 32, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <line x1="12" y1="13" x2="12" y2="21" />
    </svg>
  );
}
function IconCart({ size = 32, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M1 1h3l2.6 12.6a2 2 0 0 0 2 1.6h9.4a2 2 0 0 0 2-1.6L21 6H5" />
    </svg>
  );
}
function IconPin({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconPhone({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconClock({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 16 14" />
    </svg>
  );
}
/* --- END SVG ICONS --- */

const EMAIL_SECTIONS = [
  {
    icon: <IconGlobe />,
    title: 'Commercial',
    subtitle: 'General Inquiries & Quotes',
    email: 'info@badrimarine.com',
    desc: 'For vessel supply requests, product inquiries, and general business questions.',
    color: '#3E7CB8',
  },
  {
    icon: <IconBriefcase />,
    title: 'Management',
    subtitle: 'Business & Partnerships',
    email: 'ali@badrimarine.com',
    desc: 'For business partnerships, management discussions, and corporate matters.',
    color: '#3E7CB8',
  },
  {
    icon: <IconPackage />,
    title: 'Sales',
    subtitle: 'New Orders & Contracts',
    email: 'sales@badrimarine.com',
    desc: 'For placing new orders, sales contracts, and pricing discussions.',
    color: '#3E7CB8',
  },
  {
    icon: <IconCart />,
    title: 'Purchase',
    subtitle: 'Procurement & Supply',
    email: 'purchase@badrimarine.com',
    desc: 'For procurement queries, supplier communication, and purchasing matters.',
    color: '#3E7CB8',
  },
];

function EmailCard({ s, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`mailto:${s.email}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: hovered ? 'linear-gradient(135deg,#0D1E35,#162A45)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(62,124,184,0.5)' : 'rgba(62,124,184,0.15)'}`,
        borderRadius: '12px',
        padding: '32px 28px',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.3)' : 'none',
        opacity: visible ? 1 : 0,
        transitionDelay: `${i * 0.1}s`,
      }}
    >
      <div style={{ color: s.color, marginBottom: '14px' }}>{s.icon}</div>
      <div style={{ color: s.color, fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{s.title}</div>
      <div style={{ color: '#F5F5F0', fontSize: '15px', fontWeight: 800, marginBottom: '12px' }}>{s.subtitle}</div>
      <div style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>{s.desc}</div>
      <div style={{ color: '#3E7CB8', fontSize: '14px', fontWeight: 600, wordBreak: 'break-all' }}>{s.email}</div>
    </a>
  );
}

export default function ContactContent() {
  const [ref, visible] = useInView();
  const [refCards, visibleCards] = useInView();
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.full_name.trim()) e.full_name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email address';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.service.trim()) e.service = 'Service required is required';
    if (!form.message.trim()) e.message = 'Tell us about your requirement is required';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setErrors({});
    setStatus('loading');

    const subject = encodeURIComponent(`Quote Request from ${form.full_name}`);
    const body = encodeURIComponent(
      [
        'Full Name: ' + form.full_name,
        'Email: ' + form.email,
        'Phone: ' + form.phone,
        'Service Required: ' + form.service,
        '',
        'Tell us about your requirement:',
        form.message,
      ].join('\n')
    );

    const mailtoLink = `mailto:${QUOTE_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setStatus('success');
    setForm({
      full_name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const inp = (field) => ({
    padding: '13px 16px',
    border: `1px solid ${errors[field] ? '#dc2626' : '#E2E8F0'}`,
    borderRadius: '6px', fontSize: '15px', outline: 'none',
    background: 'white', color: '#0A1628', width: '100%',
    fontFamily: 'inherit', transition: 'border 0.2s, box-shadow 0.2s',
  });

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0A1628,#112240)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '700px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Get In Touch</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Let's Talk About<br /><span style={{ color: '#3E7CB8' }}>What You Need.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75 }}>
            Tell us your requirements and we'll get back to you fast. No sales pitch, no runaround - just a straight answer on what we can do for you.
          </p>
        </div>
      </section>

      {/* 4 EMAIL SECTIONS */}
      <section ref={refCards} style={{ background: '#0A1628', padding: '80px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 700 }}>Reach The Right Team</div>
            <h2 style={{ color: '#F5F5F0', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, margin: 0 }}>Contact The Right Department</h2>
          </div>
          <div className="email-grid">
            {EMAIL_SECTIONS.map((s, i) => (
              <EmailCard key={s.title} s={s} i={i} visible={visibleCards} />
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section ref={ref} style={{ background: '#F5F5F0', padding: '80px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>

          <div style={{ flex: '1.6', minWidth: '300px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.8s ease' }}>
            <h2 style={{ color: '#0A1628', fontSize: '28px', fontWeight: 900, margin: '0 0 32px' }}>Request a Quote</h2>

            {status === 'success' && (
              <div style={{ background: '#0A1628', color: '#3E7CB8', padding: '16px 20px', borderRadius: '6px', marginBottom: '24px', fontSize: '15px', fontWeight: 600 }}>
                Message sent. We will be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div style={{ background: '#fee2e2', color: '#dc2626', padding: '16px 20px', borderRadius: '6px', marginBottom: '24px', fontSize: '15px', fontWeight: 600 }}>
                {errors.submit || 'Something went wrong. Please try again or WhatsApp us directly.'}
              </div>
            )}

            <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              {[
                ['full_name', 'Full Name *'],
                ['email', 'Email Address *'],
                ['phone', 'Phone *'],
                ['service', 'Service Required *'],
              ].map(([k, p]) => (
                <div key={k}>
                  <input placeholder={p} value={form[k]}
                    onChange={e => { setForm({ ...form, [k]: e.target.value }); if (errors[k]) setErrors({ ...errors, [k]: '' }); }}
                    onFocus={e => { e.target.style.borderColor='#3E7CB8'; e.target.style.boxShadow='0 0 0 3px rgba(62,124,184,0.12)'; }}
                    onBlur={e => { e.target.style.borderColor=errors[k] ? '#dc2626' : '#E2E8F0'; e.target.style.boxShadow='none'; }}
                    style={inp(k)} disabled={status==='loading'} />
                  {errors[k] && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{errors[k]}</div>}
                </div>
              ))}
            </div>

            <textarea placeholder="Tell us about your requirement"
              rows={6} value={form.message}
              onChange={e => { setForm({...form, message: e.target.value}); if (errors.message) setErrors({ ...errors, message: '' }); }}
              onFocus={e => { e.target.style.borderColor='#3E7CB8'; e.target.style.boxShadow='0 0 0 3px rgba(62,124,184,0.12)'; }}
              onBlur={e => { e.target.style.borderColor=errors.message ? '#dc2626' : '#E2E8F0'; e.target.style.boxShadow='none'; }}
              style={{ ...inp('message'), resize: 'vertical', marginBottom: '18px', display: 'block' }}
              disabled={status==='loading'} />
            {errors.message && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '-10px', marginBottom: '14px' }}>{errors.message}</div>}

            <button onClick={handleSubmit} disabled={status==='loading'} style={{
              background: status==='loading' ? 'rgba(62,124,184,0.5)' : 'linear-gradient(135deg,#073255,#3E7CB8)',
              color: '#FFFFFF', border: 'none', padding: '15px 40px',
              borderRadius: '6px', fontWeight: 900, fontSize: '14px',
              letterSpacing: '1px', textTransform: 'uppercase',
              cursor: status==='loading' ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 4px 16px rgba(62,124,184,0.35)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { if(status!=='loading'){ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(62,124,184,0.5)'; }}}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(62,124,184,0.35)'; }}
            >
              {status==='loading' ? (
                <>
                  <span style={{ width:'16px', height:'16px', border:'2px solid #0A1628', borderTop:'2px solid transparent', borderRadius:'50%', display:'inline-block', animation:'spin 0.8s linear infinite' }} />
                  Opening Mail...
                </>
              ) : 'Send Quote'}
            </button>
                
          <div style={{ color: '#4A5568', fontSize: '13px', marginTop: '10px' }}>
             badrimarine.com
        {status === 'success' && ( </div> 
         </div>

          <div style={{ flex: 1, minWidth: '240px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.8s ease 0.2s' }}>
            <h2 style={{ color: '#0A1628', fontSize: '28px', fontWeight: 900, margin: '0 0 32px' }}>Contact Details</h2>
            {[
              [<IconPin color="#F5F5F0" />,'Office Address','Office No 404, Murrar Building, Naif Road, Deira, Dubai, UAE'],
              [<IconPhone color="#F5F5F0" />,'WhatsApp','+971 52 872 4060'],
              [<IconClock color="#F5F5F0" />,'Working Hours','Monday to Saturday\n9:00 AM to 6:00 PM'],
            ].map(([icon,label,val]) => (
              <div key={label} style={{ marginBottom: '24px', display: 'flex', gap: '14px', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg,#0A1628,#112240)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ color: '#3E7CB8', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' }}>{label}</div>
                  <div style={{ color: '#4A5568', fontSize: '15px', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{val}</div>
                </div>
              </div>
            ))}
            <a href="https://wa.me/971528724060?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20quote%20from%20Badri%20Marine%20for%20marine%20supplies.%20Please%20get%20in%20touch."
              target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: '#25D366', color: 'white',
              padding: '15px 20px', borderRadius: '6px',
              fontWeight: 700, fontSize: '15px',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity='0.9'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='translateY(0)'; }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section style={{ height: '420px', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.0!2d55.30930709838867!3d25.275196075439453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzMwLjciTiA1NcKwMTgnMzMuNSJF!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%" height="420"
          style={{ border: 0, display: 'block', filter: 'grayscale(20%) contrast(1.1)' }}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Badri Marine Office Location"
        />
        <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'rgba(10,22,40,0.92)', border: '1px solid rgba(62,124,184,0.3)', borderRadius: '8px', padding: '16px 20px', backdropFilter: 'blur(8px)' }}>
          <div style={{ color: '#3E7CB8', fontSize: '13px', fontWeight: 800, marginBottom: '4px' }}>BADRI MARINE</div>
          <div style={{ color: '#8B9BB4', fontSize: '12px' }}>Office No 404, Murrar Building</div>
          <div style={{ color: '#8B9BB4', fontSize: '12px' }}>Naif Road, Deira, Dubai, UAE</div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .email-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .email-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .email-grid { grid-template-columns: 1fr; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

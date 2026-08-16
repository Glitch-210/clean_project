'use client';
import { useRef, useState, useEffect } from 'react';

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const GCC_COUNTRIES = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Oman',
  'Kuwait',
  'Bahrain',
];

const OTHER_COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
  'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China',
  'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
  'Djibouti', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
  'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
  'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India',
  'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan',
  'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, South', 'Kosovo', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
  'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia',
  'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova',
  'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Pakistan',
  'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Samoa', 'San Marino', 'Senegal',
  'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
  'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
  'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago',
  'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Kingdom', 'United States', 'Uruguay',
  'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const HotelIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
  </svg>
);
const ShipIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
    <path d="M4 18V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9" /><path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
  </svg>
);
const TradingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3E7CB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const PROFILES = [
  {
    Icon: HotelIcon,
    title: 'Hotels / Hospitality',
    subtitle: 'Supply & Services',
    desc: 'Our comprehensive hospitality supply and services profile covering cleaning chemicals, facility maintenance, hygiene products, kitchen equipment, and all hotel operational supplies delivered across Dubai and the UAE.',
    file: '/pdf1.pdf',
    pdfName: 'Hotels & Hospitality',
    tag: 'Hospitality',
    color: '#3E7CB8',
  },
  {
    Icon: ShipIcon,
    title: 'Marine Supply',
    subtitle: '& Services',
    desc: 'Complete marine chandling and ship supply profile covering deck stores, engine stores, safety equipment, provisions, nautical equipment, and vessel maintenance services across 13+ UAE ports.',
    file: '/pdf2.pdf',
    pdfName: 'Marine Supply',
    tag: 'Marine',
    color: '#3E7CB8',
  },
  {
    Icon: TradingIcon,
    title: 'Contracting Supply',
    subtitle: 'Service & General Trading',
    desc: 'Full-scope contracting and general trading profile covering construction chemicals, industrial supplies, power tools, safety gear, electrical products, and specialist procurement for construction projects across the UAE.',
    file: '/pdf3.pdf',
    pdfName: 'Contracting Supply',
    tag: 'Trading',
    color: '#3E7CB8',
  },
];

function DownloadModal({ profile, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email address is required';
    else if (!isValidEmail(form.email.trim())) e.email = 'Enter a valid email address';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.country) e.country = 'Please select a country';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz5KzmlsVTAqqOvBwE6UV6-wnVP_6oD5Wj8u4go-zxCbrbuMoseap1Utui9e_rc2HYn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          country: form.country,
          pdf: profile.pdfName,
        }),
      });
    } catch (err) {
      console.error('Error submitting details:', err);
    }

    // Trigger PDF download
    const link = document.createElement('a');
    link.href = profile.file;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmitting(false);
    onClose();
  };

  const getInputStyle = (fieldName) => ({
    width: '100%',
    padding: '12px 16px',
    background: '#060E1A',
    border: `1px solid ${errors[fieldName] ? '#dc2626' : 'rgba(62,124,184,0.3)'}`,
    borderRadius: '8px',
    color: '#F5F5F0',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(10, 22, 40, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #112240 100%)',
          border: '1px solid rgba(62, 124, 184, 0.35)',
          borderRadius: '16px',
          padding: '36px 32px',
          maxWidth: '480px',
          width: '100%',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(62,124,184,0.2)',
            color: '#8B9BB4',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = 'rgba(62,124,184,0.6)'; e.currentTarget.style.background = 'rgba(62,124,184,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#8B9BB4'; e.currentTarget.style.borderColor = 'rgba(62,124,184,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px', paddingRight: '32px' }}>
          <div style={{ color: '#3E7CB8', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Download Profile
          </div>
          <h2 style={{ color: '#F5F5F0', fontSize: '22px', fontWeight: 900, margin: '0 0 8px', lineHeight: 1.2 }}>
            {profile.title}
          </h2>
          <p style={{ color: '#8B9BB4', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
            Please enter your details below to receive instant access to the PDF.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Hidden PDF field */}
          <input type="hidden" name="pdf" value={profile.pdfName} />

          {/* Name Field */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#3E7CB8', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. John Smith"
              value={form.name}
              disabled={isSubmitting}
              onChange={e => {
                setForm({ ...form, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              onFocus={e => { e.target.style.borderColor = '#3E7CB8'; e.target.style.boxShadow = '0 0 0 3px rgba(62,124,184,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = errors.name ? '#dc2626' : 'rgba(62,124,184,0.3)'; e.target.style.boxShadow = 'none'; }}
              style={getInputStyle('name')}
            />
            {errors.name && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#3E7CB8', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Email Address *
            </label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              value={form.email}
              disabled={isSubmitting}
              onChange={e => {
                setForm({ ...form, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              onFocus={e => { e.target.style.borderColor = '#3E7CB8'; e.target.style.boxShadow = '0 0 0 3px rgba(62,124,184,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = errors.email ? '#dc2626' : 'rgba(62,124,184,0.3)'; e.target.style.boxShadow = 'none'; }}
              style={getInputStyle('email')}
            />
            {errors.email && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#3E7CB8', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="e.g. +971 50 123 4567"
              value={form.phone}
              disabled={isSubmitting}
              onChange={e => {
                setForm({ ...form, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              onFocus={e => { e.target.style.borderColor = '#3E7CB8'; e.target.style.boxShadow = '0 0 0 3px rgba(62,124,184,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = errors.phone ? '#dc2626' : 'rgba(62,124,184,0.3)'; e.target.style.boxShadow = 'none'; }}
              style={getInputStyle('phone')}
            />
            {errors.phone && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</div>}
          </div>

          {/* Country Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#3E7CB8', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Country *
            </label>
            <select
              value={form.country}
              disabled={isSubmitting}
              onChange={e => {
                setForm({ ...form, country: e.target.value });
                if (errors.country) setErrors({ ...errors, country: '' });
              }}
              onFocus={e => { e.target.style.borderColor = '#3E7CB8'; e.target.style.boxShadow = '0 0 0 3px rgba(62,124,184,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = errors.country ? '#dc2626' : 'rgba(62,124,184,0.3)'; e.target.style.boxShadow = 'none'; }}
              style={getInputStyle('country')}
            >
              <option value="" disabled style={{ background: '#0A1628', color: '#8B9BB4' }}>Select a Country</option>
              <optgroup label="GCC Countries" style={{ background: '#0A1628', color: '#3E7CB8' }}>
                {GCC_COUNTRIES.map(c => <option key={c} value={c} style={{ background: '#0A1628', color: '#F5F5F0' }}>{c}</option>)}
              </optgroup>
              <optgroup label="Other Countries" style={{ background: '#0A1628', color: '#3E7CB8' }}>
                {OTHER_COUNTRIES.map(c => <option key={c} value={c} style={{ background: '#0A1628', color: '#F5F5F0' }}>{c}</option>)}
              </optgroup>
            </select>
            {errors.country && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{errors.country}</div>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              background: isSubmitting ? 'rgba(62,124,184,0.5)' : 'linear-gradient(135deg,#073255,#3E7CB8)',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 24px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 20px rgba(62,124,184,0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(62,124,184,0.5)'; } }}
            onMouseLeave={e => { if (!isSubmitting) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(62,124,184,0.35)'; } }}
          >
            {isSubmitting ? (
              <>
                <span style={{ width: '16px', height: '16px', border: '2px solid #FFFFFF', borderTop: '2px solid transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                Submitting...
              </>
            ) : (
              <>
                <DownloadIcon />
                Download PDF
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function ProfileCard({ p, i, visible, onDownloadClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(62,124,184,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(62,124,184,0.4)' : 'rgba(62,124,184,0.12)'}`,
        borderRadius: '14px',
        padding: '44px 36px',
        display: 'flex', flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s, border 0.3s, background 0.3s`,
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Tag */}
      <div style={{ marginBottom: '24px' }}>
        <span style={{
          background: 'rgba(62,124,184,0.12)',
          border: '1px solid rgba(62,124,184,0.25)',
          color: p.color, fontSize: '11px', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
          padding: '5px 14px', borderRadius: '50px',
        }}>{p.tag}</span>
      </div>

      {/* Icon */}
      <div style={{ marginBottom: '24px', transition: 'transform 0.3s', transform: hovered ? 'scale(1.08)' : 'scale(1)', display: 'inline-block', width: 'fit-content' }}>
        <p.Icon />
      </div>

      {/* Title */}
      <h3 style={{ color: '#F5F5F0', fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 900, margin: '0 0 4px', lineHeight: 1.2 }}>{p.title}</h3>
      <div style={{ color: '#3E7CB8', fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>{p.subtitle}</div>

      {/* Desc */}
      <p style={{ color: '#8B9BB4', fontSize: '14px', lineHeight: 1.8, margin: '0 0 32px', flex: 1 }}>{p.desc}</p>

      {/* Download button */}
      <button
        onClick={() => onDownloadClick(p)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          background: hovered ? 'linear-gradient(135deg,#073255,#3E7CB8)' : 'transparent',
          border: `2px solid ${hovered ? 'transparent' : 'rgba(62,124,184,0.4)'}`,
          color: hovered ? '#FFFFFF' : '#3E7CB8',
          padding: '14px 24px', borderRadius: '8px',
          fontWeight: 800, fontSize: '13px',
          letterSpacing: '1px', textTransform: 'uppercase',
          textDecoration: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? '0 4px 20px rgba(62,124,184,0.4)' : 'none',
          width: '100%',
        }}
      >
        <DownloadIcon />
        Download Profile
      </button>
    </div>
  );
}

export default function CompanyProfile() {
  const [ref, visible] = useInView();
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0A1628 0%,#112240 100%)', padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(62,124,184,0.07),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#3E7CB8', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Downloads</div>
          <h1 style={{ color: '#F5F5F0', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px' }}>
            Company Profile<br />
            <span style={{ color: '#3E7CB8' }}>Everything You Need to Know.</span>
          </h1>
          <p style={{ color: '#8B9BB4', fontSize: '18px', lineHeight: 1.75, maxWidth: '600px' }}>
            Download our detailed company profiles for each division - Marine, Hospitality, and General Trading. Share with your team or procurement department.
          </p>
        </div>
      </section>

      {/* 3 PROFILE CARDS */}
      <section ref={ref} style={{ background: 'linear-gradient(180deg,#0A1628,#112240)', padding: '80px 64px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="profile-grid">
            {PROFILES.map((p, i) => (
              <ProfileCard
                key={p.title}
                p={p}
                i={i}
                visible={visible}
                onDownloadClick={(profile) => setActiveProfile(profile)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GATED DOWNLOAD MODAL */}
      {activeProfile && (
        <DownloadModal
          profile={activeProfile}
          onClose={() => setActiveProfile(null)}
        />
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .profile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .profile-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .profile-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </main>
  );
}

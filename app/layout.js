import './globals.css';
import PageLoader from '../components/PageLoader';
import BackToTop from '../components/BackToTop';
import CookieBanner from '../components/CookieBanner';
import CustomCursor from '../components/CustomCursor';

export const metadata = {
  title: 'Badri Marine & General Trading LLC | Ship Chandler Dubai UAE',
  description: 'Badri Marine & General Trading LLC — Dubai based ship chandler supplying vessels across 13+ UAE ports. Marine chandling, ship maintenance, hotel maintenance, electrical works, plumbing, general trading.',
  keywords: 'ship chandler Dubai, marine chandling UAE, ship supply Dubai, Badri Marine, BMGT, marine trading UAE, vessel supply UAE',
  metadataBase: new URL('https://badrimarine.com'),
  openGraph: {
    title: 'Badri Marine & General Trading LLC',
    description: 'Your trusted partner for marine chandling and general trading in Dubai, UAE.',
    url: 'https://badrimarine.com',
    siteName: 'Badri Marine & General Trading LLC',
    locale: 'en_US',
    type: 'website',
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Badri Marine & General Trading LLC',
  description: 'Ship chandler and general trading company in Dubai, UAE.',
  url: 'https://badrimarine.com',
  telephone: '+971564908143',
  email: 'info@badrimarine.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office 303, Murar Building, Naif Road Deira, Dubai',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 25.1865, longitude: 55.2656 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '08:00', closes: '20:00',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/website_title.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="google-site-verification" content="DK2Cojp1FyymCata9gGyNzURdliFV7J6jwP31mvUtXo" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N034SG16Z2" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N034SG16Z2');
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      </head>
      <body>
        <CustomCursor />
        <PageLoader />
        {children}
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
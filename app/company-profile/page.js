import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CompanyProfile from '../../components/CompanyProfile';

export const metadata = {
  title: 'Company Profile | Badri Marine & General Trading LLC',
  description: 'Download Badri Marine company profile for Hotels & Hospitality, Marine Supply, and Contracting & General Trading services.',
};

export default function CompanyProfilePage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ height: '90px' }} />
        <CompanyProfile />
      </main>
      <Footer />
    </>
  );
}
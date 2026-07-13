import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PartnersContent from '../../components/PartnersContent';

export const metadata = {
  title: 'Our Partners | Badri Marine & General Trading LLC',
  description: 'Badri Marine works with 40 leading companies across marine, industrial and construction sectors in the UAE.',
};

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ height: '90px' }} />
        <PartnersContent />
      </main>
      <Footer />
    </>
  );
}
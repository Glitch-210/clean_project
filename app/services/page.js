import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServicesContent from '../../components/ServicesContent';

export const metadata = {
  title: 'Marine Services | Badri Marine & General Trading LLC',
  description: 'Marine chandling, ship maintenance, hotel maintenance, electrical works, plumbing & AC, and general trading services across UAE ports.',
  keywords: 'marine chandling Dubai, ship maintenance UAE, hotel maintenance Dubai, electrical works marine, general trading Dubai',
};
export default function ServicesPage() {
  return (<><Navbar /><ServicesContent /><Footer /></>);
}

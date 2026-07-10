import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactContent from '../../components/ContactContent';

export const metadata = {
  title: 'Contact Us | Badri Marine & General Trading LLC - Dubai',
  description: 'Contact Badri Marine & General Trading LLC in Business Bay, Dubai. Get a quote for ship supplies, marine chandling, and general trading services.',
  keywords: 'contact Badri Marine, ship chandler Dubai contact, marine supply quote UAE',
};
export default function ContactPage() {
  return (<><Navbar /><ContactContent /><Footer /></>);
}

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PortsContent from '../../components/PortsContent';

export const metadata = {
  title: 'Ports We Supply At | Badri Marine & General Trading LLC',
  description: 'Badri Marine supplies at 13+ ports across UAE - Abu Dhabi, Dubai, Ras Al Khaimah, Sharjah and beyond. Jebel Ali, Mina Rashid, Port Khalifa and more.',
  keywords: 'ship supply Jebel Ali, marine chandling Mina Rashid, ship supply Abu Dhabi, marine supply Sharjah',
};
export default function PortsPage() {
  return (<><Navbar /><PortsContent /><Footer /></>);
}

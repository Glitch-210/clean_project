import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductsContent from '../../components/ProductsContent';

export const metadata = {
  title: 'Marine Products | Badri Marine & General Trading LLC',
  description: 'Ship chandling products - cabin stores, deck stores, electrical stores, engine stores, provision stores, safety stores and tiles. UAE port delivery.',
  keywords: 'cabin stores Dubai, deck stores UAE, ship provisions, safety equipment marine, engine stores UAE',
};
export default function ProductsPage() {
  return (<><Navbar /><ProductsContent /><Footer /></>);
}

import Navbar from '../../components/Navbar';
import BlogContent from '../../components/BlogContent';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Blog | Badri Marine & General Trading LLC',
  description: 'Guides on ship chandling, marine supply, hotel and hospitality supply, and industrial contracting services across the UAE.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ height: '90px' }} />
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
import Navbar      from '../components/Navbar';
import Hero        from '../components/Hero';
import About       from '../components/About';
import Services    from '../components/Services';
import OurProducts from '../components/OurProducts';
import WhyUs       from '../components/WhyUs';
import Footer      from '../components/Footer';

export const metadata = {
  title: 'Badri Marine & General Trading LLC | Trusted Marine & Trading Company in Dubai',
  description: 'Badri Marine supplies vessels, hotels and construction sites across 13+ UAE ports. Marine chandling, ship maintenance, electrical works, general trading in Dubai.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ height: '90px' }} />
        <Hero />
        <About />
        <Services />
        <OurProducts />
        <WhyUs />
        <Footer />
      </main>
    </>
  );
}
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutContent from '../../components/AboutContent';

export const metadata = {
  title: 'About Us | Badri Marine & General Trading LLC - Dubai Ship Chandler',
  description: 'Learn about Badri Marine & General Trading LLC - Dubai based ship chandler and general trading company. Serving 13+ UAE ports across 4 emirates.',
  keywords: 'about Badri Marine, Dubai ship chandler, marine trading company UAE, BMGT Dubai',
};
export default function AboutPage() {
  return (<><Navbar /><AboutContent /><Footer /></>);
}

import CardList from '@/components/CardList';
import FaQ from '@/components/FaQ';
import Gallery from '@/components/Gallery';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex flex-col place-items-center min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Services />
      <CardList />
      <FaQ />
      <Gallery />
      <AboutUs/>
      <Testimonials />
      <Footer/>
    </main>
  );
}

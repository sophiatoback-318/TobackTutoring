import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FinancialLiteracy from '../components/FinancialLiteracy';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FinancialLiteracy />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Roadmap from '../components/Roadmap';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';
import StructuredData from '../components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Roadmap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

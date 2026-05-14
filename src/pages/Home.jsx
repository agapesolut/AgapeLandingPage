import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ManifestoSection from '../components/ManifestoSection';
import ProductsInUse from '../components/ProductsInUse';

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-[var(--bg-color)]">
      <Navbar />
      
      {/* Hero Section - Fixed/Sticky for Stacking Effect */}
      <section className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <Hero />
      </section>
      
      {/* Main Content - Slides over Hero */}
      <main 
        style={{ backgroundImage: 'var(--bg-image)' }}
        className="relative z-10 bg-[var(--bg-color)] bg-cover bg-top shadow-[0_-50px_100px_rgba(0,0,0,0.5)] transition-all duration-700"
      >
        <div className="bg-[var(--bg-color)]/20 backdrop-blur-[1px]">
          <Features />
          <ProductsInUse />
          <ManifestoSection />
          <Form />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Home;

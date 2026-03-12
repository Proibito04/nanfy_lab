import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { ChefBio } from './components/ChefBio';

import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { MenusPage } from './pages/MenusPage';
import { HomeMenusSection } from './components/HomeMenusSection';
import { GalleriaPage } from './pages/GalleriaPage';
import { HomeGallerySection } from './components/HomeGallerySection';
import { LinkTreePage } from './pages/LinkTreePage';
import { Analytics } from "@vercel/analytics/react"


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <main className='mt-20'>
      <Helmet>
        <title>Nanfylab | Corsi di Cucina, Chef a Domicilio, Eventi Privati</title>
        <meta name="description" content="Scopri Nanfylab: corsi di cucina, chef a domicilio ed eventi privati. Passione e convivialità per le tue esperienze culinarie uniche." />
        <link rel="canonical" href="https://www.nanfylab.it/" />
        
        <meta property="og:title" content="Nanfylab | Corsi di Cucina, Chef a Domicilio, Eventi Privati" />
        <meta property="og:description" content="Scopri Nanfylab: corsi di cucina, chef a domicilio ed eventi privati." />
        <meta property="og:url" content="https://www.nanfylab.it/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nanfylab | Corsi di Cucina, Chef a Domicilio" />
        <meta name="twitter:description" content="Scopri Nanfylab: corsi di cucina, chef a domicilio ed eventi privati." />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Nanfylab",
              "description": "Corsi di cucina, chef a domicilio ed eventi privati a cura dello Chef Giacomo Nanfaro.",
              "url": "https://www.nanfylab.it/",
              "servesCuisine": "Italian",
              "areaServed": "Italy"
            }
          `}
        </script>
      </Helmet>
      <Analytics />
      <Hero />
      <Courses />
      <HomeMenusSection />
      <ChefBio />
      <About />
      <Contact />
      <HomeGallerySection />
    </main>
  );
}

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Observe changes inside the main root for dynamically rendered Routes
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.reveal:not(.active)');
      newElements.forEach(el => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen ">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/galleria" element={<GalleriaPage />} />
        <Route path="/links" element={<LinkTreePage />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

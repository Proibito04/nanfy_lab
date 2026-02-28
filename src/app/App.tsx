import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { ChefBio } from './components/ChefBio';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { MenusPage } from './pages/MenusPage';
import { HomeMenusSection } from './components/HomeMenusSection';
import { GalleriaPage } from './pages/GalleriaPage';
import { HomeGallerySection } from './components/HomeGallerySection';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main className='mt-20'>
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
      </Routes>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

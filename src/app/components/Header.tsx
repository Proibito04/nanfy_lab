import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@assets/logo_senza_cerchio.png";
import { useNavigate, useLocation, Link } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Servizi', href: '#courses' },
    { label: 'Menù', href: '/menus' },
    { label: 'Lo Chef', href: '#chef-bio' },
    { label: 'Chi Siamo', href: '#about' },
    { label: 'Contatti', href: '#contact' },
    { label: 'Galleria', href: '/galleria' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '#purchase') {
      alert('🛒 Carrello: Il corso è stato aggiunto! Procedi al pagamento sicuro (Mock).');
      return;
    }

    if (href.startsWith('/')) {
      navigate(href);
      setIsMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/' + href);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`h-28 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
          }`}
      >
        <div className=" mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center space-x-3">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Nanfy_Lab Academy"
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isHash = item.href.startsWith('#');
                const linkHref = isHash && location.pathname !== '/' ? '/' + item.href : item.href;
                return (
                  <Link
                    key={item.label}
                    to={linkHref}
                    onClick={(e) => {
                      if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className="text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              className="hidden md:block px-6 py-2 rounded-full text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--amber-primary)' }}
              onClick={() => handleNavClick('#purchase')}
            >
              Acquista un servizio
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--amber-primary)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: 'var(--amber-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="absolute top-20 right-6 left-6 bg-white rounded-2xl shadow-xl p-6 space-y-4">
            {navItems.map((item) => {
              const isHash = item.href.startsWith('#');
              const linkHref = isHash && location.pathname !== '/' ? '/' + item.href : item.href;
              return (
                <Link
                  key={item.label}
                  to={linkHref}
                  onClick={(e) => {
                    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              className="w-full px-6 py-3 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--amber-primary)' }}
              onClick={() => handleNavClick('#purchase')}
            >
              Acquista un servizio
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

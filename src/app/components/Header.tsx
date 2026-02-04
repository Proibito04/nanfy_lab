import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@assets/nanfy_lab_logo_1767972510172.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Servizi', href: '#courses' },
    { label: 'Lo Chef', href: '#chef-bio' },
    { label: 'Chi Siamo', href: '#about' },
    { label: 'Contatti', href: '#contact' },
    { label: 'Galleria', href: '#gallery' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '#purchase') {
      alert('🛒 Carrello: Il corso è stato aggiunto! Procedi al pagamento sicuro (Mock).');
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Nanfy_Lab Academy" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
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
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
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

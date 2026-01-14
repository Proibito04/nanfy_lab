import { Instagram, Facebook, Mail } from 'lucide-react';
import { ChefHat } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-6 h-6" style={{ color: 'var(--amber-secondary)' }} />
              <span className="text-xl">Nanfy_Lab</span>
            </div>
            <p className="text-gray-400 text-sm">
              Accademia culinaria professionale dedicata all'eccellenza della gastronomia italiana.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Corsi</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galleria</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Corsi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#courses" className="hover:text-white transition-colors">Corsi Base</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Formazione Avanzata</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Lezioni Private</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Workshop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Seguici</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[var(--amber-primary)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[var(--amber-primary)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[var(--amber-primary)] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Nanfy_Lab Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
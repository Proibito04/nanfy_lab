import { Instagram, Facebook, Globe } from 'lucide-react';
import logo from "@assets/logo_senza_cerchio.png";
import { Helmet } from 'react-helmet-async';

export function LinkTreePage() {
  return (
    <div className="min-h-screen  flex flex-col items-center py-20 px-4 mt-20">
      <Helmet>
        <title>Nanfylab | I nostri Link</title>
        <meta name="description" content="Tutti i link utili di Nanfylab: Instagram, Facebook e sito web ufficiale." />
      </Helmet>
      <div className="w-full max-w-md pt-10 flex flex-col items-center">
        <img
          src={logo}
          alt="Nanfy Lab Logo"
          className="w-32 mb-6"
        />
        <h1 className="text-white text-2xl font-bold mb-2">Nanfy Lab</h1>
        <p className="text-gray-400 mb-8 text-center">Cucina, Convivialità, Passione</p>

        <div className="w-full flex flex-col gap-4">
          <a
            href="https://www.instagram.com/nanfy_lab"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-[var(--amber-primary)] text-white p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-medium text-lg">Instagram</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-[var(--amber-primary)] text-white p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <Facebook className="w-6 h-6" />
            <span className="font-medium text-lg">Facebook</span>
          </a>

          <a
            href="https://www.facebook.com/chefgiacomonanfaro89"
            className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-[var(--amber-primary)] text-white p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <Globe className="w-6 h-6" />
            <span className="font-medium text-lg">Sito Web</span>
          </a>
        </div>
      </div>
    </div>
  );
}

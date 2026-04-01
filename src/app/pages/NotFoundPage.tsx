import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Utensils } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-6 bg-amber-50/20">
      <Helmet>
        <title>404 - Pagina non trovata | Nanfylab</title>
        <meta name="description" content="Ops! La pagina che stai cercando non esiste. Torna alla home per scoprire i nostri corsi di cucina e servizi chef." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-12 animate-fade-in">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[15rem] md:text-[20rem] font-serif font-bold text-amber-900 select-none">
              404
            </span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-6 rounded-full bg-white shadow-xl border border-amber-100 mb-8 animate-bounce transition-all duration-1000">
              <Utensils className="w-16 h-16 text-amber-900" />
            </div>
          </div>
        </div>

        <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Ops! Qualcosa è andato storto.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
            Sembra che la pagina che stai cercando sia stata portata via da un profumo irresistibile... o forse l'indirizzo è sbagliato.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="group flex items-center gap-2 px-8 py-4 bg-amber-900 text-white rounded-full font-bold uppercase tracking-wider hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Home className="w-5 h-5" />
              Torna alla Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-white text-amber-900 rounded-full font-bold uppercase tracking-wider hover:bg-amber-50 transition-all border border-amber-200 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <ArrowLeft className="w-5 h-5" />
              Torna Indietro
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-8 opacity-20 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="w-2 h-2 rounded-full bg-amber-900"></div>
          <div className="w-2 h-2 rounded-full bg-amber-900"></div>
          <div className="w-2 h-2 rounded-full bg-amber-900"></div>
        </div>
      </div>
    </main>
  );
}

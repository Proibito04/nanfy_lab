import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, UtensilsCrossed } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import menuBambini from "@assets/menu-bambini.pdf";
import menuColazioneSabauda from "@assets/menu-colazione-sabauda.pdf";
import menuMare from "@assets/menu-mare.pdf";
import privateDinnerImg from "@assets/service_private_dinner.png";

const menus = [
  {
    id: 'sabauda',
    title: 'Colazione Sabauda',
    description: 'Un risveglio aristocratico con i sapori storici del Piemonte, tra dolcezze e sfumature salate raffinate.',
    url: menuColazioneSabauda,
    tag: 'Novità'
  },
  {
    id: 'mare',
    title: 'Menù Mare',
    description: 'Un tuffo nei sapori del Mediterraneo, con pescato freschissimo e abbinamenti sorprendenti.',
    url: menuMare,
    tag: 'Classico'
  },
  {
    id: 'bambini',
    title: 'Menù Bambini',
    description: 'Piatti sani, colorati e gustosi, pensati appositamente per i palati dei più piccoli.',
    url: menuBambini,
    tag: 'Speciale'
  }
];

export function MenusPage() {
  return (
    <main className="min-h-screen bg-amber-50/20 pt-32 pb-24">
      <Helmet>
        <title>Menù | Nanfylab</title>
        <meta name="description" content="Scopri le nostre proposte gastronomiche per i tuoi eventi privati a domicilio. Scegli il percorso di degustazione perfetto per la tua occasione speciale." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">

        {/* Navigation / Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-900 hover:text-amber-700 font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna alla Home
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4 animate-fade-in">
                I Nostri Menù
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Scopri le nostre proposte gastronomiche per i tuoi eventi privati a domicilio.
                Scegli il percorso di degustazione perfetto per la tua occasione speciale.
              </p>
            </div>

            <div className="hidden lg:block w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img src={privateDinnerImg} alt="Private Dinner" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Menus Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pb-12">
          {menus.map((menu, index) => (
            <div
              key={menu.id}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-amber-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-amber-100/50 text-amber-900">
                  <UtensilsCrossed className="w-8 h-8" />
                </div>
                {menu.tag && (
                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {menu.tag}
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-amber-700 transition-colors">
                {menu.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {menu.description}
              </p>

              <div className="flex gap-4 mt-auto pt-6 border-t border-amber-100/50">
                <a
                  href={menu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-amber-900 text-white rounded-xl font-medium hover:bg-amber-800 transition-colors shadow-sm hover:shadow-md"
                >
                  <FileText className="w-5 h-5" />
                  Visualizza
                </a>
                <a
                  href={menu.url}
                  download
                  className="px-4 py-3 bg-amber-50 text-amber-900 rounded-xl font-medium hover:bg-amber-100 transition-colors border border-amber-200 flex items-center justify-center tooltip-trigger"
                  title="Scarica PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-amber-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mt-8 shadow-xl animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Hai un'esigenza particolare?</h3>
            <p className="text-amber-100 text-lg mb-8">
              Lo Chef è a disposizione per studiare un menù personalizzato in base alle tue preferenze e intolleranze alimentari.
            </p>
            <Link to="/#contact" className="inline-block px-8 py-4 bg-white text-amber-900 rounded-full font-bold uppercase tracking-wider hover:bg-amber-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              Richiedi un Menù su Misura
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

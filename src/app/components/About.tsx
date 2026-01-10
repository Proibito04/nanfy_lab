import { Award, ChefHat } from 'lucide-react';
import chefOutdoorImage from "@assets/chef_outdoor.png";
import natureBackground from "@assets/lavender_field_texture_1767972628710.png";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${natureBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Chi Siamo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un'istituzione culinaria dedicata alla conservazione e innovazione della gastronomia italiana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--green-lighter)' }}>
              <ChefHat className="w-7 h-7" style={{ color: 'var(--green-primary)' }} />
            </div>
            <h3 className="text-xl mb-3">Insegnamento Esperto</h3>
            <p className="text-gray-600">
              Impara dallo Chef Giacomo Nanfaro, rinomato per il suo approccio innovativo alla cucina italiana tradizionale.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--green-lighter)' }}>
              <Award className="w-7 h-7" style={{ color: 'var(--green-primary)' }} />
            </div>
            <h3 className="text-xl mb-3">Tecniche Professionali</h3>
            <p className="text-gray-600">
              Padroneggia le tecniche utilizzate nei ristoranti stellati Michelin e portale nella tua cucina.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--green-lighter)' }}>
              <svg className="w-7 h-7" style={{ color: 'var(--green-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl mb-3">Ingredienti Naturali</h3>
            <p className="text-gray-600">
              Enfatizzando ingredienti freschi, biologici e di provenienza locale in ogni piatto che creiamo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={chefOutdoorImage}
              alt="Chef Giacomo Nanfaro"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl">Incontra lo Chef Giacomo Nanfaro</h3>
            <p className="text-gray-600 leading-relaxed">
              Con anni di esperienza nell'alta cucina e una passione per le tradizioni culinarie italiane, 
              lo Chef Giacomo ha dedicato la sua carriera all'insegnamento alla prossima generazione di chef. 
              Il suo approccio combina tecniche consolidate nel tempo con metodi contemporanei innovativi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alla Nanfy_Lab Academy, crediamo nel potere di ingredienti naturali e di qualità e 
              nell'importanza di comprendere i fondamenti prima di spingersi oltre i confini culinari.
            </p>
            <p className="text-gray-600 leading-relaxed italic font-medium">
              Tutto questo percorso è finalizzato alla creazione della struttura necessaria per arrivare all'apertura fisica del vero e proprio NANFY-LAB.
            </p>
            <button 
              className="px-8 py-3 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--green-primary)' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Unisciti alla Nostra Accademia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
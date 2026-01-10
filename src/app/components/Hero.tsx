import chefImage from "@assets/chef_portrait.png";
import natureBackground from "@assets/lavender_field_texture_1767972628710.png";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${natureBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'var(--green-lighter)', color: 'var(--green-primary)' }}>
              Accademia Culinaria Professionale
            </div>
            <h1 className="text-5xl md:text-6xl tracking-tight">
              L'Arte della <span style={{ color: 'var(--green-primary)' }}>Cucina Italiana</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Impara dallo Chef Giacomo Nanfaro, maestro della gastronomia italiana contemporanea. 
              Scopri i segreti dei piatti signature e porta le tue abilità culinarie a un nuovo livello.
            </p>
            <div className="flex gap-4">
              <button 
                className="px-8 py-3 rounded-full text-white transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--green-primary)' }}
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Scopri i Corsi
              </button>
              <button 
                className="px-8 py-3 rounded-full border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: 'var(--green-primary)', color: 'var(--green-primary)' }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Scopri di Più
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={chefImage}
                alt="Chef Giacomo Nanfaro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-600 mb-1">Chef & Founder</p>
              <p className="text-xl">Giacomo Nanfaro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
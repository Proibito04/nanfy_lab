import chefImage from "@assets/foto_jack.jpeg";
import natureBackground from "@assets/lavender_field_texture_1767972628710.png";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden reveal">
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
          <div className="space-y-8 animate-fade-in-up">
            {/* <div className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--amber-lighter)', color: 'var(--amber-primary)' }}>
              Nanfylab
            </div> */}
            <h1 className="text-5xl md:text-7xl leading-tight font-serif">
              <span className="italic" style={{ color: 'var(--amber-primary)' }}>Nanfy Lab</span>
            </h1>
            <div className="flex gap-4 text-gray-500 font-medium tracking-wide uppercase text-sm">
              <span>- cucina</span>
              <span>- convivialità</span>
              <span>- cultura</span>
              <span>- passione</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
             Dove la cucina unisce le competenze tecniche ai valori, vivi un esperienza esclusiva guidata dallo Chef Giacomo Nanfaro.
            </p>

            {/* Lead Generation Form */}
            <form className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-amber-100 space-y-4 max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/50"
                  required
                />
                <select 
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/50"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Interessa a...</option>
                  <option value="private">Eventi privati</option>
                  <option value="courses">Corsi di cucina</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg active:scale-95"
                style={{ backgroundColor: 'var(--amber-primary)' }}
              >
                Richiedi Informazioni
              </button>
            </form>

            <div className="flex flex-wrap gap-4 pt-2">
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl animate-fade-in-right">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={chefImage}
                alt="Chef Giacomo Nanfaro"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Chef & Founder</p>
              <h2 className="text-white text-3xl font-serif">Giacomo Nanfaro</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

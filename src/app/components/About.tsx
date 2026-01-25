import chefOutdoorImage from "@assets/chef_outdoor.png";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-amber-50/50 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
              <img 
                src={chefOutdoorImage}
                alt="Chi Siamo - Nanfy Lab"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-amber-600 font-serif text-2xl">Passione & <br />Tradizione</p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-serif">Chi Siamo</h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                [Inserire qui la storia della Nanfy Lab e la visione dello Chef. Un racconto che parta dalle radici della tradizione italiana per arrivare alla modernità del laboratorio culinario.]
              </p>
              <p>
                La nostra missione è trasmettere non solo ricette, ma un vero e proprio metodo di lavoro e una filosofia del gusto che mette al centro la qualità delle materie prime e l'eccellenza delle tecniche.
              </p>
              <p className="italic font-serif text-amber-700">
                "Ogni laboratorio è un'opportunità per riscoprire il valore del cibo e la gioia della creazione condivisa."
              </p>
            </div>

            <button 
              className="px-10 py-4 rounded-full text-white font-semibold transition-all hover:shadow-xl active:scale-95"
              style={{ backgroundColor: 'var(--amber-primary)' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Collabora con noi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

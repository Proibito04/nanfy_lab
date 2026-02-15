import chefOutdoorImage from "@assets/chef_portrait.png";

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
            {/* <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-amber-600 font-serif text-2xl">Passione & <br />Tradizione</p>
            </div> */}
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-serif">Chi Siamo</h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>

            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                Il Nanfy lab prende il nome dalla parte iniziale del cognome e della passione dello chef.
                Il laboratorio può avere veste produttiva, creativa e istruttiva. Il laboratorio è molto più di
                una semplice cucina, per noi è esperienze, condivisione, creazione, costruzione, relazioni
                con la cultura e le persone e tutto quello che si può creare da una semplice idea.
              </p>
              <p>
                Dopo anni di esperienze, in varie realtà lavorative, ville, hotel, ristoranti stellati e non, dove
                lo chef ha appreso svariate tecniche e competenze, relazionandosi con maestri in cucina
                e nella vita, ha deciso di portare la sua idea di cucina in giro con questo progetto
                personale per poter riportare tutto quello che gli ha insegnato questo lavoro in un'attività
                propria, anche all'interno delle vostre case, aiutato da collaboratori che condividono la
                sua filosofia di essere e di cucina.
              </p>
              <p className="italic font-serif text-amber-700">
                "Il mio motto?? LA CUCINA È EQUILIBRIO E PIACERE PER TUTTI."
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

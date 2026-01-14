import { ChefHat, Utensils, Briefcase, Play, Home, MapPin, Truck, Users, ShoppingBag, MessageSquare, GraduationCap } from 'lucide-react';

const serviceCategories = [
  {
    title: "1. CORSI E FORMAZIONE",
    icon: <ChefHat className="w-8 h-8" />,
    items: [
      {
        title: "Corsi a domicilio",
        description: "Lezioni private presso il cliente per un'esperienza personalizzata.",
        icon: <Home className="w-5 h-5" />
      },
      {
        title: "Corsi Home Lab",
        description: "Corsi organizzati nel proprio spazio/laboratorio dedicato.",
        icon: <ChefHat className="w-5 h-5" />
      },
      {
        title: "Video corsi",
        description: "Contenuti digitali e lezioni online accessibili ovunque.",
        icon: <Play className="w-5 h-5" />
      }
    ]
  },
  {
    title: "2. RISTORAZIONE ED EVENTI",
    icon: <Utensils className="w-8 h-8" />,
    items: [
      {
        title: "Cene e feste a domicilio",
        description: "Servizio chef per privati, portando l'alta cucina a casa vostra.",
        icon: <Home className="w-5 h-5" />
      },
      {
        title: "Cene Home Lab",
        description: "Esperienze gastronomiche intime nel proprio spazio.",
        icon: <ChefHat className="w-5 h-5" />
      },
      {
        title: "Cene in Location",
        description: "Eventi in collaborazione con spazi esterni e location esclusive.",
        icon: <MapPin className="w-5 h-5" />
      },
      {
        title: "Catering",
        description: "Servizio professionale per eventi e cerimonie di ogni tipo.",
        icon: <Truck className="w-5 h-5" />
      }
    ]
  },
  {
    title: "3. SVILUPPO BUSINESS E COLLABORAZIONI",
    icon: <Briefcase className="w-8 h-8" />,
    items: [
      {
        title: "Collaborazioni",
        description: "Sinergie con altri professionisti, locali e aziende del settore.",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "Merchandising",
        description: "Vendita di prodotti esclusivi a marchio NANFY_LAB.",
        icon: <ShoppingBag className="w-5 h-5" />
      },
      {
        title: "Consulenze",
        description: "Supporto professionale strategico per il settore ristorazione.",
        icon: <MessageSquare className="w-5 h-5" />
      },
      {
        title: "Corsi Professionalizzanti",
        description: "Formazione avanzata mirata all'inserimento lavorativo.",
        icon: <GraduationCap className="w-5 h-5" />
      }
    ]
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dalla formazione alla ristorazione d'eccellenza, fino allo sviluppo del business nel mondo del gusto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-2xl" style={{ backgroundColor: 'var(--amber-lighter)', color: 'var(--amber-primary)' }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              </div>
              
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="group p-6 rounded-2xl border border-amber-100 bg-white hover:shadow-2xl hover:border-amber-200 transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-amber-50 group-hover:scale-110 transition-transform duration-300" style={{ color: 'var(--amber-primary)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
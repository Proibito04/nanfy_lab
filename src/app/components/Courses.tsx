import { ChefHat, Utensils, Briefcase, Play, Home, MapPin, Truck, Users, ShoppingBag, MessageSquare, GraduationCap, FileText } from 'lucide-react';

import cookingClassImg from "@assets/service_cooking_class.png";
import privateDinnerImg from "@assets/service_private_dinner.png";
import videoCoursesImg from "@assets/service_video_courses.png";
import kitchenStudioImg from "@assets/modern_professional_kitchen_studio_1767972592261.png";
import teamBuildingImg from "@assets/service_team_building.png";
import productsImg from "@assets/service_products.png";
import kidsPartyImg from "@assets/service_kids_party.png";
import cateringImg from "@assets/gourmet_catering_exclusive_1767972610833.png";
import consultancyImg from "@assets/service_consultancy.png";
import merchandisingImg from "@assets/service_merchandising.png";
import pastaMakingImg from "@assets/pasta_making_workshop_1767972558943.png";
import homeChefImg from "@assets/private_dinner_home_chef_1767972575839.png";
import menuBambini from "@assets/menu-bambini.pdf";
import menuColazioneSabauda from "@assets/menu-colazione-sabauda.pdf";
import menuMare from "@assets/menu-mare.pdf";


const activeServices = [
  {
    title: "Corsi a domicilio",
    description: "Lezioni private presso il cliente per un'esperienza personalizzata e comoda.",
    icon: <Home className="w-6 h-6" />,
    image: pastaMakingImg
  },
  {
    title: "Eventi privati a domicilio",
    description: "Esperienze gastronomiche intime ed esclusive nel nostro spazio.",
    icon: <Utensils className="w-6 h-6" />,
    image: privateDinnerImg
  },
  {
    title: "Kids Party (Baby Lab)",
    description: "Laboratori educativi e sicuri per i più piccoli: preparazione di tramezzini, profiterole e altro.",
    icon: <Users className="w-6 h-6" />,
    image: kidsPartyImg
  },
  {
    title: "Cene e feste a domicilio",
    description: "Servizio chef per privati, portando l'alta cucina direttamente a casa vostra.",
    icon: <Home className="w-6 h-6" />,
    image: homeChefImg,
    menus: [
      { name: "Menù Bambini", url: menuBambini },
      { name: "Colazione Sabauda", url: menuColazioneSabauda },
      { name: "Menù Mare", url: menuMare }
    ]
  },
  {
    title: "Catering",
    description: "Servizio professionale per eventi e cerimonie di ogni tipo, con menu personalizzati.",
    icon: <Truck className="w-6 h-6" />,
    image: cateringImg
  },
  {
    title: "Cene in Location",
    description: "Eventi in collaborazione con spazi esterni e location esclusive e suggestive.",
    icon: <MapPin className="w-6 h-6" />,
    image: kitchenStudioImg
  },
  {
    title: "Team building",
    description: "Attività di cucina per team aziendali che favoriscono la collaborazione e il divertimento.",
    icon: <Briefcase className="w-6 h-6" />,
    image: teamBuildingImg
  },
];

const wipServices = [
  { title: "Corsi Home Lab", icon: <ChefHat className="w-5 h-5" />, image: cookingClassImg },
  { title: "Video Corsi", icon: <Play className="w-5 h-5" />, image: videoCoursesImg },
  { title: "Merchandising", icon: <ShoppingBag className="w-5 h-5" />, image: merchandisingImg },
  { title: "Consulenze", icon: <MessageSquare className="w-5 h-5" />, image: consultancyImg },
  { title: "Corsi Professionalizzanti", icon: <GraduationCap className="w-5 h-5" />, image: kitchenStudioImg },
  {
    title: "Prodotti nanfy lab",
    description: "Una selezione esclusiva di ingredienti e accessori firmati Nanfy Lab per la tua cucina.",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: productsImg
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-amber-50/30 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri le nostre attività principali e le novità in arrivo nel mondo Nanfy Lab.
          </p>
        </div>

        {/* Active Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {activeServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm" style={{ color: 'var(--amber-primary)' }}>
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-col gap-4">
                  {'menus' in service && service.menus && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(service.menus as { name: string, url: string }[]).map((menu, i) => (
                        <a
                          key={i}
                          href={menu.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-colors border border-amber-200"
                        >
                          <FileText size={14} />
                          {menu.name}
                        </a>
                      ))}
                    </div>
                  )}
                  <button
                    className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors hover:gap-3"
                    style={{ color: 'var(--amber-primary)' }}
                  >
                    Scopri di più <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {wipServices.length > 0 && (
          <div className="border-t border-amber-100 pt-16">
            <h3 className="text-center text-2xl font-serif mb-12 text-gray-500 italic">Prossimamente</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {wipServices.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl border border-dashed border-amber-200 overflow-hidden cursor-not-allowed group transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-white/40 flex flex-col items-center justify-center p-4">
                    <div className="mb-2 text-gray-800 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm font-bold text-gray-900 text-center uppercase tracking-wider">{service.title}</span>
                  </div>
                  <span className="absolute top-2 right-2 bg-amber-200 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                    Prossimamente
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
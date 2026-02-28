import { Link } from 'react-router-dom';
import { ChefHat, ArrowRight } from 'lucide-react';
import cookingClassImg from "@assets/service_cooking_class.png";
import cateringImg from "@assets/gourmet_catering_exclusive_1767972610833.png";
import homeChefImg from "@assets/private_dinner_home_chef_1767972575839.png";
import privateDinnerImg from "@assets/service_private_dinner.png";

export function HomeMenusSection() {
  return (
    <section id="menus" className="py-24 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image composition side */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden">
              <img src={homeChefImg} alt="Chef at home preparing custom menus" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-48 md:w-64 h-48 md:h-64 rounded-[2rem] overflow-hidden border-8 border-white shadow-xl hidden sm:block">
              <img src={cateringImg} alt="Detail of a catering event" className="w-full h-full object-cover" />
            </div>

            {/* Badge */}
            <div className="absolute top-8 -left-6 md:-left-12 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900 border border-amber-100">
                <ChefHat className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">3 Percorsi</p>
                <p className="text-xs text-gray-500">Degustazione</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Scopri i Nostri Menù Esclusivi
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8 rounded-full"></div>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Dall'intima cena a due fino all'evento speciale in famiglia. Abbiamo studiato tre percorsi di degustazione per portare l'alta cucina direttamente sulla tua tavola.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex flex-shrink-0 items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Menù Mare</h4>
                  <p className="text-gray-600">I profumi del Mediterraneo e il pescato più fresco.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex flex-shrink-0 items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Colazione Sabauda</h4>
                  <p className="text-gray-600">L'eleganza della tradizione piemontese reinterpretata.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex flex-shrink-0 items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Menù Bambini</h4>
                  <p className="text-gray-600">Genuinità e sapore pensati per i più piccoli.</p>
                </div>
              </li>
            </ul>

            <Link
              to="/menus"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-900 text-white rounded-full font-bold uppercase tracking-wider hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Guarda tutti i Menù
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

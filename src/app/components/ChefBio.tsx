import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import risottoImg from "@assets/gourmet_risotto_contemporary_1767972543080.png";
import pastaImg from "@assets/pasta_making_workshop_1767972558943.png";
import dinnerImg from "@assets/private_dinner_home_chef_1767972575839.png";
import cateringImg from "@assets/gourmet_catering_exclusive_1767972610833.png";

const signatureDishes = [
  { img: risottoImg, title: "Risotto Contemporaneo", description: "Riso Carnaroli, zafferano in pistilli e oro edibile." },
  { img: pastaImg, title: "Pasta Fresca Artigianale", description: "Tagliatelle all'uovo tirate a mano con ragù bianco." },
  { img: dinnerImg, title: "Cena Privata Exclusive", description: "Menu degustazione personalizzato in location privata." },
  { img: cateringImg, title: "Gourmet Catering", description: "Finger food creativi per eventi aziendali e privati." },
];

export function ChefBio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % signatureDishes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % signatureDishes.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + signatureDishes.length) % signatureDishes.length);

  return (
    <section id="chef-bio" className="py-24 px-6 bg-white overflow-hidden reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-serif">Lo Chef Giacomo Nanfaro</h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            <p className="text-xl text-gray-700 leading-relaxed font-light italic">
              "La mia cucina è un viaggio tra memoria e innovazione. Ogni piatto racconta una storia di territorio, 
              tradizione e ricerca costante della perfezione."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Con oltre quindici anni di esperienza nell'alta ristorazione italiana, lo Chef Giacomo Nanfaro 
              ha sviluppato un approccio unico che combina la rigorosità delle tecniche classiche con l'audacia 
              delle combinazioni contemporanee.
            </p>
            <div className="pt-4">
              <button 
                className="group px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-2xl active:scale-95 flex items-center gap-2"
                style={{ backgroundColor: 'var(--amber-primary)' }}
              >
                Scopri la Filosofia <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            {/* Interactive Carousel */}
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
              {signatureDishes.map((dish, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                >
                  <img 
                    src={dish.img} 
                    alt={dish.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-12">
                    <h3 className="text-white text-3xl font-serif mb-2">{dish.title}</h3>
                    <p className="text-amber-200 font-medium">{dish.description}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {signatureDishes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative background shadow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100/30 rounded-full -z-10 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

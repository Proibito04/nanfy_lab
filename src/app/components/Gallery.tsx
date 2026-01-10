import risottoImage from "@assets/gourmet_risotto_contemporary_1767972543080.png";
import pastaImage from "@assets/pasta_making_giacomo.png";
import dinnerImage from "@assets/private_dinner_home_chef_1767972575839.png";

const dishes = [
  {
    title: "Risotto Contemporaneo",
    description: "La nostra interpretazione moderna del classico risotto",
    image: risottoImage
  },
  {
    title: "Cena Privata",
    description: "Esperienze culinarie esclusive nell'intimità di casa",
    image: dinnerImage
  },
  {
    title: "Pasta Fatta a Mano",
    description: "L'arte della pasta fresca tramandata con passione",
    image: pastaImage
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Piatti Signature</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esplora le creazioni più celebri dello Chef Giacomo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-4">
                <img 
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl mb-2">{dish.title}</h3>
              <p className="text-gray-600">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
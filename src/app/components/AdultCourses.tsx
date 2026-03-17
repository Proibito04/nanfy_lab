import pastaUovoImg from "@assets/corsi/pasta_uovo.jpeg";
import sushiTradizionaleImg from "@assets/corsi/corso_sushi.jpeg";

const adultCourses = [
  {
    title: "PASTA FRESCA ALL’UOVO",
    features: [
      "Impareremo a creare l’impatto perfetto",
      "Apprenderemo un po' di storia sulla pasta",
      "Prepareremo i PLIN, tagliatelle alle erbe e le farfalle",
      "E poi? Assaggeremo ciò che abbiamo preparato"
    ],
    image: pastaUovoImg
  },
  {
    title: "SUSHI TRADIZIONALE",
    features: [
      "Conosceremo cos’è davvero e come è nato il sushi, quello vero, la storia",
      "Impareremo a cuocere il riso in modo tradizionale, a condirlo e tagliare il pesce",
      "Prepareremo 3 tipi di maki e i nigiri",
      "E poi? Assaggeremo tutto il sushi preparato condito dalle curiosità che vi interessano"
    ],
    image: sushiTradizionaleImg
  }
];

export function AdultCourses() {
  return (
    <section id="corsi-adulti" className="py-24 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">I Nostri Corsi per Adulti</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esperienze culinarie coinvolgenti dove la tecnica incontra il gusto in un'atmosfera conviviale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {adultCourses.map((course, index) => (
            <div 
              key={index} 
              className="bg-amber-50/30 rounded-3xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative group">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif mb-6 text-gray-900 uppercase">{course.title}</h3>
                <ul className="space-y-4 flex-1">
                  {course.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

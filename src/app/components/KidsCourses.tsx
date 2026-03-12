import panDiStelleImg from "@assets/corsi/pan_di_stelle.jpeg";
import maniInPastaImg from "@assets/corsi/mani_in_pasta.jpeg";
import picNicImg from "@assets/corsi/pic_nic.jpeg";

const kidsCourses = [
  {
    title: "PREPARIAMO I PAN DI STELLE",
    features: [
      "Impastiamo, cuociamo e decoriamo gli amatissimi biscotti",
      "Prepariamo gli spiedini di frutta con le nostre mani",
      "E poi? Aggiungiamo la spremuta fresca e facciamo merenda con le nostre creazioni"
    ],
    image: panDiStelleImg
  },
  {
    title: "MANI IN PASTA",
    features: [
      "Con uova e farina creiamo delle buonissime tagliatelle",
      "Continuiamo con le mani in pasta per fare le farfalle più buone mai provate",
      "E poi? Assaggiamo la pasta preparata prima con le nostre mani"
    ],
    image: maniInPastaImg
  },
  {
    title: "PIC NIC",
    features: [
      "Componiamo il nostro sandwich preferito scegliendo tra 6 ingredienti golosi",
      "Prepariamo degli ottimi spiedini di frutta fresca",
      "E poi? Aggiungiamo la spremuta e facciamo merenda sulle tovaglie da pic nic"
    ],
    image: picNicImg
  }
];

export function KidsCourses() {
  return (
    <section id="kids-courses" className="py-24 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">I Corsi per i Piccoli Chef</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Laboratori educativi, divertenti e sicuri dove i bambini imparano a cucinare giocando e gustando le loro creazioni.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {kidsCourses.map((course, index) => (
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
                <h3 className="text-2xl font-serif mb-6 text-gray-900">{course.title}</h3>
                <ul className="space-y-4 flex-1">
                  {course.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
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

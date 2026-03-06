import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Recupera dinamicamente tutte le immagini dalla cartella galleria
const imagesRecord = import.meta.glob('@assets/galleria/**/*.{jpg,JPG,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

const imagesData = Object.entries(imagesRecord).map(([path, module]) => {
  const pathParts = path.split('/galleria/');
  const category = pathParts.length > 1 ? pathParts[1].split('/')[0].toLowerCase() : 'other';
  return {
    src: module as string,
    category
  };
});

const categories = ['tutti', 'corsi', 'piatti', 'eventi privati'];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('tutti');

  const filteredImages = imagesData.filter(img =>
    activeCategory === 'tutti' || img.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl mb-4">La nostra galleria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esplora i momenti e le creazioni del mondo Nanfy Lab
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${activeCategory === cat
                  ? 'bg-amber-800 text-white'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {filteredImages.map((img, index) => (
              <div key={img.src} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={img.src}
                    alt={`Galleria ${img.category} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500 block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
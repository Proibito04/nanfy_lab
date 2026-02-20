import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Recupera dinamicamente tutte le immagini dalla cartella galleria
const imagesRecord = import.meta.glob('@assets/galleria/**/*.{jpg,JPG,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });
const images = Object.values(imagesRecord) as string[];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">La nostra galleria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esplora i momenti e le creazioni del mondo Nanfy Lab
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {images.map((imgSrc, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={imgSrc}
                    alt={`Galleria ${index + 1}`}
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
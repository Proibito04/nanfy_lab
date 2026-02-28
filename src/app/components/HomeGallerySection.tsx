import { Link } from 'react-router-dom';
import coverPhoto from '@assets/gourmet_risotto_contemporary_1767972543080.png';

export function HomeGallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">La nostra galleria</h2>
          <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Esplora i momenti e le creazioni del mondo Nanfy Lab
          </p>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer aspect-video md:aspect-[21/9]">
            <Link to="/galleria">
              <img
                src={coverPhoto}
                alt="Galleria Copertina"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl font-serif border-2 border-white px-8 py-4 rounded-full backdrop-blur-sm group-hover:bg-white/10 transition-all">
                  Scopri la Galleria
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

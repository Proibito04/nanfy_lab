import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [searchParams, setSearchParams] = useSearchParams();
  const photoIndex = searchParams.get('photo');
  const selectedIndex = photoIndex ? parseInt(photoIndex, 10) - 1 : -1;

  const openLightbox = (index: number) => {
    setSearchParams({ photo: (index + 1).toString() });
  };

  const closeLightbox = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete('photo');
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  const showNext = useCallback(() => {
    if (selectedIndex < filteredImages.length - 1) {
      setSearchParams({ photo: (selectedIndex + 2).toString() });
    } else {
      setSearchParams({ photo: "1" }); // Loop back to start
    }
  }, [selectedIndex, filteredImages.length, setSearchParams]);

  const showPrev = useCallback(() => {
    if (selectedIndex > 0) {
      setSearchParams({ photo: selectedIndex.toString() });
    } else {
      setSearchParams({ photo: filteredImages.length.toString() }); // Loop back to end
    }
  }, [selectedIndex, filteredImages.length, setSearchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === -1) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  return (
    <>
      <section id="gallery" className="py-20 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl mb-4 text-amber-900">La nostra galleria</h2>
          <p className="text-lg text-amber-800/80 max-w-2xl mx-auto">
            Esplora i momenti e le creazioni del mondo Nanfy Lab
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                // Clear photo when switching category to avoid confusion
                const params = new URLSearchParams(searchParams);
                params.delete('photo');
                setSearchParams(params);
              }}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${activeCategory === cat
                ? 'bg-amber-800 text-white shadow-lg'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200 hover:scale-105'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {filteredImages.map((img, index) => (
              <div
                key={img.src}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={img.src}
                    alt={`Galleria ${img.category} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 block"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-amber-800/80 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Visualizza
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {selectedIndex >= 0 && filteredImages[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={filteredImages[selectedIndex].src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedIndex].src}
                alt={`Galleria a schermo intero ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-white text-center">
                <p className="text-lg font-medium capitalize mb-1">
                  {filteredImages[selectedIndex].category}
                </p>
                <p className="text-sm text-white/60">
                  Immagine {selectedIndex + 1} di {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
  </>
  );
}
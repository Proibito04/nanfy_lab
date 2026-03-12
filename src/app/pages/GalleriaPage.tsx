import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Gallery } from '../components/Gallery';

export function GalleriaPage() {
  return (
    <main className="min-h-screen bg-amber-50/20 pt-32 pb-24">
      <Helmet>
        <title>Galleria | Nanfylab</title>
        <meta name="description" content="Esplora la galleria di Nanfylab: scopri le foto dei nostri piatti, eventi e corsi di cucina." />
        <link rel="canonical" href="https://www.nanfylab.it/galleria" />
        <meta property="og:title" content="Galleria | Nanfylab" />
        <meta property="og:description" content="Esplora la galleria di Nanfylab: piatti, eventi e corsi di cucina." />
        <meta property="og:url" content="https://www.nanfylab.it/galleria" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-900 hover:text-amber-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Torna alla Home
        </Link>
      </div>
      <div className="">
        <Gallery />
      </div>
    </main>
  );
}

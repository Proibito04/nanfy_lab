import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Gallery } from '../components/Gallery';

export function GalleriaPage() {
  return (
    <main className="min-h-screen bg-amber-50/20 pt-32 pb-24">
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

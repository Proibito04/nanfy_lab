import { Helmet } from 'react-helmet-async';
import { KidsCourses } from '../components/KidsCourses';

export function KidsLabPage() {
  return (
    <main className="mt-28 min-h-screen">
      <Helmet>
        <title>Kids Lab | Corsi di Cucina per Bambini | Nanfylab</title>
        <meta name="description" content="I Corsi per i Piccoli Chef: laboratori educativi, divertenti e sicuri dove i bambini imparano a cucinare giocando." />
        <link rel="canonical" href="https://www.nanfylab.it/kids-lab" />
      </Helmet>
      
      <div className="py-12">
        <KidsCourses />
      </div>
    </main>
  );
}

import { Helmet } from 'react-helmet-async';
import { AdultCourses } from '../components/AdultCourses';

export function AdultCoursesPage() {
  return (
    <main className="mt-28 min-h-screen">
      <Helmet>
        <title>Corsi per Adulti | Cucina e Tradizione | Nanfylab</title>
        <meta name="description" content="Scopri i nostri corsi di cucina per adulti: dalla pasta fresca al sushi tradizionale. Impara le tecniche dai professionisti in un'atmosfera conviviale." />
        <link rel="canonical" href="https://www.nanfylab.it/corsi-per-adulti" />
      </Helmet>
      
      <div className="py-12">
        <AdultCourses />
      </div>
    </main>
  );
}

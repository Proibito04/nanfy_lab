import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import natureBackground from "@assets/1dc5f631f35b3a6d410673a2b209c76520a8df65.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden reveal">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `url(${natureBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Contattaci</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pronto per iniziare il tuo viaggio culinario? Contattaci per saperne di più sui nostri corsi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Informazioni di Contatto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--amber-lighter)' }}>
                    <Mail className="w-5 h-5" style={{ color: 'var(--amber-primary)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p>info@nanfylab.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--amber-lighter)' }}>
                    <Phone className="w-5 h-5" style={{ color: 'var(--amber-primary)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Telefono</p>
                    <p>+39 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--amber-lighter)' }}>
                    <MapPin className="w-5 h-5" style={{ color: 'var(--amber-primary)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sede</p>
                    <p className="mb-2">Milano, Italia</p>
                    <a 
                      href="https://maps.google.com/?q=Nanfy+Lab+Milano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold flex items-center gap-1 hover:underline"
                      style={{ color: 'var(--amber-primary)' }}
                    >
                      Vedi su Google Maps <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="mb-4">Orari dell'Accademia</h4>
              <div className="space-y-2 text-gray-600">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 10:00 - 16:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--amber-primary)] focus:ring-2 focus:ring-[var(--amber-lighter)] transition-all"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--amber-primary)] focus:ring-2 focus:ring-[var(--amber-lighter)] transition-all"
                  placeholder="tua.email@esempio.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">Numero di Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--amber-primary)] focus:ring-2 focus:ring-[var(--amber-lighter)] transition-all"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="course" className="block mb-2">Corso di Interesse</label>
                <input
                  type="text"
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--amber-primary)] focus:ring-2 focus:ring-[var(--amber-lighter)] transition-all"
                  placeholder="Inserisci il nome del corso"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Messaggio</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--amber-primary)] focus:ring-2 focus:ring-[var(--amber-lighter)] transition-all resize-none"
                  placeholder="Raccontaci del tuo interesse per i nostri corsi..."
                />
              </div>

                <button
                type="submit"
                className="w-full py-4 rounded-full text-white font-semibold transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
                style={{ backgroundColor: 'var(--amber-primary)' }}
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

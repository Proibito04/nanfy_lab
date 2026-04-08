import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import natureBackground from "@assets/1dc5f631f35b3a6d410673a2b209c76520a8df65.png";
import { toast } from 'sonner';

export function Contact() {
  const { hash } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (hash === '#contact') {
      const emailInput = document.getElementById('email');
      if (emailInput) {
        setTimeout(() => {
          emailInput.focus();
        }, 800); // More delay for cross-page navigation and smooth scroll
      }
    }
  }, [hash]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const getWhatsAppLink = (data: typeof formData) => {
    const baseUrl = "https://wa.me/393532127987";
    const text = `Ciao! Mi chiamo *${data.name}*.
*Email*: ${data.email}
*Telefono*: ${data.phone || 'Non fornito'}
*Servizio*: ${data.course || 'Generale'}

*Messaggio*:
${data.message}`;

    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Messaggio inviato con successo!');

        // Open WhatsApp link after successful submission
        const whatsappUrl = getWhatsAppLink(formData);
        window.open(whatsappUrl, '_blank');

        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      } else {
        toast.error(data.message || 'Errore durante l\'invio. Riprova più tardi.');
      }
    } catch (error) {
      toast.error('Errore di connessione. Riprova più tardi.');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
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
                    <p>+39 353 212 7987</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--amber-lighter)' }}>
                    <MapPin className="w-5 h-5" style={{ color: 'var(--amber-primary)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sede</p>
                    <p className="mb-2">Torino, Italia</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/393532127987?text=Ciao%2C%20vorrei%20avere%20maggiori%20informazioni%20sui%20vostri%20servizi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="mb-4">Orari di ufficio/prenotazioni</h4>
              <div className="space-y-2 text-gray-600">
                <p>Lunedì - Venerdì: 9:30 - 17:00</p>
                {/* <p>Sabato: 10:00 - 14:00</p> */}
                <p>Sabato e Domenica: Chiuso</p>
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
                  placeholder="+39 353 212 7987"
                />
              </div>

              <div>
                <label htmlFor="course" className="block mb-2">Servizio di Interesse</label>
                <input
                  type="text"
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--amber-primary)] focus:ring-2 focus:ring-[var(--amber-lighter)] transition-all"
                  placeholder="Inserisci il nome del servizio"
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

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-full text-white font-semibold transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  style={{ backgroundColor: 'var(--amber-primary)' }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    'Invia una Mail'
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => window.open(getWhatsAppLink(formData), '_blank')}
                  className="w-full py-4 rounded-full text-white font-semibold transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contattaci su WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

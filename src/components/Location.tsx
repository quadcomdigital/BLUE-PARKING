import React from 'react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="posizione" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl -ml-32 -mt-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl mb-6">Dove trovarci</h2>
            <p className="text-lg text-slate-600 mb-10">
              Siamo situati sulla Strada Statale 113, nel comune di Cinisi, in una posizione ideale per chi deve raggiungere l'aeroporto di Palermo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Indirizzo</h4>
                  <p className="text-slate-600">Contrada San Giovanni, SS 113 Settentrionale Sicula</p>
                  <p className="text-slate-500 text-sm">90045 Cinisi (PA)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Telefono</h4>
                  <p className="text-slate-600">+39 091 123 4567</p>
                  <p className="text-slate-600">+39 333 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email</h4>
                  <p className="text-slate-600">blueparkingpalermo@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://www.google.com/maps/search/Contrada+San+Giovanni,+SS+113+Settentrionale+Sicula,+90045+Cinisi+PA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-brand-accent/20"
              >
                <Navigation className="h-5 w-5" />
                Ottieni Indicazioni
              </a>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <iframe 
              src="https://maps.google.com/maps?q=Contrada+San+Giovanni,+SS+113+Settentrionale+Sicula,+90045+Cinisi+PA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Cinisi Parking"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

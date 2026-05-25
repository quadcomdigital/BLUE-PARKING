import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onHomeClick?: () => void;
}

export default function Footer({ onHomeClick }: FooterProps) {
  return (
    <footer id="contatti" className="bg-brand-dark text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <button 
              onClick={onHomeClick}
              className="flex items-center mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src="https://i.postimg.cc/LhQ0fHhS/Blue-Parking.png" 
                  alt="Blue Parking Logo" 
                  className="h-20 w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>
            <p className="text-slate-400 leading-relaxed mb-6">
              Il tuo parcheggio di fiducia a Cinisi. Sicurezza, comodità e cortesia per il tuo viaggio dall'aeroporto di Palermo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-brand-accent transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-brand-accent transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-brand-accent transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0" />
                <span className="text-sm">Contrada San Giovanni, SS 113 Settentrionale Sicula, 90045 Cinisi PA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <span className="text-sm">+39 351 382 4110</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <span className="text-sm">blueparkingpalermo@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Link Rapidi</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#servizi" className="hover:text-brand-accent transition-colors">Servizi</a></li>
              <li><a href="#recensioni" className="hover:text-brand-accent transition-colors">Recensioni</a></li>
              <li><a href="#posizione" className="hover:text-brand-accent transition-colors">Dove Siamo</a></li>
              <li><a href="#blog" className="hover:text-brand-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Orari</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Lunedì - Domenica</span>
                <span className="text-brand-muted font-medium">24/24h</span>
              </li>
              <li className="flex justify-between">
                <span>Festivi</span>
                <span className="text-brand-muted font-medium">Aperto</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Cinisi Airport Parking. Tutti i diritti riservati. P.IVA 01234567890</p>
        </div>
      </div>
    </footer>
  );
}

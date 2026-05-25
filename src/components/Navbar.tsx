import React from 'react';
import { Plane, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  onHomeClick?: () => void;
}

export default function Navbar({ onHomeClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <button 
            onClick={onHomeClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://i.postimg.cc/LhQ0fHhS/Blue-Parking.png" 
              alt="Blue Parking Logo" 
              className="h-24 w-auto mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servizi" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Servizi</a>
            <a href="#recensioni" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Recensioni</a>
            <a href="#posizione" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Dove Siamo</a>
            <a href="#blog" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Blog</a>
            <a href="#contatti" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Contatti</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+390911234567" 
              className="flex items-center gap-2 bg-brand-muted/10 text-brand-dark px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-muted/20 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="inline">Prenota Ora</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

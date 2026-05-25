import React from 'react';
import { Shield, Clock, Bus, MapPin, CreditCard, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sicurezza 24/7',
    description: 'Videosorveglianza h24 e personale presente in sede per garantire la massima protezione.'
  },
  {
    icon: Bus,
    title: 'Navetta Gratuita',
    description: 'Trasferimento immediato da e per l\'aeroporto Falcone-Borsellino in soli 5 minuti.'
  },
  {
    icon: Clock,
    title: 'Sempre Aperto',
    description: 'Siamo operativi 365 giorni l\'anno, 24 ore su 24, per accoglierti a qualsiasi ora.'
  },
  {
    icon: MapPin,
    title: 'Posizione Strategica',
    description: 'Situato sulla SS113 a Cinisi, facilissimo da raggiungere e vicinissimo all\'Aeroporto Falcone e Borsellino.'
  },
  {
    icon: CreditCard,
    title: 'Prezzi Competitivi',
    description: 'Le migliori tariffe con sconti per soste a lungo termine.'
  },
  {
    icon: Wrench,
    title: 'Assistenza',
    description: 'Ripristino in caso di cali di batteria o perdita di pressione pneumatici.'
  }
];

export default function Features() {
  return (
    <section id="servizi" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-muted/10 rounded-full blur-3xl -ml-32 -mb-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Perché scegliere noi?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Offriamo un servizio professionale e curato nei minimi dettagli per rendere la tua partenza serena.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-accent hover:bg-white/10 hover:scale-[1.03] hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-300 group cursor-default"
            >
              <div className="bg-brand-accent w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

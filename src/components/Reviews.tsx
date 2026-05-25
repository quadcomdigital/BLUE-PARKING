import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Giuseppe R.",
    rating: 5,
    text: "Servizio impeccabile. La navetta è stata puntualissima sia all'andata che al ritorno. Personale molto gentile.",
    date: "2 settimane fa"
  },
  {
    name: "Maria V.",
    rating: 5,
    text: "Prezzo onesto e massima sicurezza. Ho lasciato l'auto per 10 giorni e l'ho ritrovata in perfette condizioni.",
    date: "1 mese fa"
  },
  {
    name: "Francesco L.",
    rating: 4,
    text: "Vicinissimo all'aeroporto. Molto comodo il fatto di poter prenotare online in pochi secondi.",
    date: "3 giorni fa"
  }
];

export default function Reviews() {
  return (
    <section id="recensioni" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Cosa dicono i nostri clienti</h2>
          <p className="mt-4 text-lg text-slate-300">
            La soddisfazione dei nostri clienti è la nostra priorità assoluta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-brand-dark/5 border border-slate-100 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-muted/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? 'text-brand-accent fill-brand-accent' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-brand-dark">{review.name}</span>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

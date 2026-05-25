import React, { useRef } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Article } from '../types';

export const articles: Article[] = [
  {
    title: "Parcheggio Aeroporto vicino Palermo",
    excerpt: `Trovare un parcheggio aeroporto vicino Palermo può sembrare complicato, soprattutto nei periodi di alta stagione. Se stai partendo dall’Aeroporto Falcone Borsellino, scegliere in anticipo dove lasciare la tua auto è fondamentale per risparmiare tempo, denaro e partire senza preoccupazioni.

In questa guida scoprirai le migliori soluzioni di parcheggio, i servizi disponibili e tutti i consigli utili per individuare l’opzione più adatta alle tue esigenze.

Perché scegliere un parcheggio vicino all’aeroporto di Palermo

Optare per un parcheggio nelle vicinanze dell’aeroporto offre numerosi vantaggi:

Prezzi più convenienti rispetto ai parcheggi ufficiali
Maggiore disponibilità di posti, anche nei periodi di punta
Servizi aggiuntivi come navetta gratuita o car valet
Sicurezza garantita con videosorveglianza e personale qualificato

Molti parcheggi privati si trovano a pochi minuti dal terminal e offrono un servizio rapido ed efficiente, ideale sia per viaggi brevi che lunghi.

I vantaggi della prenotazione online

Prenotare in anticipo il tuo parcheggio aeroporto vicino Palermo ti consente di:

Bloccare il prezzo più conveniente
Evitare il rischio di posti esauriti
Accedere a offerte e sconti esclusivi
Organizzare meglio il tuo viaggio

Tra le soluzioni più affidabili puoi considerare 👉 https://www.blueparkingpalermo.it
, un servizio professionale che offre parcheggi custoditi, assistenza continua e trasferimenti rapidi da e verso l’aeroporto.

Sicurezza e servizi: cosa valutare

Quando scegli un parcheggio, è importante considerare alcuni aspetti fondamentali:

Videosorveglianza attiva 24/7
Presenza di personale qualificato
Assicurazione sul veicolo
Facilità di accesso e tempi di trasferimento
Recensioni degli utenti

Un buon parcheggio deve garantire non solo convenienza, ma anche tranquillità durante tutta la durata del viaggio.`,
    image: "https://i.postimg.cc/Xv9kkCDF/Aeroporto-dallalto-large.jpg",
    date: "30 Aprile 2026"
  },
  {
    title: "Parcheggio Aeroporto Falcone Borsellino",
    excerpt: `Se stai cercando un parcheggio all’Aeroporto Falcone Borsellino di Palermo, questa guida completa ti aiuterà a trovare la soluzione più conveniente e sicura per la tua auto. L’aeroporto di Palermo, noto anche come Aeroporto Falcone Borsellino, è uno degli scali più trafficati della Sicilia, e scegliere il parcheggio giusto può fare davvero la differenza in termini di comfort, tempo e risparmio.

All’interno di questo articolo analizziamo le diverse opzioni disponibili, dai parcheggi low cost ideali per soste lunghe, fino ai parcheggi ufficiali per chi cerca la massima vicinanza al terminal. Scoprirai i vantaggi dei parcheggi con servizio navetta gratuito, attivi 24 ore su 24, e delle soluzioni con car valet, perfette per chi desidera lasciare l’auto direttamente in aeroporto senza stress.

Tra le alternative più apprezzate dai viaggiatori, puoi valutare servizi professionali e convenienti come 👉 https://www.blueparkingpalermo.it
, che offre parcheggi custoditi, assistenza continua e tariffe competitive a pochi minuti dall’aeroporto. Prenotare online in anticipo consente non solo di assicurarsi il posto auto, ma anche di accedere a offerte dedicate e risparmiare fino al 50% rispetto alle tariffe standard.

Inoltre, troverai consigli pratici su come scegliere il parcheggio migliore in base alla durata del viaggio, al budget e alle tue esigenze specifiche. Approfondiamo aspetti fondamentali come la sicurezza delle aree di sosta, la copertura assicurativa, la videosorveglianza e la facilità di accesso.

Che tu stia pianificando una vacanza o un viaggio di lavoro, scegliere il giusto parcheggio aeroporto Palermo ti permetterà di partire in totale tranquillità. Leggi la guida completa e scopri come ottimizzare la tua esperienza di viaggio fin dal momento in cui lasci l’auto.`,
    image: "https://i.postimg.cc/MH75Zj1n/aeroporto-palermo-parcheggio.jpg",
    date: "28 Aprile 2026"
  },
  {
    title: "Parcheggio Cinisi",
    excerpt: `Se stai cercando un parcheggio a Cinisi comodo, sicuro e conveniente, questa guida ti aiuta a scegliere la soluzione migliore vicino all’Aeroporto Falcone Borsellino. Cinisi rappresenta una posizione strategica per chi deve partire da Palermo, grazie alla vicinanza al terminal e alla presenza di numerosi parcheggi attrezzati con servizi moderni.

Scopri le migliori opzioni di parcheggio low cost a Cinisi, ideali per soste brevi e lunghe, con navetta gratuita h24 e sistemi di sicurezza come videosorveglianza e custodia continua. Approfondiamo prezzi, tipologie di parcheggio (coperto e scoperto) e servizi aggiuntivi come il car valet, perfetto per chi desidera il massimo della comodità.

Prenotando online puoi risparmiare tempo e denaro, assicurandoti il posto auto anche nei periodi di maggiore affluenza. Tra le soluzioni disponibili puoi valutare anche 👉 https://www.blueparkingpalermo.it
, un servizio affidabile e professionale a pochi minuti dall’aeroporto.

Che tu parta per lavoro o per vacanza, scegliere un parcheggio a Cinisi vicino all’aeroporto di Palermo ti permette di viaggiare senza stress, con la certezza di lasciare la tua auto in un luogo sicuro e facilmente accessibile.`,
    image: "https://i.postimg.cc/6pM8J54B/wis-JTKuaaz-Fr-Qisptqpo.jpg",
    date: "25 Aprile 2026"
  }
];

interface BlogProps {
  onArticleClick?: (article: Article) => void;
}

export default function Blog({ onArticleClick }: BlogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Il nostro Blog</h2>
            <p className="mt-4 text-lg text-slate-600">
              Consigli di viaggio, guide locali e novità sul mondo dei parcheggi.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-slate-200 text-brand-dark hover:bg-brand-dark hover:text-white transition-all shadow-lg shadow-brand-dark/5"
              aria-label="Precedente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-slate-200 text-brand-dark hover:bg-brand-dark hover:text-white transition-all shadow-lg shadow-brand-dark/5"
              aria-label="Successivo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onArticleClick?.(article)}
              className="flex-none w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-start group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-brand-dark/5 transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-brand-accent" />
                  {article.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors line-clamp-2 h-14">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group-hover:gap-3 transition-all">
                  Leggi di più
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

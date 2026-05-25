import React, { useEffect } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Article } from '../types';
import Blog from './Blog';

interface BlogPostProps {
  article: Article;
  onBack: () => void;
  onArticleClick: (article: Article) => void;
}

export default function BlogPost({ article, onBack, onArticleClick }: BlogPostProps) {
  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <div className="pt-56 lg:pt-64 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 1. Immagine in alto */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-brand-dark flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-accent" />
              {article.date}
            </div>
          </div>

          {/* 2. Descrizione sotto */}
          <div className="max-w-4xl mx-auto mb-24">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-brand-dark mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="text-xl font-medium text-slate-900 mb-6 whitespace-pre-wrap">
                {article.excerpt}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Altri articoli sotto */}
        <div className="border-t border-slate-100 pt-24">
          <Blog onArticleClick={onArticleClick} />
        </div>
      </div>
    </div>
  );
}

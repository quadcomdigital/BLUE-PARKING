import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import { Article } from './types';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      <Navbar onHomeClick={handleBackToHome} />
      <main>
        {selectedArticle ? (
          <BlogPost 
            article={selectedArticle} 
            onBack={handleBackToHome} 
            onArticleClick={handleArticleClick}
          />
        ) : (
          <>
            <Hero />
            <Features />
            <Location />
            <Reviews />
            <Blog onArticleClick={handleArticleClick} />
          </>
        )}
      </main>
      <Footer onHomeClick={handleBackToHome} />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/393513824110" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 hover:rotate-12 transition-all group"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-8 md:w-8 fill-white/20" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 hidden md:block transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Hai bisogno di aiuto?
        </span>
      </a>
    </div>
  );
}

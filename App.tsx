import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ScienceSection } from './components/ScienceSection';
import { IngredientsSection } from './components/IngredientsSection';
import { StepsSection } from './components/StepsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { SocialProofWidget } from './components/SocialProofWidget';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensação para o menu fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-medium shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-brand-primary">Gel Flex</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {/* Links usando função de rolagem manual para garantir funcionamento */}
              <a href="#comparativo" onClick={(e) => handleScroll(e, 'comparativo')} className="text-brand-dark hover:text-brand-primary transition font-medium cursor-pointer text-sm tracking-wide">O Problema</a>
              <a href="#ciencia" onClick={(e) => handleScroll(e, 'ciencia')} className="text-brand-dark hover:text-brand-primary transition font-medium cursor-pointer text-sm tracking-wide">A Solução</a>
              <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="text-brand-dark hover:text-brand-primary transition font-medium cursor-pointer text-sm tracking-wide">Dúvidas</a>
              <a href="#comprar" onClick={(e) => handleScroll(e, 'comprar')} className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold hover:bg-brand-dark transition shadow-md cursor-pointer text-sm transform hover:-translate-y-0.5 duration-200">
                Quero Comprar
              </a>
            </div>
            {/* Mobile menu button - Aumentada área de toque */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-brand-dark focus:outline-none p-2 rounded-md hover:bg-brand-light transition"
                aria-label="Menu principal"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu com melhor espaçamento para toque */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-brand-medium shadow-xl absolute w-full left-0 top-16">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a href="#comparativo" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-primary transition-colors" onClick={(e) => handleScroll(e, 'comparativo')}>O Problema</a>
              <a href="#ciencia" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-primary transition-colors" onClick={(e) => handleScroll(e, 'ciencia')}>A Solução</a>
              <a href="#faq" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-primary transition-colors" onClick={(e) => handleScroll(e, 'faq')}>Dúvidas</a>
              <div className="pt-2">
                <a href="#comprar" className="block w-full text-center px-4 py-4 rounded-xl text-base font-bold text-white bg-brand-primary shadow-lg active:scale-95 transition-transform" onClick={(e) => handleScroll(e, 'comprar')}>
                  Quero Comprar
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <IngredientsSection />
        <ScienceSection />
        <StepsSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
      </main>

      <Footer />
      <SocialProofWidget />
      <FloatingCTA />
    </div>
  );
}
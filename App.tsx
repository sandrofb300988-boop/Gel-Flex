import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ScienceSection } from './components/ScienceSection';
import { StepsSection } from './components/StepsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

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
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-brand-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-brand-primary">Gel Flex</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {/* Links usando função de rolagem manual para garantir funcionamento */}
              <a href="#comparativo" onClick={(e) => handleScroll(e, 'comparativo')} className="text-brand-dark hover:text-brand-primary transition font-medium cursor-pointer">O Problema</a>
              <a href="#ciencia" onClick={(e) => handleScroll(e, 'ciencia')} className="text-brand-dark hover:text-brand-primary transition font-medium cursor-pointer">A Solução</a>
              <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="text-brand-dark hover:text-brand-primary transition font-medium cursor-pointer">Dúvidas</a>
              <a href="#comprar" onClick={(e) => handleScroll(e, 'comprar')} className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold hover:bg-brand-dark transition shadow-md cursor-pointer">
                Quero Comprar
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-brand-medium">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#comparativo" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-light" onClick={(e) => handleScroll(e, 'comparativo')}>O Problema</a>
              <a href="#ciencia" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-light" onClick={(e) => handleScroll(e, 'ciencia')}>A Solução</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-light" onClick={(e) => handleScroll(e, 'faq')}>Dúvidas</a>
              <a href="#comprar" className="block px-3 py-2 rounded-md text-base font-bold text-brand-primary bg-brand-light" onClick={(e) => handleScroll(e, 'comprar')}>Quero Comprar</a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ScienceSection />
        <StepsSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
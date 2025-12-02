import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "A depilação dói muito?",
    answer: "A dor é significativamente menor do que a cera tradicional. Como o Gel Flex utiliza calor suave e adere principalmente ao pelo (e não à pele), o puxão é muito menos agressivo e irritante."
  },
  {
    question: "Posso usar em pele sensível?",
    answer: "Sim! A fórmula é 100% natural, rica em ingredientes como mel e óleos vegetais que hidratam profundamente e protegem a barreira cutânea, minimizando riscos de alergias."
  },
  {
    question: "Quais ingredientes eu vou precisar?",
    answer: "Você vai precisar de itens simples da sua despensa: amido de milho (maizena), gelatina incolor, mel puro, óleo vegetal (como coco ou semente de uva) e água filtrada."
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer: "Como o método remove os pelos desde a raiz (bulbo), o resultado de pele lisa costuma durar entre 20 a 30 dias, variando conforme o ciclo de crescimento individual."
  },
  {
    question: "Serve para pelos grossos?",
    answer: "O Gel Flex é extremamente eficaz em pelos finos e médios. Para pelos muito resistentes, recomendamos aplicar uma camada levemente mais espessa para maior tração."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove initial hidden/offset state
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            // Add visible/final state
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden scroll-mt-24" ref={sectionRef}>
      {/* Elementos decorativos de fundo luxuoso */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-medium/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out will-change-transform">
          <span className="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Suporte Exclusivo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
            Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent mx-auto"></div>
        </div>
        
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              // Wrapper para Animação de Entrada (Intersection Observer)
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out will-change-transform"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card com Estilo Visual e Interatividade Hover */}
                <div 
                  className={`
                    group rounded-xl border transition-all duration-300 ease-out relative overflow-hidden
                    ${isOpen 
                      ? 'bg-white border-brand-primary/30 shadow-lg scale-[1.01]' 
                      : 'bg-white/80 backdrop-blur-sm border-brand-medium/20 hover:bg-white hover:border-brand-primary/30 hover:shadow-lg hover:scale-[1.01]'
                    }
                  `}
                >
                  {/* Subtle Noise Texture for Luxury Feel */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.04] pointer-events-none mix-blend-multiply"></div>
                  
                  {/* Gentle Gradient Sheen when active */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-medium/10 transition-opacity duration-500 pointer-events-none ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>

                  <h3 className="relative z-10">
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="w-full px-8 py-7 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded-xl"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-brand-primary font-medium' : 'text-brand-dark'}`}>
                        {faq.question}
                      </span>
                      
                      <div className={`
                        flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border border-transparent
                        ${isOpen 
                          ? 'bg-brand-primary text-white rotate-180 shadow-md' 
                          : 'bg-brand-light text-brand-dark group-hover:bg-white group-hover:border-brand-medium/30'
                        }
                      `}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                  </h3>
                  
                  <div 
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`
                      relative z-10 overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className={`
                      px-8 pb-8 pt-2 text-gray-600 font-light leading-relaxed text-lg font-sans
                      transform transition-all duration-500 ease-out
                      ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
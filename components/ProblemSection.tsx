import React, { useEffect, useRef } from 'react';
import { Flame, Ban, ShieldAlert, CalendarX } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove initial hidden/offset states (support both 12 and 8 sizes)
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'translate-y-8');
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

  // Updated baseCardClass:
  // - duration-1000: Slow, luxurious entrance animation
  // - translate-y-8: Subtle slide-up distance (32px)
  // - hover:duration-300: Fast response when user interacts
  const baseCardClass = "p-8 rounded-3xl transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-on-scroll hover:scale-105 hover:shadow-lg hover:duration-300";

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background decorative element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-light to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-16">
          <h2 className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">O Problema Tradicional</h2>
          <p className="text-4xl leading-tight font-bold text-brand-dark font-serif sm:text-5xl mb-6">
            Beleza não precisa ser<br/><span className="italic text-brand-primary">um sacrifício.</span>
          </p>
          <p className="max-w-2xl text-lg text-gray-500 mx-auto font-light leading-relaxed">
            Por que continuar com métodos que agridem, queimam e irritam? Sua pele é um órgão vivo que merece respeito e delicadeza.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 - Vermelho Suave */}
          <div className={`${baseCardClass} bg-red-50 delay-100`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Flame className="w-7 h-7 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Dor Intensa</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Cera quente arranca camadas saudáveis da pele, causando dor aguda e vermelhidão desnecessária.
            </p>
          </div>

          {/* Card 2 - Laranja Suave */}
          <div className={`${baseCardClass} bg-orange-50 delay-300`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <ShieldAlert className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Irritação</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Lâminas cortam o pelo de forma chanfrada, facilitando encravamentos e causando a famosa "lixa".
            </p>
          </div>

          {/* Card 3 - Roxo Suave */}
          <div className={`${baseCardClass} bg-purple-50 delay-500`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Ban className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Química Forte</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Cremes depilatórios usam tioglicolato e outros químicos que desequilibram o pH natural da pele.
            </p>
          </div>

          {/* Card 4 - Azul Suave */}
          <div className={`${baseCardClass} bg-blue-50 delay-700`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <CalendarX className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Escravidão</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Métodos rápidos duram pouco. Em dois dias, você já sente a textura áspera voltando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
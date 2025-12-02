import React, { useEffect, useRef } from 'react';
import { ChevronRight, Star, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for Title Animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Parallax Effect Logic
    let animationFrameId: number;
    
    const handleParallax = () => {
      animationFrameId = window.requestAnimationFrame(() => {
        if (blobRef.current) {
          const scrolled = window.scrollY;
          // Move the blob at a slower speed (20% of scroll speed) to create depth
          blobRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
    }
  };

  return (
    <div className="relative overflow-hidden bg-brand-light">
      {/* Decorative Blob with Parallax Ref */}
      <div 
        ref={blobRef}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-medium/20 rounded-full blur-3xl opacity-60 pointer-events-none will-change-transform"
      ></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 min-h-[85vh] flex items-center">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-brand-medium shadow-sm text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Star className="w-3 h-3 mr-2 fill-current" />
                Método Natural & Caseiro
              </div>
              
              <h1 
                ref={titleRef}
                className="text-5xl tracking-tight text-brand-dark sm:text-6xl md:text-7xl font-serif mb-6 leading-[1.1] opacity-0 translate-y-12 transition-all duration-1000 ease-out"
              >
                <span className="block font-medium">Pele de seda,</span>
                <span className="block text-brand-primary italic">sem sair de casa.</span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 sm:mt-8 sm:max-w-xl sm:mx-auto md:mt-8 font-sans font-light leading-loose tracking-wide">
                Descubra o <span className="font-serif italic text-brand-dark font-medium">Gel Flex</span>. A revolução suave que une a eficácia da depilação profissional com o carinho dos ingredientes naturais. 
              </p>
              
              <div className="mt-8 sm:mt-12 flex justify-center">
                <a
                  href="#comprar"
                  onClick={(e) => handleScroll(e, 'comprar')}
                  className="group flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-full text-white bg-brand-primary hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-brand-primary/30 animate-subtle-pulse hover:animate-none cursor-pointer"
                >
                  Quero Experimentar
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4 text-sm text-gray-500">
                 <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-medium/30 ring-2 ring-white flex items-center justify-center text-xs font-bold text-brand-dark">A.C.</div>
                    <div className="w-10 h-10 rounded-full bg-brand-primary/20 ring-2 ring-white flex items-center justify-center text-xs font-bold text-brand-dark">M.L.</div>
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 ring-2 ring-white flex items-center justify-center text-xs font-bold text-brand-dark">J.S.</div>
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 ring-2 ring-white flex items-center justify-center text-xs font-bold text-brand-dark flex items-center justify-center"><Heart className="w-3 h-3 text-brand-primary fill-current"/></div>
                 </div>
                 <div className="flex flex-col text-left">
                    <div className="flex text-brand-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-xs font-medium text-gray-400">Amado por milhares de mulheres</span>
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Creative Text Section replacing Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%] lg:h-full lg:mt-0 mt-10 p-4 lg:p-0 flex items-center justify-center">
         <div className="relative h-auto min-h-[500px] w-full max-w-lg lg:max-w-none lg:h-full rounded-[3rem] lg:rounded-none lg:rounded-bl-[5rem] overflow-hidden bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl lg:shadow-none flex flex-col justify-center p-12 lg:p-20">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-medium/20 via-transparent to-brand-primary/10"></div>
            
            <div className="relative z-10">
              <h2 className="font-serif text-4xl lg:text-6xl text-brand-dark mb-8 leading-tight">
                <span className="italic text-brand-primary opacity-80 block text-2xl lg:text-3xl mb-2 font-sans font-light">Manifesto</span>
                Sua beleza não precisa doer.
              </h2>
              <div className="w-20 h-1 bg-brand-primary mb-8"></div>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                "Acreditamos que o toque mais suave é o mais poderoso. Que a natureza, em sua simplicidade, guarda os segredos da pele perfeita."
              </p>
              <p className="text-lg text-brand-dark font-medium italic">
                — Menos química.<br/>
                — Menos lixo.<br/>
                — Mais você.
              </p>
            </div>
         </div>
      </div>
    </div>
  );
};
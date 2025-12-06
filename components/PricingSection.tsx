import React from 'react';
import { ShieldCheck, Sparkles, Star, Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const handleCheckoutClick = () => {
    // Verifica se o Pixel do Facebook está carregado e dispara o evento
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <section id="comprar" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light -skew-x-12 z-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                
                {/* Image/Brand Side */}
                <div className="bg-brand-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                    
                    <div>
                        <h3 className="text-3xl font-serif font-bold mb-4">Gel Flex</h3>
                        <p className="text-white/90 text-lg font-light leading-relaxed">
                            O guia completo para conquistar a liberdade da sua pele. Receba a receita, o passo a passo e os segredos profissionais.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-4">
                        <div className="flex items-center">
                            <Star className="w-5 h-5 text-brand-medium fill-current" />
                            <Star className="w-5 h-5 text-brand-medium fill-current" />
                            <Star className="w-5 h-5 text-brand-medium fill-current" />
                            <Star className="w-5 h-5 text-brand-medium fill-current" />
                            <Star className="w-5 h-5 text-brand-medium fill-current" />
                            <span className="ml-2 text-sm font-medium">4.9/5 de satisfação</span>
                        </div>
                        <div className="text-sm opacity-80">
                            "Mudei minha relação com a depilação. Nunca mais uso gilete." <br/>- Ana C.
                        </div>
                    </div>
                </div>

                {/* Pricing Side */}
                <div className="p-12 flex flex-col justify-center bg-white">
                     <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Oferta Especial</span>
                     <div className="flex items-baseline mb-8">
                         <span className="text-gray-400 text-2xl line-through mr-4">R$ 97</span>
                         <span className="text-6xl font-serif font-bold text-brand-dark">R$ 37</span>
                     </div>

                     <ul className="space-y-4 mb-10">
                         <li className="flex items-center text-gray-600">
                             <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center mr-3">
                                <Check className="w-4 h-4 text-brand-primary" />
                             </div>
                             Receita Original & Secreta
                         </li>
                         <li className="flex items-center text-gray-600">
                             <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center mr-3">
                                <Check className="w-4 h-4 text-brand-primary" />
                             </div>
                             Ritual de Aplicação em Vídeo
                         </li>
                         <li className="flex items-center text-gray-600">
                             <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center mr-3">
                                <Check className="w-4 h-4 text-brand-primary" />
                             </div>
                             Acesso Vitalício
                         </li>
                     </ul>

                     <a 
                        href="https://lastlink.com/p/C22B0616A/checkout-payment/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCheckoutClick}
                        className="w-full bg-brand-green hover:bg-emerald-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 transform transition hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
                     >
                         <Sparkles className="w-5 h-5" />
                         QUERO COMPRAR AGORA
                     </a>

                     <div className="mt-6 flex items-center justify-center text-gray-400 text-xs gap-4">
                         <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1"/> Compra Segura</span>
                         <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1"/> 7 Dias de Garantia</span>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
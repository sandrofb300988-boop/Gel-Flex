import React from 'react';
import { ShieldCheck, Sparkles, Star, Check, CreditCard, QrCode, Lock } from 'lucide-react';

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
                        className="w-full bg-brand-green hover:bg-emerald-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 transform transition hover:-translate-y-1 duration-300 flex items-center justify-center gap-2 mb-8"
                     >
                         <Sparkles className="w-5 h-5" />
                         QUERO COMPRAR AGORA
                     </a>

                     {/* Payment & Security Seals - Enhanced Visibility */}
                     <div className="space-y-5 pt-6 border-t border-gray-100">
                        {/* Payment Methods */}
                        <div className="flex flex-col items-center">
                            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-3">Pagamento Seguro via</p>
                            <div className="flex items-center gap-3 w-full justify-center">
                                <div className="flex items-center justify-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100 text-brand-dark w-1/2 shadow-sm transition-transform hover:-translate-y-0.5">
                                    <QrCode className="w-5 h-5 text-brand-green" />
                                    <span className="text-xs font-bold text-green-800">PIX</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-brand-dark w-1/2 shadow-sm transition-transform hover:-translate-y-0.5">
                                    <CreditCard className="w-5 h-5 text-brand-dark" />
                                    <span className="text-xs font-bold text-gray-700">Cartão</span>
                                </div>
                            </div>
                        </div>

                        {/* Security Badges */}
                        <div className="flex items-center justify-center gap-6 text-xs text-gray-500 bg-gray-50 py-2.5 rounded-full mx-2">
                             <div className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-brand-green" />
                                <span className="font-medium">Compra Segura</span>
                             </div>
                             <div className="flex items-center gap-1.5">
                                <Lock className="w-4 h-4 text-brand-primary" />
                                <span className="font-medium">Criptografia SSL</span>
                             </div>
                        </div>
                     </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
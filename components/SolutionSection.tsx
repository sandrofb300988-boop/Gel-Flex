import React from 'react';
import { Droplet, Thermometer, Sparkles } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Creative Text Side (Replacing Image) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl bg-brand-primary p-8 sm:p-10 text-white flex flex-col justify-between h-auto min-h-[500px] lg:h-[600px] border border-brand-accent/30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 mb-8 lg:mb-0">
                        <span className="text-brand-medium font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block">O Segredo</span>
                        <h2 className="text-4xl sm:text-5xl font-serif leading-none mb-6">
                            Da sua <br/>
                            <span className="italic text-brand-medium">Cozinha</span><br/>
                            para o seu <br/>
                            <span className="italic text-brand-medium">Corpo.</span>
                        </h2>
                    </div>

                    <div className="relative z-10 space-y-6 mb-8 lg:mb-0">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-serif text-2xl italic flex-shrink-0">1</div>
                            <p className="text-base sm:text-lg font-light text-brand-light">Ingredientes que você pode comer.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-serif text-2xl italic flex-shrink-0">2</div>
                            <p className="text-base sm:text-lg font-light text-brand-light">Zero plásticos ou descartáveis.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-serif text-2xl italic flex-shrink-0">3</div>
                            <p className="text-base sm:text-lg font-light text-brand-light">Resultado de salão, custo de centavos.</p>
                        </div>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-white/20 mt-auto">
                        <p className="font-serif italic text-xl sm:text-2xl text-brand-medium text-center">
                            "A natureza é a tecnologia mais avançada que existe."
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-brand-medium/20">
                    <Sparkles className="w-4 h-4 text-brand-primary" />
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">A Alternativa Perfeita</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 sm:mb-8 leading-tight">
                    Natural como a sua pele.<br/>Eficaz como você precisa.
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 font-light leading-relaxed">
                    A Depilação Termo-Adesiva Flex não é apenas um método de remoção de pelos. É um <strong>ritual de autocuidado</strong>. Unimos a sabedoria dos ingredientes naturais com a técnica precisa do calor controlado.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start p-6 bg-white rounded-3xl shadow-sm border border-brand-light hover:shadow-md transition">
                        <div className="flex-shrink-0 bg-brand-light p-4 rounded-full">
                            <Droplet className="h-6 w-6 text-brand-primary" />
                        </div>
                        <div className="ml-6">
                            <h4 className="font-bold text-brand-dark text-lg sm:text-xl font-serif">Gel Bio-Adesivo</h4>
                            <p className="text-gray-600 mt-2 leading-relaxed text-sm sm:text-base">
                                Uma mistura única de mel, amido e gelatina que cria uma película flexível. Ela adere estritamente ao pelo, não à pele, reduzindo a dor em até 70%.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start p-6 bg-white rounded-3xl shadow-sm border border-brand-light hover:shadow-md transition">
                        <div className="flex-shrink-0 bg-brand-light p-4 rounded-full">
                            <Thermometer className="h-6 w-6 text-brand-red" />
                        </div>
                        <div className="ml-6">
                            <h4 className="font-bold text-brand-dark text-lg sm:text-xl font-serif">Termo-Ativação Suave</h4>
                            <p className="text-gray-600 mt-2 leading-relaxed text-sm sm:text-base">
                                A aplicação morna dilata levemente os poros, permitindo que o pelo deslize para fora da raiz sem resistência e sem quebrar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
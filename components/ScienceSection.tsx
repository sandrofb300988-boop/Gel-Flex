import React from 'react';
import { ThermometerSun, Layers, Droplet } from 'lucide-react';

export const ScienceSection: React.FC = () => {
  return (
    <section id="ciencia" className="py-16 bg-brand-light scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
            A ciência por trás da suavidade
          </h2>
          <p className="text-xl text-gray-600 italic">
            "É o equilíbrio perfeito entre adesão e elasticidade."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-medium flex items-center justify-center mb-6 shadow-sm">
                <ThermometerSun className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Calor Suave</h3>
            <p className="text-gray-600">
              O calor controlado abre os poros e solta os folículos, o que reduz a dor e permite uma remoção mais limpa.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-medium flex items-center justify-center mb-6 shadow-sm">
                <Layers className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Adesão Elástica</h3>
            <p className="text-gray-600">
              A combinação de gelatina e amido cria uma camada flexível que adere ao pelo, mas não gruda agressivamente na pele.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-medium flex items-center justify-center mb-6 shadow-sm">
                 <Droplet className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Ingredientes Naturais</h3>
            <p className="text-gray-600">
              O mel auxilia na aderência enquanto hidrata, e o óleo vegetal protege, impedindo a irritação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';

export const IngredientsSection: React.FC = () => {
  return (
    <section id="ingredientes" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            Ingredientes que você já conhece.<br />
            Resultados que você nunca viu.
          </h2>
        </div>

        <div className="relative">
          {/* Decorative background line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-medium -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="bg-brand-light p-6 rounded-xl border border-brand-medium shadow-sm transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl text-brand-primary mb-2">Amido de Milho</h3>
              <p className="text-gray-700">Confere a base e a elasticidade ao gel.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-light p-6 rounded-xl border border-brand-medium shadow-sm transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl text-brand-primary mb-2">Gelatina Incolor</h3>
              <p className="text-gray-700">Cria a adesão elástica e a textura de película.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-light p-6 rounded-xl border border-brand-medium shadow-sm transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl text-brand-primary mb-2">Mel</h3>
              <p className="text-gray-700">Ação adesiva natural e poder hidratante.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-brand-light p-6 rounded-xl border border-brand-medium shadow-sm transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl text-brand-primary mb-2">Óleo Vegetal</h3>
              <p className="text-gray-700">Protege a pele e previne a irritação (coco, uva ou oliva).</p>
            </div>
             {/* Card 5 (Centered if 5 items, handled in grid for 4) */}
          </div>
          
           <div className="max-w-md mx-auto mt-8 bg-brand-light p-6 rounded-xl border border-brand-medium shadow-sm transform hover:-translate-y-2 transition duration-300 relative z-10 text-center">
              <h3 className="font-bold text-xl text-brand-primary mb-2">Água</h3>
              <p className="text-gray-700">O veículo que une todos os ingredientes.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
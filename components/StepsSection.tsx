import React from 'react';

export const StepsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">O Ritual de Beleza</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Simples, rápido e gratificante. Transforme sua rotina em um momento de spa.</p>
        </div>
        
        {/* Passo 1 - Preparação */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
             <span className="text-6xl font-serif font-bold text-brand-medium/50 mr-4">01</span>
             <h3 className="text-2xl font-bold text-brand-dark">A Alquimia (Preparação)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StepCard title="Misture" desc="Combine os ingredientes naturais em uma panela pequena." />
            <StepCard title="Aqueça" desc="Leve ao fogo baixo até obter um gel liso e dourado." />
            <StepCard title="Esfrie" desc="Aguarde a temperatura ficar morna e confortável." />
            <StepCard title="Teste" desc="Aplique um pouco no pulso para garantir segurança." />
          </div>
        </div>

        {/* Passo 2 - Aplicação */}
        <div>
          <div className="flex items-center mb-8">
             <span className="text-6xl font-serif font-bold text-brand-medium/50 mr-4">02</span>
             <h3 className="text-2xl font-bold text-brand-dark">A Revelação (Aplicação)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StepCard title="Limpe" desc="Pele limpa e seca é essencial para a aderência perfeita." />
            <StepCard title="Aplique" desc="Espalhe uma camada fina a favor do crescimento do pelo." />
            <StepCard title="Seque" desc="Aguarde 3-5 minutos até formar uma película firme." />
            <StepCard title="Remova" desc="Puxe no sentido contrário. Sinta a pele lisa instantaneamente." />
          </div>
        </div>

      </div>
    </section>
  );
};

const StepCard: React.FC<{title: string, desc: string}> = ({ title, desc }) => (
  <div className="bg-brand-light rounded-2xl p-6 border border-transparent hover:border-brand-medium transition-all duration-300">
    <h4 className="text-lg font-bold text-brand-primary mb-2 font-serif">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);
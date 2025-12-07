import React, { useState, useEffect } from 'react';
import { Check, X, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';

const data = [
  { name: 'Mês 1', gelflex: 42, salao: 80, lamina: 30 },
  { name: 'Mês 2', gelflex: 47, salao: 160, lamina: 60 },
  { name: 'Mês 3', gelflex: 52, salao: 240, lamina: 90 },
  { name: 'Mês 4', gelflex: 57, salao: 320, lamina: 120 },
  { name: 'Mês 5', gelflex: 62, salao: 400, lamina: 150 },
  { name: 'Mês 6', gelflex: 67, salao: 480, lamina: 180 },
  { name: 'Mês 9', gelflex: 82, salao: 720, lamina: 270 },
  { name: 'Mês 12', gelflex: 97, salao: 960, lamina: 360 },
];

// Tipagem correta para o Tooltip do Recharts
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-brand-medium rounded-xl shadow-lg">
        <p className="font-serif font-bold text-brand-dark mb-2">{label}</p>
        {payload.map((entry, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">R$ {entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ComparisonSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Garante que o gráfico só renderize após o componente estar montado no DOM
    setIsMounted(true);
  }, []);

  return (
    <section id="comparativo" className="py-24 bg-brand-light relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-16">
          Por que elas escolhem <span className="text-brand-primary italic">Gel Flex</span>?
        </h2>

        {/* Tabela de Comparação - Wrapper com overflow-x-auto para responsividade */}
        <div className="shadow-2xl shadow-brand-dark/5 rounded-3xl bg-white overflow-hidden border border-brand-medium/20 mb-20 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-brand-medium/30">
                <th scope="col" className="py-6 pl-6 sm:pl-8 text-left text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-dark min-w-[120px]">Método</th>
                <th scope="col" className="py-6 text-left text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-500 min-w-[140px]">O Padrão</th>
                <th scope="col" className="py-6 text-left text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-primary min-w-[140px]">Gel Flex</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="group hover:bg-brand-light/30 transition">
                <td className="py-6 pl-6 sm:pl-8 text-sm font-bold text-gray-900">Cera Quente</td>
                <td className="py-6 pr-4 text-sm text-gray-500"><div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0"/> Agressiva e dolorosa</div></td>
                <td className="py-6 pr-4 text-sm text-brand-dark font-medium"><div className="flex items-center"><Check className="w-5 h-5 text-brand-green mr-2 flex-shrink-0"/> Calor suave, sem dor</div></td>
              </tr>
              <tr className="group hover:bg-brand-light/30 transition">
                <td className="py-6 pl-6 sm:pl-8 text-sm font-bold text-gray-900">Lâmina</td>
                <td className="py-6 pr-4 text-sm text-gray-500"><div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0"/> Pelo encrava e engrossa</div></td>
                <td className="py-6 pr-4 text-sm text-brand-dark font-medium"><div className="flex items-center"><Check className="w-5 h-5 text-brand-green mr-2 flex-shrink-0"/> Raiz removida, pele lisa</div></td>
              </tr>
              <tr className="group hover:bg-brand-light/30 transition">
                <td className="py-6 pl-6 sm:pl-8 text-sm font-bold text-gray-900">Cremes</td>
                <td className="py-6 pr-4 text-sm text-gray-500"><div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0"/> Cheiro forte, química</div></td>
                <td className="py-6 pr-4 text-sm text-brand-dark font-medium bg-brand-medium/10 rounded-r-xl border-l-4 border-brand-primary"><div className="flex items-center"><Check className="w-5 h-5 text-brand-green mr-2 flex-shrink-0"/> 100% Natural e seguro</div></td>
              </tr>
              <tr className="group hover:bg-brand-light/30 transition">
                <td className="py-6 pl-6 sm:pl-8 text-sm font-bold text-gray-900">Laser</td>
                <td className="py-6 pr-4 text-sm text-gray-500"><div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0"/> Custo altíssimo</div></td>
                <td className="py-6 pr-4 text-sm text-brand-dark font-medium"><div className="flex items-center"><Check className="w-5 h-5 text-brand-green mr-2 flex-shrink-0"/> Custo de centavos</div></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Gráfico de Custo */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-medium/20">
          <div className="flex items-center mb-8">
             <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                <TrendingUp className="w-6 h-6 text-brand-green" />
             </div>
             <div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark">Economia Real</h3>
                <p className="text-gray-500 text-sm">Custo acumulado ao longo de 12 meses (R$)</p>
             </div>
          </div>
          
          <div className="h-[300px] sm:h-[350px] w-full relative">
            {isMounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 10,
                    left: -20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9CA3AF', fontSize: 10}}
                      dy={10}
                  />
                  <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9CA3AF', fontSize: 10}}
                      tickFormatter={(value) => `R$${value}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend iconType="circle" wrapperStyle={{paddingTop: '20px', fontSize: '12px'}} />
                  <Line 
                      type="monotone" 
                      dataKey="salao" 
                      name="Salão (Cera)" 
                      stroke="#E11D48" 
                      strokeWidth={3} 
                      dot={false}
                      activeDot={{ r: 6 }} 
                  />
                  <Line 
                      type="monotone" 
                      dataKey="lamina" 
                      name="Lâminas" 
                      stroke="#9CA3AF" 
                      strokeWidth={2} 
                      dot={false} 
                      strokeDasharray="5 5"
                  />
                  <Line 
                      type="monotone" 
                      dataKey="gelflex" 
                      name="Gel Flex" 
                      stroke="#059669" 
                      strokeWidth={4} 
                      dot={{ fill: '#059669', r: 4 }}
                      activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-gray-50 animate-pulse rounded-xl flex items-center justify-center">
                <p className="text-gray-400 text-sm">Carregando gráfico...</p>
              </div>
            )}
          </div>
          <p className="text-center mt-6 text-xs sm:text-sm text-gray-500 font-light italic">
            *Estimativa baseada em 1 depilação/mês. Gel Flex inclui receita + ingredientes.
          </p>
        </div>

      </div>
    </section>
  );
};
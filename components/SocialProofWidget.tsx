import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

const messages = [
  { name: "Ana C.", location: "São Paulo, SP", action: "comprou o Guia Gel Flex", time: "há 2 min" },
  { name: "Mariana S.", location: "Rio de Janeiro, RJ", action: "começou o ritual", time: "há 5 min" },
  { name: "Fernanda L.", location: "Belo Horizonte, MG", action: "acabou de adquirir", time: "há 12 min" },
  { name: "Carla M.", location: "Curitiba, PR", action: "comprou o Guia Gel Flex", time: "há 18 min" },
  { type: 'motivational', text: "Chega de sofrimento. Sua pele merece liberdade." }
];

export const SocialProofWidget: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Delay first appearance
    const initialTimer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const interval = setInterval(() => {
      setIsVisible(false); // Hide current
      
      setTimeout(() => {
        // Change message after hidden
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true); // Show new
      }, 500); // Wait for exit animation

    }, 8000); // Cycle every 8 seconds

    return () => clearInterval(interval);
  }, [hasMounted]);

  const currentMsg = messages[currentMessageIndex];
  const isMotivational = 'type' in currentMsg && currentMsg.type === 'motivational';

  return (
    <div 
      className={`
        fixed bottom-24 left-4 md:bottom-8 md:left-8 z-40 max-w-[300px] w-full
        transition-all duration-500 ease-in-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
    >
      <div className="bg-white/95 backdrop-blur-md border border-brand-medium/30 p-4 rounded-2xl shadow-xl flex items-center gap-4">
        <div className={`
          flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
          ${isMotivational ? 'bg-brand-medium/20 text-brand-primary' : 'bg-green-50 text-brand-green'}
        `}>
          {isMotivational ? <Sparkles className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
        </div>
        
        <div className="flex-1 min-w-0">
          {isMotivational ? (
            <p className="text-sm font-medium text-brand-dark italic">
              "{currentMsg.text}"
            </p>
          ) : (
            <>
              <p className="text-sm font-bold text-brand-dark truncate">
                {currentMsg.name} <span className="text-gray-400 font-normal text-xs">de {currentMsg.location}</span>
              </p>
              <p className="text-xs text-gray-600 flex justify-between items-center mt-0.5">
                <span>{currentMsg.action}</span>
                <span className="text-gray-400 text-[10px]">{currentMsg.time}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
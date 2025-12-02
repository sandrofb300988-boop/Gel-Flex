import React, { useEffect, useState } from 'react';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-brand-medium shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:hidden z-50">
      <div className="flex justify-between items-center">
         <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Oferta Exclusiva</p>
            <p className="text-2xl font-bold text-brand-primary">R$ 37,00</p>
         </div>
         <a 
            href="https://lastlink.com/p/C22B0616A/checkout-payment/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-white px-6 py-3 rounded-full font-bold shadow-lg uppercase tracking-wide text-sm hover:bg-green-700 transition"
         >
            Adquirir
         </a>
      </div>
    </div>
  );
};
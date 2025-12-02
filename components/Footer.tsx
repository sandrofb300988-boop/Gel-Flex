import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif text-2xl font-bold text-brand-primary">Gel Flex</span>
          <p className="text-sm mt-2 text-gray-400">© 2024 Depilação Termo-Adesiva Flex.<br/>Todos os direitos reservados.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition">Termos de Uso</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Política de Privacidade</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contato</a>
        </div>
      </div>
    </footer>
  );
};
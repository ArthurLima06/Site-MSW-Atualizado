import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(
      'https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 hover:scale-110 transition-all duration-300 flex items-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
      {isHovered && (
        <span className="ml-3 font-medium whitespace-nowrap">
          Fale Conosco
        </span>
      )}
    </button>
  );
};

export default WhatsAppButton;

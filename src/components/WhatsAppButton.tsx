import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-[hsl(142,70%,45%)] rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-[hsl(0,0%,100%)]" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;

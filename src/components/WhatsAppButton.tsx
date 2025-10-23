import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp (reemplaza con tu número real)
    const phoneNumber = "+573508246070"; // Formato internacional
    const message = "¡Hola! Me interesa conocer más sobre los servicios de SNEIDER PRODUCTIONS";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); 
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      {/* Main button with cyberpunk styling */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 via-card to-primary/20 border border-primary/30 shadow-lg backdrop-blur-sm">
        {/* Orange/beige accent ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--orange-accent)] via-transparent to-[var(--orange-muted)] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Neon glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.5),0_0_50px_rgba(255,153,51,0.3)]"></div>
        
        {/* WhatsApp icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <WhatsAppIcon 
  className="w-7 h-7 md:w-8 md:h-8 text-green-500 group-hover:text-green-400 transition-colors duration-300" 
/>

        </div>
        
        {/* Animated pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping opacity-30"></div>
        <div className="absolute inset-0 rounded-full border border-[var(--orange-medium)]/40 animate-pulse"></div>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <div className="bg-card/95 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 shadow-lg">
          <div className="text-sm text-foreground whitespace-nowrap">
            ¡Contáctame por WhatsApp!
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Respuesta rápida garantizada
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full right-4 -mt-1">
            <div className="w-2 h-2 bg-card/95 border-r border-b border-primary/30 transform rotate-45"></div>
          </div>
        </div>
      </div>
      
      {/* Mobile-optimized notification dot */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[var(--orange-intense)] to-[var(--orange-medium)] rounded-full border-2 border-background animate-pulse">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/80 to-[var(--orange-light)]/80 animate-ping opacity-60"></div>
      </div>
    </button>
  );
}
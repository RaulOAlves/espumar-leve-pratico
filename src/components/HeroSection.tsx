import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lavanderia.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547989292036?text=Oi! Quero resolver minha roupa agora na EspuMar!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-light/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Roupas limpas.<br />
          <span className="text-accent">Mente leve.</span><br />
          Vida simples.
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-medium opacity-90">
          Seu tempo livre começa aqui. Chega de brigar com o tanquinho.
        </p>

        <Button 
          variant="cta" 
          size="lg" 
          onClick={handleWhatsAppClick}
          className="text-xl px-12 py-6 h-auto rounded-full animate-pulse hover:animate-none"
        >
          Resolva sua roupa agora
        </Button>

        <p className="mt-4 text-lg opacity-80">
          Sem segredo. Sem espera. Só apertar um botão.
        </p>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
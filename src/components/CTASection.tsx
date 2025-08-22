import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Star } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547989292036?text=Oi! Quero resolver minha roupa agora na EspuMar! 🧺✨", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center text-primary-foreground mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A rotina não espera.<br />
            Mas aqui, você resolve <span className="text-accent">sem pressa</span>.
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Pare de adiar. Sua mente livre e sua casa organizada estão a um clique de distância.
          </p>

          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="text-2xl px-12 py-6 h-auto rounded-full shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8 mr-3" />
            Quero resolver minha roupa AGORA
          </Button>

          <p className="mt-6 text-lg opacity-80">
            Resposta em menos de 5 minutos. Promessa da EspuMar! 🚀
          </p>
        </div>

        {/* Trust Signals */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center text-primary-foreground">
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Rapidez Garantida</h3>
              <p className="opacity-80">40 minutos e você já vai embora</p>
            </div>

            <div className="text-center text-primary-foreground">
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Qualidade Comprovada</h3>
              <p className="opacity-80">500+ famílias confiam na gente</p>
            </div>

            <div className="text-center text-primary-foreground">
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Atendimento Humano</h3>
              <p className="opacity-80">Conversa de gente, sem robozinho</p>
            </div>
          </div>

          {/* Final Push */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center text-primary-foreground border border-primary-foreground/20">
            <h3 className="text-2xl font-bold mb-4">
              Última chance de ter um domingo livre! 🌞
            </h3>
            
            <p className="text-lg opacity-90 mb-6">
              Enquanto você pensa, sua roupa continua suja. E o stress continua na sua cabeça.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4 h-auto animate-pulse hover:animate-none"
              >
                💬 Resolver no WhatsApp
              </Button>
              
              <p className="text-sm opacity-70">
                Ou liga: (47) 98929-2036
              </p>
            </div>
          </div>
        </div>

        {/* Emotional Hook */}
        <div className="text-center mt-16 text-primary-foreground">
          <p className="text-xl italic opacity-80 max-w-2xl mx-auto">
            "Tempo perdido não volta. Mas o tempo livre da roupa suja, você pode conquistar hoje mesmo."
          </p>
          <p className="mt-4 text-lg font-semibold">
            — Equipe EspuMar ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
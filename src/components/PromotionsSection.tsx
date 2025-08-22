import { Button } from "@/components/ui/button";
import { Clock, Zap, AlertCircle } from "lucide-react";

const PromotionsSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547989292036?text=Oi! Vi que tem só 6 máquinas livres. Quero garantir minha vaga!", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Promoções</span> & Avisos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades e garante sua vaga nas máquinas.
          </p>
        </div>

        {/* Urgency Alert */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-2xl p-8 shadow-2xl border border-accent/30 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 w-full h-full animate-pulse"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold">ATENÇÃO!</h3>
                <AlertCircle className="w-8 h-8 animate-pulse" />
              </div>
              
              <p className="text-xl md:text-2xl font-semibold mb-4">
                Só <span className="bg-accent-foreground/20 px-3 py-1 rounded-full">6 máquinas livres</span> hoje!
              </p>
              
              <p className="text-lg mb-6 opacity-90">
                Prioridade pra quem chama no WhatsApp. Não deixa pra depois!
              </p>

              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="text-xl px-8 py-4 h-auto animate-bounce hover:animate-none"
              >
                🚨 Garantir minha vaga AGORA
              </Button>
            </div>
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Speed Promotion */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              
               <h3 className="text-xl font-bold text-foreground mb-4">
                Cashback 10x1
              </h3>
              
              <p className="text-muted-foreground mb-4">
                A cada 10 lavagens, você ganha 1 grátis de volta!
              </p>
              
               <div className="bg-primary/10 text-primary font-bold text-lg px-4 py-2 rounded-full">
                R$ 16,90
              </div>
            </div>
          </div>

          {/* Family Package */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-lg transition-all duration-300 relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
              MAIS POPULAR
            </div>
            
            <div className="text-center pt-4">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              
               <h3 className="text-xl font-bold text-foreground mb-4">
                Preço Fixo
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Sempre o mesmo preço justo. Lavar + secar incluído!
              </p>
              
               <div className="bg-accent/10 text-accent font-bold text-lg px-4 py-2 rounded-full">
                R$ 16,90
              </div>
            </div>
          </div>

          {/* Weekend Special */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              
               <h3 className="text-xl font-bold text-foreground mb-4">
                Promoções Futuras
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Indicação de amigos e outras surpresas chegando em breve!
              </p>
              
              <div className="bg-primary/10 text-primary font-bold text-lg px-4 py-2 rounded-full">
                Em breve
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary text-center mb-6">
              💡 Dicas da Casa
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Horário Vip</p>
                <p className="text-muted-foreground text-sm">
                  Das 8h às 10h, máquinas sempre livres!
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Edredom Special</p>
                <p className="text-muted-foreground text-sm">
                  Máquina grande só pra edredom e cobertores pesados
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Sabão Premium</p>
                <p className="text-muted-foreground text-sm">
                  Sempre incluído no preço. Zero custo extra!
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Estacionamento</p>
                <p className="text-muted-foreground text-sm">
                  Vaga garantida na frente. Fácil pra carregar e descarregar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
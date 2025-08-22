import { Button } from "@/components/ui/button";
import { MapPin, Clock, Smartphone, Navigation } from "lucide-react";

const LocationSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547989292036?text=Oi! Quero saber mais sobre a localização da EspuMar!", "_blank");
  };

  const handleMapsClick = () => {
    window.open("https://maps.app.goo.gl/xk8ei3bUgeVXEHsd6", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Localização</span> Estratégica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No coração de Itajuba. A um passo da sua paz doméstica.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Location Info */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground text-lg">
                      R. Cirino Cabral, 831<br />
                      Itajuba – Barra Velha/SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Funcionamento</h3>
                    <p className="text-muted-foreground text-lg">
                      <span className="font-semibold text-foreground">Todos os dias</span><br />
                      Das 6h às 24h (meia-noite)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground text-lg">
                      (47) 98929-2036<br />
                      <span className="text-[#25D366] font-semibold">Sempre respondemos rápido!</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleMapsClick}
                  className="w-full text-lg py-4 h-auto"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Ver no Google Maps
                </Button>

                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="w-full text-lg py-4 h-auto"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            {/* Map Placeholder & Directions */}
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl p-8 border border-primary/20 mb-8">
                <h3 className="text-2xl font-bold text-primary text-center mb-6">
                  🗺️ Como Chegar
                </h3>
                
                <div className="space-y-4 text-center">
                  <div className="bg-card rounded-xl p-4 border border-border/50">
                    <p className="font-semibold text-foreground mb-1">Saindo do Centro</p>
                    <p className="text-muted-foreground text-sm">5 minutos de carro pela Rua Principal</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4 border border-border/50">
                    <p className="font-semibold text-foreground mb-1">Vindo da Praia</p>
                    <p className="text-muted-foreground text-sm">10 minutos, direção ao bairro Itajuba</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4 border border-border/50">
                    <p className="font-semibold text-foreground mb-1">Estacionamento</p>
                    <p className="text-muted-foreground text-sm">Vagas livres na frente, fácil de parar</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 text-center">
                <p className="text-accent font-bold text-lg mb-2">
                  📍 Ponto de Referência
                </p>
                <p className="text-muted-foreground">
                  "Todo mundo conhece a EspuMar. É ali na Cirino Cabral, do lado do mercadinho."
                </p>
                <p className="text-muted-foreground text-sm mt-2 italic">
                  — Dona Maria, vizinha há 15 anos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 text-primary-foreground">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold mb-1">18h</p>
                <p className="text-primary-foreground/80 text-sm">Funcionamento diário</p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">7 dias</p>
                <p className="text-primary-foreground/80 text-sm">Por semana aberto</p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">3 anos</p>
                <p className="text-primary-foreground/80 text-sm">Servindo Itajuba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
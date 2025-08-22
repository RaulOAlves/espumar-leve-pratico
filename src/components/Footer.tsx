import { MapPin, Clock, Smartphone, Instagram } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547989292036", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/lavanderiaespumar", "_blank");
  };

  const handleMapsClick = () => {
    window.open("https://maps.google.com/?q=R.+Cirino+Cabral,+831+-+Itajuba+-+Barra+Velha/SC", "_blank");
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">EspuMar</h3>
            <p className="text-lg mb-4 opacity-90">
              Lavanderia Self-Service
            </p>
            <p className="opacity-75 leading-relaxed">
              Transformando a rotina pesada em momentos leves. 
              Sua paz doméstica começa aqui no coração de Itajuba.
            </p>
            
            <div className="mt-6">
              <p className="text-accent font-semibold mb-2">🐋 Jubá diz:</p>
              <p className="italic opacity-80">
                "Vida simples é vida boa. Deixa a roupa comigo!"
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Informações</h3>
            
            <div className="space-y-4">
              <div 
                className="flex items-start gap-3 cursor-pointer hover:text-accent transition-colors"
                onClick={handleMapsClick}
              >
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="opacity-75 text-sm">
                    R. Cirino Cabral, 831<br />
                    Itajuba – Barra Velha/SC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <p className="font-semibold">Funcionamento</p>
                  <p className="opacity-75 text-sm">
                    Todos os dias: 6h às 24h<br />
                    <span className="text-accent">Sempre aberto pra você!</span>
                  </p>
                </div>
              </div>

              <div 
                className="flex items-start gap-3 cursor-pointer hover:text-accent transition-colors"
                onClick={handleWhatsAppClick}
              >
                <Smartphone className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="opacity-75 text-sm">
                    (47) 98929-2036<br />
                    <span className="text-[#25D366]">Resposta rápida garantida!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Conecte-se</h3>
            
            <div className="space-y-4 mb-8">
              <div 
                className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors"
                onClick={handleInstagramClick}
              >
                <Instagram className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">@lavanderiaespumar</p>
                  <p className="opacity-75 text-sm">Acompanhe nosso dia a dia!</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-background/5 rounded-xl p-4 border border-background/20">
              <p className="font-semibold mb-3 text-accent">Ações Rápidas:</p>
              <div className="space-y-2 text-sm">
                <p 
                  className="cursor-pointer hover:text-accent transition-colors"
                  onClick={handleWhatsAppClick}
                >
                  💬 Chamar no WhatsApp
                </p>
                <p 
                  className="cursor-pointer hover:text-accent transition-colors"
                  onClick={handleMapsClick}
                >
                  📍 Ver localização
                </p>
                <p 
                  className="cursor-pointer hover:text-accent transition-colors"
                  onClick={handleInstagramClick}
                >
                  📸 Seguir no Instagram
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="opacity-75 text-sm">
                © 2024 EspuMar Lavanderia Self-Service. Feito com ❤️ em Itajuba.
              </p>
              <p className="opacity-60 text-xs mt-1">
                Transformando rotinas pesadas em momentos leves desde 2021.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-accent font-semibold">
                "Lavou. Secou. Foi embora."
              </p>
              <p className="opacity-75 text-sm">
                A vida pode ser mais simples. 🌊
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
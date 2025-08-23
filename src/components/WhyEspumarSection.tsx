import { Clock, Heart, Zap, Star } from "lucide-react";

const WhyEspumarSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Seu tempo livre começa aqui",
      description: "1h20 e você já tá livre pra curtir o que importa.",
      highlight: "1h20 total"
    },
    {
      icon: Heart,
      title: "Chega de brigar com o tanquinho",
      description: "Deixa a gente resolver. Você merece descanso.",
      highlight: "Zero stress"
    },
    {
      icon: Zap,
      title: "Só apertar um botão",
      description: "Máquinas novas, sabão incluído. Simples assim.",
      highlight: "Automático"
    },
    {
      icon: Star,
      title: "Todo mundo de Itajuba vem aqui",
      description: "A Dona Célia trocou o tanque pela EspuMar. Você também pode.",
      highlight: "Tradição"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que <span className="text-primary">EspuMar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Porque a vida já é complicada demais. Aqui, lavar roupa não precisa ser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 text-accent font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                    {benefit.highlight}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
            <p className="text-2xl font-semibold text-primary mb-2">
              "Domingo de sol? Deixa pra curtir, não pra lavar."
            </p>
            <p className="text-muted-foreground">
              Palavras de quem entende que tempo bom é pra viver, não pra fazer faxina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEspumarSection;
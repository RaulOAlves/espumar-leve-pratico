import { ArrowRight, ShirtIcon, RotateCcw, CheckCircle } from "lucide-react";
import processIcons from "@/assets/processo-icons.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: ShirtIcon,
      title: "Traga suas roupas",
      description: "Junta tudo que tá sujo e vem pra cá. Simples assim.",
      tip: "Pode trazer até edredom!"
    },
    {
      number: "02", 
      icon: RotateCcw,
      title: "Coloque na máquina",
      description: "Escolhe o programa, aperta o botão. Sabão já tá incluído.",
      tip: "Máquinas novinhas"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Saia com tudo seco",
      description: "1h20 depois, pega tudo limpinho e seco. Vai embora feliz da vida.",
      tip: "Pode dobrar aqui mesmo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Três passos. Zero complicação. Máxima tranquilidade.
          </p>
          
          <div className="bg-accent/10 rounded-2xl p-6 max-w-md mx-auto border border-accent/20">
            <p className="text-2xl font-bold text-accent mb-2">1h20 total</p>
            <p className="text-muted-foreground">
              35min lavar + 45min secar. Tempo suficiente pra um café e ainda sobra.
            </p>
          </div>
        </div>

        {/* Process Image */}
        <div className="mb-16 text-center">
          <img 
            src={processIcons} 
            alt="Processo da lavanderia: trazer roupa, lavar, sair feliz" 
            className="max-w-full h-auto mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}

                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>

                  <div className="pt-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full text-center border border-accent/20">
                      💡 {step.tip}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Sem segredo. Sem espera. Só apertar um botão.
            </h3>
            <p className="text-muted-foreground text-lg">
              É sério. Se você consegue usar um micro-ondas, vai conseguir usar nossas máquinas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
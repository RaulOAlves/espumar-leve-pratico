import beforeAfterImage from "@/assets/antes-depois.jpg";
import { ArrowRight } from "lucide-react";

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Era <span className="text-destructive">caos</span>. Agora é <span className="text-primary">calmaria</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação que acontece quando você para de brigar com a roupa suja.
          </p>
        </div>

        {/* Before/After Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <img 
              src={beforeAfterImage} 
              alt="Antes: roupa bagunçada e estressante. Depois: roupa organizada e tranquila" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Overlay Labels */}
            <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold shadow-lg">
              😤 ANTES
            </div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
              😌 DEPOIS
            </div>

            {/* Arrow in the middle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before Card */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-destructive mb-6 text-center">
              😤 Como era ANTES
            </h3>
            
            <ul className="space-y-4">
              {[
                "Domingo inteiro no tanque",
                "Roupa acumulando na área",
                "Briga com sabão que não dissolve",
                "Secador que não seca direito", 
                "Stress e cansaço mental",
                "Zero tempo pra família"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-destructive text-xl">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              😌 Como é AGORA
            </h3>
            
            <ul className="space-y-4">
              {[
                "40 minutos e tá resolvido",
                "Casa sempre organizada",
                "Máquinas profissionais",
                "Tudo seco e cheiroso",
                "Mente leve e descansada",
                "Domingo pra curtir a vida"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="text-primary text-xl">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto border border-accent/20">
            <p className="text-2xl font-bold text-accent mb-4">
              "Tá sem tempo? A gente resolve."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A diferença é simples: você para de perder tempo com roupa e começa a ganhar tempo pra vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
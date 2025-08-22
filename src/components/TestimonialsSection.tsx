import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carine Alves",
      role: "Avaliação Google",
      text: "Fácil de usar, ambiente limpo e agradável. Sempre voltarei!",
      rating: 5,
      highlight: "Ambiente limpo e agradável"
    },
    {
      name: "Djalma Lima", 
      role: "Avaliação Google",
      text: "Lindo, top! Sensacional, bem localizado, tinha tudo que precisávamos, muito prático. Um serviço útil como esse sempre economiza tempo!",
      rating: 5,
      highlight: "Muito prático"
    },
    {
      name: "Fernanda Raiol",
      role: "Avaliação Google", 
      text: "Serviço de qualidade! As máquinas são fáceis de usar. O lugar é seguro e aconchegante.",
      rating: 5,
      highlight: "Seguro e aconchegante"
    },
    {
      name: "Dona Célia",
      role: "Moradora de Itajuba há 40 anos",
      text: "Trocei o tanque pela EspuMar. Hoje sobra tempo pra cuidar de mim. Minha filha fica boba quando vê eu pintando as unhas numa segunda-feira.",
      rating: 5,
      highlight: "Sobra tempo pra mim"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Depoimentos</span> Reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gente de verdade, alívio de verdade. Veja o que os vizinhos estão falando.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              <div className="pt-4">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  ✨ {testimonial.highlight}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-center text-primary-foreground">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">5.0⭐</p>
              <p className="text-primary-foreground/80">Nota no Google (20 avaliações)</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">18h</p>
              <p className="text-primary-foreground/80">Funcionamento diário</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-primary-foreground/80">Famílias atendidas</p>
            </div>
          </div>
          
          <div className="mt-8 bg-primary-foreground/10 rounded-xl p-6">
            <p className="text-xl font-semibold mb-2">
              "Todo mundo de Itajuba passa por aqui"
            </p>
            <p className="text-primary-foreground/80">
              E sempre sai com um sorriso no rosto. Essa é a nossa missão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Camila Santos",
      role: "começou do zero",
      text: "Eu nunca tinha trabalhado com beleza. Tinha muito medo de não conseguir. A didática da Dani é perfeita, ela explica tudo com muita paciência. Hoje atendo minhas clientes com segurança!",
      rating: 5,
      result: "Começou do zero e hoje atua profissionalmente",
    },
    {
      name: "Fernanda Oliveira",
      role: "ex-vendedora",
      text: "Eu queria uma renda extra para ajudar em casa. Comecei atendendo na sala de casa mesmo. O curso se pagou no primeiro mês!",
      rating: 5,
      result: "Curso se pagou no 1º mês",
    },
    {
      name: "Juliana Costa",
      role: "Lash Designer",
      text: "Achava que precisava de muito dinheiro para começar. A Dani me ensinou a montar o kit básico e comecei gastando pouco. Melhor investimento que fiz.",
      rating: 5,
      result: "Começou com investimento mínimo",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-primary-pastel/40 via-background to-background">
      <div className="container-custom">
        <div className="text-center mb-16 md:mb-20 animate-fade-in max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-secondary mb-5 md:mb-6">
            <Star className="w-6 h-6 md:w-7 md:h-7 fill-secondary" style={{ animation: 'scale-pulse 2s ease-in-out infinite' }} />
            <span className="text-sm md:text-base font-semibold uppercase tracking-wider">Resultados Reais</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 tracking-tight px-4">
            Elas também tinham medo.{" "}
            <span className="text-gradient">Hoje, elas têm uma profissão.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-6">
            Você pode ser a próxima
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <div className="card-premium h-full hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/25" />

                    {/* Rating */}
                    <div className="flex gap-1.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 md:w-6 md:h-6 fill-secondary text-secondary"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Result Badge */}
                    <div className="inline-block bg-gradient-to-r from-primary/15 to-secondary/15 px-5 py-3 rounded-full border border-primary/25 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-sm md:text-base font-semibold text-foreground">
                        ✨ {testimonial.result}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="pt-5 border-t border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0 shadow-md">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-base md:text-lg">{testimonial.name}</p>
                          <p className="text-sm md:text-base text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-3 mt-10">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <div className="text-center mt-14 md:mt-16 animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground mb-7 md:mb-8">
            Seja a próxima história de sucesso
          </p>
            <a
              href="https://wa.me/5562991109018"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-lg"
            >
              <span>Quero ser a próxima</span>
              <Star className="w-6 h-6 fill-current" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

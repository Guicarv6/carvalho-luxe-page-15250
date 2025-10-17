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
      name: "Mariana Silva",
      role: "Lash Designer",
      text: "O curso da Danielly mudou minha vida! Em 3 meses já tinha minha própria agenda cheia e conquistei minha independência financeira. O método é completo e o suporte incrível.",
      rating: 5,
      result: "Faturamento de R$ 8k no 3º mês",
    },
    {
      name: "Juliana Costa",
      role: "Ex-Manicure",
      text: "Sempre sonhei em ter meu próprio negócio. Com o Lash Premium, realizei esse sonho! A Danielly não ensina só técnica, ela ensina a empreender e a acreditar no nosso potencial.",
      rating: 5,
      result: "Abriu seu próprio studio em 6 meses",
    },
    {
      name: "Fernanda Oliveira",
      role: "Empresária",
      text: "Como cliente, me apaixonei pela qualidade do trabalho da Danielly. Depois fiz o curso e hoje tenho uma segunda fonte de renda que adoro! O atendimento dela é referência.",
      rating: 5,
      result: "Renda extra de R$ 5k mensais",
    },
    {
      name: "Camila Santos",
      role: "Recém-formada",
      text: "Estava desempregada e o curso foi meu recomeço. Hoje tenho carteira cheia, clientes fiéis e ganho mais do que ganhava no meu antigo emprego. Gratidão define!",
      rating: 5,
      result: "Agenda completa em 2 meses",
    },
    {
      name: "Patricia Lima",
      role: "Lash Artist",
      text: "Já tinha experiência, mas o método Lash Premium elevou meu trabalho a outro nível. As técnicas exclusivas fazem toda diferença. Minhas clientes notaram a qualidade premium.",
      rating: 5,
      result: "Aumentou preço em 40%",
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
            Elas começaram do zero e{" "}
            <span className="text-gradient">hoje vivem do Lash</span>
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
            <span>Quero Minha Transformação</span>
            <Star className="w-6 h-6 fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

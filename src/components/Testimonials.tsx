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
        <div className="text-center mb-14 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-secondary mb-4">
            <Star className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Resultados Reais</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 md:mb-6 tracking-tight px-4">
            Elas começaram do zero e{" "}
            <span className="text-gradient">hoje vivem do Lash</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="card-premium h-full">
                  <div className="space-y-5 md:space-y-6">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/25" />

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Result Badge */}
                    <div className="inline-block bg-gradient-to-r from-primary/15 to-secondary/15 px-4 py-2 rounded-full border border-primary/25 shadow-sm">
                      <p className="text-xs md:text-sm font-semibold text-foreground">
                        ✨ {testimonial.result}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0 shadow-md">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Seja a próxima história de sucesso
          </p>
          <a
            href="https://wa.me/5562991109018"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <span>Quero Minha Transformação</span>
            <Star className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

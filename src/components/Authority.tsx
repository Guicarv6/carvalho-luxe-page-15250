import { Eye, Award, Heart } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const Authority = () => {
  const olhares = useCounterAnimation(1000, 2500);
  const profissionais = useCounterAnimation(300, 2500);
  const satisfacao = useCounterAnimation(98, 2500);

  const metrics = [
    {
      icon: Eye,
      label: "Olhares Transformados",
      description: "Clientes satisfeitas com resultados impecáveis",
      getValue: () => `+${olhares}`,
    },
    {
      icon: Award,
      label: "Profissionais Certificadas",
      description: "Alunas formadas e atuando no mercado",
      getValue: () => `+${profissionais}`,
    },
    {
      icon: Heart,
      label: "Satisfação das Alunas",
      description: "Aprovação e recomendação do método",
      getValue: () => `${satisfacao}%`,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-primary-pastel/50 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-8" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-6">
            O método <span className="font-bold text-primary">Golden Lash</span> já ajudou centenas de mulheres 
            a construírem <span className="font-bold text-foreground">renda, autoestima e propósito</span> — com cílios de alto 
            padrão e atendimento inesquecível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in px-6 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-premium mb-6 md:mb-8 group-hover:scale-110 transition-all duration-500 shadow-premium group-hover:shadow-elevated">
                <metric.icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" style={{ animation: 'icon-bounce 3s ease-in-out infinite', animationDelay: `${index * 0.3}s` }} />
              </div>
              
              <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient mb-4 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                {metric.getValue()}
              </div>
              
              <div className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                {metric.label}
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;

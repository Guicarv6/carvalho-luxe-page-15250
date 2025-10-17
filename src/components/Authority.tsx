import { Eye, Award, Heart } from "lucide-react";

const Authority = () => {
  const metrics = [
    {
      icon: Eye,
      number: "+1.000",
      label: "Olhares Transformados",
      description: "Clientes satisfeitas com resultados impecáveis",
    },
    {
      icon: Award,
      number: "+300",
      label: "Profissionais Certificadas",
      description: "Alunas formadas e atuando no mercado",
    },
    {
      icon: Heart,
      number: "98%",
      label: "Satisfação das Alunas",
      description: "Aprovação e recomendação do método",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-primary-pastel/50 via-background to-background">
      <div className="container-custom">
        <div className="text-center mb-14 md:mb-16 animate-fade-in">
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            O método <span className="font-semibold text-primary">Lash Premium 2.0</span> já ajudou centenas de mulheres 
            a construírem <span className="font-semibold text-foreground">renda, autoestima e propósito</span> — com cílios de alto 
            padrão e atendimento inesquecível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in px-4"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary-light mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg">
                <metric.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-3">
                {metric.number}
              </div>
              
              <div className="text-lg md:text-xl font-semibold mb-2 text-foreground">
                {metric.label}
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
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

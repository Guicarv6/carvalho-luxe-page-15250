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
    <section className="section-padding bg-[hsl(270,100%,99%)]">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O método <span className="font-semibold text-primary">Lash Premium 2.0</span> já ajudou centenas de mulheres 
            a construírem <span className="font-semibold text-foreground">renda, autoestima e propósito</span> — com cílios de alto 
            padrão e atendimento inesquecível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <metric.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-3">
                {metric.number}
              </div>
              
              <div className="text-xl font-semibold mb-2 text-foreground">
                {metric.label}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
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

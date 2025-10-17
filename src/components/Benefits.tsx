import { Sparkles, TrendingUp, Users, Award, Heart, Star, Zap, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Independência Financeira",
      description: "Construa uma carreira lucrativa e flexível, trabalhando do seu jeito e no seu tempo.",
    },
    {
      icon: Users,
      title: "Suporte Exclusivo",
      description: "Mentorias personalizadas e comunidade de alunas que se apoiam mutuamente.",
    },
    {
      icon: Award,
      title: "Certificação Reconhecida",
      description: "Certificado premium que valida sua expertise e abre portas no mercado.",
    },
    {
      icon: Heart,
      title: "Transforme Vidas",
      description: "Impacte a autoestima e confiança de cada cliente que você atender.",
    },
    {
      icon: Star,
      title: "Técnicas Premium",
      description: "Aprenda métodos exclusivos e avançados que destacam seu trabalho.",
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Comece a atender com segurança já nas primeiras semanas do curso.",
    },
    {
      icon: Shield,
      title: "Material Completo",
      description: "Kit profissional e todo material didático incluído no investimento.",
    },
    {
      icon: Sparkles,
      title: "Atualização Contínua",
      description: "Acesso a novos conteúdos e técnicas conforme o mercado evolui.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-14 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-secondary mb-4">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Método Lash Premium</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 md:mb-6 tracking-tight px-4">
            Por Que Escolher o{" "}
            <span className="text-gradient">Lash Premium?</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Um método completo que vai além da técnica. Aqui você aprende a construir uma carreira 
            de sucesso e impactar vidas através da sua arte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium group animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-heading font-semibold leading-snug">
                  {benefit.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <a
            href="https://wa.me/5562991109018"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-2"
          >
            <span>Quero Transformar Minha Carreira</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

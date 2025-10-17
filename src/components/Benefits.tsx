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
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-secondary mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Método Lash Premium</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Por Que Escolher o{" "}
            <span className="text-gradient">Lash Premium?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um método completo que vai além da técnica. Aqui você aprende a construir uma carreira 
            de sucesso e impactar vidas através da sua arte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
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

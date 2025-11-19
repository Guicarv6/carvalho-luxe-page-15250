import { Sparkles, TrendingUp, Users, Award, Heart, Star, Zap, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Liberdade",
      description: "Poder trabalhar de casa ou montar um cantinho no seu quarto.",
    },
    {
      icon: Users,
      title: "Flexibilidade",
      description: "Fazer seus próprios horários para cuidar dos filhos ou estudar.",
    },
    {
      icon: Award,
      title: "Lucro Rápido",
      description: "Com poucas clientes por semana, você já ganha mais que um salário mínimo comercial.",
    },
    {
      icon: Heart,
      title: "Realização",
      description: "A sensação incrível de ver a cliente se olhar no espelho e amar o resultado.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-16 md:mb-20 animate-fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 tracking-tight px-4">
            Mais do que uma renda extra.{" "}
            <span className="text-gradient">Uma nova vida.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-6 leading-relaxed">
            Veja o que a profissão de Lash Designer pode te proporcionar:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium group animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-premium">
                  <benefit.icon className="w-8 h-8 md:w-9 md:h-9 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-heading font-semibold leading-snug">
                  {benefit.title}
                </h3>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-premium mb-10 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 md:mb-8 text-center">
              O medo de começar algo novo é normal.{" "}
              <span className="text-gradient">Mas você não precisa ir sozinha.</span>
            </h3>
            
            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">
                Eu sei o que passa na sua cabeça agora:
              </p>
              
              <ul className="space-y-3 pl-6">
                <li>"Será que eu vou conseguir aprender?"</li>
                <li>"Será que preciso gastar muito com material?"</li>
                <li>"Tenho medo de não ter firmeza nas mãos..."</li>
              </ul>
              
              <p className="font-semibold text-foreground">
                Fique tranquila. O Método Golden Lash foi desenhado pensando exatamente em você.
              </p>
              
              <p>
                Eu não vou apenas te "jogar" o conteúdo. Eu vou te ensinar desde como segurar a pinça até o 
                atendimento da sua primeira cliente.
              </p>
              
              <div className="mt-8 md:mt-10">
                <p className="font-semibold text-foreground mb-4">Aqui, nós focamos em:</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background/50 rounded-2xl border border-primary/20">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h4 className="font-bold text-foreground mb-2">Segurança</h4>
                    <p className="text-sm">Você só vai para a prática quando se sentir pronta.</p>
                  </div>
                  <div className="text-center p-6 bg-background/50 rounded-2xl border border-primary/20">
                    <div className="text-4xl mb-3">💰</div>
                    <h4 className="font-bold text-foreground mb-2">Economia</h4>
                    <p className="text-sm">Ensino você a começar com um kit básico e barato.</p>
                  </div>
                  <div className="text-center p-6 bg-background/50 rounded-2xl border border-primary/20">
                    <div className="text-4xl mb-3">💵</div>
                    <h4 className="font-bold text-foreground mb-2">Renda Real</h4>
                    <p className="text-sm">O objetivo é que você recupere o valor do curso já nos primeiros atendimentos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

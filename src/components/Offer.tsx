import { Check, Sparkles, Gift } from "lucide-react";

const Offer = () => {
  const includes = [
    "Curso + Certificação Premium",
    "Mentoria ao vivo com Danielly",
    "Grupo exclusivo no WhatsApp",
    "Bônus: Guia da Agenda Cheia em 30 dias",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,5%)] to-[hsl(0,0%,6%)] relative overflow-hidden">
      {/* Background decorativo com linhas douradas */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />
      </div>

      {/* Brilho lilás nas bordas */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-gradient-to-b from-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-primary/15 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* Título com gradiente dourado */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 md:mb-8 text-gradient-gold tracking-tight">
              ✨ Lash de Sucesso 2.0
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white mb-4 md:mb-5">
              Turma Limitada 2025
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Aprenda a arte do olhar de alto padrão e conquiste liberdade financeira com propósito.
            </p>
          </div>

          {/* Card com inclusos */}
          <div className="bg-white/5 backdrop-blur-sm border-2 border-secondary/30 rounded-3xl p-8 md:p-12 lg:p-16 mb-12 md:mb-16 shadow-[0_0_60px_hsla(43,88%,60%,0.2)] hover:shadow-[0_0_80px_hsla(43,88%,60%,0.3)] transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 md:mb-10 flex items-center justify-center gap-3">
              <Gift className="w-7 h-7 md:w-8 md:h-8 text-secondary" style={{ animation: 'scale-pulse 2s ease-in-out infinite' }} />
              Inclui
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              {includes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-fade-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-all duration-300 shadow-md">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white transition-colors text-left leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="pt-4 md:pt-6">
              <a
                href="https://wa.me/5562991109018"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark group inline-flex items-center gap-3 text-lg md:text-xl"
                style={{ animation: 'scale-pulse 3s ease-in-out infinite' }}
              >
                <span>🔮 Garantir minha vaga agora</span>
                <Sparkles className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
              </a>
              
              <p className="text-sm md:text-base text-white/70 mt-6 md:mt-8 max-w-md mx-auto leading-relaxed">
                Vagas limitadas para garantir atendimento personalizado
              </p>
            </div>
          </div>

          {/* Chamada final */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Invista em você. Invista no seu futuro. Invista em uma carreira que{" "}
              <span className="text-gradient-gold font-semibold">transforma vidas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

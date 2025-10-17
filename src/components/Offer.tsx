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
      <div className="absolute top-0 left-0 w-full h-28 md:h-32 bg-gradient-to-b from-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-28 md:h-32 bg-gradient-to-t from-primary/15 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Título com gradiente dourado */}
          <div className="mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 md:mb-6 text-gradient-gold tracking-tight">
              ✨ Lash de Sucesso 2.0
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-white mb-3 md:mb-4">
              Turma Limitada 2025
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Aprenda a arte do olhar de alto padrão e conquiste liberdade financeira com propósito.
            </p>
          </div>

          {/* Card com inclusos */}
          <div className="bg-white/5 backdrop-blur-sm border-2 border-secondary/25 rounded-3xl p-6 md:p-10 lg:p-12 mb-10 md:mb-12 shadow-[0_0_50px_hsla(43,88%,60%,0.15)]">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-6 md:mb-8 flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
              Inclui
            </h3>
            
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-8">
              {includes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 md:gap-4 group"
                >
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors shadow-sm">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  </div>
                  <span className="text-sm md:text-base text-white/90 group-hover:text-white transition-colors text-left leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="pt-2 md:pt-4">
              <a
                href="https://wa.me/5562991109018"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark group inline-flex items-center gap-2 md:gap-3"
              >
                <span className="text-base md:text-lg">🔮 Garantir minha vaga agora</span>
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
              </a>
              
              <p className="text-xs md:text-sm text-white/70 mt-5 md:mt-6 max-w-md mx-auto">
                Vagas limitadas para garantir atendimento personalizado
              </p>
            </div>
          </div>

          {/* Chamada final */}
          <div className="animate-fade-in">
            <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
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

import { Check, Sparkles, Gift } from "lucide-react";

const Offer = () => {
  const includes = [
    "Curso + Certificação Premium",
    "Mentoria ao vivo com Danielly",
    "Grupo exclusivo no WhatsApp",
    "Bônus: Guia da Agenda Cheia em 30 dias",
  ];

  return (
    <section className="section-padding bg-[hsl(0,0%,5%)] relative overflow-hidden">
      {/* Background decorativo com linhas douradas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[hsl(46,61%,53%)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[hsl(46,61%,53%)] to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(46,61%,53%)]/30 to-transparent" />
      </div>

      {/* Brilho lilás nas bordas */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(267,47%,46%)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(267,47%,46%)]/20 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título com gradiente dourado */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-gold">
              ✨ Lash de Sucesso 2.0
            </h2>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">
              Turma Limitada 2025
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Aprenda a arte do olhar de alto padrão e conquiste liberdade financeira com propósito.
            </p>
          </div>

          {/* Card com inclusos */}
          <div className="bg-white/5 backdrop-blur-sm border-2 border-[hsl(46,61%,53%)]/30 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_0_60px_hsla(46,61%,53%,0.2)]">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center justify-center gap-2">
              <Gift className="w-7 h-7 text-[hsl(46,61%,53%)]" />
              Inclui
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {includes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-7 h-7 rounded-full bg-[hsl(46,61%,53%)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(46,61%,53%)]/30 transition-colors">
                    <Check className="w-5 h-5 text-[hsl(46,61%,53%)]" />
                  </div>
                  <span className="text-base text-white/90 group-hover:text-white transition-colors text-left">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="pt-4">
              <a
                href="https://wa.me/5562991109018"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark group inline-flex items-center gap-3"
              >
                <span>🔮 Garantir minha vaga agora</span>
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              
              <p className="text-sm text-white/60 mt-6">
                Vagas limitadas para garantir atendimento personalizado
              </p>
            </div>
          </div>

          {/* Chamada final */}
          <div className="animate-fade-in">
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
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

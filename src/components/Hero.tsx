import { ArrowRight, Sparkles, Play } from "lucide-react";
import heroImage from "@/assets/danielly-professional.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5562991109018";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 md:w-[32rem] h-96 md:h-[32rem] bg-secondary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 md:w-[32rem] h-96 md:h-[32rem] bg-primary-light/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />

      <div className="container-custom relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full glass-card shadow-glass">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary shadow-gold"></span>
              </span>
              <span className="font-semibold text-sm tracking-wide">Nova turma 2025 • Vagas limitadas</span>
            </div>

            <div className="space-y-5 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[1.05] tracking-tight">
                Transforme 
                <span className="block mt-3">olhares em</span>
                <span className="block mt-3 text-secondary drop-shadow-[0_8px_24px_rgba(232,162,47,0.5)]">oportunidades</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white/95 leading-relaxed max-w-xl backdrop-blur-sm">
                Domine o método <span className="font-bold text-secondary drop-shadow-lg">Lash Premium 2.0</span> e 
                construa uma carreira de alto padrão com <span className="font-bold drop-shadow-md">liberdade</span> e <span className="font-bold drop-shadow-md">propósito</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                <span>Começar agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-outline group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Ver resultados</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/20 backdrop-blur-sm">
              <div className="text-center md:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-secondary drop-shadow-[0_4px_16px_rgba(232,162,47,0.6)] group-hover:scale-110 transition-transform duration-500">300+</div>
                <div className="text-xs md:text-sm text-white/90 mt-1 font-medium">Profissionais formadas</div>
              </div>
              <div className="text-center md:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-secondary drop-shadow-[0_4px_16px_rgba(232,162,47,0.6)] group-hover:scale-110 transition-transform duration-500">1000+</div>
                <div className="text-xs md:text-sm text-white/90 mt-1 font-medium">Olhares transformados</div>
              </div>
              <div className="text-center md:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-secondary drop-shadow-[0_4px_16px_rgba(232,162,47,0.6)] group-hover:scale-110 transition-transform duration-500">98%</div>
                <div className="text-xs md:text-sm text-white/90 mt-1 font-medium">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary-light/40 rounded-[3rem] blur-3xl transform scale-105 animate-glow" />
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/30 shadow-elevated backdrop-blur-sm">
                <img src={heroImage} alt="Danielly Carvalho - Especialista em Extensão de Cílios" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 premium-card rounded-2xl p-5 md:p-6 animate-float max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-premium flex items-center justify-center flex-shrink-0 shadow-premium">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white animate-sparkle" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-foreground">Certificação</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Premium Garantida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/80 backdrop-blur-sm">
          <span className="text-xs uppercase tracking-wider font-medium">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 glass-card">
            <div className="w-1 h-3 bg-white/80 rounded-full shadow-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

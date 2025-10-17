import { ArrowRight, Sparkles, Play } from "lucide-react";
import heroImage from "@/assets/danielly-professional.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5562991109018";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark">
      <div className="absolute inset-0 pattern-dots opacity-25" />
      <div className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 md:w-96 h-80 md:h-96 bg-primary-light/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/25 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="font-semibold text-sm">Nova turma 2025 • Vagas limitadas</span>
            </div>

            <div className="space-y-5 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
                Transforme 
                <span className="block mt-2">olhares em</span>
                <span className="block mt-2 text-secondary drop-shadow-lg">oportunidades</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white/95 leading-relaxed max-w-xl">
                Domine o método <span className="font-semibold text-secondary">Lash Premium 2.0</span> e 
                construa uma carreira de alto padrão com <span className="font-semibold">liberdade</span> e <span className="font-semibold">propósito</span>
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

            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/25">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-secondary drop-shadow-md">300+</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Profissionais formadas</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-secondary drop-shadow-md">1000+</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Olhares transformados</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-secondary drop-shadow-md">98%</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/35 to-primary-light/35 rounded-[3rem] blur-3xl transform scale-105" />
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/25 shadow-2xl">
                <img src={heroImage} alt="Danielly Carvalho - Especialista em Extensão de Cílios" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 md:p-6 shadow-2xl animate-float max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
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
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

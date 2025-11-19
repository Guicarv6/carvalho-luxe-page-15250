import { Heart, Sparkles } from "lucide-react";
import daniellyImage from "@/assets/danielly-portrait-new.jpg";

const Story = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-pastel/60 via-background to-primary-pastel/40 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-12" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-8 -left-8 md:-top-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl animate-glow" />
              <div className="absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
              <div className="relative rounded-[3rem] overflow-hidden shadow-elevated border-4 border-white/80 backdrop-blur-sm hover:border-white/90 hover:shadow-2xl transition-all duration-500">
                <img src={daniellyImage} alt="Danielly Carvalho - Fundadora do Método Lash Premium" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-5 -right-5 md:-bottom-7 md:-right-7 premium-card rounded-2xl p-5 md:p-7 max-w-[280px] animate-float hover:scale-105 transition-transform duration-300 cursor-default">
                <Heart className="w-7 h-7 md:w-9 md:h-9 text-secondary mb-3 drop-shadow-lg" style={{ animation: 'scale-pulse 2s ease-in-out infinite' }} />
                <p className="text-sm md:text-base font-bold text-foreground leading-relaxed">"Minha missão é empoderar mulheres"</p>
              </div>
            </div>
          </div>

          <div className="space-y-7 md:space-y-9 animate-slide-up order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 px-6 md:px-7 py-3 md:py-3.5 rounded-full glass-card shadow-glass">
              <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
              <span className="font-bold text-sm md:text-base text-foreground tracking-wide">Danielly Carvalho - Sua Professora e Mentora</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.08] tracking-tight">
              "Eu também comecei do zero, <span className="text-gradient drop-shadow-md">cheia de dúvidas..."</span>
            </h2>
            <div className="space-y-6 md:space-y-7 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>Hoje você me vê como especialista, mas no começo, eu tremia a mão. Eu não sabia qual 
                cola usar, não tinha estúdio chique e morria de medo de errar.</p>
              <p>Mas eu persisti e desenvolvi uma técnica que facilita o aprendizado.</p>
              <p>Minha missão hoje não é apenas formar "Lash Designers", é mostrar para mulheres comuns que 
                elas podem ter seu próprio dinheiro, trabalhar nos seus horários e ter orgulho do que fazem.</p>
              <div className="premium-card rounded-2xl p-6 md:p-8 border-l-4 border-primary hover:scale-[1.02] transition-transform duration-300">
                <p className="text-xl md:text-2xl font-bold text-foreground mb-3">Vou pegar na sua mão e te guiar nesse começo.</p>
              </div>
            </div>
            <div className="pt-5 md:pt-6">
              <a href="https://wa.me/5562991109018" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Quero aprender com a Danielly</span>
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

import { Heart, Sparkles } from "lucide-react";
import daniellyImage from "@/assets/danielly-portrait-new.jpg";

const Story = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-pastel/60 via-background to-primary-pastel/40 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-15" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-secondary/25 to-primary/25 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src={daniellyImage} alt="Danielly Carvalho - Fundadora do Método Lash Premium" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl p-4 md:p-6 shadow-2xl max-w-[260px]">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-secondary mb-2" />
                <p className="text-xs md:text-sm font-semibold text-foreground leading-snug">"Minha missão é empoderar mulheres"</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 animate-slide-up order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-white border border-primary/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-semibold text-xs md:text-sm text-foreground">Minha História</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight tracking-tight">
              De sonho à <span className="text-gradient">realidade</span>
            </h2>
            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl font-light italic text-foreground/85">"Eu comecei exatamente onde você está agora..."</p>
              <p>Cheia de dúvidas, insegurança e sem saber se realmente conseguiria viver do que amava. 
                Mas descobri que <span className="font-semibold text-foreground">técnica + propósito + mentalidade</span> podem 
                transformar não apenas olhares, mas vidas inteiras.</p>
              <p>Hoje, depois de <span className="font-semibold text-foreground">formar mais de 300 profissionais</span> e 
                transformar milhares de olhares, eu sei que você também pode alcançar a <span className="font-semibold text-foreground">liberdade financeira</span> e 
                a <span className="font-semibold text-foreground">realização profissional</span> que merece.</p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-5 md:p-6 border-l-4 border-primary shadow-sm">
                <p className="text-lg md:text-xl font-semibold text-foreground mb-2">Você não precisa fazer isso sozinha.</p>
                <p className="text-sm md:text-base">Vou te guiar em cada passo dessa jornada de transformação.</p>
              </div>
            </div>
            <div className="pt-4">
              <a href="https://wa.me/5562991109018" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Transformar minha carreira</span>
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

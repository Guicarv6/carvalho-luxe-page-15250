import { Heart, Sparkles } from "lucide-react";
import daniellyImage from "@/assets/danielly-portrait-new.jpg";

const Story = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-pastel via-white to-primary-pastel/50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
                <img src={daniellyImage} alt="Danielly Carvalho - Fundadora do Método Lash Premium" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <Heart className="w-8 h-8 text-secondary mb-2" />
                <p className="text-sm font-semibold text-foreground">"Minha missão é empoderar mulheres"</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-primary/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm text-foreground">Minha História</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              De sonho à <span className="text-gradient">realidade</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl font-light italic text-foreground/80">"Eu comecei exatamente onde você está agora..."</p>
              <p>Cheia de dúvidas, insegurança e sem saber se realmente conseguiria viver do que amava. 
                Mas descobri que <span className="font-semibold text-foreground">técnica + propósito + mentalidade</span> podem 
                transformar não apenas olhares, mas vidas inteiras.</p>
              <p>Hoje, depois de <span className="font-semibold text-foreground">formar mais de 300 profissionais</span> e 
                transformar milhares de olhares, eu sei que você também pode alcançar a <span className="font-semibold text-foreground">liberdade financeira</span> e 
                a <span className="font-semibold text-foreground">realização profissional</span> que merece.</p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-xl font-semibold text-foreground mb-2">Você não precisa fazer isso sozinha.</p>
                <p className="text-base">Vou te guiar em cada passo dessa jornada de transformação.</p>
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

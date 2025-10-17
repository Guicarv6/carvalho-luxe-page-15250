import { Heart, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import daniellyImage from "@/assets/danielly-portrait-new.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main content */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* About */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={daniellyImage}
                    alt="Danielly Carvalho"
                    className="w-20 h-20 rounded-full object-cover border-4 border-secondary/50 shadow-gold"
                  />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">
                      Danielly Carvalho
                    </h3>
                    <p className="text-secondary font-semibold">
                      Especialista em Extensão de Cílios
                    </p>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed text-lg italic">
                  "Beleza que transcende o espelho."
                </p>
                
                <p className="text-white/70 leading-relaxed">
                  Minha missão é empoderar mulheres através da arte da beleza premium. 
                  Com mais de 5 anos de experiência e 300+ profissionais formadas, 
                  continuo transformando vidas através do método Lash Premium.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-heading font-bold mb-4">
                  Links Rápidos
                </h4>
                <nav className="space-y-3">
                  <a href="#sobre" className="block text-white/70 hover:text-secondary transition-colors">
                    Sobre o Método
                  </a>
                  <a href="#depoimentos" className="block text-white/70 hover:text-secondary transition-colors">
                    Depoimentos
                  </a>
                  <a href="#curso" className="block text-white/70 hover:text-secondary transition-colors">
                    O Curso
                  </a>
                  <a href="#faq" className="block text-white/70 hover:text-secondary transition-colors">
                    Perguntas Frequentes
                  </a>
                </nav>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <a href="https://wa.me/5562991109018" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors text-sm">
                    (62) 99110-9018
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors text-sm">
                    @daniellycarvalho
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Localização</p>
                  <p className="text-white/70 text-sm">Goiânia, GO</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://wa.me/5562991109018"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@daniellycarvalho.com.br"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="E-mail"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center space-y-4 text-sm text-white/60">
              <p>
                © {currentYear} Danielly Carvalho – Todos os direitos reservados
              </p>
              <div className="flex justify-center gap-8">
                <a href="#" className="hover:text-secondary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  Termos de Uso
                </a>
              </div>
              <p className="flex items-center justify-center gap-2 pt-4">
                Feito com <Heart className="w-4 h-4 text-secondary fill-secondary" /> e dedicação
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5562991109018"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Conversar no WhatsApp"
        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </a>
    </>
  );
};

export default Footer;
